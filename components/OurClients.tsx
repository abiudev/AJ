"use client"

import { useEffect, useRef } from "react"
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
    { src: "/longonot.png", alt: "Client 4", width: 240, height: 120 },
    { src: "/impact.png", alt: "Client 5", width: 180, height: 90 },
  ],
}: OurClientsProps) {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Duplicate the logos array to create a seamless loop
    const duplicateLogos = () => {
      const container = sliderRef.current
      if (!container) return

      // Clone the entire content for a seamless loop
      const content = container.innerHTML
      container.innerHTML = content + content
    }

    duplicateLogos()
  }, [])

  return (
    <section className="w-full py-12 bg-gradient-to-r from-orange-200 via-white to-orange-200">
      <div className="container px-4 mx-auto text-center mb-8">
        {title && <h2 className="text-3xl font-bold tracking-tight mb-3">{title}</h2>}
      </div>

      <div className="container mx-auto px-2 overflow-hidden">
        <div className="logo-slider-container">
          <div ref={sliderRef} className="logo-slider">
            {logos.map((logo, index) => (
              <div key={`logo-${index}`} className="logo-item">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain w-full h-auto max-w-[180px] md:max-w-[240px] lg:max-w-[320px] xl:max-w-[400px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .logo-slider-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        
        .logo-slider {
          display: flex;
          width: fit-content;
          animation: slide 20s linear infinite;
        }
        
        .logo-item {
          flex-shrink: 0;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @media (min-width: 768px) {
          .logo-item {
            padding: 0 2rem;
          }
        }
        
        @media (min-width: 1024px) {
          .logo-item {
            padding: 0 3rem;
          }
          .logo-item img {
            height: auto;
            max-height: 180px;
          }
        }
      `}</style>
    </section>
  )
}

