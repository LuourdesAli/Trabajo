/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://iparkgo.mx:8081/api/:path*", // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
 