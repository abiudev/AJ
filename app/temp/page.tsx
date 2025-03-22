import Head from "next/head";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <Head>
        <title>Our Services | AJ Media</title>
        <meta name="description" content="Explore our range of services at AJ Media, including digital marketing, videography, event management, photography, software development, and more." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Our Services",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Digital Marketing", "url": "/services/digital-marketing" },
                { "@type": "ListItem", "position": 2, "name": "Event Management", "url": "/services/event-management" },
                { "@type": "ListItem", "position": 3, "name": "Photography", "url": "/services/photography" },
                { "@type": "ListItem", "position": 4, "name": "Rapporteuring Services", "url": "/services/rapporteuring-services" },
                { "@type": "ListItem", "position": 5, "name": "Software Development", "url": "/services/software-development" },
                { "@type": "ListItem", "position": 6, "name": "Videography", "url": "/services/videography" },
              ],
            }),
          }}
        />
      </Head>
      <main>
        <h1>Our Services</h1>
        <ul>
          <li><Link href="/services/digital-marketing">Digital Marketing</Link></li>
          <li><Link href="/services/event-management">Event Management</Link></li>
          <li><Link href="/services/photography">Photography</Link></li>
          <li><Link href="/services/rapporteuring-services">Rapporteuring Services</Link></li>
          <li><Link href="/services/software-development">Software Development</Link></li>
          <li><Link href="/services/videography">Videography</Link></li>
        </ul>
      </main>
    </>
  );
};

export default Services;
