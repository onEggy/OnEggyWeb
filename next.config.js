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
