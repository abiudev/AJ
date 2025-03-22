import { FileText, Users, Mic } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-orange-100 flex flex-col">
      <div className="flex-1 container mx-auto px-4 mt-32 py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold leading-tight text-slate-800 md:text-4xl lg:text-5xl">
                Exceptional Rapporteuring Services with AJ Media
              </h1>
              <p className="text-lg text-slate-600">
                From capturing key insights to providing accurate, clear, and
                actionable reports, our rapporteuring services ensure that your
                organization is equipped with the data-driven information it
                needs. We pride ourselves on delivering reports that are not
                only precise but also presented in an easy-to-understand format
                that supports your decision-making process.
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <FileText className="h-6 w-24 text-slate-700" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      Detailed Report Writing
                    </h3>
                    <p className="text-slate-600">
                      We specialize in creating detailed reports that capture
                      every aspect of your meeting or event. Our team ensures
                      that key takeaways, decisions, and action items are
                      clearly documented. We take the time to structure each
                      report in a way that allows for easy reference and
                      follow-up.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-24 text-slate-700" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      Collaborative Meeting Capture
                    </h3>
                    <p className="text-slate-600">
                      Our rapporteuring services excel in collaborative
                      environments, ensuring that all voices and viewpoints are
                      captured accurately. We use active listening techniques to
                      document conversations in real time, enabling us to
                      provide comprehensive records of any meeting or
                      brainstorming session.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <Mic className="h-6 w-24 text-slate-700" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      Real-Time Audio Capture
                    </h3>
                    <p className="text-slate-600">
                      We offer real-time audio capture services to ensure every
                      detail is preserved. Using professional-grade equipment,
                      we record conversations with clarity and accuracy,
                      allowing us to deliver flawless transcripts and reports.
                      This service is perfect for high-stakes meetings,
                      conferences, or interviews where precision is critical.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/rap.png"
              alt="Rapporteuring services"
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
