/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "standalone",
  basePath: "/metaverse",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
