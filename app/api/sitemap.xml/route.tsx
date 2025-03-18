import { NextResponse } from "next/server";

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://ajmedia.co.ke/</loc>
<lastmod>2025-03-18</lastmod>
<changefreq>weekly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://www.ajmedia.co.ke/Services/digital-marketing</loc>
<lastmod>2025-03-18</lastmod>
<changefreq>weekly</changefreq>
<priority>0.9</priority>
</url>
<url>
<loc>https://ajmedia.co.ke/about</loc>
<lastmod>2025-03-18</lastmod>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>https://ajmedia.co.ke/services</loc>
<lastmod>2025-03-18</lastmod>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
</url>
<url>
<loc>https://ajmedia.co.ke/services/videography</loc>
<lastmod>2025-03-18</lastmod>
<changefreq>monthly</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://ajmedia.co.ke/services/photography</loc>
<lastmod>2025-03-18</lastmod>
<changefreq>monthly</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://ajmedia.co.ke/services/event-coverage</loc>
<lastmod>2025-03-18</lastmod>
<changefreq>monthly</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://ajmedia.co.ke/services/web-development</loc>
<lastmod>2025-03-18</lastmod>
<changefreq>monthly</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://ajmedia.co.ke/services/rapporteuring</loc>
<lastmod>2025-03-18</lastmod>
<changefreq>monthly</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://ajmedia.co.ke/portfolio</loc>
<lastmod>2025-03-18</lastmod>
<changefreq>monthly</changefreq>
<priority>0.7</priority>
</url>
<url>
<loc>https://ajmedia.co.ke/contact</loc>
<lastmod>2025-03-18</lastmod>
<changefreq>yearly</changefreq>
<priority>0.6</priority>
</url>
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
