import datetime, json

with open('serviceData.json', 'r') as f:
	data = json.loads(f.read())

services_urls = [i['meta-title-slug'] for i in data['arr']]

# Base URL
base_url = 'https://www.oneggy.com/service/'

def generate_sitemap(urls, filename):
    with open(filename, 'w') as f:
        f.write('<?xml version="1.0" encoding="UTF-8"?>\n')
        f.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')
        
        for url in urls:
            full_url = base_url + url
            f.write('\t<url>\n')
            f.write(f'\t\t<loc>{full_url}</loc>\n')
            f.write(f'\t\t<lastmod>{datetime.datetime.utcnow().isoformat()}+00:00</lastmod>\n')
            f.write('\t\t<priority>0.80</priority>\n')
            f.write('\t</url>\n')
        
        f.write('</urlset>')

# Generate sitemap.xml
sitemap_filename = 'sitemap.xml'
generate_sitemap(services_urls, sitemap_filename)
print(f'Sitemap generated and saved to {sitemap_filename}')

