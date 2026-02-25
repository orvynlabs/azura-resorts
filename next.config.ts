import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ──────────────────────────────────────────────
  // IMAGE CACHING FIX — Permanent Solution
  // ──────────────────────────────────────────────
  images: {
    // Set the server-side image optimization cache TTL to 0.
    // This forces Next.js to re-optimize images on every request
    // instead of serving stale cached versions from .next/cache/images.
    minimumCacheTTL: 0,
  },

  // Custom HTTP headers to control browser & CDN caching for images
  async headers() {
    return [
      {
        // Match all image files served from the public folder
        source:
          "/:path*(svg|jpg|jpeg|png|webp|avif|gif|ico|bmp|tiff|PNG|JPG|JPEG|WEBP)",
        headers: [
          {
            key: "Cache-Control",
            // no-store  → browser must NOT cache at all
            // must-revalidate → if somehow cached, must check server first
            value: "public, max-age=0, s-maxage=0, must-revalidate",
          },
        ],
      },
      {
        // Also cover Next.js optimized image endpoint (/_next/image)
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
