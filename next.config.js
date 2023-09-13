/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "export",
  basePath: "/metaverse",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
