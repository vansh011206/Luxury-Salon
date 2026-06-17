"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

interface ProductCardProps {
  name: string;
  brand: string;
  description: string;
  price: string;
  imageUrl: string;
  badge?: string;
  onEnquire?: () => void;
}

export default function ProductCard({
  name,
  brand,
  description,
  price,
  imageUrl,
  badge,
  onEnquire,
}: ProductCardProps) {
  const defaultEnquiry = () => {
    const message = `Hi, I am interested in purchasing the ${brand} - ${name} (${price}) from Glossy Salon. Please let me know its availability.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white border border-secondary hover:border-sage/20 p-4 sm:p-6 flex flex-col justify-between h-full transition-all duration-300 relative group rounded-2xl shadow-sm hover:shadow-lg"
    >
      {badge && (
        <span className="absolute top-4 left-4 bg-sage text-primary text-[9px] uppercase tracking-widest px-3 py-1 z-10 font-bold rounded-full shadow-sm">
          {badge}
        </span>
      )}

      <div>
        <div className="relative h-64 w-full bg-secondary mb-6 overflow-hidden flex items-center justify-center rounded-xl border border-secondary">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-95"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
        </div>

        <span className="text-sage font-outfit text-[10px] tracking-[0.2em] uppercase font-semibold">
          {brand}
        </span>
        <h3 className="text-charcoal font-playfair text-lg mt-1 mb-2 font-semibold group-hover:text-sage transition-colors duration-300 line-clamp-1">
          {name}
        </h3>
        <p className="text-cream/80 font-outfit text-xs mb-6 leading-relaxed line-clamp-2 font-light">
          {description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between border-t border-secondary pt-4 mb-4">
          <span className="text-charcoal font-outfit text-lg font-bold">{price}</span>
          <span className="text-sage text-[10px] tracking-wider uppercase font-semibold">In Boutique</span>
        </div>
        <Button
          onClick={onEnquire || defaultEnquiry}
          variant="secondary"
          className="w-full text-xs py-2.5"
        >
          Enquire Now
        </Button>
      </div>
    </motion.div>
  );
}
