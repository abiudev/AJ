"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Services } from "@/constants";
import { serviceFeatures } from "@/constants";

interface Services {
  href: string;
  key: string;
  label: string;
  description: string;
  image: string;
}
type ServiceKey = keyof typeof serviceFeatures;

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceKey>(
    Services[0].key as ServiceKey
  );
  const currentService = Services.find((s) => s.key === selectedService);
  const features = serviceFeatures[selectedService] || [];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {Services.map((service) => (
            <motion.button
              key={service.key}
              onClick={() => setSelectedService(service.key)}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedService === service.key
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-orange-50"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {service.label}
            </motion.button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="relative h-[500px] bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <Image
              src={currentService?.image || "/placeholder.jpg"}
              alt={`${currentService?.label} Service Preview`}
              fill
              className="object-cover transition-opacity duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={selectedService === Services[0].key}
            />
          </motion.div>

          <div className="space-y-8">
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl font-bold mb-4 text-gray-800">
                {currentService?.label}
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                {currentService?.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 bg-orange-500 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href={currentService?.href}
                className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.a>
              <motion.a
                href={`${currentService?.href}#details`}
                className="px-6 py-3 bg-white text-orange-500 border border-orange-500 rounded-lg hover:bg-orange-50 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Details
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
