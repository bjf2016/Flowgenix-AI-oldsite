/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['localhost', '127.0.0.1'],
  },
  experimental: {
    allowedDevOrigins: ['c158ae91-0070-43de-a9b8-71ffc9dbc12c-00-19r3rsbpd3z2p.spock.replit.dev'],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  }
}

module.exports = nextConfig