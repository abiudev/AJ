import { Calendar, Users, Briefcase } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-orange-100 flex flex-col">
      <div className="flex-1 container mx-auto px-4 mt-32 py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold leading-tight text-slate-800 md:text-4xl lg:text-5xl">
                Professional Corporate Event Management by AJ Media
              </h1>
              <p className="text-lg text-slate-600">
                Our corporate event management services are designed to take the
                load off your team by expertly organizing team-building
                activities, conferences, seminars, and more. We handle every
                aspect, from planning to execution, ensuring your event runs
                smoothly and achieves its goals. Trust AJ Media to provide a
                seamless, professional experience for your organization.
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <Calendar className="h-6 w-24 text-slate-700" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      Team Building Activities
                    </h3>
                    <p className="text-slate-600">
                      We specialize in organizing engaging team-building
                      activities that strengthen communication, collaboration,
                      and problem-solving skills within your company. From fun
                      outdoor events to strategic workshops, we ensure
                      activities are designed to enhance team morale and foster
                      unity. Your team will leave the event feeling more
                      connected and motivated.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-24 text-slate-700" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      Conferences and Seminars
                    </h3>
                    <p className="text-slate-600">
                      We offer expert event management for conferences and
                      seminars, ensuring everything from venue selection to
                      speaker coordination is handled. We take care of
                      logistics, audiovisual needs, and registration, allowing
                      you to focus on delivering impactful content. Our goal is
                      to create a seamless experience for both organizers and
                      attendees.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <Briefcase className="h-6 w-24 text-slate-700" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      Corporate Retreats and Meetings
                    </h3>
                    <p className="text-slate-600">
                      We design and organize corporate retreats and meetings
                      that provide your team with an opportunity to strategize
                      and recharge. Whether it's a leadership summit, strategy
                      session, or relaxing retreat, we handle all planning
                      details to ensure a productive and enjoyable experience
                      for your team. From location scouting to catering and
                      entertainment, we've got you covered.
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
              src="/event.png"
              alt="Corporate Event Management"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
