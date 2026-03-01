"use client";

import { useEffect, useRef, useCallback, useState } from "react";

export default function LiquidEffect() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animRef = useRef<number>(0);
    const [mounted, setMounted] = useState(false);

    // Two buffers for ripple simulation (ping-pong)
    const buffer1Ref = useRef<Float32Array | null>(null);
    const buffer2Ref = useRef<Float32Array | null>(null);
    const widthRef = useRef(0);
    const heightRef = useRef(0);

    const mouseRef = useRef({ x: -1, y: -1, active: false });
    const prevMouseRef = useRef({ x: -1, y: -1 });
    const frameCountRef = useRef(0);

    const SCALE = 0.2; // Lower resolution for better perf (was 0.25)

    const initBuffers = useCallback((w: number, h: number) => {
        const bw = Math.floor(w * SCALE);
        const bh = Math.floor(h * SCALE);
        widthRef.current = bw;
        heightRef.current = bh;
        buffer1Ref.current = new Float32Array(bw * bh);
        buffer2Ref.current = new Float32Array(bw * bh);
    }, []);

    // Delay mount to avoid flicker on page load and check for desktop
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 200);

        const mediaQuery = window.matchMedia("(min-width: 768px)");
        setIsDesktop(mediaQuery.matches);

        const listener = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener("change", listener);
        } else {
            mediaQuery.addListener(listener);
        }

        return () => {
            clearTimeout(timer);
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener("change", listener);
            } else {
                mediaQuery.removeListener(listener);
            }
        };
    }, []);

    useEffect(() => {
        if (!mounted || !isDesktop) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { willReadFrequently: false });
        if (!ctx) return;

        const dpr = 1; // Use 1x DPR for performance — ripples don't need retina

        const resize = () => {
            const parent = canvas.parentElement;
            if (!parent) return;
            const w = parent.clientWidth;
            const h = parent.clientHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = w + "px";
            canvas.style.height = h + "px";
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            initBuffers(w, h);
        };

        resize();

        // Mouse tracking — throttled
        let lastMouseTime = 0;
        const onMouseMove = (e: MouseEvent) => {
            const now = performance.now();
            if (now - lastMouseTime < 16) return; // ~60fps throttle
            lastMouseTime = now;
            const rect = canvas.getBoundingClientRect();
            if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
                mouseRef.current.active = false;
                return;
            }
            prevMouseRef.current = { ...mouseRef.current };
            mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top, active: true };
        };

        const onTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                const now = performance.now();
                if (now - lastMouseTime < 16) return;
                lastMouseTime = now;
                const rect = canvas.getBoundingClientRect();
                const touchX = e.touches[0].clientX;
                const touchY = e.touches[0].clientY;
                if (touchX < rect.left || touchX > rect.right || touchY < rect.top || touchY > rect.bottom) {
                    mouseRef.current.active = false;
                    return;
                }
                prevMouseRef.current = { ...mouseRef.current };
                mouseRef.current = {
                    x: touchX - rect.left,
                    y: touchY - rect.top,
                    active: true,
                };
            }
        };

        const onMouseLeave = () => {
            mouseRef.current.active = false;
        };

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        window.addEventListener("touchmove", onTouchMove, { passive: true });
        window.addEventListener("mouseleave", onMouseLeave, { passive: true });
        window.addEventListener("resize", resize);

        const damping = 0.92;

        // Reusable offscreen canvas
        let offscreen: OffscreenCanvas | null = null;
        let offCtx: OffscreenCanvasRenderingContext2D | null = null;

        const dropRipple = (
            x: number,
            y: number,
            radius: number,
            strength: number
        ) => {
            const buf = buffer1Ref.current;
            const w = widthRef.current;
            const h = heightRef.current;
            if (!buf) return;

            const bx = Math.floor(x * SCALE);
            const by = Math.floor(y * SCALE);
            const br = Math.floor(radius * SCALE);

            for (let dy = -br; dy <= br; dy++) {
                for (let dx = -br; dx <= br; dx++) {
                    const px = bx + dx;
                    const py = by + dy;
                    if (px < 1 || px >= w - 1 || py < 1 || py >= h - 1) continue;
                    const dist = Math.sqrt(dx * dx + dy * dy) / br;
                    if (dist < 1) {
                        const falloff = (1 - dist) * (1 - dist);
                        buf[py * w + px] += strength * falloff;
                    }
                }
            }
        };

        // Track if there's any activity to avoid rendering idle frames
        let idleFrames = 0;

        // Ambient ripple timer — creates gentle flowing liquid without interaction
        let lastAmbientDrop = 0;
        const AMBIENT_INTERVAL = 800; // ms between ambient drops

        // Animation loop
        const animate = () => {
            animRef.current = requestAnimationFrame(animate);
            frameCountRef.current++;

            // Skip every other frame for performance
            if (frameCountRef.current % 2 !== 0) return;

            const buf1 = buffer1Ref.current;
            const buf2 = buffer2Ref.current;
            const w = widthRef.current;
            const h = heightRef.current;
            if (!buf1 || !buf2 || w === 0 || h === 0) return;

            // Drop ripples at mouse position
            let hasActivity = false;
            if (mouseRef.current.active && mouseRef.current.x >= 0) {
                const mx = mouseRef.current.x;
                const my = mouseRef.current.y;
                const pmx = prevMouseRef.current.x;
                const pmy = prevMouseRef.current.y;

                const dx = mx - pmx;
                const dy = my - pmy;
                const speed = Math.sqrt(dx * dx + dy * dy);

                if (speed > 3) {
                    hasActivity = true;
                    const steps = Math.min(Math.ceil(speed / 10), 3);
                    for (let s = 0; s < steps; s++) {
                        const t = s / steps;
                        const ix = pmx + dx * t;
                        const iy = pmy + dy * t;
                        dropRipple(ix, iy, 18 + speed * 0.3, Math.min(speed * 0.3, 18));
                    }
                }
            }

            // Ambient liquid flow — gentle random ripples
            const now = performance.now();
            if (now - lastAmbientDrop > AMBIENT_INTERVAL) {
                lastAmbientDrop = now;
                const canvasW = canvas.width;
                const canvasH = canvas.height;
                const rx = Math.random() * canvasW;
                const ry = Math.random() * canvasH;
                dropRipple(rx, ry, 20 + Math.random() * 15, 4 + Math.random() * 4);
                hasActivity = true;
            }

            // Propagate ripples (wave equation)
            let maxAmplitude = 0;
            for (let y = 1; y < h - 1; y++) {
                for (let x = 1; x < w - 1; x++) {
                    const i = y * w + x;
                    buf2[i] =
                        (buf1[i - 1] + buf1[i + 1] + buf1[i - w] + buf1[i + w]) * 0.5 -
                        buf2[i];
                    buf2[i] *= damping;
                    const abs = buf2[i] > 0 ? buf2[i] : -buf2[i];
                    if (abs > maxAmplitude) maxAmplitude = abs;
                }
            }

            // Swap buffers
            buffer1Ref.current = buf2;
            buffer2Ref.current = buf1;

            // If no activity and ripples have died down, skip rendering
            if (!hasActivity && maxAmplitude < 0.5) {
                idleFrames++;
                if (idleFrames > 5) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    return;
                }
            } else {
                idleFrames = 0;
            }

            // Render to canvas
            const canvasW = canvas.width;
            const canvasH = canvas.height;

            ctx.clearRect(0, 0, canvasW, canvasH);

            const imageData = ctx.createImageData(w, h);
            const data = imageData.data;

            for (let y = 1; y < h - 1; y++) {
                for (let x = 1; x < w - 1; x++) {
                    const i = y * w + x;

                    const dx2 = buf2[i + 1] - buf2[i - 1];
                    const dy2 = buf2[i + w] - buf2[i - w];

                    const highlight = dx2 * 0.8;
                    const shadow = dy2 * 0.8;

                    const intensity = Math.abs(highlight) + Math.abs(shadow);

                    if (intensity > 0.8) {
                        const pi = (y * w + x) * 4;
                        const bright = Math.abs(highlight) + Math.abs(shadow);

                        data[pi] = 255;
                        data[pi + 1] = 255;
                        data[pi + 2] = 255;
                        data[pi + 3] = Math.min(100, bright * 4);
                    }
                }
            }

            // Draw at low res then scale up
            if (!offscreen || offscreen.width !== w || offscreen.height !== h) {
                offscreen = new OffscreenCanvas(w, h);
                offCtx = offscreen.getContext("2d");
            }
            if (offCtx) {
                offCtx.putImageData(imageData, 0, 0);
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = "medium";
                ctx.drawImage(offscreen, 0, 0, canvasW, canvasH);
            }
        };

        animate();

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("mouseleave", onMouseLeave);
            window.removeEventListener("resize", resize);
        };
    }, [mounted, initBuffers, isDesktop]);

    if (!mounted || !isDesktop) return null;

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 20,
                opacity: 1,
                transition: "opacity 0.5s ease",
            }}
        />
    );
}
