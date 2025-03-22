import { NextResponse } from "next/server";

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <?xml version="1.0" encoding="UTF-8"?>
		<!--	created with www.mysitemapgenerator.com	-->
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
	<loc>https://www.ajmedia.co.ke/</loc>
	<lastmod>2025-03-22T00:11:17+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://www.ajmedia.co.ke/about-us</loc>
	<lastmod>2025-03-22T00:11:17+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://www.ajmedia.co.ke/contact</loc>
	<lastmod>2025-03-22T00:11:17+01:00</lastmod>
	<priority>1.0</priority>
</url>
<url>
	<loc>https://www.ajmedia.co.ke/Services/photography</loc>
	<lastmod>2025-03-22T00:11:17+01:00</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://www.ajmedia.co.ke/Services/videography</loc>
	<lastmod>2025-03-22T00:11:17+01:00</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://www.ajmedia.co.ke/Services/event-management</loc>
	<lastmod>2025-03-22T00:11:17+01:00</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://www.ajmedia.co.ke/Services/software-development</loc>
	<lastmod>2025-03-22T00:11:17+01:00</lastmod>
	<priority>0.8</priority>
</url>
<url>
	<loc>https://www.ajmedia.co.ke/Services/rapporteuring-services</loc>
	<lastmod>2025-03-22T00:11:17+01:00</lastmod>
	<priority>0.8</priority>
</url>
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
