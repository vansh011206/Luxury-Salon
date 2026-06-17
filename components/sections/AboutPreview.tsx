"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function AboutPreview() {
  return (
    <section className="bg-primary py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[480px] md:h-[600px] w-full"
          >
            {/* Border frame */}
            <div className="absolute inset-4 border border-sage/20 rounded-2xl z-10 pointer-events-none translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
            
            <Image
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
              alt="Bespoke luxury styling corner"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded-2xl border border-sage/10"
            />
          </motion.div>

          {/* Right: Text Story & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <span className="text-sage font-outfit text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
              Our Legacy
            </span>
            <h2 className="text-charcoal font-playfair text-3xl md:text-5xl font-medium leading-tight mb-6 tracking-wide">
              Crafting Delhi&apos;s Finest Hair Statements
            </h2>
            <p className="text-cream font-outfit text-sm md:text-base leading-relaxed mb-6 font-light">
              For nearly a decade, Glossy has set the benchmark for luxury hair rituals in South Delhi. Our philosophy merges European styling techniques with a deep understanding of hair architecture, delivering bespoke cuts, colors, and treatments in an atmosphere of pure relaxation.
            </p>
            <p className="text-cream/80 font-outfit text-sm leading-relaxed mb-10 font-light">
              Led by international academy alumni, we treat your hair as a canvas. Every scissor stroke, balayage sweep, and conditioning ritual is meticulously personalized to bring your aesthetic vision to life.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 md:gap-12 w-full border-t border-b border-sage/10 py-8 mb-10">
              <div className="flex flex-col">
                <AnimatedCounter value={9} suffix="+" />
                <span className="text-cream/70 font-outfit text-[10px] md:text-xs tracking-wider uppercase mt-2 font-medium">
                  Years of Excellence
                </span>
              </div>
              <div className="flex flex-col">
                <AnimatedCounter value={15} suffix="K+" />
                <span className="text-cream/70 font-outfit text-[10px] md:text-xs tracking-wider uppercase mt-2 font-medium">
                  Happy Clients
                </span>
              </div>
              <div className="flex flex-col">
                <AnimatedCounter value={25} suffix="+" />
                <span className="text-cream/70 font-outfit text-[10px] md:text-xs tracking-wider uppercase mt-2 font-medium">
                  Master Artists
                </span>
              </div>
            </div>

            <Link
              href="/about"
              className="text-sage font-outfit text-sm tracking-widest uppercase font-semibold flex items-center gap-2 hover:text-sage-dark transition-all duration-300 relative group/link pb-1"
            >
              Our Full Story
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-sage scale-x-100 group-hover/link:scale-x-110 transition-transform duration-300 origin-left" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
