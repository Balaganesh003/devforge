/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'res.cloudinary.com',
      'xsgames.co',
      'jumpstart-static.s3.amazonaws.com',
      'www.google.com',
      'pixlok.com',
    ],
  },
};

module.exports = nextConfig;
