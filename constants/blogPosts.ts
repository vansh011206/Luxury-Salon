export interface BlogPost {
  id: string;
  title: string;
  category: "Hair Care" | "Bridal" | "Trends" | "Product Reviews" | "Tips & Tricks";
  date: string;
  excerpt: string;
  readTime: string;
  author: string;
  imageUrl: string;
}

export const blogPostsData: BlogPost[] = [
  {
    id: "pollution-hair-damage",
    title: "5 Ways Delhi's Pollution is Secretly Destroying Your Hair",
    category: "Hair Care",
    date: "December 15, 2024",
    excerpt: "Living in Delhi means your hair battles smog, particulate matter, and heavy dust daily. Here is what is really happening to your cuticles and how to shield them.",
    readTime: "5 min read",
    author: "Priya Sharma",
    imageUrl: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "bridal-hair-trends-2025",
    title: "2025 Bridal Hair Trends Every Delhi Bride Must Know",
    category: "Bridal",
    date: "January 5, 2025",
    excerpt: "From loose romantic editorial waves to structured updos intertwined with fresh jasmine, here are the wedding hairstyles dominating the Delhi bridal circuit this season.",
    readTime: "7 min read",
    author: "Ananya Kapoor",
    imageUrl: "https://images.unsplash.com/photo-1591551110830-680b40cd058e?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "balayage-vs-highlights",
    title: "Balayage vs Highlights: Which One is Right for You?",
    category: "Trends",
    date: "November 20, 2024",
    excerpt: "Both color techniques can completely transform your style, but they require very different maintenance. Our master colorist breaks down the technical differences.",
    readTime: "4 min read",
    author: "Simran Oberoi",
    imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "winter-hair-care-delhi",
    title: "The Ultimate Winter Hair Care Routine for Delhi Weather",
    category: "Hair Care",
    date: "December 1, 2024",
    excerpt: "Dry winter winds, smoggy days, and excessive indoor heating strip moisture fast. Adapt your shampoo and oiling routine with this winter haircare masterclass.",
    readTime: "6 min read",
    author: "Priya Sharma",
    imageUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "olaplex-science-explanation",
    title: "Why Olaplex Changed the Game for Colored Hair",
    category: "Product Reviews",
    date: "October 15, 2024",
    excerpt: "If you lighten or chemically treat your hair, molecular bond builders are non-negotiable. Learn how Olaplex repairs disulfide bonds during active bleaching.",
    readTime: "4 min read",
    author: "Simran Oberoi",
    imageUrl: "https://images.unsplash.com/photo-1522337241531-97af78543a4e?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "mens-hair-trends-2025",
    title: "Men's Hair Trends 2025: What's In and What's Out",
    category: "Trends",
    date: "January 10, 2025",
    excerpt: "From textured crops and low-taper fades to modern flow styles, here is what the stylish gentleman of South Delhi will be requesting in 2025.",
    readTime: "5 min read",
    author: "Vikram Seth",
    imageUrl: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=400&auto=format&fit=crop"
  }
];
