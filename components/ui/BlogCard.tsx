"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  readTime: string;
  author: string;
  imageUrl: string;
}

export default function BlogCard({
  id,
  title,
  category,
  date,
  excerpt,
  readTime,
  author,
  imageUrl,
}: BlogCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white border border-secondary hover:border-sage/20 transition-all duration-300 flex flex-col h-full group overflow-hidden rounded-2xl shadow-sm hover:shadow-lg"
    >
      <div className="relative h-48 sm:h-60 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
        />
        <span className="absolute top-4 left-4 bg-sage text-primary text-[9px] uppercase tracking-widest px-3 py-1 z-10 font-bold rounded-full shadow-sm">
          {category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 text-cream/60 text-[11px] mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-sage/60" />
              {date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-sage/60" />
              {readTime}
            </span>
          </div>

          <h3 className="text-charcoal font-playfair text-xl mb-3 font-semibold group-hover:text-sage transition-colors duration-300 leading-snug line-clamp-2">
            <Link href={`/blog#${id}`}>{title}</Link>
          </h3>
          <p className="text-cream/80 font-outfit text-sm mb-6 leading-relaxed line-clamp-3 font-light">
            {excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-secondary pt-4 mt-auto">
          <span className="flex items-center gap-1.5 text-cream/60 text-xs">
            <User className="w-3.5 h-3.5 text-sage/60" />
            By {author}
          </span>
          <Link
            href={`/blog#${id}`}
            className="text-sage font-outfit text-xs tracking-wider uppercase font-semibold flex items-center gap-1 group/btn hover:text-sage-dark transition-colors duration-300"
          >
            Read More
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
