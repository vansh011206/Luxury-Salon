"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import MembershipCard from "../ui/MembershipCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MembershipPreview() {
  const tiers = [
    {
      name: "Silver",
      price: "₹9,999",
      tier: "silver" as const,
      benefits: [
        "10% off on all services",
        "Priority booking",
        "Birthday: 1 complimentary blow dry",
        "Quarterly hair health consultation",
        "Welcome kit with mini luxury products",
        "Member-only newsletter with tips",
      ],
    },
    {
      name: "Gold",
      price: "₹19,999",
      tier: "gold" as const,
      badge: "Popular",
      benefits: [
        "20% off on all services",
        "Priority booking + no-wait guarantee",
        "Birthday: Complimentary luxury hair spa",
        "Monthly scalp analysis",
        "10% off on retail products",
        "1 free blow dry per month",
        "Invitation to member-only events",
      ],
    },
    {
      name: "Platinum Black",
      price: "₹39,999",
      tier: "platinum" as const,
      badge: "Ultimate",
      benefits: [
        "30% off on all services",
        "Dedicated personal stylist assigned",
        "Home service: 2 complimentary visits per year",
        "Birthday: Full luxury treatment of choice",
        "20% off on all retail products",
        "2 free blow drys per month",
        "VIP private lounge access",
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-secondary py-16 md:py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <SectionHeading
          label="The Club"
          title="The Luxe Circle"
          subtitle="Join an exclusive circle of clients who enjoy privileged access, priority bookings, and extraordinary savings at Glossy."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-16"
        >
          {tiers.map((tier, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <MembershipCard
                name={tier.name}
                price={tier.price}
                tier={tier.tier}
                benefits={tier.benefits}
                badge={tier.badge}
                compact={true}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/membership"
            className="text-sage font-outfit text-sm tracking-widest uppercase font-semibold flex items-center gap-2 hover:text-sage-dark transition-all duration-300 relative group/link pb-1"
          >
            Explore Membership Benefits
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-sage scale-x-100 group-hover/link:scale-x-110 transition-transform duration-300 origin-left" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
