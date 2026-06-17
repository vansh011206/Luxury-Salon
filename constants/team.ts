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
    imageUrl: "/images/team/aria_khanna.png"
  },
  {
    id: "kabir-malhotra",
    name: "Kabir Malhotra",
    role: "Master Barber & Grooming Expert",
    experience: "11 Years",
    training: "Toni & Guy Academy London",
    specialization: ["Precision Fades", "Beard Sculpting", "Classic Cuts"],
    bio: "Kabir's mastery of the razor and scissor has made him a household name among Delhi's elite gentlemen seeking impeccable fades and tailored grooming.",
    instagram: "kabir.glossy",
    imageUrl: "/images/team/kabir_malhotra.png"
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
    imageUrl: "/images/team/simran_oberoi.png"
  },
  {
    id: "rohan-verma",
    name: "Rohan Verma",
    role: "Senior Stylist & Grooming Expert",
    experience: "8 Years",
    training: "L'Oréal Academy Mumbai",
    specialization: ["Modern Shag", "Textured Crops", "Lived-in Shaves"],
    bio: "Rohan brings a modern, urban aesthetic to men's hair styling. He excels at texture and creating cuts that look effortlessly stylish.",
    instagram: "rohan.glossy",
    imageUrl: "/images/team/rohan_verma.png"
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
    imageUrl: "/images/team/priya_sharma.png"
  },
  {
    id: "arjun-mehta",
    name: "Arjun Mehta",
    role: "Texture & Creative Stylist",
    experience: "10 Years",
    training: "Vidal Sassoon Salon Series",
    specialization: ["Creative Cuts", "Keratin Treatment", "Hair Design"],
    bio: "Arjun is a magician with scissors. He combines architectural precision with fluid motion to craft custom hairstyles for modern tastes.",
    instagram: "arjun.glossy",
    imageUrl: "/images/team/arjun_mehta.png"
  }
];
