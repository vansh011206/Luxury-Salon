"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col mb-12 md:mb-16 ${alignClass} w-full`}
    >
      <span className="text-sage font-outfit text-xs tracking-[0.25em] uppercase mb-3 block font-semibold">
        {label}
      </span>
      <h2 className="text-charcoal font-playfair text-2xl sm:text-3xl md:text-5xl leading-tight font-medium">
        {title}
      </h2>
      {subtitle && (
        <p className="text-cream/80 font-outfit text-sm md:text-base max-w-2xl mt-4 leading-relaxed font-light">
          {subtitle}
        </p>
      )}
      <div className="flex items-center gap-4 mt-6 w-32 justify-center">
        <div className="h-[1px] bg-sage/20 flex-1" />
        <div className="w-1.5 h-1.5 bg-sage rotate-45" />
        <div className="h-[1px] bg-sage/20 flex-1" />
      </div>
    </motion.div>
  );
}
