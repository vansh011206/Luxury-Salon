"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";

export default function BridalPreview() {
  return (
    <section className="relative h-[360px] sm:h-[450px] md:h-[600px] w-full flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1591551110830-680b40cd058e?q=80&w=1920&auto=format&fit=crop"
        alt="Glossy Bridal Hair Styling Room"
        fill
        sizes="100vw"
        className="object-cover opacity-75 select-none pointer-events-none"
      />
      {/* Overlay layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-gold font-outfit text-xs tracking-[0.3em] uppercase mb-4 font-semibold">
            The Bridal Studio
          </span>
          
          <h2 className="font-playfair text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-medium mb-6 tracking-wide">
            Your Dream Bridal Look, Perfected
          </h2>
          
          <p className="text-white/85 font-outfit text-sm md:text-base max-w-xl mb-6 sm:mb-10 leading-relaxed font-light">
            Every bride deserves a masterpiece. Indulge in tailored trial sessions, dedicated specialists, and stunning hair transformations designed to illuminate your special day.
          </p>

          <Button href="/bridal" variant="primary">
            Explore Bridal Studio
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
