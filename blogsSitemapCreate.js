const fs = require('fs');
const path = require('path');

// Load your JSON config file
const config = require('./public/AllBlogs/index.json');

const baseUrl = 'https://www.oneggy.com/blogs/';

// Function to generate sitemap content
const generateSitemapXml = (config) => {
  const pagesXml = config.map(page =>
    `<url>
      <loc>${baseUrl}${page.slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>`
  ).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pagesXml}
</urlset>`;
};

// Write sitemap.xml to the public directory
fs.writeFileSync(
  path.resolve(__dirname, 'public/blogs-sitemap.xml'),
  generateSitemapXml(config)
);

console.log('Sitemap generated successfully!');