"use client";

import { motion } from "framer-motion";
import { AlertCircle, Flame, Beef, Leaf } from "lucide-react";
import { menuCategories } from "../data/siteData";

const categoryIcons: Record<string, React.ReactNode> = {
  "Signature Dogs": <Flame size={20} className="text-ketchup" />,
  Sausages: <Beef size={20} className="text-mustard" />,
  Specialty: <Leaf size={20} className="text-pickle" />,
};

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wide uppercase bg-ketchup/10 text-ketchup rounded-full">
            The Menu
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal mb-4">
            Built Your Way. <span className="text-ketchup">Bold Every Bite.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Gourmet dogs and sausages loaded with flavor. Pick your base, pile on toppings, and make it yours.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid gap-8 md:grid-cols-3">
          {menuCategories.map((category, ci) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm shadow-black/5 overflow-hidden hover:shadow-md hover:shadow-black/10 transition-shadow"
            >
              <div className="px-6 py-5 border-b border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-bun flex items-center justify-center">
                  {categoryIcons[category.name]}
                </div>
                <h3 className="text-lg font-bold text-charcoal">
                  {category.name}
                </h3>
              </div>
              <div className="p-6 space-y-5">
                {category.items.map((item, ii) => (
                  <div key={ii}>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-charcoal">{item.name}</h4>
                    </div>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                    {item.note && (
                      <div className="mt-2 flex items-start gap-1.5">
                        <AlertCircle size={12} className="text-mustard mt-0.5 shrink-0" />
                        <span className="text-xs text-gray-400 italic">
                          {item.note}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Owner confirmation banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-5 bg-mustard/10 border border-mustard/20 rounded-xl flex items-start gap-3"
        >
          <AlertCircle size={20} className="text-mustard shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-charcoal">
              Menu Preview — Owner Confirmation Needed
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Menu items above are based on public research and historical mentions. Exact offerings, prices, and descriptions should be confirmed with the business owner before final publication.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
