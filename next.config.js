const isDevMode = process.env.NODE_ENV !== "production";
const REPOSITORY = "css-animation-template";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  reactStrictMode: true,
  assetPrefix: !isDevMode ? `/${REPOSITORY}/` : "", // production 일때 prefix 경로
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
};

module.exports = nextConfig;
