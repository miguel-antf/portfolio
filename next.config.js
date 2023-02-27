/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async rewrites() {
    return [
      { source: '/project/:id', destination: '/project/[id].js' },
    ]
  },
}