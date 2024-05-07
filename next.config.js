/** @type {import('next').NextConfig} */
//const nextConfig = { };//assetPrefix: process.env.NODE_ENV === "production" ? "/about/" : undefined,};
const nextConfig = {
    images: {
      domains: ['res.cloudinary.com'],
    },
    env:{
      LOCAL_URL:'http://localhost:3500/hr',
    }
  };
  
module.exports = nextConfig;
