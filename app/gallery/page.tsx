"use client";

import { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Instagram } from "lucide-react";

interface GalleryItem {
  id: number;
  url: string;
  category: "Hair Color" | "Haircuts" | "Bridal" | "Men's" | "Styling" | "Transformations";
  title: string;
  description: string;
}

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [lightboxImg, setLightboxImg] = useState<GalleryItem | null>(null);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
  ];

  const filters = ["All", "Hair Color", "Haircuts", "Bridal", "Men's", "Styling", "Transformations"];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop",
      category: "Hair Color",
      title: "French Balayage Blend",
      description: "Seamless custom caramel balayage transition styled with bouncy waves.",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1618677603286-0ec5629f412d?q=80&w=600&auto=format&fit=crop",
      category: "Haircuts",
      title: "Precision Blunt Lob",
      description: "Sharp structural bob shape cut with detailed texturizing at the ends.",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1591551110830-680b40cd058e?q=80&w=600&auto=format&fit=crop",
      category: "Bridal",
      title: "Traditional Royal Updo",
      description: "Structured high bun adorned with fresh floral accessories and veil pinning.",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop",
      category: "Men's",
      title: "Taper Fade Crop",
      description: "Detailed clipper fade grooming paired with a texturized top crop.",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=600&auto=format&fit=crop",
      category: "Styling",
      title: "Kérastase Spa Ritual",
      description: "Relaxing structural scalp massage and clarifying treatment wash.",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600&auto=format&fit=crop",
      category: "Bridal",
      title: "Editorial Romantic Braid",
      description: "Loose, voluminous fishtail braid details woven with pearl accents.",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=600&auto=format&fit=crop",
      category: "Men's",
      title: "Classic Pompadour Contour",
      description: "Scissor-cut pompadour styling paired with a sculpted clean beard line.",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=600&auto=format&fit=crop",
      category: "Styling",
      title: "Editorial Satin Waves",
      description: "Smooth, high-shine blowout styled with luxury round brush curls.",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop",
      category: "Haircuts",
      title: "Shag Layers & Bangs",
      description: "Modern textured layered cut incorporating curtain bangs.",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1608248597481-496100c8c836?q=80&w=600&auto=format&fit=crop",
      category: "Hair Color",
      title: "Copper Gloss Glaze",
      description: "Radiant, high-gloss warm copper global color glaze treatment.",
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop",
      category: "Transformations",
      title: "Deep Brass to Platinum Color Correction",
      description: "Severe color correction removing brassiness, resulting in clean cool platinum.",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?q=80&w=600&auto=format&fit=crop",
      category: "Transformations",
      title: "18-Inch Tape-in Extension Integration",
      description: "Extension installation adding double density and custom length blending.",
    },
  ];

  const beforeAfters = [
    {
      label: "Keratin Smooth Treatment",
      before: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?q=80&w=300&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=300&auto=format&fit=crop",
      desc: "Eliminated dry frizz and sealed cuticles for a smooth, high-gloss reflective finish.",
    },
    {
      label: "Bespoke Balayage Coloring",
      before: "https://images.unsplash.com/photo-1595959183075-c1d40955a1e1?q=80&w=300&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=300&auto=format&fit=crop",
      desc: "Transformed flat, single-tone dark hair with soft honey hand-painted sweeps.",
    },
    {
      label: "Classic Gentleman Makeover",
      before: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=300&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=300&auto=format&fit=crop",
      desc: "Shaped long overgrown locks into a clean, structured taper fade and beard contour.",
    },
    {
      label: "Deep Conditioning Spa Revital",
      before: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=300&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=300&auto=format&fit=crop",
      desc: "Restored strength to chemically parched strands via L'Oréal steam-bond masking.",
    },
  ];

  const instagramImages = [
    "https://images.unsplash.com/photo-1522337094133-f37f5172a53e?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1591551110830-680b40cd058e?q=80&w=300&auto=format&fit=crop",
  ];

  const filteredItems =
    selectedFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedFilter);

  return (
    <>
      <PageHeader
        title="Our Portfolio"
        subtitle="Visual archive of hair art"
        breadcrumbs={breadcrumbs}
        backgroundImageUrl="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1920&auto=format&fit=crop"
      />

      {/* FILTERABLE GALLERY */}
      <section className="bg-primary py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16 border-b border-sage/10 pb-8 overflow-x-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-full cursor-pointer focus:outline-none whitespace-nowrap ${
                  selectedFilter === filter
                    ? "bg-sage text-primary border border-sage shadow-sm"
                    : "bg-secondary text-cream border border-sage/10 hover:border-sage hover:text-sage"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightboxImg(item)}
                  className="relative aspect-square overflow-hidden group border border-sage/10 rounded-2xl cursor-pointer bg-secondary shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-90"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-gold font-outfit text-[10px] tracking-widest uppercase font-semibold mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-white font-playfair text-xl font-medium flex items-center justify-between">
                      {item.title}
                      <Plus className="w-5 h-5 text-gold flex-shrink-0" />
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* BEFORE AFTER TRANSFORMATIONS */}
      <section className="bg-secondary py-24 md:py-32 px-6 border-t border-b border-sage/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Transformations"
            title="The Before & After Journey"
            subtitle="Proof of styling. Slide comparisons demonstrating color corrections, extensions, and texture restoration."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {beforeAfters.map((ba, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-secondary border border-sage/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-charcoal font-playfair text-xl mb-2 font-medium tracking-wide">
                  {ba.label}
                </h3>
                <p className="text-cream font-outfit text-xs mb-6 font-light">
                  {ba.desc}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {/* Before */}
                  <div className="relative aspect-[3/4] overflow-hidden border border-sage/15 rounded-xl">
                    <Image
                      src={ba.before}
                      alt="Before hair treatment"
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                    <span className="absolute bottom-3 left-3 bg-charcoal/80 text-primary text-[9px] uppercase tracking-wider px-2 py-0.5 font-semibold rounded-md">
                      Before
                    </span>
                  </div>
                  {/* After */}
                  <div className="relative aspect-[3/4] overflow-hidden border border-sage/25 rounded-xl">
                    <Image
                      src={ba.after}
                      alt="After hair treatment"
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                    <span className="absolute bottom-3 left-3 bg-sage text-primary text-[9px] uppercase tracking-widest px-2 py-0.5 font-bold rounded-md">
                      After
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM SECTION */}
      <section className="bg-primary py-24 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Socials"
            title="Daily Inspiration"
          />
          <p className="text-cream font-outfit text-sm mb-8 -mt-6">
            Follow <span className="text-sage font-semibold">@GlossySalon</span> on Instagram for daily transformations, tips, and behind-the-scenes clips.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {instagramImages.map((url, idx) => (
              <div key={idx} className="relative aspect-square overflow-hidden border border-sage/10 group rounded-xl shadow-sm">
                <Image
                  src={url}
                  alt={`Instagram thumbnail ${idx + 1}`}
                  fill
                  sizes="200px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-95"
                />
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-charcoal/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white"
                >
                  <Instagram className="w-6 h-6 text-gold-light" />
                </a>
              </div>
            ))}
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-sage text-sage hover:bg-sage hover:text-primary px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-colors duration-300 rounded-full cursor-pointer shadow-sm hover:shadow-md"
          >
            <Instagram className="w-4 h-4" />
            Follow @GlossySalon
          </a>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-6 cursor-zoom-out"
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-6 right-6 text-cream hover:text-sage transition-colors duration-300 cursor-pointer"
              aria-label="Close image preview"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[70vh] sm:max-h-[80vh] aspect-square w-full"
            >
              <Image
                src={lightboxImg.url}
                alt={lightboxImg.title}
                fill
                className="object-contain"
              />
              <div className="absolute -bottom-12 sm:-bottom-16 left-0 right-0 text-center text-white p-3 sm:p-4">
                <h4 className="font-playfair text-xl text-gold-light">{lightboxImg.title}</h4>
                <p className="font-outfit text-xs text-primary/80 mt-1">{lightboxImg.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
