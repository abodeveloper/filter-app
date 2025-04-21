import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // TS xatolarini e'tiborsiz qoldirish
  },
  eslint: {
    ignoreDuringBuilds: true, // ESLint xatolarini ham e'tiborsiz qoldirish (ixtiyoriy)
  },
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "167.99.148.196",
        port: "8090",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
