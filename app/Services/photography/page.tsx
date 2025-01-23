import { Camera, Image as ImageIcon, Aperture } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-orange-100 flex flex-col">
      <div className="flex-1 container mx-auto px-4 mt-32 py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold leading-tight text-slate-800 md:text-4xl lg:text-5xl">
                Professional Photography Services with AJ Media
              </h1>
              <p className="text-lg text-slate-600">
                Our photography services capture moments with stunning clarity
                and creativity. Whether for corporate events, personal projects,
                or brand photography, we specialize in producing high-quality
                images that tell compelling stories. We work with you to ensure
                your vision is realized through expert photography tailored to
                your needs.
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <Camera className="h-6 w-24 text-slate-700" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      Event Photography
                    </h3>
                    <p className="text-slate-600">
                      We provide professional event photography services that
                      capture every moment of your special occasion. From
                      corporate functions to private celebrations, our
                      photographers are skilled at documenting the essence of
                      your event with an artistic touch. We ensure that each
                      shot is perfect, preserving the memories for years to
                      come.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <ImageIcon className="h-6 w-24 text-slate-700" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      Product Photography
                    </h3>
                    <p className="text-slate-600">
                      Our product photography service helps showcase your
                      products in the best light, with precise composition and
                      lighting techniques. Whether for e-commerce or marketing
                      materials, we ensure that your products look stunning and
                      professional. Our aim is to highlight the quality and
                      details of your items to attract the right customers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <Aperture className="h-6 w-24 text-slate-700" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      Portrait Photography
                    </h3>
                    <p className="text-slate-600">
                      We offer expert portrait photography that captures your
                      personality and essence. Whether for corporate headshots,
                      family photos, or creative sessions, we make sure to
                      create flattering, high-quality images that you can
                      cherish. Our photographers work closely with you to create
                      the perfect look and mood that aligns with your vision.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button className="rounded-md bg-orange-500 px-6 py-3 text-white transition-colors hover:bg-[#5a9440]">
              Contact Us Today
            </button>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/photography.jpg"
              alt="Photography services"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
        <p>© 2025 AJ Media. All rights reserved.</p>
      </footer>
    </div>
  );
}
