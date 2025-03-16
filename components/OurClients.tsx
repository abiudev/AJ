"use client"

import Image from "next/image"

interface OurClientsProps {
  title?: string
  subtitle?: string
  logos?: {
    src: string
    alt: string
    width: number
    height: number
  }[]
}

export default function OurClients({
  title = "Our Trusted Clients",
  logos = [
    { src: "/superfoam.png", alt: "superfoam", width: 180, height: 90 },
    { src: "/victory.png", alt: "victory", width: 180, height: 90 },
    { src: "/hospitality.png", alt: "hospitality", width: 180, height: 90 },
    { src: "/longonot.png", alt: "Client 4", width: 180, height: 90 },
    { src: "/impact.png", alt: "Client 4", width: 180, height: 90 },
  ],
}: OurClientsProps) {
  return (
    <section className="w-full py-12 bg-background">
      <div className="container px-4 mx-auto text-center mb-6">
        {title && <h2 className="text-3xl font-bold tracking-tight mb-3">{title}</h2>}
      </div>

      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 gap-2 max-w-[600px] mx-auto md:max-w-none md:flex md:flex-row md:justify-center md:items-center md:space-x-16 lg:space-x-24">
          {logos.map((logo, index) => (
            <div key={`logo-${index}`} className="flex justify-center items-center p-2">
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain w-full h-auto max-w-[200px] md:w-[240px] md:h-[120px] lg:w-[300px] lg:h-[150px] xl:w-[360px] xl:h-[180px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

