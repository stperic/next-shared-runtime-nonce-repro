import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    // Uncomment to work around the bug:
    // turbopackSharedRuntime: false,
  },
}

export default nextConfig
