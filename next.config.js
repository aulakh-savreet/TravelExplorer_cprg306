// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['openweathermap.org', 'www.castanet.net','images.firstpost.com','static1.simpleflyingimages.com','cdnph.upi.com','res.cloudinary.com'], // Add other domains as needed
    },
    // You can add other configurations here
  };
  
  module.exports = nextConfig;
  