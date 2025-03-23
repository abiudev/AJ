"use client";
import Image from "next/image";
import { useRef } from "react";

const logos = ["/1.png", "/2.png", "/3.png", "/4.png"];

export default function ClientsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full bg-white py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Left: Text Content */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-3xl md:text-3xl font-semibold text-gray-900 mb-4 relative">
            Our Clients
            <span className="block w-10 h-1 bg-orange-500 mt-2"></span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            We have worked with renowned names. From hotels, offices, and homes, we have worked with clients from all backgrounds.
          </p>
        </div>

        {/* Right: Logos Section */}
        <div className="md:w-2/3 mt-6 md:mt-0">
          {/* Desktop View (Grid) */}
          <div className="hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image src={logo} alt={`Client logo ${index + 1}`} width={120} height={60} className="object-contain grayscale hover:grayscale-0 transition" />
              </div>
            ))}
          </div>

          {/* Mobile View (Scrollable) */}
          <div ref={scrollRef} className="sm:hidden flex gap-6 overflow-x-auto scroll-smooth py-3 px-2">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center min-w-[100px]">
                <Image src={logo} alt={`Client logo ${index + 1}`} width={100} height={50} className="object-contain grayscale hover:grayscale-0 transition" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Hide scrollbar but allow scrolling */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
