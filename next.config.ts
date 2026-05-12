import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/page";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isProd ? repoBasePath : "",
  assetPrefix: isProd ? `${repoBasePath}/` : undefined,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
