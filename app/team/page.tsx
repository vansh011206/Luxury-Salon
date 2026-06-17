"use client";

import PageHeader from "@/components/ui/PageHeader";
import TeamCard from "@/components/ui/TeamCard";
import { teamData } from "@/constants/team";
import { motion } from "framer-motion";

export default function TeamPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Our Artists", path: "/team" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <PageHeader
        title="The Artists"
        subtitle="Delhi's finest hair innovators"
        breadcrumbs={breadcrumbs}
        backgroundImageUrl="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="bg-primary py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center mb-20 max-w-2xl">
            <span className="text-sage font-outfit text-xs tracking-[0.25em] uppercase mb-4 block font-semibold">
              The Creative Team
            </span>
            <h2 className="text-charcoal font-playfair text-3xl md:text-5xl font-medium mb-6 tracking-wide">
              The Hands Behind the Art
            </h2>
            <p className="text-cream font-outfit text-sm md:text-base leading-relaxed font-light">
              Our master stylists and colorists are industry veterans trained in global capitals. With an eye for custom structure and individual beauty, they design styling experiences that elevate.
            </p>
            <div className="w-16 h-[1px] bg-sage/30 mx-auto mt-6" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          >
            {teamData.map((member) => (
              <motion.div key={member.id} variants={itemVariants}>
                <TeamCard
                  name={member.name}
                  role={member.role}
                  experience={member.experience}
                  training={member.training}
                  specialization={member.specialization}
                  imageUrl={member.imageUrl}
                  instagram={member.instagram}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
