"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const logos = ["/1.png", "/2.png", "/5.png", "/4.png"];

export default function ClientsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current && window.innerWidth < 640) {
        const nextIndex = (activeIndex + 1) % logos.length;
        const slideWidth = 110 + 19; 
        
        scrollRef.current.scrollTo({
          left: nextIndex * slideWidth,
          behavior: 'smooth'
        });
        
        setActiveIndex(nextIndex);
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, [activeIndex]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const slideWidth = 110 + 24; 
      const newIndex = Math.round(scrollPosition / slideWidth);
      
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };


  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
      const slideWidth = 110 + 24; 
      
      scrollRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      });
      
      setActiveIndex(index);
    }
  };

  return (
    <section className="w-full bg-white py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-3xl md:text-3xl font-semibold text-gray-900 mb-4 relative">
            Our Clients
            <span className="block w-10 h-1 bg-orange-500 mt-2"></span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg text-justify">
            We have worked with renowned names. From hotels, offices, and homes, we have worked with clients from all backgrounds.
          </p>
        </div>

        <div className="md:w-2/3 mt-6 md:mt-0">
          <div className="hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image src={logo} alt={`Client logo ${index + 1}`} width={120} height={60} className="object-contain grayscale hover:grayscale-0 transition" />
              </div>
            ))}
          </div>

          
          <div className="sm:hidden flex flex-col">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth py-3 px-4 scrollbar-hide"
              onScroll={handleScroll}
            >
              <div className="shrink-0 w-4"></div>
              {logos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center min-w-[110px]">
                  <Image src={logo} alt={`Client logo ${index + 1}`} width={110} height={55} className="object-contain grayscale hover:grayscale-0 transition" />
                </div>
              ))}
              <div className="shrink-0 w-4"></div>
            </div>
            
           
            <div className="flex justify-center gap-2 mt-4">
              {logos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index ? "w-4 bg-orange-500" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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