"use client";

import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Check, Clock, Phone, Award, ShieldAlert } from "lucide-react";

export default function BridalPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Bridal Studio", path: "/bridal" },
  ];

  const packages = [
    {
      name: "Mehendi & Sangeet Look",
      price: "₹15,000",
      duration: "90 mins",
      details: [
        "Elegant hair styling (braids, waves, half-up styles)",
        "Premium hair accessory placement",
        "Anti-humidity extensions prep",
        "Emergency touch-up kit",
      ],
    },
    {
      name: "Wedding Day Bridal Hair",
      price: "₹25,000",
      duration: "120 mins + Trial",
      details: [
        "1-on-1 personalized styling consultation",
        "Dedicated hair trial session (60 mins)",
        "Perfected Dupatta drapery & jewelry pinning",
        "High-definition hold sealing treatment",
        "On-site final touch-up service",
      ],
    },
    {
      name: "Reception Glam",
      price: "₹18,000",
      duration: "90 mins",
      details: [
        "Red-carpet worthy Hollywood waves or modern updo",
        "Bespoke accessories styling",
        "Transition styling consultation",
        "Volumizing prep and hair extensions blending",
      ],
    },
    {
      name: "Complete Bridal Package",
      price: "₹55,000",
      duration: "All Events",
      isPopular: true,
      details: [
        "Hair styling for Mehendi, Sangeet, Wedding & Reception",
        "Complimentary styling trials for all events",
        "Dedicated personal bridal stylist on-site",
        "Dupatta draping and veil pinning included",
        "Bridal emergency haircare kit provided",
        "Pre-bridal hair consultation & treatment recommendation",
      ],
    },
    {
      name: "Groom Grooming Package",
      price: "₹12,000",
      duration: "Event Day",
      details: [
        "Precision wedding haircut & styling session",
        "Beard contouring and hot towel shave",
        "Scalp detoxifying & clarifying treatment",
        "Skin prep and hair hold setting",
      ],
    },
    {
      name: "Pre-Bridal Hair Program",
      price: "₹20,000",
      duration: "3 Months",
      details: [
        "4 sessions of monthly Kérastase hair spa rituals",
        "Scalp health analysis and hair strengthening peels",
        "At-home luxury product recommendation guide",
        "Ongoing texture monitoring by scalp specialists",
      ],
    },
  ];

  const valueProps = [
    "Trial styling session included in all wedding day packages",
    "Home & venue styling service available across Delhi NCR",
    "3,000+ happy brides transformed by our specialist team",
    "Emergency touch-up & pinning kit provided to every bride",
    "Dedicated bridal coordinator assigned to manage timelines",
    "Our master stylists travel worldwide for destination weddings",
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1591551110830-680b40cd058e?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=600&auto=format&fit=crop",
  ];

  const bridalReviews = [
    {
      quote: "The Complete Bridal Package was the best decision. Ananya is a gem — she stayed with me until my final walk to make sure not a single strand was out of place.",
      author: "Priyanka Malhotra",
      date: "Nov 2024",
    },
    {
      quote: "Absolutely loved my Sangeet braids and Wedding bun! Everyone kept asking where I got my hair styled. The dupatta was pinned so securely yet comfortably.",
      author: "Nitika Sharma",
      date: "Dec 2024",
    },
    {
      quote: "Super professional. The travel team arrived at my hotel in Gurgaon at 5 AM sharp. Flawless hair styling that lasted through the entire night.",
      author: "Simran Kohli",
      date: "Jan 2025",
    },
  ];

  return (
    <>
      <PageHeader
        title="Bridal Studio"
        subtitle="Exclusive wedding hair design"
        breadcrumbs={breadcrumbs}
        backgroundImageUrl="https://images.unsplash.com/photo-1591551110830-680b40cd058e?q=80&w=1920&auto=format&fit=crop"
      />

      {/* SECTION: BRIDAL INTRO */}
      <section className="bg-primary py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="text-sage font-outfit text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
              The Sacred Vow
            </span>
            <h2 className="text-charcoal font-playfair text-3xl md:text-5xl font-medium mb-6 tracking-wide">
              Your Wedding Day Deserves Perfection
            </h2>
            <p className="text-sage font-cormorant italic text-xl md:text-2xl leading-relaxed mb-6 font-medium max-w-2xl">
              &quot;We deliver nothing less than pure artistic devotion.&quot;
            </p>
            <p className="text-cream font-outfit text-sm md:text-base leading-loose max-w-3xl font-light">
              Your wedding is a milestone of lifetime memories. At Glossy, we understand that bridal hair is not just a service — it is the crowning glory of your ensemble. Our master designers work closely with your attire, jewelry, and features to craft hair statements that radiate elegance, beauty, and timeless poise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION: BRIDAL PACKAGES */}
      <section className="bg-secondary py-16 md:py-32 px-6 border-t border-b border-sage/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="The Packages"
            title="Tailored Wedding Rituals"
            subtitle="Curated styling packages created to keep your hair healthy, glossy, and beautifully styled across every ceremony."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`border p-5 sm:p-8 flex flex-col justify-between h-full relative transition-all duration-300 rounded-2xl shadow-sm ${
                  pkg.isPopular
                    ? "bg-sage border-sage text-primary shadow-lg"
                    : "bg-secondary border-sage/15 hover:border-sage/35 hover:shadow-md text-charcoal"
                }`}
              >
                {pkg.isPopular && (
                  <span className="absolute top-4 right-4 bg-gold text-primary text-[9px] uppercase tracking-widest px-3 py-1 font-bold rounded-full">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className={`font-playfair text-2xl mb-2 font-medium tracking-wide ${pkg.isPopular ? "text-primary" : "text-charcoal"}`}>
                    {pkg.name}
                  </h3>
                  <div className={`flex flex-col sm:flex-row items-start sm:items-baseline justify-between mb-8 border-b pb-4 gap-2 ${pkg.isPopular ? "border-primary/10" : "border-sage/15"}`}>
                    <span className={`font-outfit text-3xl font-semibold ${pkg.isPopular ? "text-gold-light" : "text-sage"}`}>
                      {pkg.price}
                    </span>
                    <span className={`font-outfit text-xs tracking-wider uppercase flex items-center gap-1 ${pkg.isPopular ? "text-primary/70" : "text-cream/70"}`}>
                      <Clock className={`w-3.5 h-3.5 ${pkg.isPopular ? "text-gold-light/60" : "text-sage/60"}`} />
                      {pkg.duration}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.isPopular ? "text-gold" : "text-sage"}`} />
                        <span className={`font-outfit text-sm font-light leading-relaxed ${pkg.isPopular ? "text-primary/90" : "text-cream"}`}>
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`pt-4 border-t mt-auto ${pkg.isPopular ? "border-primary/10" : "border-sage/15"}`}>
                  <Button
                    href={`/booking?type=bridal&package=${encodeURIComponent(pkg.name)}`}
                    variant={pkg.isPopular ? "secondary" : "primary"}
                    className="w-full text-xs font-semibold py-3"
                  >
                    Reserve Package
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: WHY CHOOSE US FOR YOUR WEDDING */}
      <section className="bg-primary py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[480px] md:h-[600px] w-full"
            >
              <div className="absolute inset-4 border border-sage/20 rounded-2xl z-10 pointer-events-none translate-x-2 translate-y-2" />
              <Image
                src="https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=800&auto=format&fit=crop"
                alt="Bridal consultation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-2xl border border-sage/10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-sage font-outfit text-xs tracking-[0.25em] uppercase mb-4 font-semibold block">
                The Glossy Standard
              </span>
              <h2 className="text-charcoal font-playfair text-3xl md:text-5xl font-medium leading-tight mb-8 tracking-wide">
                Why Choose Us for Your Wedding
              </h2>
              
              <ul className="space-y-6">
                {valueProps.map((prop, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-sage/10 border border-sage/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-sage font-semibold text-xs">
                      ✓
                    </div>
                    <span className="text-cream font-outfit text-sm md:text-base font-light leading-relaxed">
                      {prop}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: BRIDAL GALLERY */}
      <section className="bg-secondary py-16 md:py-32 px-6 border-t border-b border-sage/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Visual Portfolio"
            title="Bridal Transformations"
            subtitle="Explore real bridal updos, romantic styling, and dupatta drapes designed by our artists."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((url, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="relative aspect-[3/4] overflow-hidden group border border-sage/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Image
                  src={url}
                  alt={`Bridal hair style transformation ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-95 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-gold-light font-outfit text-xs tracking-wider uppercase font-semibold">
                    Signature Wedding Look
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: BRIDE TESTIMONIALS */}
      <section className="bg-primary py-16 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label="Real Stories"
            title="From Our Glossy Brides"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bridalReviews.map((rev, idx) => (
              <motion.div
                key={rev.author}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-secondary border border-sage/10 rounded-2xl p-6 flex flex-col justify-between h-full relative shadow-sm hover:shadow-md transition-all duration-300"
              >
                <p className="text-cream font-cormorant italic text-lg leading-relaxed mb-6 font-medium">
                  &quot;{rev.quote}&quot;
                </p>
                <div className="border-t border-sage/10 pt-4 flex justify-between items-center text-xs">
                  <span className="text-charcoal font-playfair font-semibold">{rev.author}</span>
                  <span className="text-sage font-outfit font-medium">{rev.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: CTA */}
      <section className="bg-secondary py-16 md:py-32 px-6 border-t border-sage/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
          
          <div className="flex items-center gap-2 text-sage mb-6 border border-sage/20 bg-sage/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest font-outfit rounded-full shadow-sm">
            <ShieldAlert className="w-4 h-4" />
            Limited wedding season slots available for 2025/2026
          </div>

          <h2 className="font-playfair text-charcoal text-3xl md:text-5xl font-medium mb-6 tracking-wide">
            Reserve Your Bridal Consultation
          </h2>
          <p className="text-cream font-outfit text-sm md:text-base max-w-xl mb-10 leading-relaxed font-light">
            Due to high demand, we recommend booking bridal trials at least 3-6 months prior to your wedding ceremonies. Speak to our coordinator.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <Button href="/booking?type=bridal" variant="primary">
              Book Consultation
            </Button>
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20Bridal%20Hair%20packages%20at%20Glossy%20Salon."
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage font-outfit text-sm tracking-widest uppercase font-semibold flex items-center gap-2 hover:text-sage-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              WhatsApp Bridal coordinator
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
