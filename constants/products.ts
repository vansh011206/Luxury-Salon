export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: string;
  imageUrl: string;
  badge?: "Staff Pick" | "Bestseller" | "As Used in Salon" | "Premium";
  category: "Shampoo" | "Conditioner" | "Treatments" | "Styling" | "Tools" | "Oils & Serums";
}

export const productsData: Product[] = [
  {
    id: "oribe-shampoo",
    name: "Gold Lust Repair & Restore Shampoo",
    brand: "Oribe",
    description: "Rejuvenating cleanser that balances the scalp and reinforces the inner strength of each strand.",
    price: "₹4,500",
    imageUrl: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=400&auto=format&fit=crop",
    badge: "As Used in Salon",
    category: "Shampoo"
  },
  {
    id: "kerastase-oil",
    name: "Elixir Ultime Original Hair Oil",
    brand: "Kérastase",
    description: "Multi-use hair oil containing marula oil that provides heat protection and high gloss shine.",
    price: "₹3,800",
    imageUrl: "https://images.unsplash.com/photo-1608248597481-496100c8c836?q=80&w=400&auto=format&fit=crop",
    badge: "Bestseller",
    category: "Oils & Serums"
  },
  {
    id: "moroccanoil-treatment",
    name: "Moroccanoil Treatment Original",
    brand: "Moroccanoil",
    description: "Argan oil-infused styling base that conditions, detangles, and speeds up blow-drying time.",
    price: "₹3,200",
    imageUrl: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=400&auto=format&fit=crop",
    category: "Oils & Serums"
  },
  {
    id: "olaplex-no3",
    name: "No.3 Hair Perfector",
    brand: "Olaplex",
    description: "At-home weekly treatment that repairs hair bonds and significantly reduces breakage.",
    price: "₹2,800",
    imageUrl: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=400&auto=format&fit=crop",
    badge: "Bestseller",
    category: "Treatments"
  },
  {
    id: "r-co-dry-shampoo",
    name: "Death Valley Dry Shampoo",
    brand: "R+Co",
    description: "The quickest way to add volume, texture, and absorb excess oil without leaving residue.",
    price: "₹2,500",
    imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=400&auto=format&fit=crop",
    category: "Styling"
  },
  {
    id: "kerastase-masque",
    name: "Resistance Masque Force Architecte",
    brand: "Kérastase",
    description: "Deeply reconstructing mask designed for brittle, damaged hair with split ends.",
    price: "₹3,500",
    imageUrl: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=400&auto=format&fit=crop",
    badge: "As Used in Salon",
    category: "Treatments"
  },
  {
    id: "ghd-styler",
    name: "Platinum+ Professional Styler",
    brand: "GHD",
    description: "Smart straightener that predicts your hair's needs and monitors heat styling constantly.",
    price: "₹28,500",
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=400&auto=format&fit=crop",
    badge: "Staff Pick",
    category: "Tools"
  },
  {
    id: "dyson-dryer",
    name: "Supersonic Hair Dryer",
    brand: "Dyson",
    description: "Fast-drying professional dryer with intelligent heat control to preserve natural shine.",
    price: "₹36,900",
    imageUrl: "https://images.unsplash.com/photo-1585751119414-ef2636f8aedf?q=80&w=400&auto=format&fit=crop",
    badge: "Premium",
    category: "Tools"
  }
];
