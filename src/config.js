const Dotenv = require('dotenv-webpack');

const nextConfig = {
  webpack: (config) => {
    config.plugins.push(new Dotenv());
    return config;
  },
  images: {
    domains: ['static.vecteezy.com'],
  },
  reactStrictMode: true,
  env: {
    // Define your environment variables here

    NEXTTECH_DEV_URL: process.env.NEXTTECH_DEV_URL,
  },
};

module.exports = nextConfig;
