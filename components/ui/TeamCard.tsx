"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Button from "./Button";

interface TeamCardProps {
  name: string;
  role: string;
  experience: string;
  training: string;
  specialization: string[];
  imageUrl: string;
  instagram: string;
  bookingLink?: string;
}

export default function TeamCard({
  name,
  role,
  experience,
  training,
  specialization,
  imageUrl,
  instagram,
  bookingLink = "/booking",
}: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white border border-secondary hover:border-sage/20 transition-all duration-300 flex flex-col h-full relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-lg"
    >
      <div className="relative h-80 sm:h-96 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0 group-hover:filter-none brightness-95 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-60" />
        
        {/* Instagram overlay icon */}
        <a
          href={`https://instagram.com/${instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 bg-white/95 hover:bg-sage text-charcoal hover:text-white p-2.5 transition-colors duration-300 rounded-full z-10 shadow-sm border border-secondary"
        >
          <Instagram className="w-4.5 h-4.5" />
        </a>
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-sage font-outfit text-xs tracking-wider uppercase font-semibold">
            {role} • {experience}
          </span>
          <h3 className="text-charcoal font-playfair text-2xl mt-1 mb-3 font-semibold group-hover:text-sage transition-colors duration-300">
            {name}
          </h3>
          <p className="text-cream/50 font-outfit text-xs uppercase tracking-wider mb-4">
            Trained at: <span className="text-cream/80 normal-case tracking-normal font-light italic">{training}</span>
          </p>
          
          <div className="flex flex-wrap gap-1.5 mb-6">
            {specialization.map((spec) => (
              <span
                key={spec}
                className="text-sage/90 border border-sage/20 bg-sage/5 font-outfit text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        <Button
          href={`${bookingLink}?stylist=${encodeURIComponent(name)}`}
          variant="primary"
          className="w-full text-xs font-semibold py-3"
        >
          Book with {name.split(" ")[0]}
        </Button>
      </div>
    </motion.div>
  );
}
