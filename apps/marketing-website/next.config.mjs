/** @type {import('next').NextConfig} */

import sharedWebpackConfig from "@workspace/svgr-config";

const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ["@workspace/ui"],
  webpack(config) {
    return sharedWebpackConfig(config); 
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  images: {
    domains: ["adaptvcms.com"],
  },
};

export default nextConfig;
