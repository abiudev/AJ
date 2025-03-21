'use client'
import Head from "next/head"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import router from "next/router"
import Link from "next/link"

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | Leading Digital Marketing Agency in Nairobi, Kenya</title>
        <meta
          name="description"
          content="We are a premier digital marketing agency in Nairobi, Kenya offering SEO, social media marketing, content creation, website development, videography and photography services."
        />
        <meta
          name="keywords"
          content="digital marketing Kenya, digital marketing Nairobi, digital marketing agency, SEO Kenya, social media marketing Nairobi, website development Kenya"
        />
      </Head>

      <main className="relative min-h-screen w-full overflow-hidden">
       
        <div className="absolute inset-0 z-0">
          <Image
            src="/about.jpg"
            alt="Digital Marketing Agency Office in Nairobi, Kenya"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-sky-950/80" />
        </div>

   
        <section className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight text-center">
              About <span className="text-orange-500">Us</span>
            </h1>

            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl mb-12">
              <p className="text-white/90 text-lg md:text-xl mb-6">
                We are a leading <strong>digital marketing agency in Nairobi, Kenya</strong>, dedicated to elevating
                brands through innovative strategies and creative solutions. Our team of experts works tirelessly to
                help businesses across <strong>Kenya</strong> stand out in today's competitive digital landscape.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center" id="services">
              What We <span className="text-orange-500">Do</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <article className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-orange-400 mb-3">Search Engine Optimization (SEO)</h3>
                <p className="text-white/80">
                  We help businesses in <strong>Nairobi and across Kenya</strong> improve their online visibility
                  through strategic SEO services, including keyword research, on-page optimization, and local SEO
                  strategies.
                </p>
              </article>

              <article className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-orange-400 mb-3">Social Media Marketing</h3>
                <p className="text-white/80">
                  Our <strong>Nairobi-based digital marketing team</strong> creates engaging social media campaigns that
                  connect your brand with your target audience across all major platforms relevant to the Kenyan market.
                </p>
              </article>

              <article className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-orange-400 mb-3">Content Marketing</h3>
                <p className="text-white/80">
                  We develop compelling content strategies tailored for the <strong>Kenyan market</strong>, including
                  blog posts, articles, and email campaigns that resonate with your audience and drive conversions.
                </p>
              </article>

              <article className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-orange-400 mb-3">Website Development</h3>
                <p className="text-white/80">
                  As a premier <strong>digital agency in Kenya</strong>, we build modern, responsive websites that not
                  only look great but also deliver exceptional user experiences and drive conversions for your business.
                </p>
              </article>

              <article className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-orange-400 mb-3">Professional Videography</h3>
                <p className="text-white/80">
                  Our <strong>Nairobi-based</strong> expert videographers create stunning, high-quality video content
                  that tells your brand's story and engages your audience throughout <strong>Kenya</strong> and beyond.
                </p>
              </article>

              <article className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-orange-400 mb-3">Creative Photography</h3>
                <p className="text-white/80">
                  We capture the essence of your brand through professional photography services in{" "}
                  <strong>Nairobi and across Kenya</strong>, showcasing your products, services, and team in the best
                  possible light.
                </p>
              </article>
            </div>
            <div className="text-center">
              <Link href="/contact">
                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full"
                >
                  Contact Our Digital Marketing Agency Today
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

