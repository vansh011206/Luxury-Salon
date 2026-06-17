"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Button from "../ui/Button";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 300]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] select-none pointer-events-none"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1920&auto=format&fit=crop"
          alt="Glossy Salon Luxury Atmosphere"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-charcoal" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.span
            variants={itemVariants}
            className="text-gold font-outfit text-xs md:text-sm tracking-[0.35em] uppercase mb-6 font-semibold block"
          >
            SOUTH DELHI&apos;S MOST EXCLUSIVE HAIR SALON
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="font-playfair text-white text-[32px] sm:text-5xl md:text-7xl lg:text-8xl leading-tight font-medium mb-6 tracking-wide max-w-4xl"
          >
            Where Hair <br />
            Becomes Art
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-white/80 font-outfit text-sm md:text-lg max-w-2xl mb-8 sm:mb-12 leading-relaxed font-light"
          >
            Experience bespoke hair rituals crafted by India&apos;s finest master stylists in an atmosphere of pure, unadulterated indulgence.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto"
          >
            <Button href="/booking" variant="primary" className="w-full sm:w-auto">
              Reserve Your Experience
            </Button>
            <Button 
              href="/services" 
              variant="secondary" 
              className="w-full sm:w-auto !border-white/80 !text-white hover:!bg-white hover:!text-charcoal hover:!border-white transition-all duration-300"
            >
              Explore Services
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="flex flex-col items-center gap-2 text-white/70 cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight - 80,
              behavior: "smooth",
            });
          }}
        >
          <span className="font-outfit text-[9px] tracking-[0.25em] uppercase font-light">
            Scroll Down
          </span>
          <ChevronDown className="w-4 h-4 text-gold" />
        </motion.div>
      </div>
    </div>
  );
}
