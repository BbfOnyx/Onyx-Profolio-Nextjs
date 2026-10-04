import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/aboutUs",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/product",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
