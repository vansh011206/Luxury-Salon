"use client";

import { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import { servicesData } from "@/constants/services";
import { motion } from "framer-motion";
import { Clock, Download } from "lucide-react";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState(servicesData[0].id);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ];

  const handleDownloadPDF = () => {
    alert("Downloading Glossy Salon Premium Menu (PDF)...");
  };

  return (
    <>
      <PageHeader
        title="Our Experiences"
        subtitle="Bespoke hair treatments & rituals"
        breadcrumbs={breadcrumbs}
        backgroundImageUrl="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="bg-primary py-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Quick-Jump Category Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-20 border-b border-sage/10 pb-8 overflow-x-auto">
            {servicesData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-3 text-xs tracking-widest uppercase font-semibold transition-all duration-300 rounded-full cursor-pointer focus:outline-none whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-sage text-primary border border-sage shadow-sm"
                    : "bg-secondary text-cream border border-sage/10 hover:border-sage hover:text-sage"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Active Category Display */}
          {servicesData.map((category) => {
            if (category.id !== activeCategory) return null;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="text-center mb-12">
                  <span className="text-sage font-outfit text-xs tracking-[0.25em] uppercase mb-3 block font-semibold">
                    Menu Category
                  </span>
                  <h2 className="text-charcoal font-playfair text-3xl md:text-5xl font-medium tracking-wide">
                    {category.title}
                  </h2>
                  <div className="w-16 h-[1px] bg-sage/30 mx-auto mt-6" />
                </div>

                {/* Category Feature Image Banner */}
                <div className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] rounded-2xl md:rounded-3xl overflow-hidden mb-16 shadow-md border border-sage/10">
                  <Image
                    src={category.imageUrl}
                    alt={category.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                </div>

                {/* Elegant Menu Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto">
                  {category.items.map((service) => (
                    <div
                      key={service.id}
                      className="border-b border-sage/10 pb-6 flex flex-col justify-between group hover:border-sage/20 transition-colors duration-300"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2 sm:gap-4 mb-2">
                        <h3 className="text-charcoal font-playfair text-xl font-medium group-hover:text-sage transition-colors duration-300">
                          {service.name}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="text-sage font-outfit font-semibold text-lg whitespace-nowrap">
                            {service.price}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-cream font-outfit text-sm mb-4 leading-relaxed font-light">
                        {service.description}
                      </p>

                      <div className="flex items-center justify-between mt-2">
                        {service.duration ? (
                          <span className="flex items-center gap-1.5 text-cream/70 font-outfit text-xs tracking-wider uppercase">
                            <Clock className="w-3.5 h-3.5 text-sage/60" />
                            {service.duration}
                          </span>
                        ) : (
                          <span className="text-cream/50 font-outfit text-xs italic">Consultation Required</span>
                        )}

                        <Button
                          href={`/booking?service=${encodeURIComponent(service.name)}`}
                          variant="ghost"
                          className="text-xs group/btn text-sage hover:text-sage-dark font-semibold"
                        >
                          Book This Experience
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Pricing notes & PDF downloads */}
          <div className="flex flex-col items-center gap-6 mt-24 border-t border-sage/10 pt-12 text-center">
            <p className="text-cream/70 font-outfit text-xs md:text-sm italic font-light max-w-xl leading-relaxed">
              * Note: Prices listed above are baseline starting charges. Actual service fees may vary depending on hair length, density, texture complexity, and specific stylist seniority tier selected.
            </p>
            
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 border border-sage/40 hover:border-sage text-sage hover:bg-sage hover:text-primary px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-full cursor-pointer focus:outline-none"
            >
              <Download className="w-4 h-4" />
              Download Price Menu (PDF)
            </button>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-secondary py-16 md:py-32 px-6 text-center border-t border-sage/10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-sage font-outfit text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
            Bespoke Session
          </span>
          <h2 className="font-playfair text-charcoal text-3xl md:text-5xl font-medium mb-6 tracking-wide">
            Book Your Glossy Experience
          </h2>
          <p className="text-cream font-outfit text-sm md:text-base max-w-lg mb-10 leading-relaxed font-light">
            Indulge in tailored care from our expert designers. Let us reshape your hair story with the care it deserves.
          </p>
          <Button href="/booking" variant="primary">
            Reserve Your Slot Now
          </Button>
        </div>
      </section>
    </>
  );
}
