/** @type {import('next').NextConfig} */

import sharedWebpackConfig from "@workspace/svgr-config";

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/client',
        permanent: true, 
      },
    ];
  },
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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'adaptvcms.com',
      },
    ],
  },
  
};

export default nextConfig;
