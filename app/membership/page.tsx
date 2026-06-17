"use client";

import { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import MembershipCard from "@/components/ui/MembershipCard";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, AlertCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export default function MembershipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Membership", path: "/membership" },
  ];

  const tiers = [
    {
      name: "Silver",
      price: "₹9,999",
      tier: "silver" as const,
      benefits: [
        "10% off on all services",
        "Priority booking",
        "Birthday: 1 complimentary blow dry",
        "Quarterly hair health consultation",
        "Welcome kit with mini luxury products",
        "Member-only newsletter with tips",
      ],
    },
    {
      name: "Gold",
      price: "₹19,999",
      tier: "gold" as const,
      badge: "Popular",
      benefits: [
        "20% off on all services",
        "Priority booking + no-wait guarantee",
        "Birthday: Complimentary luxury hair spa",
        "Monthly scalp analysis",
        "10% off on retail products",
        "1 free blow dry per month",
        "Invitation to member-only events",
        "Seasonal gift box",
      ],
    },
    {
      name: "Platinum Black",
      price: "₹39,999",
      tier: "platinum" as const,
      badge: "Ultimate",
      benefits: [
        "30% off on all services",
        "Dedicated personal stylist assigned",
        "Home service: 2 complimentary visits per year",
        "Birthday: Full luxury treatment of choice",
        "20% off on all retail products",
        "2 free blow drys per month",
        "VIP private lounge access",
        "Exclusive early access to new treatments",
        "Complimentary glass of champagne on every visit",
        "Priority bridal season booking",
        "Anniversary special: Complimentary hair makeover",
        "Personal hair care regimen consultation (quarterly)",
      ],
    },
  ];

  const faqs: FAQItem[] = [
    {
      q: "Can I share my membership benefits with family members?",
      a: "No. All Glossy memberships are strictly linked to a single individual and are non-transferable. This ensures we can maintain a personalized profiling and tracking index for your specific hair treatment regimen.",
    },
    {
      q: "How do I redeem my complimentary birthday services?",
      a: "Complimentary birthday treatments (like the Gold tier Luxury Spa or Platinum Black treatment of choice) can be redeemed during your birthday month. We recommend booking at least 7 days in advance.",
    },
    {
      q: "How does the Platinum Black Home Service benefit work?",
      a: "Platinum Black members receive 2 complimentary home styling visits per year. Our travel team will come directly to your residence within Delhi NCR to perform styling, blowouts, or extensions maintenance. Advance reservation is mandatory.",
    },
    {
      q: "What is the cancellation policy for priority bookings?",
      a: "Members receive priority booking slots. Standard cancellations require a 4-hour advance notice. Gold and Platinum Black members enjoy a 'no-wait guarantee' when arriving within 10 minutes of their appointment.",
    },
    {
      q: "How is the welcome kit and seasonal gift box delivered?",
      a: "Your welcome kit is handed to you immediately upon membership activation at our Greater Kailash boutique. Seasonal boxes are dispatched directly to your registered address during festive cycles.",
    },
  ];

  return (
    <>
      <PageHeader
        title="The Luxe Circle"
        subtitle="Exclusive VIP club experiences"
        breadcrumbs={breadcrumbs}
        backgroundImageUrl="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1920&auto=format&fit=crop"
      />

      {/* MEMBERSHIP INTRO & TIERS */}
      <section className="bg-primary py-16 px-6 relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center mb-20 max-w-2xl">
            <span className="text-sage font-outfit text-xs tracking-[0.25em] uppercase mb-4 block font-semibold">
              The Luxe Circle
            </span>
            <h2 className="text-charcoal font-playfair text-3xl md:text-5xl font-medium mb-6 tracking-wide">
              Elevate Your Hair Care Standards
            </h2>
            <p className="text-cream font-outfit text-sm md:text-base leading-relaxed font-light">
              Join an exclusive circle of clients who enjoy privileged access, priority bookings, and extraordinary savings. Indulge in premium treatments month after month.
            </p>
            <div className="w-16 h-[1px] bg-sage/30 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-start">
            {tiers.map((tier) => (
              <MembershipCard
                key={tier.name}
                name={tier.name}
                price={tier.price}
                tier={tier.tier}
                benefits={tier.benefits}
                badge={tier.badge}
                compact={false}
              />
            ))}
          </div>

          {/* Footer Note */}
          <div className="flex items-start sm:items-center gap-3 mt-16 text-cream font-outfit text-[11px] sm:text-xs tracking-wider uppercase border border-sage/10 bg-secondary px-5 py-3.5 rounded-2xl sm:rounded-full shadow-sm text-left">
            <AlertCircle className="w-4 h-4 text-sage flex-shrink-0" />
            All memberships are non-transferable and valid for 12 months from activation.
          </div>
        </div>
      </section>

      {/* SECTION: MEMBERSHIP PRIVILEGE SHOWCASE */}
      <section className="bg-secondary py-16 md:py-32 px-6 border-t border-b border-sage/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side: Premium image with overlay */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[350px] sm:h-[450px] md:h-[550px] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-sage/10"
            >
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop"
                alt="Glossy Member Salon Lounge"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-gold font-outfit text-xs tracking-[0.25em] uppercase mb-2 block font-semibold">
                  Member Privilege
                </span>
                <h3 className="text-white font-playfair text-2xl md:text-3xl font-medium tracking-wide">
                  The Sanctuary Suite
                </h3>
              </div>
            </motion.div>

            {/* Right side: Benefits detail list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <span className="text-sage font-outfit text-xs tracking-[0.25em] uppercase mb-4 block font-semibold">
                Circle Privileges
              </span>
              <h2 className="text-charcoal font-playfair text-3xl md:text-5xl font-medium mb-8 tracking-wide">
                Indulgence Redefined
              </h2>
              <p className="text-cream font-outfit text-sm md:text-base leading-relaxed mb-10 font-light">
                As a member of Glossy&apos;s Luxe Circle, you don&apos;t just secure appointment slots; you step into a sanctuary built specifically around your personal grooming and relaxation needs.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="bg-sage/10 p-3 rounded-xl text-sage">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-charcoal font-playfair text-lg font-medium mb-1">Champagne Service & Private Lounge</h4>
                    <p className="text-cream font-outfit text-sm font-light">Enjoy select refreshments, tea rituals, or premium champagne in our private member lounge before and after your sessions.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-sage/10 p-3 rounded-xl text-sage">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-charcoal font-playfair text-lg font-medium mb-1">Dedicated Stylist Continuity</h4>
                    <p className="text-cream font-outfit text-sm font-light">Choose your preferred master designer and colorist to guarantee consistent, highly customized styling profiles built for your hair history.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-sage/10 p-3 rounded-xl text-sage">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-charcoal font-playfair text-lg font-medium mb-1">Priority Reservations & Zero Waiting</h4>
                    <p className="text-cream font-outfit text-sm font-light">Enjoy pre-emptive queue skipping, instant rescheduling priority, and guaranteed immediate seating upon your arrival.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section className="bg-secondary py-16 md:py-32 px-6 border-t border-sage/10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            label="Questions"
            title="Membership FAQ"
            subtitle="Details regarding activation, billing cycles, and privileges."
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-secondary border border-sage/10 hover:border-sage/20 transition-colors duration-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-charcoal font-playfair text-lg md:text-xl font-medium tracking-wide">
                      {faq.q}
                    </span>
                    <span className="text-sage flex-shrink-0">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-sage/10"
                      >
                        <div className="p-6 md:p-8 pt-0 text-cream font-outfit text-sm md:text-base leading-loose font-light">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
