import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["example.com", "cdn.myapp.com", "images.unsplash.com", "res.cloudinary.com"],
  },
};

export default nextConfig;
