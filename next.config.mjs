/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Avoid build failures when local ESLint plugin resolution is broken (e.g. es-abstract on older Node).
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
