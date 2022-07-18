module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },

  images: {
    formats: ['image/avif', 'image/webp'],
  },
}
