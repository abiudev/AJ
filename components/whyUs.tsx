import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import GuaranteeCard from "./guarantee-card";
import { guarantees } from "@/constants";

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-orange-500 font-medium"
          ></motion.span>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl  text-orange-500 font-bold mt-2 mb-4"
          >
            Why Work With Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mb-8"
          ></motion.p>

          <div className="relative rounded-full overflow-hidden">
            <Image
              src="/videography.png"
              alt="Business professional working"
              width={600}
              height={400}
              className="rounded-full object-cover"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <button className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                <Play className="w-8 h-8" />
              </button>
            </motion.div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-red-50">
                <path d="M0,100 C30,100 100,70 100,0 L100,100 L0,100 Z" />
              </svg>
            </div>
            <div className="absolute top-4 -right-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-red-100"
              >
                <pattern
                  id="dots"
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="1" cy="1" r="1" fill="currentColor" />
                </pattern>
                <rect width="24" height="24" fill="url(#dots)" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 mt-12 lg:mt-0">
          {guarantees.map((guarantee, index) => (
            <GuaranteeCard
              key={index}
              header={guarantee.header}
              text={guarantee.text}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
