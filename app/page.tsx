import Hero from "@/components/sections/Hero";
import Welcome from "@/components/sections/Welcome";
import FeaturedServices from "@/components/sections/FeaturedServices";
import AboutPreview from "@/components/sections/AboutPreview";
import BridalPreview from "@/components/sections/BridalPreview";
import TeamPreview from "@/components/sections/TeamPreview";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Testimonials from "@/components/sections/Testimonials";
import MembershipPreview from "@/components/sections/MembershipPreview";
import BlogPreview from "@/components/sections/BlogPreview";
import BookingCTA from "@/components/sections/BookingCTA";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <FeaturedServices />
      <AboutPreview />
      <BridalPreview />
      <TeamPreview />
      <GalleryPreview />
      <Testimonials />
      <MembershipPreview />
      <BlogPreview />
      <BookingCTA />
      <Newsletter />
    </>
  );
}
