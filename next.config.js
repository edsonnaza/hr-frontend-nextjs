/** @type {import('next').NextConfig} */
const nextConfig = { assetPrefix: process.env.NODE_ENV === "production" ? "/about/" : undefined,};

module.exports = nextConfig;
