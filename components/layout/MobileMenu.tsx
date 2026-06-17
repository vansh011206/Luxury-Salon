"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Facebook, Youtube, Phone } from "lucide-react";
import { footerLinks } from "@/constants/navigation";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    opened: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const containerVariants = {
    closed: {},
    opened: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    opened: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="opened"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 bg-primary z-[999] flex flex-col justify-between p-5 sm:p-8 pt-20 overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-8 text-charcoal hover:text-sage transition-colors duration-300 focus:outline-none cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Links */}
          <motion.nav
            variants={containerVariants}
            className="flex flex-col gap-4 text-center mt-6"
          >
            {footerLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <motion.div key={link.path} variants={linkVariants}>
                  <Link
                    href={link.path}
                    onClick={onClose}
                    className={`font-playfair text-xl md:text-2xl tracking-wider uppercase block py-1.5 transition-colors duration-300 ${
                      isActive ? "text-sage font-bold" : "text-charcoal hover:text-sage"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
            
            <motion.div variants={linkVariants} className="mt-4">
              <Link
                href="/booking"
                onClick={onClose}
                className="inline-block bg-sage hover:bg-sage-dark text-primary font-outfit text-xs tracking-widest uppercase py-3.5 px-8 font-semibold transition-all duration-300 rounded-full"
              >
                Book Now
              </Link>
            </motion.div>
          </motion.nav>

          {/* Footer info in mobile menu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-5 mt-10 border-t border-secondary pt-6"
          >
            <a
              href="tel:+91-882675336"
              className="flex items-center gap-2 text-sage hover:text-sage-dark transition-colors font-outfit text-sm font-semibold tracking-wider"
            >
              <Phone className="w-4 h-4" />
              +91-882675336
            </a>

            <div className="flex gap-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-charcoal/60 hover:text-sage transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-charcoal/60 hover:text-sage transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-charcoal/60 hover:text-sage transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            
            <span className="text-cream/55 text-[10px] uppercase tracking-widest font-outfit">
              Greater Kailash 1, South Delhi
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
