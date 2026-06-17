"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImageUrl?: string;
  breadcrumbs: { name: string; path: string }[];
}

export default function PageHeader({
  title,
  subtitle,
  backgroundImageUrl = "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1920&auto=format&fit=crop",
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <div className="relative h-[250px] md:h-[320px] w-full flex items-center justify-center overflow-hidden bg-charcoal pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center select-none pointer-events-none opacity-65"
        style={{
          backgroundImage: `url('${backgroundImageUrl}')`,
        }}
      />
      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-3 text-xs tracking-wider uppercase font-outfit">
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-gold/50" />}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-gold font-semibold">{crumb.name}</span>
                ) : (
                  <Link href={crumb.path} className="text-white/70 hover:text-gold transition-colors">
                    {crumb.name}
                  </Link>
                )}
              </span>
            ))}
          </nav>

          {/* Heading */}
          <h1 className="font-playfair text-white text-3xl sm:text-4xl md:text-5xl font-medium tracking-wide mb-3">
            {title}
          </h1>

          {/* Subheading */}
          {subtitle && (
            <p className="text-white/80 font-outfit text-xs max-w-lg leading-relaxed font-light tracking-wide uppercase">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
