import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      
      <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay muted loop playsInline>
        <source
          src="video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-r from-sky-950/90 to-sky-950/60"></div>

      
      <div className="relative z-20 h-full w-full container mx-auto px-4 md:px-8 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Drive Results with Smart Digital Marketing
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
            Our data-driven strategies deliver measurable growth for your business. We combine creativity with analytics
            to maximize your ROI.
          </p>
          <Link
            href="#get-started"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-md transition-colors duration-300 shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

