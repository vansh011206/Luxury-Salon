"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../ui/TestimonialCard";
import { testimonialsData } from "@/constants/testimonials";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    }),
  };

  return (
    <section className="bg-primary py-16 md:py-32 px-6 relative overflow-hidden">
      {/* Decorative ornaments */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-sage/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2.5 bg-secondary border border-sage/10 px-4 sm:px-5 py-2.5 sm:py-2 mb-8 rounded-2xl sm:rounded-full shadow-sm text-center"
        >
          <div className="flex text-gold">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={idx} className="w-3 h-3 fill-gold" />
            ))}
          </div>
          <span className="text-cream text-xs font-outfit tracking-wide font-medium">
            Rated 4.9/5 on Google — 500+ Five-Star Reviews
          </span>
        </motion.div>

        <SectionHeading
          label="Testimonials"
          title="Words from Our Distinguished Clients"
        />

        {/* Carousel Wrapper */}
        <div className="relative w-full min-h-[350px] md:min-h-[300px] flex items-center justify-center mb-8 px-4">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIdx}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full"
            >
              <TestimonialCard
                name={testimonialsData[activeIdx].name}
                quote={testimonialsData[activeIdx].quote}
                rating={testimonialsData[activeIdx].rating}
                serviceTaken={testimonialsData[activeIdx].serviceTaken}
                imageUrl={testimonialsData[activeIdx].imageUrl}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dot Indicators & Buttons */}
        <div className="flex items-center gap-8 mt-4">
          <button
            onClick={prevSlide}
            className="p-2.5 border border-sage/30 hover:border-sage hover:bg-sage hover:text-primary text-sage transition-colors duration-300 rounded-full cursor-pointer focus:outline-none"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex gap-2.5">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeIdx ? 1 : -1);
                  setActiveIdx(idx);
                }}
                className={`h-1.5 transition-all duration-300 cursor-pointer focus:outline-none rounded-full ${
                  idx === activeIdx ? "w-6 bg-sage" : "w-1.5 bg-sage/20 hover:bg-sage/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2.5 border border-sage/30 hover:border-sage hover:bg-sage hover:text-primary text-sage transition-colors duration-300 rounded-full cursor-pointer focus:outline-none"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
