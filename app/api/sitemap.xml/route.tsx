import { NextResponse } from "next/server";

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://www.ajmedia.co.ke/</loc>
            <lastmod>2025-01-30T08:38:36+01:00</lastmod>
            <priority>0.2</priority>
        </url>
        <url>
            <loc>https://www.ajmedia.co.ke/Contact</loc>
            <lastmod>2025-01-30T08:38:36+01:00</lastmod>
            <priority>0.1</priority>
        </url>
        <url>
            <loc>https://www.ajmedia.co.ke/Services/photography</loc>
            <lastmod>2025-01-30T08:38:36+01:00</lastmod>
            <priority>0.1</priority>
        </url>
        <url>
            <loc>https://www.ajmedia.co.ke/Services/videography</loc>
            <lastmod>2025-01-30T08:38:36+01:00</lastmod>
            <priority>0.1</priority>
        </url>
        <url>
            <loc>https://www.ajmedia.co.ke/Services/corporate</loc>
            <lastmod>2025-01-30T08:38:36+01:00</lastmod>
            <priority>0.1</priority>
        </url>
        <url>
            <loc>https://www.ajmedia.co.ke/Services/webdev</loc>
            <lastmod>2025-01-30T08:38:36+01:00</lastmod>
            <priority>0.1</priority>
        </url>
        <url>
            <loc>https://www.ajmedia.co.ke/Services/rapporteur</loc>
            <lastmod>2025-01-30T08:38:36+01:00</lastmod>
            <priority>0.1</priority>
        </url>
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
