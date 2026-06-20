import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/programs',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
