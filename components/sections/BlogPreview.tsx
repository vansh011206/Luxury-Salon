"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import BlogCard from "../ui/BlogCard";
import { blogPostsData } from "@/constants/blogPosts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogPreview() {
  const featuredPosts = blogPostsData.slice(0, 3);

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
    <section className="bg-primary py-16 md:py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <SectionHeading
          label="The Journal"
          title="From The Journal"
          subtitle="Explore styling insights, pollution protection guides, and seasonal trends curated by our team of master stylists."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-16"
        >
          {featuredPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <BlogCard
                id={post.id}
                title={post.title}
                category={post.category}
                date={post.date}
                excerpt={post.excerpt}
                readTime={post.readTime}
                author={post.author}
                imageUrl={post.imageUrl}
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
            href="/blog"
            className="text-sage font-outfit text-sm tracking-widest uppercase font-semibold flex items-center gap-2 hover:text-sage-dark transition-all duration-300 relative group/link pb-1"
          >
            Read The Journal
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-sage scale-x-100 group-hover/link:scale-x-110 transition-transform duration-300 origin-left" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
