import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/haven',
  assetPrefix: 'https://dawsoncoats.github.io/haven',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
