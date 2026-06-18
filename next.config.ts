import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: false,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
