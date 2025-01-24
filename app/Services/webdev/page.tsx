import { Code, Rocket, Paintbrush } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-orange-100 flex flex-col">
      <div className="flex-1 container mx-auto px-4 mt-32 py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold leading-tight text-slate-800 md:text-4xl lg:text-5xl">
                Build Exceptional Websites with AJ Media Web Development
                Services
              </h1>
              <p className="text-lg text-slate-600">
                From SEO-friendly designs to lightning-fast delivery, we create
                websites that are not just functional but also visually stunning
                and highly optimized. Our team ensures each site is crafted with
                meticulous attention to detail, providing seamless user
                experiences that drive engagement. We prioritize clean code and
                performance, helping businesses achieve online success.
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <Code className="h-6 w-24 text-slate-700" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      Clean and Optimized Code
                    </h3>
                    <p className="text-slate-600">
                      We write clean, efficient, and maintainable code to ensure
                      your website performs flawlessly and stays scalable. Our
                      developers follow industry best practices, reducing errors
                      and improving the long-term sustainability of your site.
                      By utilizing modern frameworks and tools, we ensure your
                      website remains robust and adaptable as your business
                      grows
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <Rocket className="h-6 w-24 text-slate-700" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      Fast Turnaround
                    </h3>
                    <p className="text-slate-600">
                      Get your website up and running in record time without
                      compromising on quality or creativity. We streamline the
                      development process to deliver high-quality websites
                      quickly, ensuring that your brand can go live without
                      delays. Our team works efficiently while maintaining close
                      communication with you, keeping the project on track every
                      step of the way.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <Paintbrush className="h-6 w-24 text-slate-700" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      Creative and Custom Designs
                    </h3>
                    <p className="text-slate-600">
                      Stand out with unique, tailor-made designs that reflect
                      your brand identity and captivate your audience. We
                      collaborate with you to create a design that speaks
                      directly to your target market, blending aesthetics and
                      functionality. Whether it is a bold new look or a subtle
                      refinement, our designs ensure a memorable user experience
                      that sets you apart.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/webdev.png"
              alt="Web development"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="mb-8 ml-4">
        <a
          href="/Contact"
          className="rounded-md bg-orange-500 px-4 py-3 lg:ml-80   text-white transition-colors hover:bg-sky-950"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
