"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sage/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-md flex flex-col items-center">
        {/* Huge 404 */}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-playfair text-[9rem] md:text-[12rem] font-bold text-sage leading-none tracking-widest block mb-4 select-none drop-shadow-[0_0_30px_rgba(61,74,62,0.1)]"
        >
          404
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-charcoal font-playfair text-3xl md:text-4xl font-medium mb-4"
        >
          Page Not Found
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-cream font-outfit text-sm md:text-base mb-10 leading-relaxed font-light"
        >
          Looks like this page has gone for a makeover. Let&apos;s get you back on track for your luxury experience.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button href="/" variant="primary">
            Return Home
          </Button>
          <Button href="/booking" variant="secondary">
            Book Appointment
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
