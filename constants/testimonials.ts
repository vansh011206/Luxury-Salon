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
    imageUrl: "https://images.unsplash.com/photo-1562088287-bde35a1ea917?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "testimonial-2",
    name: "Riya Sen",
    quote: "Delhi's best luxury salon, hands down! Simran did absolute wonders with my hair transition. The team is extremely professional and the care is top-notch.",
    rating: 5,
    serviceTaken: "Balayage & Highlights",
    imageUrl: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "testimonial-3",
    name: "Shruti Bajaj",
    quote: "My wedding day hair was exactly what I had imagined, all thanks to Ananya! She is truly the master of bridal styling. The dedicated coordinator made everything stress-free.",
    rating: 5,
    serviceTaken: "Complete Bridal Package",
    imageUrl: "https://images.unsplash.com/photo-1620577821666-b33379cc7a7f?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "testimonial-4",
    name: "Natasha Roy",
    quote: "The Kérastase Luxury Hair Spa is an absolute must-try. Rhea's head massage is pure therapeutic bliss. If you're looking for luxury, this is your sanctuary.",
    rating: 5,
    serviceTaken: "Kérastase Luxury Hair Spa",
    imageUrl: "https://images.unsplash.com/photo-1635488641636-5d93d3957262?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "testimonial-5",
    name: "Aanya Kapoor",
    quote: "Professionalism at its best. Vanya gave me the perfect textured layers and styling with incredible precision. Truly a premium grooming experience.",
    rating: 5,
    serviceTaken: "Precision Haircut & Blow Dry",
    imageUrl: "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=200&auto=format&fit=crop"
  }
];
