"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Button from "./Button";

interface MembershipCardProps {
  name: string;
  price: string;
  benefits: string[];
  tier: "silver" | "gold" | "platinum";
  badge?: string;
  compact?: boolean;
}

export default function MembershipCard({
  name,
  price,
  benefits,
  tier,
  badge,
  compact = false,
}: MembershipCardProps) {
  const styles = {
    silver: {
      card: "bg-white border-secondary hover:border-sage/30 text-charcoal shadow-sm hover:shadow-lg rounded-2xl",
      badge: "bg-secondary text-sage border border-secondary-light font-semibold",
      buttonVariant: "secondary" as const,
      goldAccent: "text-sage",
      textClass: "text-cream/80",
      checkClass: "text-sage",
    },
    gold: {
      card: "bg-white border-gold/40 hover:border-gold shadow-[0_4px_20px_rgba(200,169,126,0.1)] text-charcoal hover:shadow-lg rounded-2xl",
      badge: "bg-gold text-primary font-bold",
      buttonVariant: "primary" as const,
      goldAccent: "text-gold-dark",
      textClass: "text-cream/80",
      checkClass: "text-gold-dark",
    },
    platinum: {
      card: "bg-sage-dark border-sage hover:border-gold shadow-[0_4px_25px_rgba(61,74,62,0.15)] text-primary hover:shadow-lg rounded-2xl",
      badge: "bg-gradient-to-r from-gold via-gold-light to-gold-dark text-primary font-bold",
      buttonVariant: "primary" as const,
      goldAccent: "text-gold-light",
      textClass: "text-primary/80",
      checkClass: "text-gold",
    },
  };

  const currentStyle = styles[tier];

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`border p-5 sm:p-8 flex flex-col justify-between h-full relative transition-all duration-300 ${currentStyle.card}`}
    >
      {badge && (
        <span className={`absolute top-4 right-4 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full ${currentStyle.badge}`}>
          {badge}
        </span>
      )}

      <div>
        <h3 className="font-playfair text-2xl uppercase tracking-wider mb-2 font-medium">
          {name}
        </h3>
        <div className="flex items-baseline gap-1 mb-8">
          <span className={`font-outfit text-3xl md:text-4xl font-bold ${currentStyle.goldAccent}`}>
            {price}
          </span>
          <span className={`text-xs uppercase tracking-wider ${tier === "platinum" ? "text-primary/50" : "text-cream/50"}`}>/ year</span>
        </div>

        <ul className="space-y-4 mb-8">
          {benefits.slice(0, compact ? 5 : undefined).map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${currentStyle.checkClass}`} />
              <span className={`font-outfit text-sm leading-relaxed font-light ${currentStyle.textClass}`}>
                {benefit}
              </span>
            </li>
          ))}
          {compact && benefits.length > 5 && (
            <li className="text-gold font-outfit text-xs tracking-wider italic">
              + {benefits.length - 5} more exclusive privileges...
            </li>
          )}
        </ul>
      </div>

      <div className={`mt-auto pt-4 border-t ${tier === "platinum" ? "border-primary/10" : "border-secondary"}`}>
        <Button
          href="/booking?bookingType=membership"
          variant={currentStyle.buttonVariant}
          className={`w-full text-xs font-semibold py-3.5 ${
            tier === "platinum"
              ? "bg-primary text-sage border-primary hover:bg-white"
              : ""
          }`}
        >
          Join The Circle
        </Button>
      </div>
    </motion.div>
  );
}
