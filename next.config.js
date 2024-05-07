/** @type {import('next').NextConfig} */
//const nextConfig = { };//assetPrefix: process.env.NODE_ENV === "production" ? "/about/" : undefined,};
const nextConfig = {
    images: {
      domains: ['res.cloudinary.com'],
    } 
  };
  
module.exports = nextConfig;
