/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.microcms-assets.io"],
  },
  env: {
    API_KEY: process.env.API_KEY,
    SERVICE_DOMAIN: process.env.SERVICE_DOMAIN,
    END_POINT: process.env.END_POINT,
  },
};

module.exports = nextConfig
