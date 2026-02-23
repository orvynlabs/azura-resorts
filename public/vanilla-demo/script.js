// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Animation
const heroTimeline = gsap.timeline();

// Initial Load Animation
heroTimeline
    .to(".hero-title", { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
    .to(".hero-line", { width: "220px", duration: 1, ease: "power3.inOut" }, "-=0.5")
    .to(".hero-subtitle", { opacity: 1, duration: 1 }, "-=0.5");

// Scroll Triggered Hero Effects
gsap.to(".hero-bg", {
    scale: 1.2,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

gsap.to(".hero-title", {
    opacity: 0,
    letterSpacing: "0.5em",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// Fade Up Sections
gsap.utils.toArray('.fade-up').forEach((element) => {
    gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: element,
            start: "top 80%", // Trigger when top of element hits 80% of viewport
            toggleActions: "play none none reverse"
        }
    });
});

// Parallax Effect
gsap.to(".parallax-bg", {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
        trigger: ".parallax-bg",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});
