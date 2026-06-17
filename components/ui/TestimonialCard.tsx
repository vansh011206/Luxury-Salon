"use client";

import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  quote: string;
  rating: number;
  serviceTaken: string;
  imageUrl: string;
}

export default function TestimonialCard({
  name,
  quote,
  rating,
  serviceTaken,
  imageUrl,
}: TestimonialCardProps) {
  return (
    <div className="bg-secondary border border-secondary-light p-5 sm:p-8 md:p-10 flex flex-col justify-between h-full relative rounded-2xl shadow-sm">
      <span className="text-sage/10 font-playfair text-[8rem] absolute top-2 left-4 select-none pointer-events-none leading-none">
        “
      </span>
      <div className="relative z-10">
        <div className="flex gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star
              key={idx}
              className={`w-4 h-4 ${
                idx < rating ? "text-gold fill-gold" : "text-charcoal/20"
              }`}
            />
          ))}
        </div>
        <p className="text-charcoal font-cormorant italic text-lg md:text-xl leading-relaxed mb-8 font-light">
          {quote}
        </p>
      </div>
      <div className="flex items-center gap-4 border-t border-secondary-light pt-6 relative z-10">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-sage/20 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-charcoal font-playfair font-semibold text-base">
            {name}
          </h4>
          <span className="text-sage font-outfit text-xs uppercase tracking-wider block mt-0.5 font-semibold">
            {serviceTaken}
          </span>
        </div>
      </div>
    </div>
  );
}
