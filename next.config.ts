import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Lets a phone on the same Wi-Fi or hotspot use the dev server (npm run dev).
  // Without this, the phone gets the page but not its JavaScript, so buttons
  // like the menu do nothing. Only affects development, not the live site.
  allowedDevOrigins: ["10.*.*.*", "192.168.*.*", "172.20.10.*"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
