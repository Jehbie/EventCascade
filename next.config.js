/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
  experimental: {
    instrumentationHook: true,
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
