/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  allowedDevOrigins: [".monkeycode-ai.live"],
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
