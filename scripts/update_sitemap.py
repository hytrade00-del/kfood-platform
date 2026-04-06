import json
import os
from datetime import datetime

# Paths
recipes_path = os.path.join('src', 'data', 'recipes.json')
sitemap_path = os.path.join('public', 'sitemap.xml')

def main():
    if not os.path.exists(recipes_path):
        print(f"Error: {recipes_path} not found.")
        return

    with open(recipes_path, 'r', encoding='utf-8') as f:
        recipes = json.load(f)

    today = datetime.now().strftime('%Y-%m-%d')
    
    # Template parts
    header = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Pages -->
  <url>
    <loc>https://www.kfood-platform.com/</loc>
    <lastmod>2026-03-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.kfood-platform.com/about</loc>
    <lastmod>2026-03-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.kfood-platform.com/substitutes</loc>
    <lastmod>2026-03-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.kfood-platform.com/privacy</loc>
    <lastmod>2026-02-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://www.kfood-platform.com/terms</loc>
    <lastmod>2026-03-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
"""

    url_template = """  <url>
    <loc>https://www.kfood-platform.com/recipe/{id}</loc>
    <lastmod>{lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>"""

    body = ""
    for recipe in recipes:
        # Use today for new recipes or lastmod if specified, but sitemap usually wants last mod of page
        lastmod = today  # Assuming all are recently updated/added
        body += url_template.format(id=recipe['id'], lastmod=today) + "\n"

    footer = "</urlset>\n"

    content = header + "\n  <!-- Recipe Pages -->\n" + body + footer

    with open(sitemap_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Successfully updated {sitemap_path} with {len(recipes)} recipes.")

if __name__ == "__main__":
    main()
