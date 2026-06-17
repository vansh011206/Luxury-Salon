"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { headerLinks } from "@/constants/navigation";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const darkHeaderRoutes = [
    "/",
    "/about",
    "/blog",
    "/booking",
    "/bridal",
    "/contact",
    "/gallery",
    "/gift-cards",
    "/membership",
    "/products",
    "/services",
    "/team"
  ];
  const showTransparent = darkHeaderRoutes.includes(pathname) && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          showTransparent
            ? "bg-transparent border-transparent py-5"
            : "bg-primary/95 backdrop-blur-md border-secondary py-3.5 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex flex-col group select-none">
            <span className={`font-playfair text-xl md:text-2xl tracking-[0.2em] font-bold transition-colors duration-300 leading-none ${
              showTransparent ? "text-white group-hover:text-gold" : "text-charcoal group-hover:text-sage"
            }`}>
              GLOSSY SALON
            </span>
            <span className={`text-[8px] font-outfit tracking-[0.25em] uppercase transition-colors duration-300 mt-1 ${
              showTransparent ? "text-white/60 group-hover:text-gold/80" : "text-cream/60 group-hover:text-sage/80"
            }`}>
              The Art of Hair
            </span>
          </Link>

          {/* Desktop Navigation Links (Only Core 6 items) */}
          <nav className="hidden xl:flex items-center gap-6">
            {headerLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`font-outfit text-xs tracking-widest uppercase font-medium transition-all duration-300 relative py-1 ${
                    isActive 
                      ? (showTransparent ? "text-gold font-semibold" : "text-sage font-semibold") 
                      : (showTransparent ? "text-white/90 hover:text-gold" : "text-charcoal/85 hover:text-sage")
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className={`absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full ${showTransparent ? "bg-gold" : "bg-sage"}`} />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+91-882675336"
              className={`hidden lg:flex items-center gap-2 transition-colors duration-300 font-outfit text-xs tracking-wider ${
                showTransparent ? "text-white/95 hover:text-gold" : "text-charcoal/85 hover:text-sage"
              }`}
            >
              <Phone className={`w-4 h-4 ${showTransparent ? "text-gold" : "text-sage"}`} />
              +91-882675336
            </a>

            <div className="hidden sm:block">
              <Button href="/booking" variant="primary" className="text-xs py-2 px-5 font-semibold">
                Book Now
              </Button>
            </div>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`xl:hidden transition-colors duration-300 p-1 focus:outline-none cursor-pointer ${
                showTransparent ? "text-white hover:text-gold" : "text-charcoal hover:text-sage"
              }`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
