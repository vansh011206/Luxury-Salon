"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";
import { Phone, Calendar } from "lucide-react";

export default function BookingCTA() {
  return (
    <section className="relative py-16 md:py-36 px-6 overflow-hidden bg-charcoal">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1920&auto=format&fit=crop"
        alt="Glossy Salon Scissors and Hair Ritual Tools"
        fill
        sizes="100vw"
        className="object-cover opacity-70 select-none pointer-events-none"
      />
      {/* Dark vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/85 to-black/70" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-gold font-outfit text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
            Bespoke Hair Artistry
          </span>
          
          <h2 className="font-playfair text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-medium mb-6 tracking-wide">
            Ready for the Glossy Experience?
          </h2>
          
          <p className="text-white/80 font-outfit text-sm md:text-base max-w-xl mb-10 leading-relaxed font-light">
            Book your appointment in seconds online, or speak with our guest relation executives to custom-design your visit.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <Button href="/booking" variant="primary" className="w-full sm:w-auto flex gap-2 items-center shadow-lg">
              <Calendar className="w-4 h-4" />
              Book Appointment
            </Button>
            
            <a
              href="tel:+919876543210"
              className="font-outfit text-sm tracking-widest uppercase font-semibold text-gold hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-gold" />
              Call +91 98765 43210
            </a>
          </div>

          <span className="text-white/50 font-outfit text-[10px] tracking-wider uppercase mt-8 block">
            Walk-ins welcome, appointments preferred
          </span>
        </motion.div>
      </div>
    </section>
  );
}
