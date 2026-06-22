"use client";

import { motion } from "framer-motion";
import { Camera, ImageOff } from "lucide-react";

const placeholderItems = [
  { label: "Classic Dog", color: "bg-ketchup/10" },
  { label: "Chili Dog", color: "bg-mustard/10" },
  { label: "Polish Sausage", color: "bg-pickle/10" },
  { label: "Loaded Toppings", color: "bg-bun/50" },
  { label: "Outdoor Seating", color: "bg-ketchup/10" },
  { label: "The Village Vibes", color: "bg-mustard/10" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-bold tracking-wide uppercase bg-ketchup/10 text-ketchup rounded-full">
            <Camera size={14} />
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal mb-4">
            Feast Your <span className="text-ketchup">Eyes.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Real food photos coming soon. These placeholders show where owner-provided images will shine.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {placeholderItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className={`relative aspect-square rounded-2xl ${item.color} border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-3 overflow-hidden group`}
            >
              <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ImageOff size={24} className="text-gray-300" />
              </div>
              <span className="text-sm font-bold text-gray-400">{item.label}</span>
              <span className="text-xs text-gray-300">Photo placeholder</span>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-sm text-gray-400"
        >
          Official food photography should be provided by the owner for the live site.
        </motion.p>
      </div>
    </section>
  );
}
