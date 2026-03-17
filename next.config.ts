import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Haven',
  assetPrefix: isProd ? 'https://dawsoncoats.github.io/Haven' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
