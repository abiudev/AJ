import { Film, Video, CameraOff } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-orange-100 flex flex-col">
      <div className="flex-1 container mx-auto px-4 mt-32 py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold leading-tight text-slate-800 md:text-4xl lg:text-5xl">
                High-Quality Videography Services with AJ Media
              </h1>
              <p className="text-lg text-slate-600">
                Our videography services are tailored to capture every important
                moment with cinematic precision and creativity. Whether for
                corporate videos, events, or promotional content, we bring your
                vision to life through high-definition video production. Our
                team ensures each project is handled with professionalism and
                attention to detail.
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <Film className="h-6 w-24 text-slate-700" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      Event Videography
                    </h3>
                    <p className="text-slate-600">
                      We provide exceptional event videography, capturing every
                      key moment with clarity and cinematic style. From
                      corporate conferences to weddings and private events, our
                      videographers ensure the highlights of your occasion are
                      recorded in high-definition. We strive to create memorable
                      videos that allow you to relive your event in vivid
                      detail.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <Video className="h-6 w-24 text-slate-700" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      Promotional Videos
                    </h3>
                    <p className="text-slate-600">
                      Our promotional videography service helps businesses
                      showcase their products, services, and brand message
                      effectively. With creative storytelling and professional
                      production, we produce videos that engage your audience
                      and boost brand awareness. Whether for social media,
                      websites, or advertisements, we create compelling content
                      that drives action.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <CameraOff className="h-6 w-24 text-slate-700" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      Documentary Videography
                    </h3>
                    <p className="text-slate-600">
                      We offer expert documentary videography, capturing real
                      stories with authenticity and artistry. Our team works
                      closely with you to understand the narrative and bring
                      your story to life through compelling video content.
                      Whether for a personal project, business profile, or
                      educational content, we ensure the final product resonates
                      with viewers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/videography.png"
              alt="Videography services"
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
