import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
},
typescript: {
  // !! WARN !!
  // Dangerously allow production builds to successfully complete even if
  // your project has type errors.
  // !! WARN !!
  ignoreBuildErrors: true,
},
experimental: {
  appDir: true,
  devIndicators: {
    buildActivity: true,
    appIsrStatus: true,
  },
},
};

export default nextConfig;
