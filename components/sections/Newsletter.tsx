"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="bg-primary py-20 px-6">
      <div className="max-w-4xl mx-auto border border-sage/15 p-5 sm:p-8 md:p-12 relative overflow-hidden bg-secondary rounded-2xl shadow-sm">
        <div className="absolute top-0 right-0 w-32 h-32 bg-sage/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="text-sage font-outfit text-xs tracking-[0.25em] uppercase mb-3 block font-semibold">
              Stay in the Loop
            </span>
            <h2 className="text-charcoal font-playfair text-2xl md:text-3xl font-semibold mb-3 tracking-wide">
              Receive Privileged Updates
            </h2>
            <p className="text-cream font-outfit text-sm mb-8 max-w-md font-light leading-relaxed">
              Join 5,000+ subscribers who receive our monthly style guide, private invitations, and luxury hair care tips.
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-primary border border-sage/20 px-5 py-3.5 text-sm text-charcoal focus:border-sage focus:outline-none transition-colors duration-300 rounded-full placeholder-cream/45"
              />
              <button
                type="submit"
                className="bg-sage hover:bg-sage-dark text-primary px-8 py-3.5 text-xs font-semibold tracking-widest uppercase transition-colors duration-300 rounded-full cursor-pointer flex items-center justify-center gap-2"
              >
                {subscribed ? "Joined" : "Subscribe"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {subscribed && (
              <p className="text-sage text-xs mt-3 font-outfit animate-fade-in font-medium">
                Thank you! You have been successfully added to our loop.
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
