"use client";

import Image from "next/image";

const Page = () => {
  return (
    <>
      <section className="h-auto  bg-sky-950 flex flex-col md:flex-row items-center justify-between gap-8 md:px-8 lg:px-16 pt-4 pb-16">
        <div className="text-white ml-32 space-y-4 w-full  md:w-1/2 lg:w-2/5 px-4 text-center md:text-left  -mt-10">
          <h2 className="text-3xl font-semibold">Our Services</h2>
          <p className="text-lg">
            Explore our services that cater to your needs. sm: 640px (Small
            devices like phones) md: 768px (Medium devices like tablets) lg:
            1024px (Large devices like laptops) xl: 1280px (Extra large screens)
            2xl: 1536px (Very large screens)
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md mt-4">
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

      <section className="h-screen bg-gray-100 flex items-center justify-center">
        <h2 className="text-3xl font-semibold text-gray-800">Our Services</h2>
      </section>
    </>
  );
};

export default Page;
