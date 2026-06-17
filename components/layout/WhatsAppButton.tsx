"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const message = "Hi, I'd like to book an appointment at Glossy Salon.";
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative flex items-center justify-center">
        {/* Pulsing Backing Circle */}
        <span className="absolute inline-flex h-12 w-12 rounded-full bg-emerald-500 opacity-75 animate-ping group-hover:animate-none" />
        
        {/* Actual Button Icon */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-colors duration-300"
        >
          {/* Using MessageCircle to mimic WhatsApp bubble logo */}
          <MessageCircle className="w-6 h-6 fill-white stroke-none" />
        </motion.div>
      </div>
    </a>
  );
}
