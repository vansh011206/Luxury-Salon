"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Pin, Phone, MapPin, Mail, Clock, ArrowRight } from "lucide-react";
import { footerLinks } from "@/constants/navigation";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#2E3A2F] text-primary/80 border-t border-white/5 pt-20 pb-8 relative overflow-hidden">
      {/* Decorative backdrop gradients */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 font-outfit">
        
        {/* Newsletter Row */}
        <div className="border-b border-white/5 pb-16 mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 bg-black/25 border border-white/10 p-5 sm:p-8 md:p-12 rounded-2xl shadow-inner">
            <div className="max-w-md">
              <span className="text-gold font-outfit text-xs tracking-widest uppercase mb-2 block font-bold">
                Stay in the Loop
              </span>
              <h3 className="text-white font-playfair text-2xl md:text-3xl font-medium mb-3">
                Join the Luxe Circle
              </h3>
              <p className="text-white/80 font-outfit text-sm font-light">
                Subscribe to receive private invitations, styling tips from the master artists, and early treatment access.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="w-full lg:max-w-md flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/5 border border-white/15 px-5 py-4 text-sm text-white focus:border-gold focus:outline-none transition-colors duration-300 rounded-full placeholder-white/40"
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-dark text-charcoal px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-colors duration-300 rounded-full cursor-pointer flex items-center justify-center gap-2"
              >
                {subscribed ? "Subscribed" : "Subscribe"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
          {subscribed && (
            <p className="text-gold text-xs mt-3 font-outfit text-center animate-fade-in font-semibold">
              Thank you for subscribing! Welcome to our inner circle.
            </p>
          )}
        </div>

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex flex-col select-none">
              <span className="font-playfair text-2xl tracking-[0.2em] text-white font-bold leading-none">
                GLOSSY SALON
              </span>
              <span className="text-[8px] font-outfit tracking-[0.25em] text-white/50 uppercase mt-1.5">
                The Art of Hair
              </span>
            </Link>
            <p className="text-white/75 font-outfit text-sm leading-relaxed font-light">
              Delhi&apos;s most exclusive hair salon. Where master artistry meets unparalleled luxury, dedicated to the discerning few.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold transition-colors duration-300">
                <Pin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Directory Index */}
          <div>
            <h4 className="text-white font-playfair text-lg font-semibold tracking-wider mb-6">
              Boutique Index
            </h4>
            <ul className="grid grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-white/75 hover:text-gold transition-colors duration-200 font-outfit text-sm font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-playfair text-lg font-semibold tracking-wider mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Precision Haircuts", path: "/services#hair-cutting-styling" },
                { name: "Global & Balayage Coloring", path: "/services#hair-coloring" },
                { name: "Kérastase Luxury Spa", path: "/services#hair-treatments" },
                { name: "Keratin & Texture Treatments", path: "/services#smoothening-texture" },
                { name: "Remy Hair Extensions", path: "/services#hair-extensions" },
                { name: "Gentleman's Grooming", path: "/services#mens-grooming" },
              ].map((serv) => (
                <li key={serv.name}>
                  <Link
                    href={serv.path}
                    className="text-white/75 hover:text-gold transition-colors duration-200 font-outfit text-sm font-light"
                  >
                    {serv.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-playfair text-lg font-semibold tracking-wider">
              Visit Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                <span className="text-white/75 font-outfit text-sm font-light">
                  2nd Floor, M-Block Market, Greater Kailash Part 1, New Delhi — 110048
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="tel:+91-882675336"
                  className="text-white/75 hover:text-gold transition-colors duration-200 font-outfit text-sm font-light"
                >
                  +91-882675336
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="mailto:hello@glossysalon.in"
                  className="text-white/75 hover:text-gold transition-colors duration-200 font-outfit text-sm font-light"
                >
                  hello@glossysalon.in
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                <span className="text-white/75 font-outfit text-sm font-light">
                  Tue - Sun: 10:00 AM - 8:00 PM <br />
                  <span className="text-gold font-medium">Monday Closed</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-white/40 font-outfit text-xs">
              &copy; {new Date().getFullYear()} Glossy Salon. All rights reserved.
            </p>
            <p className="text-[10px] text-white/30 font-outfit tracking-wide mt-1">
              Crafted with ♥ in New Delhi
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-white/50 hover:text-white/80 text-xs font-outfit font-light">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms & Conditions</Link>
            <span>|</span>
            <Link href="/cancellation" className="hover:text-gold transition-colors">Cancellation Policy</Link>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-wrap justify-center gap-3 items-center opacity-70 transition-all duration-300">
            <span className="text-[10px] font-outfit text-white/40 tracking-wider uppercase mr-2 font-medium">
              We Accept
            </span>
            <div className="border border-white/10 px-2.5 py-1 text-[9px] uppercase font-bold text-white tracking-widest bg-white/5 rounded">
              Visa
            </div>
            <div className="border border-white/10 px-2.5 py-1 text-[9px] uppercase font-bold text-white tracking-widest bg-white/5 rounded">
              MC
            </div>
            <div className="border border-white/10 px-2.5 py-1 text-[9px] uppercase font-bold text-white tracking-widest bg-white/5 rounded">
              UPI
            </div>
            <div className="border border-white/10 px-2.5 py-1 text-[9px] uppercase font-bold text-white tracking-widest bg-white/5 rounded">
              PayTM
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
