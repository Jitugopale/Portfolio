import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  ignoreDuringBuilds: true, //disable ESLint in production build
};

export default nextConfig;
