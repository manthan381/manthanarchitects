import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hbikgjvjkrnlhsmwuqkc.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/images/projects/highways-toll-plaza.jpg",
        destination: "/images/projects/highways-toll-plaza-2.jpg",
      },
      {
        source: "/images/projects/not-just-paranthas-1.jpg",
        destination: "/images/projects/not-just-paranthas-1.png",
      },
      {
        source: "/images/projects/not-just-paranthas-3.jpg",
        destination: "/images/projects/not-just-paranthas-3.png",
      },
      {
        source: "/images/projects/not-just-paranthas-5.jpg",
        destination: "/images/projects/not-just-paranthas-5.jpeg",
      },
      {
        source: "/images/projects/food-frolic-3.jpg",
        destination: "/images/projects/food-frolic-3.jpeg",
      },
    ];
  },
};

export default nextConfig;
