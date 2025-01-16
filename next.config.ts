import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.thecatapi.com',
        pathname: '/v1/images/**',
      },
    ],
  },
};

export default nextConfig;
