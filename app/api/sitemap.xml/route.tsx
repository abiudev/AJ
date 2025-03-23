import { NextResponse } from "next/server";

export async function GET() {
  const lastmod = new Date().toISOString();

  const dynamicUrls = [
    { loc: "https://www.ajmedia.co.ke/services/digital-marketing", priority: "0.8" },
    { loc: "https://www.ajmedia.co.ke/services/photography", priority: "0.8" },
    { loc: "https://www.ajmedia.co.ke/services/videography", priority: "0.8" },
    { loc: "https://www.ajmedia.co.ke/services/event-management", priority: "0.8" },
    { loc: "https://www.ajmedia.co.ke/services/software-development", priority: "0.8" },
    { loc: "https://www.ajmedia.co.ke/services/rapporteuring-services", priority: "0.8" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.ajmedia.co.ke/</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://www.ajmedia.co.ke/services</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://www.ajmedia.co.ke/about-us</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://www.ajmedia.co.ke/contact</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
      ${dynamicUrls
        .map(
          (url) => `
        <url>
          <loc>${url.loc}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>${url.priority}</priority>
        </url>
      `
        )
        .join("")}
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}