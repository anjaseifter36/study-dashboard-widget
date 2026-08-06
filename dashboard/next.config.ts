import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://www.notion.so https://notion.so;",
          },
          {
            key: "X-Frame-Options",
            value: "ALLOW-FROM https://www.notion.so",
          },
        ],
      },
    ];
  },
};

export default nextConfig;