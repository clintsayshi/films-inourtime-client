/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "images.pexels.com", "m.media-amazon.com"],
  },
};

module.exports = nextConfig;
