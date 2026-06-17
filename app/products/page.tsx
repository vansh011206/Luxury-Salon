"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import ProductCard from "@/components/ui/ProductCard";
import Button from "@/components/ui/Button";
import { productsData } from "@/constants/products";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Truck, HelpCircle } from "lucide-react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ];

  const categories = ["All", "Shampoo", "Treatments", "Styling", "Tools", "Oils & Serums"];

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((prod) => prod.category === selectedCategory);

  return (
    <>
      <PageHeader
        title="Luxury Hair Care"
        subtitle="Curated collection for home care"
        breadcrumbs={breadcrumbs}
        backgroundImageUrl="https://images.unsplash.com/photo-1522337241531-97af78543a4e?q=80&w=1920&auto=format&fit=crop"
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

          {/* Products Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-24"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((prod) => (
                <motion.div
                  key={prod.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProductCard
                    name={prod.name}
                    brand={prod.brand}
                    description={prod.description}
                    price={prod.price}
                    imageUrl={prod.imageUrl}
                    badge={prod.badge}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-sage/10 pt-16 text-center max-w-5xl mx-auto">
            {/* Box 1 */}
            <div className="flex flex-col items-center p-6 bg-secondary border border-sage/10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <ShieldCheck className="w-8 h-8 text-sage mb-4 stroke-[1.2]" />
              <h4 className="text-charcoal font-playfair text-lg font-medium mb-2">In-Salon Boutique</h4>
              <p className="text-cream font-outfit text-xs leading-relaxed font-light">
                Visit our boutique at Greater Kailash 1, South Delhi to view the full range and consult with product specialists.
              </p>
            </div>

            {/* Box 2 */}
            <div className="flex flex-col items-center p-6 bg-secondary border border-sage/10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <Truck className="w-8 h-8 text-sage mb-4 stroke-[1.2]" />
              <h4 className="text-charcoal font-playfair text-lg font-medium mb-2">Free Local Delivery</h4>
              <p className="text-cream font-outfit text-xs leading-relaxed font-light">
                Enjoy complimentary delivery directly to your doorstep within Delhi NCR on all retail orders above ₹5,000.
              </p>
            </div>

            {/* Box 3 */}
            <div className="flex flex-col items-center p-6 bg-secondary border border-sage/10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <HelpCircle className="w-8 h-8 text-sage mb-4 stroke-[1.2]" />
              <h4 className="text-charcoal font-playfair text-lg font-medium mb-2">Need Help Choosing?</h4>
              <p className="text-cream font-outfit text-xs leading-relaxed font-light mb-4">
                Our stylists can evaluate your hair texture and recommend the perfect product routine for you.
              </p>
              <Button href="/booking" variant="ghost" className="text-[10px] text-sage hover:text-sage-dark font-semibold">
                Book Consultation
              </Button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
