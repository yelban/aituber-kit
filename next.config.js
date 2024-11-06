/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  assetPrefix: process.env.BASE_PATH || "",
  basePath: process.env.BASE_PATH || "",
  trailingSlash: true,
  publicRuntimeConfig: {
    root: process.env.BASE_PATH || "",
  },
  experimental: {
    // 如果需要自定義 API 相關設定，可以在這裡添加
  },
  eslint: {
    // 忽略在構建過程中出現的所有 ESLint 錯誤
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
