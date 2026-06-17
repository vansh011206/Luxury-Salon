"use client";

import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import Button from "./Button";
import Image from "next/image";

interface ServiceCardProps {
  name: string;
  description: string;
  price: string;
  duration?: string;
  iconName: string;
  bookingLink?: string;
  imageUrl?: string;
}

export default function ServiceCard({
  name,
  description,
  price,
  duration,
  iconName,
  bookingLink = "/booking",
  imageUrl,
}: ServiceCardProps) {
  const IconComponent = (Icons as any)[iconName] || Icons.Scissors;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white border border-secondary hover:border-sage/20 flex flex-col h-full transition-all duration-300 relative group rounded-2xl shadow-sm hover:shadow-lg overflow-hidden"
    >
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden select-none pointer-events-none">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      )}

      <div className="p-5 sm:p-8 flex flex-col justify-between flex-grow">
        <div>
          {!imageUrl && (
            <div className="text-sage mb-6 group-hover:scale-110 transition-transform duration-300 inline-block bg-secondary/50 p-3.5 rounded-2xl">
              <IconComponent className="w-7 h-7 stroke-[1.5]" />
            </div>
          )}
          <h3 className="text-charcoal font-playfair text-xl mb-3 font-semibold tracking-wide">
            {name}
          </h3>
          <p className="text-cream/80 font-outfit text-sm mb-6 leading-relaxed font-light">
            {description}
          </p>
        </div>
        <div>
          <div className="flex items-baseline justify-between mb-6 border-t border-secondary pt-4">
            <span className="text-sage font-outfit text-lg font-bold">{price}</span>
            {duration && (
              <span className="text-cream/50 font-outfit text-xs tracking-wider uppercase">
                {duration}
              </span>
            )}
          </div>
          <Button href={bookingLink} variant="secondary" className="w-full text-xs py-2.5">
            Book Experience
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
