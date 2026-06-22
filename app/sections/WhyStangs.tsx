"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Sun,
  Flame,
  Leaf,
  ShoppingBag,
  MapPin,
} from "lucide-react";
import { whyCards } from "../data/siteData";

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap size={22} className="text-ketchup" />,
  Sun: <Sun size={22} className="text-mustard" />,
  Flame: <Flame size={22} className="text-ketchup" />,
  Leaf: <Leaf size={22} className="text-pickle" />,
  ShoppingBag: <ShoppingBag size={22} className="text-mustard" />,
  MapPin: <MapPin size={22} className="text-pickle" />,
};

export default function WhyStangs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-bun/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wide uppercase bg-pickle/10 text-pickle rounded-full">
            Why Stang&apos;s
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal mb-4">
            More Than a <span className="text-ketchup">Hot Dog.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Here is why locals keep coming back to Stang&apos;s at The Village.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm shadow-black/5 hover:shadow-md hover:shadow-black/10 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-bun flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {iconMap[card.icon]}
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
