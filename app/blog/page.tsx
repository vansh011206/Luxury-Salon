"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import BlogCard from "@/components/ui/BlogCard";
import { blogPostsData } from "@/constants/blogPosts";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Journal", path: "/blog" },
  ];

  const categories = ["All", "Hair Care", "Trends", "Bridal", "Product Reviews"];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPostsData
      : blogPostsData.filter((post) => post.category === selectedCategory);

  return (
    <>
      <PageHeader
        title="The Journal"
        subtitle="Insights & hair artistry secrets"
        breadcrumbs={breadcrumbs}
        backgroundImageUrl="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1920&auto=format&fit=crop"
      />

      <section className="bg-primary py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16 border-b border-sage/10 pb-8 overflow-x-auto w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-full cursor-pointer focus:outline-none whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-sage text-primary border border-sage shadow-sm"
                    : "bg-secondary text-cream border border-sage/10 hover:border-sage hover:text-sage"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          >
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
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
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
