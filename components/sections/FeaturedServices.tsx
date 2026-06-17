"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedServices() {
  const featured = [
    {
      name: "Precision Haircut & Styling",
      description: "Bespoke hair shaping, custom texture work, and professional blowouts by master stylists.",
      price: "From ₹2,500",
      duration: "45 mins",
      iconName: "Scissors",
      imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Hair Coloring & Balayage",
      description: "Hand-painted dimensional transitions and luxury global tones customized for you.",
      price: "From ₹5,000",
      duration: "90 mins",
      iconName: "Palette",
      imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Luxury Hair Spa",
      description: "Intense, customized treatment baths using advanced formulas to revitalize hair fiber.",
      price: "From ₹3,000",
      duration: "60 mins",
      iconName: "Sparkles",
      imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Keratin & Smoothening",
      description: "Premium protein infusions to completely eliminate frizz and seal down cuticles.",
      price: "From ₹8,000",
      duration: "180 mins",
      iconName: "Wind",
      imageUrl: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-secondary py-16 md:py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <SectionHeading
          label="What We Offer"
          title="Signature Experiences"
          subtitle="Discover a selection of our most requested grooming and transformation rituals designed for absolute beauty."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full mb-16"
        >
          {featured.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard
                name={service.name}
                description={service.description}
                price={service.price}
                duration={service.duration}
                iconName={service.iconName}
                imageUrl={service.imageUrl}
              />
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
            href="/services"
            className="text-sage font-outfit text-sm tracking-widest uppercase font-semibold flex items-center gap-2 hover:text-sage-dark transition-all duration-300 relative group/link pb-1"
          >
            View All Experiences
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-sage scale-x-100 group-hover/link:scale-x-110 transition-transform duration-300 origin-left" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
