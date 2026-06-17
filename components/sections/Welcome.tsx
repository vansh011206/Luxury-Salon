"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";

export default function Welcome() {
  return (
    <section className="bg-primary py-16 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Overlapping Luxury Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-[280px] sm:h-[400px] md:h-[520px]"
          >
            {/* Background design border */}
            <div className="absolute top-4 left-4 w-[85%] h-[90%] border border-sage/20 rounded-2xl pointer-events-none -z-10 translate-x-2 translate-y-2" />
            
            {/* Primary Main Image */}
            <div className="relative w-[85%] h-[90%] overflow-hidden rounded-2xl shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury salon interior styling chair"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Secondary Overlapping Image */}
            <div className="absolute bottom-4 right-0 w-[50%] h-[55%] overflow-hidden rounded-2xl shadow-2xl border-8 border-primary">
              <Image
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop"
                alt="Stylist hair ritual painting"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right: Rich Editorial Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <span className="text-gold font-outfit text-xs tracking-[0.35em] uppercase mb-4 font-semibold">
              Welcome to Glossy
            </span>
            
            <h2 className="font-playfair text-charcoal text-3xl md:text-5xl font-medium tracking-wide mb-6 leading-tight">
              Where Hair Artistry <br />
              Meets Luxury
            </h2>
            
            <div className="w-12 h-[2px] bg-sage/30 mb-6" />

            <p className="font-playfair text-charcoal/90 text-lg md:text-xl italic leading-relaxed mb-6 font-light max-w-xl">
              “Nestled in the heart of Greater Kailash, South Delhi, Glossy is a private sanctuary where styling becomes pure fine art.”
            </p>
            
            <p className="font-outfit text-cream text-sm md:text-base leading-relaxed font-light mb-8 max-w-xl">
              Every visit is not just an appointment — it&apos;s an experience curated for the discerning few. We combine world-class hair artistry with an atmosphere of absolute indulgence, custom-tailored to rewrite your hair story.
            </p>

            <Button href="/about" variant="secondary" className="text-xs font-semibold">
              Explore Our Story
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
