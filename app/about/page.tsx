"use client";

import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Award, Compass, ShieldCheck, Heart } from "lucide-react";

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ];

  const pillars = [
    {
      title: "Artistry",
      description: "Every cut, every color is a masterpiece. Our stylists treat hair design as a fine art form, tailored to your features.",
      icon: Compass,
    },
    {
      title: "Luxury",
      description: "An environment designed for indulgence. From our premium leather chairs to private suites and champagne service.",
      icon: ShieldCheck,
    },
    {
      title: "Sustainability",
      description: "Cruelty-free, eco-conscious products and practices. We believe in beauty that is kind to your hair and the planet.",
      icon: Heart,
    },
  ];

  const stats = [
    { value: 9, suffix: "+", label: "Years of Excellence" },
    { value: 15, suffix: "K+", label: "Happy Clients" },
    { value: 25, suffix: "+", label: "Master Stylists" },
    { value: 50, suffix: "+", label: "Awards & Recognitions" },
    { value: 3, suffix: "K+", label: "Bridal Transformations" },
  ];

  const awards = [
    "Best Luxury Salon — Delhi NCR 2023",
    "Featured in Vogue India",
    "L'Oréal Professionnel Partner Salon",
    "Schwarzkopf Master Salon",
    "Times Lifestyle Award 2022",
  ];

  const brands = [
    "L'Oréal",
    "Schwarzkopf",
    "Kérastase",
    "Oribe",
    "Olaplex",
    "Moroccanoil",
    "GHD",
    "Dyson",
  ];

  return (
    <>
      <PageHeader
        title="Our Story"
        subtitle="The heritage of Glossy Salon"
        breadcrumbs={breadcrumbs}
        backgroundImageUrl="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1920&auto=format&fit=crop"
      />

      {/* SECTION: THE BEGINNING */}
      <section className="bg-primary py-16 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Founder Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] md:h-[650px] w-full"
            >
              <div className="absolute inset-4 border border-sage/20 rounded-2xl z-10 pointer-events-none translate-x-3 translate-y-3" />
              <Image
                src="/images/team/aria_khanna.png"
                alt="Aria Khanna - Founder of Glossy Salon"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-2xl border border-sage/10"
              />
            </motion.div>

            {/* Right: Story Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-start"
            >
              <span className="text-sage font-outfit text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
                The Beginning
              </span>
              <h2 className="text-charcoal font-playfair text-3xl md:text-5xl font-medium mb-6 leading-tight tracking-wide">
                Where Vision Meets Artistry
              </h2>
              <p className="text-sage font-cormorant italic text-xl md:text-2xl leading-relaxed mb-6 font-medium">
                &quot;To create Delhi&apos;s most refined hair experience.&quot;
              </p>
              <p className="text-cream font-outfit text-sm md:text-base leading-loose mb-6 font-light">
                Glossy Salon was founded by Aria Khanna, a visionary hair stylist trained at the prestigious L&apos;Oréal Academy in Paris and Vidal Sassoon in London. After years of working in Paris, London, and Mumbai, Aria realized that Delhi lacked a dedicated sanctuary where hair design was elevated to an absolute art form.
              </p>
              <p className="text-cream font-outfit text-sm md:text-base leading-loose mb-6 font-light">
                Established in South Delhi, Glossy became a quiet revolution. We brought together top talent, cutting-edge techniques, and custom product formulations to offer bespoke hair treatments tailored to each patron&apos;s structure and style.
              </p>
              <p className="text-cream font-outfit text-sm md:text-base leading-loose font-light">
                Patrons from across the country visit us to experience a sanctuary of pure rejuvenation and confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: OUR PHILOSOPHY */}
      <section className="bg-secondary py-16 md:py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <SectionHeading
            label="Our Philosophy"
            title="Built on Three Pillars"
            subtitle="The fundamental beliefs that guide every scissor cut, color application, and client interaction at Glossy."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {pillars.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-secondary-light border border-sage/10 rounded-2xl p-8 flex flex-col items-center text-center group hover:border-sage/30 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="text-sage mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComp className="w-10 h-10 stroke-[1.2]" />
                  </div>
                  <h3 className="text-charcoal font-playfair text-2xl mb-4 font-medium tracking-wide">
                    {p.title}
                  </h3>
                  <p className="text-cream font-outfit text-sm leading-loose font-light">
                    {p.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION: BY THE NUMBERS */}
      <section className="bg-primary py-16 md:py-32 px-6 border-t border-b border-sage/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 text-center">
            {stats.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col items-center justify-center p-4 border-b border-sage/10 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <AnimatedCounter
                  value={s.value}
                  suffix={s.suffix}
                  className="font-outfit text-4xl md:text-5xl lg:text-6xl text-sage font-bold mb-3 block"
                />
                <span className="text-cream font-outfit text-xs tracking-wider uppercase max-w-[120px] font-medium leading-relaxed">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: AWARDS & RECOGNITIONS */}
      <section className="bg-secondary py-16 md:py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <SectionHeading
            label="Achievements"
            title="Awards & Recognitions"
            subtitle="Honored by major publications and international beauty leaders for our commitment to luxury hair styling."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full text-center">
            {awards.map((award, idx) => (
              <motion.div
                key={award}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-secondary border border-sage/10 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[140px] group hover:border-sage/30 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Award className="w-8 h-8 text-sage/60 group-hover:text-sage transition-colors duration-300 mb-4 stroke-[1.2]" />
                <span className="text-charcoal font-outfit text-xs md:text-sm font-light tracking-wide leading-relaxed">
                  {award}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: THE BRANDS WE TRUST */}
      <section className="bg-primary py-24 px-6 border-t border-sage/10">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-sage font-outfit text-xs tracking-[0.25em] uppercase mb-8 block font-semibold">
            The Brands We Trust
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-center opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            {brands.map((brand) => (
              <div
                key={brand}
                className="text-charcoal font-playfair text-lg md:text-xl font-bold tracking-widest uppercase py-4 border border-sage/15 bg-secondary rounded-2xl"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: CTA */}
      <section className="bg-secondary py-16 md:py-32 px-6 text-center border-t border-sage/10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="font-playfair text-charcoal text-3xl md:text-5xl font-medium mb-6 tracking-wide">
            Experience the Glossy Difference
          </h2>
          <p className="text-cream font-outfit text-sm md:text-base max-w-xl mb-10 leading-relaxed font-light">
            Indulge in tailored care from our expert designers. Let us reshape your hair story with the care it deserves.
          </p>
          <Button href="/booking" variant="primary">
            Book Your Session
          </Button>
        </div>
      </section>
    </>
  );
}
