"use client";

import { motion } from "framer-motion";

interface GiftCardProps {
  amount: string;
  designStyle: "classic" | "glossy" | "noir" | "bridal";
  isActive?: boolean;
  onClick?: () => void;
}

export default function GiftCard({
  amount,
  designStyle,
  isActive = false,
  onClick,
}: GiftCardProps) {
  const styles = {
    classic: {
      card: "bg-gradient-to-br from-[#F5F3EF] via-[#FAF9F6] to-[#EBE8E2] border-gold hover:border-gold-dark text-charcoal shadow-sm",
      logo: "text-charcoal",
      accent: "bg-sage/10 text-sage font-semibold",
      bgOrnament: "border-sage/5",
      valueClass: "text-charcoal",
      textClass: "text-cream/50",
    },
    glossy: {
      card: "bg-gradient-to-br from-[#E2CBB0] via-[#FAF9F6] to-[#C8A97E]/30 border-gold hover:border-gold-dark shadow-[0_4px_20px_rgba(200,169,126,0.12)] text-charcoal",
      logo: "text-gold-dark",
      accent: "bg-gold text-primary font-bold",
      bgOrnament: "border-gold/15",
      valueClass: "text-charcoal",
      textClass: "text-cream/50",
    },
    noir: {
      card: "bg-gradient-to-br from-[#3D4A3E] via-[#2E3A2F] to-[#3D4A3E] border-sage hover:border-gold shadow-[0_4px_25px_rgba(61,74,62,0.15)] text-primary",
      logo: "text-primary",
      accent: "bg-gold text-primary font-bold",
      bgOrnament: "border-primary/5",
      valueClass: "text-primary",
      textClass: "text-primary/50",
    },
    bridal: {
      card: "bg-gradient-to-br from-[#FAF9F6] via-[#F3E6DF] to-[#E2CBB0]/40 border-gold hover:border-gold-dark shadow-sm text-charcoal",
      logo: "text-charcoal",
      accent: "bg-gold/20 text-gold-dark font-semibold",
      bgOrnament: "border-gold/10",
      valueClass: "text-charcoal",
      textClass: "text-cream/50",
    },
  };

  const current = styles[designStyle];

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`relative w-full aspect-[1.58/1] rounded-2xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 border ${
        current.card
      } ${isActive ? "ring-2 ring-sage border-sage" : ""}`}
    >
      {/* Decorative Ornaments inside the card */}
      <div className={`absolute -right-16 -top-16 w-36 h-36 rounded-full border ${current.bgOrnament} pointer-events-none`} />
      <div className={`absolute -left-16 -bottom-16 w-36 h-36 rounded-full border ${current.bgOrnament} pointer-events-none`} />

      <div className="flex justify-between items-start relative z-10">
        <div>
          <span className={`font-playfair text-xl tracking-[0.2em] font-bold uppercase ${current.logo}`}>
            GLOSSY
          </span>
          <span className={`text-[7px] font-outfit tracking-[0.3em] uppercase block -mt-1 ${designStyle === "noir" ? "text-primary/40" : "text-cream/40"}`}>
            THE ART OF HAIR
          </span>
        </div>
        <span className={`text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full ${current.accent}`}>
          Gift Voucher
        </span>
      </div>

      <div className="relative z-10 mt-auto flex items-end justify-between">
        <div>
          <span className={`text-[9px] uppercase tracking-widest block mb-1 ${current.textClass}`}>
            Value
          </span>
          <span className={`font-outfit text-2xl md:text-3xl font-bold leading-none ${current.valueClass}`}>
            {amount}
          </span>
        </div>
        <div className="text-right">
          <span className={`text-[7px] uppercase tracking-widest block ${current.textClass}`}>
            Valid For 12 Months
          </span>
          <span className={`font-outfit text-[9px] tracking-wider uppercase font-semibold ${designStyle === "noir" ? "text-gold-light" : "text-sage"}`}>
            Redeemable on All Services
          </span>
        </div>
      </div>
    </motion.div>
  );
}
