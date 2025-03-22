import { BarChart, Target, Megaphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"


const primaryKeywords = {
  main: "digital marketing services",
  sub: ["strategic campaigns", "data-driven marketing", "content distribution", "digital marketing agency", "digital marketing agency in kenya", "digital marketing agency in nairobi", "digital marketing agency in africa", "social media marketing agency in Kenya", "online marketing"],
}

export const generateMetadata = (): Metadata => {
  return {
    title: "Professional Digital Marketing Services | Aj Apex Media",
    description:
      "Boost your online presence with our data-driven digital marketing services. Strategic campaigns, performance analytics, and multi-channel content distribution.",
    keywords:
      "digital marketing, marketing services, SEO, social media marketing, content marketing, PPC, performance marketing",
    openGraph: {
      title: "Professional Digital Marketing Services | Aj Apex Media",
      description:
        "Boost your online presence with our data-driven digital marketing services. Strategic campaigns, performance analytics, and multi-channel content distribution.",
      type: "website",
      images: [
        {
          url: "/digital.jpg",
          width: 1200,
          height: 630,
          alt: "Digital Marketing Services",
        },
      ],
    },
    alternates: {
      canonical: "https://ajmedia.co.ke/services/digital-marketing",
    },
  }
}

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-orange-100 flex flex-col">
      <main className="flex-1">
        <section className="container mx-auto px-4 mt-32 py-12 md:py-16" aria-labelledby="main-heading">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-8">
              <header className="space-y-4">
                <h1
                  id="main-heading"
                  className="text-3xl font-semibold leading-tight text-slate-800 md:text-4xl lg:text-5xl"
                >
                  Exceptional {primaryKeywords.main.charAt(0).toUpperCase() + primaryKeywords.main.slice(1)} with Your
                  Brand
                </h1>
                <p className="text-lg text-slate-600">
                  From creating engaging content to implementing {primaryKeywords.sub[1]}, our {primaryKeywords.main}{" "}
                  ensure that your business stands out in the digital landscape. We pride ourselves on delivering
                  campaigns that are not only creative but also results-oriented, supporting your business growth and
                  helping you connect with your target audience.
                </p>
              </header>

              <div className="space-y-8">
                <article className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Target className="h-6 w-24 text-slate-700" aria-hidden="true" />
                    <div>
                      <h2 className="text-xl font-semibold text-slate-800">Strategic Campaign Planning</h2>
                      <p className="text-slate-600">
                        We specialize in creating {primaryKeywords.sub[0]} that target your ideal customers. Our team
                        ensures that your marketing goals, audience insights, and competitive analysis are clearly
                        incorporated into every campaign. We take the time to structure each strategy in a way that
                        maximizes ROI and drives meaningful engagement.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="space-y-2">
                  <div className="flex items-start gap-3">
                    <BarChart className="h-6 w-24 text-slate-700" aria-hidden="true" />
                    <div>
                      <h2 className="text-xl font-semibold text-slate-800">Data-Driven Performance</h2>
                      <p className="text-slate-600">
                        Our {primaryKeywords.main} excel in analytics and performance tracking, ensuring that all
                        campaigns are measured accurately. We use advanced analytics tools to monitor performance in
                        real time, enabling us to provide comprehensive reports and make {primaryKeywords.sub[1]}{" "}
                        adjustments to optimize your marketing efforts continuously.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Megaphone className="h-6 w-24 text-slate-700" aria-hidden="true" />
                    <div>
                      <h2 className="text-xl font-semibold text-slate-800">Multi-Channel Content Distribution</h2>
                      <p className="text-slate-600">
                        We offer comprehensive {primaryKeywords.sub[2]} services across multiple digital channels. Using
                        professional-grade tools and platforms, we ensure your message reaches your audience wherever
                        they are online. This service is perfect for businesses looking to expand their digital
                        footprint, increase brand awareness, and drive conversions through consistent, high-quality
                        content.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/digital.jpg"
                alt="Professional digital marketing services showing campaign analytics and content strategy"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <h2 className="sr-only">Related Services</h2>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link href="/services/seo" className="text-blue-700 hover:underline font-medium">
              SEO Services
            </Link>
            <Link href="/services/social-media" className="text-blue-700 hover:underline font-medium">
              Social Media Marketing
            </Link>
            <Link href="/services/content" className="text-blue-700 hover:underline font-medium">
              Content Marketing
            </Link>
            <Link href="/services/ppc" className="text-blue-700 hover:underline font-medium">
              PPC Advertising
            </Link>
          </div>
        </section>
      </main>

      <div className="container mx-auto px-4 mb-8">
        <Link
          href="/contact"
          className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-800 font-medium"
          aria-label="Contact us about our digital marketing services"
        >
          Contact Us
        </Link>
      </div>

      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Digital Marketing Services",
            provider: {
              "@type": "Organization",
              name: "Your Brand",
            },
            description:
              "Boost your online presence with our data-driven digital marketing services. Strategic campaigns, performance analytics, and multi-channel content distribution.",
            serviceType: "Digital Marketing",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
    </div>
  )
}

