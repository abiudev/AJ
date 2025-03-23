import Image from "next/image"
import Link from "next/link"
import { IoCodeSlash, IoCamera, IoVideocam, IoCalendar, IoDocument } from "react-icons/io5"
import { FaChartLine } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Services } from "@/constants" 
import type { Metadata } from "next"


const serviceIcons = {
  photography: <IoCamera className="h-10 w-10 text-orange-500" />,
  digitalmarketing: <FaChartLine className="h-10 w-10 text-orange-500" />,
  videography: <IoVideocam className="h-10 w-10 text-orange-500" />,
  corporateEventManagement: <IoCalendar className="h-10 w-10 text-orange-500" />,
  webDevelopment: <IoCodeSlash className="h-10 w-10 text-orange-500" />,
  rapporteurServices: <IoDocument className="h-10 w-10 text-orange-500" />,
}

export const metadata: Metadata = {
  title: "Professional Services | Photography, Digital Marketing, Web Development & More",
  description:
    "Explore our comprehensive range of professional services including photography, digital marketing, videography, event management, web development, and rapporteur services.",
  keywords:
    "photography services, digital marketing agency, videography services, event management, web development, rapporteur services",
  openGraph: {
    title: "Professional Services | Photography, Digital Marketing & More",
    description:
      "Explore our comprehensive range of professional services including photography, digital marketing, videography, event management, web development, and rapporteur services.",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Our Professional Services",
      },
    ],
    type: "website",
  },
}

export default function ServicesPage() {
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: Services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.label,
        description: service.description,
        url: `https://yourdomain.com${service.href}`,
      },
    })),
  }

  return (
    <>
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <main className="bg-sky-950 text-white min-h-screen py-16 px-4">
        <div className="container mx-auto">
          <section className="text-center mb-16">
            <h1 className="text-4xl bg-gradient-to-r from-purple-400 via-orange-500 to-blue-500 bg-clip-text text-transparent font-bold mb-4">Our Services</h1>
            <p className="text-lg text-sky-200 max-w-2xl mx-auto">
              We offer a wide range of professional services to help your business grow and succeed. Explore our
              offerings below and find the perfect solution for your needs.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Services.map((service) => (
              <article
                key={service.key}
                className="bg-sky-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-sky-900/70 border border-sky-800"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image || "/placeholder.svg?height=400&width=600"}
                    alt={`${service.label} service - Professional ${service.label} services`}
                    fill
                    className="object-cover opacity-80"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={service.key === "photography" || service.key === "digitalmarketing"}
                  />
                </div>
                <div className="p-6">
                  <header className="flex items-center gap-3 mb-4">
                    {serviceIcons[service.key as keyof typeof serviceIcons]}
                    <h2 className="text-xl font-bold">{service.label}</h2>
                  </header>
                  <p className="text-sky-200 mb-6">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <Button asChild variant="outline" className="border-sky-400 text-orange-500 hover:bg-sky-800">
                      <Link href={service.href}>Learn More</Link>
                    </Button>
                    <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  )
}

