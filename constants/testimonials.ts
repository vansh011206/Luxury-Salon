export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
  serviceTaken: string;
  imageUrl: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Meera Sen",
    quote: "Glossy is a class apart. Aria's coloring architecture and styling completely revamped my look. The ambiance is spectacular — it makes you feel like royalty.",
    rating: 5,
    serviceTaken: "Precision Haircut & Balayage",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "testimonial-2",
    name: "Riya Sen",
    quote: "Delhi's best luxury salon, hands down! Simran did absolute wonders with my hair transition. The team is extremely professional and the care is top-notch.",
    rating: 5,
    serviceTaken: "Balayage & Highlights",
    imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "testimonial-3",
    name: "Shruti Bajaj",
    quote: "My wedding day hair was exactly what I had imagined, all thanks to Ananya! She is truly the master of bridal styling. The dedicated coordinator made everything stress-free.",
    rating: 5,
    serviceTaken: "Complete Bridal Package",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "testimonial-4",
    name: "Natasha Roy",
    quote: "The Kérastase Luxury Hair Spa is an absolute must-try. Rhea's head massage is pure therapeutic bliss. If you're looking for luxury, this is your sanctuary.",
    rating: 5,
    serviceTaken: "Kérastase Luxury Hair Spa",
    imageUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "testimonial-5",
    name: "Aanya Kapoor",
    quote: "Professionalism at its best. Vanya gave me the perfect textured layers and styling with incredible precision. Truly a premium grooming experience.",
    rating: 5,
    serviceTaken: "Precision Haircut & Blow Dry",
    imageUrl: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?q=80&w=200&auto=format&fit=crop"
  }
];
