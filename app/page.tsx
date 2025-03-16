"use client";

import ServicesSection from "@/components/Services";
import WhyChooseUs from "@/components/whyUs";
import Image from "next/image";
import { Kanit  } from "next/font/google";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import OurClients from "@/components/OurClients";

const KanitFont = Kanit({ subsets: ["latin"], weight: "400" });

const Page = () => {
  const [text] = useTypewriter({
    words: ["SALES", "BRANDING", "VISIBILITY"],
    loop: true,
  });
  return (
    <>
      <section className="h-auto bg-sky-950 flex flex-col pt-32 sm:pt-48 md:pt-32 lg:pt-16 pb-16 md:flex-row items-center justify-between gap-8 md:px-8 lg:px-16">
        <div className="text-white ml-32 space-y-4 w-full  sm: mr-28 justify-center items-center  md:w-1/2 lg:w-2/5 px-4 text-center md:text-left  -mt-10">
          <h2 className={`text-4xl ${KanitFont.className} font-semibold`}>
            WE HELP DRIVE {" "}
            <span className="text-orange-500 text-decoration: underline ">
              {text}
            </span>
            <Cursor />
          </h2>
          <p
            className={`lg:text-3xl ${KanitFont.className} lg:leading-normal sm:text-2xl  sm:leading-tight  text-justify`}
          >
        
            <span
              className={`text-orange-400 text-2xl ${KanitFont.className}`}
            >
              {" "}
          
            </span>{" "}
            We craft powerful marketing strategies and stunning visuals that drive engagement and growth. From digital campaigns to high-quality photography and videography, we help your brand stand out
          </p>

          <button className="bg-orange-500 text-white px-6 py-3 rounded-md ">
            Learn More
          </button>
        </div>
        <div className="w-full md:w-1/2 lg:w-3/5 mt-4 md:mt-0">
          <Image
            src="/ajmedia.jpg"
            alt="side image"
            width={800}
            height={800}
            className="mx-auto md:ml-10 object-cover "
          />
        </div>
      </section>
      <section>
        <OurClients />
      </section>
      <section>
        <ServicesSection />
      </section>
      <section>
        <WhyChooseUs />
      </section>
    </>
  );
};

export default Page;
