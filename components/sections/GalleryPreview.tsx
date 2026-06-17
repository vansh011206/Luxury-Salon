"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { ArrowRight, Plus } from "lucide-react";

export default function GalleryPreview() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop",
      tag: "Hair Color & Balayage",
      alt: "Coloring sweep balayage",
    },
    {
      url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop",
      tag: "Precision Styling",
      alt: "Hair styling close up",
    },
    {
      url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=600&auto=format&fit=crop",
      tag: "Bespoke Wash",
      alt: "Hair spa washing station",
    },
    {
      url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop",
      tag: "Men's Grooming",
      alt: "Men's precision crop",
    },
    {
      url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=600&auto=format&fit=crop",
      tag: "Treatments",
      alt: "Healthy sleek hair finish",
    },
    {
      url: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600&auto=format&fit=crop",
      tag: "Bridal Styling",
      alt: "Editorial bridal braid",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-secondary py-16 md:py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <SectionHeading
          label="The Portfolio"
          title="The Art We Create"
          subtitle="A visual journal of custom colorings, precision cuts, and bridal transformations created inside our South Delhi studio."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16"
        >
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative aspect-square overflow-hidden group border border-sage/10 rounded-2xl cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-90"
              />
              
              {/* Luxury hover overlay details */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-gold font-outfit text-[10px] tracking-widest uppercase font-semibold mb-1">
                  {img.tag}
                </span>
                <span className="text-white font-playfair text-lg font-medium flex items-center gap-2">
                  View Close-Up
                  <Plus className="w-4 h-4 text-gold" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/gallery"
            className="text-sage font-outfit text-sm tracking-widest uppercase font-semibold flex items-center gap-2 hover:text-sage-dark transition-all duration-300 relative group/link pb-1"
          >
            View Full Gallery
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-sage scale-x-100 group-hover/link:scale-x-110 transition-transform duration-300 origin-left" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
