"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, UtensilsCrossed } from "lucide-react";
import { ctaData, businessInfo } from "../data/siteData";

export default function CTA() {
  return (
    <section className="py-20 sm:py-28 bg-ketchup relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-mustard/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            {ctaData.headline}
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl mx-auto">
            {ctaData.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={businessInfo.phoneLink}
              className="flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-ketchup font-bold text-base rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              <Phone size={18} />
              Call Now
            </a>
            <a
              href={businessInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-ketchup-dark hover:bg-ketchup-dark/80 text-white font-bold text-base rounded-full transition-all hover:scale-105 active:scale-95 border border-white/20"
            >
              <MapPin size={18} />
              Get Directions
            </a>
            <a
              href="#menu"
              className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-bold text-base rounded-full transition-all hover:scale-105 active:scale-95"
            >
              <UtensilsCrossed size={18} />
              View Menu
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
