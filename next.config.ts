import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/haven',
  assetPrefix: '/haven',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
