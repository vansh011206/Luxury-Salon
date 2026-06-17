export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: string;
  duration?: string;
  isPopular?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  iconName: string; // Lucide icon component name as a string
  imageUrl: string;
  items: ServiceItem[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: "hair-cutting-styling",
    title: "Hair Cutting & Styling",
    iconName: "Scissors",
    imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop",
    items: [
      {
        id: "women-cut",
        name: "Women's Precision Haircut",
        description: "Bespoke hair shaping, custom texture work, wash and blow-dry by master stylists.",
        price: "₹2,500",
        duration: "45 mins",
        isPopular: true
      },
      {
        id: "men-cut",
        name: "Men's Haircut & Styling",
        description: "Precision cut, styling, hair wash, and grooming tailored to your style.",
        price: "₹1,500",
        duration: "30 mins"
      },
      {
        id: "kids-cut",
        name: "Kids Haircut (Under 12)",
        description: "Gentle styling and cutting experience for our youngest VIPs.",
        price: "₹800",
        duration: "20 mins"
      },
      {
        id: "blow-dry",
        name: "Blow Dry & Styling",
        description: "Voluminous blowouts, sleek straight styles, or luxury bouncy curls.",
        price: "₹1,500",
        duration: "40 mins"
      },
      {
        id: "special-styling",
        name: "Special Occasion Styling",
        description: "Glamorous updos, editorially styled waves, or premium party styling.",
        price: "₹3,500",
        duration: "60 mins"
      },
      {
        id: "extensions-consult",
        name: "Hair Extensions Consultation",
        description: "Personalized assessment of hair health, length goals, and volume requirements.",
        price: "Complimentary"
      }
    ]
  },
  {
    id: "hair-coloring",
    title: "Hair Coloring",
    iconName: "Palette",
    imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    items: [
      {
        id: "global-color",
        name: "Global Hair Color",
        description: "Seamless single-tone application for full coverage and high-shine finishes.",
        price: "From ₹5,000",
        duration: "90 mins"
      },
      {
        id: "highlights",
        name: "Highlights / Lowlights",
        description: "Multi-dimensional foil highlights adding depth, brightness, or warm sun-kissed tones.",
        price: "From ₹6,000",
        duration: "120 mins"
      },
      {
        id: "balayage",
        name: "Balayage / Ombre",
        description: "Hand-painted, custom French balayage for natural, lived-in luxury gradients.",
        price: "From ₹8,000",
        duration: "150 mins",
        isPopular: true
      },
      {
        id: "fashion-color",
        name: "Fantasy / Fashion Colors",
        description: "Vibrant, creative coloring services using premium bold pigment brands.",
        price: "From ₹7,000",
        duration: "120 mins"
      },
      {
        id: "root-touchup",
        name: "Root Touch-Up",
        description: "Precision regrowth color matching for gray coverage and root blending.",
        price: "From ₹3,000",
        duration: "60 mins"
      },
      {
        id: "color-correction",
        name: "Color Correction",
        description: "Advanced tone adjustments and color reversal procedures following personal assessment.",
        price: "On Consultation",
        duration: "varies"
      }
    ]
  },
  {
    id: "hair-treatments",
    title: "Hair Treatments",
    iconName: "Sparkles",
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    items: [
      {
        id: "luxury-spa",
        name: "Luxury Hair Spa (Kérastase)",
        description: "Ultra-restorative hair bath, intense massage, and personalized scalp/hair mask therapy.",
        price: "₹3,000",
        duration: "60 mins",
        isPopular: true
      },
      {
        id: "olaplex",
        name: "Olaplex Bond Repair Treatment",
        description: "Patented active-chemistry molecular bond repair to rebuild highly damaged tresses.",
        price: "₹4,500",
        duration: "75 mins"
      },
      {
        id: "fusio-dose",
        name: "Kérastase Fusio-Dose",
        description: "Instant, customized transformation booster vials targeting multiple hair concerns.",
        price: "₹3,500",
        duration: "45 mins"
      },
      {
        id: "deep-cond",
        name: "Deep Conditioning Mask",
        description: "Moisture-replenishing mask treatment sealed with warm micro-steam technology.",
        price: "₹2,500",
        duration: "45 mins"
      },
      {
        id: "hair-botox",
        name: "Hair Botox Treatment",
        description: "Anti-aging, deeply hydrating molecular treatment that seals fibers and adds brilliant gloss.",
        price: "₹6,000",
        duration: "90 mins"
      }
    ]
  },
  {
    id: "smoothening-texture",
    title: "Smoothening & Texture",
    iconName: "Wind",
    imageUrl: "https://images.unsplash.com/photo-1605497746444-ac9dbd324ce8?q=80&w=1200&auto=format&fit=crop",
    items: [
      {
        id: "keratin",
        name: "Keratin Treatment",
        description: "Deep infusing protein treatment to eliminate frizz, seal cuticles, and smooth curl patterns.",
        price: "From ₹8,000",
        duration: "180 mins",
        isPopular: true
      },
      {
        id: "japanese-straighten",
        name: "Japanese Straightening",
        description: "Thermal reconditioning process for pin-straight, glossy, and permanent structural styling.",
        price: "From ₹12,000",
        duration: "240 mins"
      },
      {
        id: "cysteine",
        name: "Cysteine Treatment",
        description: "Formaldehyde-free protein smoothing treatment ideal for curl softening and high definition.",
        price: "From ₹10,000",
        duration: "180 mins"
      },
      {
        id: "anti-frizz",
        name: "Anti-Frizz Treatment",
        description: "Quick texture control treatment to retain curls while completely removing frizz.",
        price: "From ₹5,000",
        duration: "90 mins"
      }
    ]
  },
  {
    id: "scalp-hair-health",
    title: "Scalp & Hair Health",
    iconName: "Activity",
    imageUrl: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1200&auto=format&fit=crop",
    items: [
      {
        id: "scalp-analysis",
        name: "Scalp Analysis & Consultation",
        description: "Trichological high-magnification camera analysis to inspect hair follicle vitality.",
        price: "₹1,000",
        duration: "30 mins"
      },
      {
        id: "anti-hairfall",
        name: "Anti-Hair Fall Treatment",
        description: "Intense scalp micro-circulation stimulation, laser therapy, and aminexil serum application.",
        price: "₹4,000",
        duration: "60 mins"
      },
      {
        id: "anti-dandruff",
        name: "Anti-Dandruff Treatment",
        description: "Clarifying salicylic peel, soothing scalp mask, and antimicrobial tea tree infusions.",
        price: "₹3,500",
        duration: "60 mins"
      },
      {
        id: "scalp-detox",
        name: "Scalp Detox Treatment",
        description: "Exfoliating charcoal scalp scrub, ozone steam, and pH balancing vitamin toner.",
        price: "₹3,000",
        duration: "45 mins"
      },
      {
        id: "prp-consult",
        name: "PRP Preparation Consultation",
        description: "Guidance on clinical scalp therapy integration and customized post-care programs.",
        price: "Complimentary"
      }
    ]
  },
  {
    id: "hair-extensions",
    title: "Hair Extensions",
    iconName: "Layers",
    imageUrl: "https://images.unsplash.com/photo-1632345031435-8797b2d58045?q=80&w=1200&auto=format&fit=crop",
    items: [
      {
        id: "tape-in",
        name: "Tape-In Extensions",
        description: "Premium 100% Remy human hair extensions that lie completely flat for seamless volume.",
        price: "From ₹15,000"
      },
      {
        id: "clip-in",
        name: "Clip-In Extensions",
        description: "Custom-colored, high-grade temporary hair tracks for instant events and styling.",
        price: "From ₹8,000"
      },
      {
        id: "micro-link",
        name: "Micro-Link Extensions",
        description: "Strand-by-strand cold fusion installation without using adhesive, heat, or chemicals.",
        price: "From ₹20,000"
      },
      {
        id: "ext-maintenance",
        name: "Extension Maintenance",
        description: "Professional extension removal, retaping, repositioning, and deep conditioning care.",
        price: "From ₹3,000"
      }
    ]
  },
  {
    id: "mens-grooming",
    title: "Men's Grooming",
    iconName: "Crown",
    imageUrl: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop",
    items: [
      {
        id: "men-classic",
        name: "Classic Haircut",
        description: "Signature scissor or clipper cut, hot towel wash, scalp massage, and styling.",
        price: "₹1,500",
        duration: "30 mins"
      },
      {
        id: "beard-sculpt",
        name: "Beard Sculpting & Grooming",
        description: "Detailed line work, clipper fading, beard oil infusion, and shaping.",
        price: "₹1,200",
        duration: "30 mins"
      },
      {
        id: "hot-shave",
        name: "Hot Towel Shave",
        description: "Traditional straight razor wet shave with pre-shave oil, hot towels, and cooling balms.",
        price: "₹800",
        duration: "20 mins"
      },
      {
        id: "men-color",
        name: "Men's Hair Color",
        description: "Natural gray blending or global fashion color application for men.",
        price: "From ₹2,500",
        duration: "60 mins"
      },
      {
        id: "men-scalp",
        name: "Scalp Treatment for Men",
        description: "Exfoliating hair growth stimulation treatment with a relaxing neck massage.",
        price: "₹3,000",
        duration: "45 mins"
      },
      {
        id: "gentleman-package",
        name: "The Gentleman's Package",
        description: "Full service styling combo: Classic Cut + Beard Sculpting + Express Botanical Facial.",
        price: "₹4,000",
        duration: "90 mins",
        isPopular: true
      }
    ]
  }
];
