module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // {
      //   source: '/:slug*',
      //   destination: '/page/:slug*', // Matched parameters can be used in the destination
      // },
      {
        source: '/',
        destination: '/index', // Matched parameters can be used in the destination
      },
    ]
  },
}
