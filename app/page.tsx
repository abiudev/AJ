"use client";

import ServicesSection from "@/components/Services";
import WhyChooseUs from "@/components/whyUs";


import OurClients from "@/components/OurClients";
import Hero from "@/components/hero";


const Page = () => {
  
  return (
    <>
      <section>
        <Hero/>
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
