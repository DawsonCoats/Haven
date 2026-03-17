import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Haven',
  assetPrefix: 'https://dawsoncoats.github.io/Haven',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
