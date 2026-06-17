export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  training: string;
  specialization: string[];
  certifications?: string[];
  bio: string;
  instagram: string;
  imageUrl: string;
}

export const teamData: TeamMember[] = [
  {
    id: "aria-khanna",
    name: "Aria Khanna",
    role: "Creative Director & Founder",
    experience: "14 Years",
    training: "L'Oréal Academy Paris, Vidal Sassoon London",
    specialization: ["Creative Cuts", "Color Architecture", "Celebrity Styling"],
    certifications: ["L'Oréal Color Specialist", "Schwarzkopf Master Colorist"],
    bio: "Aria's visionary cuts and coloring techniques have set new benchmarks in Delhi's high-fashion circles. Trusted by Bollywood's finest and elite patrons alike.",
    instagram: "aria.glossy",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "simran-oberoi",
    name: "Simran Oberoi",
    role: "Senior Colorist",
    experience: "10 Years",
    training: "Schwarzkopf Academy Berlin",
    specialization: ["Balayage", "Lived-in Color", "Fashion Colors", "Color Correction"],
    bio: "Hailed as 'the color queen of Delhi,' Simran specializes in customized balayage that grows out seamlessly, matching her clients' personalities and styles.",
    instagram: "simran.glossy",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "vanya-seth",
    name: "Vanya Seth",
    role: "Master Stylist",
    experience: "12 Years",
    training: "Toni & Guy Academy London",
    specialization: ["Precision Cuts", "Textured Styles", "Editorial Styling"],
    bio: "Vanya delivers razor-sharp cuts, architectural shapes, and impeccable styling services that keep clients feeling fresh, modern, and confident.",
    instagram: "vanya.glossy",
    imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "ananya-kapoor",
    name: "Ananya Kapoor",
    role: "Bridal Specialist",
    experience: "8 Years",
    training: "Schwarzkopf Academy Mumbai & International Bridal Masterclasses",
    specialization: ["Bridal Styling", "Occasion Hair", "Hair Accessories"],
    bio: "With over 1,500 brides transformed, Ananya is the designer of dream wedding tresses. She combines traditional elegance with modern editorial glamour.",
    instagram: "ananya.glossy",
    imageUrl: "https://images.unsplash.com/photo-1618151313441-bc79b11e5090?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "rhea-malhotra",
    name: "Rhea Malhotra",
    role: "Texture & Extension Expert",
    experience: "7 Years",
    training: "Great Lengths Academy, Kérastase Institute",
    specialization: ["Keratin & Smoothening", "Hair Extensions", "Hair Botox"],
    bio: "Rhea's expertise lies in completely transforming hair texture. Whether adding stunning volume with micro-links or restoring shine, her precision is unmatched.",
    instagram: "rhea.glossy",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Scalp & Hair Health Expert",
    experience: "9 Years",
    training: "Certified Trichologist",
    specialization: ["Hair Fall Solutions", "Scalp Disorders", "PRP Consultation", "Holistic Hair Care"],
    bio: "Priya combines scientific trichological analysis with holistic wellness to treat hair and scalp conditions from the root, reviving overall hair health.",
    instagram: "priya.glossy",
    imageUrl: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=600&auto=format&fit=crop"
  }
];
