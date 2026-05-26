/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*).(js|css|png|jpg|jpeg|webp|svg|ico|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Caches for 1 year
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/components/:path*',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/home/:path*',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/landing/:path*',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/assesment-components/:path*',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/about/:path+',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/team/:path+',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/serviceone/:path+',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/services/engagementModel',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/services/techCompo',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/service/techCompo',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/service/technologyStack',
        destination: '/404',
        permanent: false,
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true, // Enables faster and more efficient minification
  compress: true, // Enables gzip compression
}


const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
        remarkPlugins: [],
    rehypePlugins: [],

  },
})

// module.exports = nextConfig
// module.exports = withCss({})
module.exports = withMDX(nextConfig)
