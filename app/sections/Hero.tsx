"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, ChevronDown } from "lucide-react";
import { heroData, businessInfo } from "../data/siteData";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-ketchup-dark/30" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-ketchup/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-mustard/10 rounded-full blur-3xl" />

      {/* Grill line texture */}
      <div className="absolute inset-0 opacity-[0.03] grill-texture" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center pt-20 pb-32">
        {/* Steam animation */}
        <div className="flex justify-center gap-3 mb-6">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-8 bg-white/20 rounded-full steam-particle"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/10"
        >
          <MapPin size={14} className="text-mustard" />
          <span className="text-sm font-semibold text-white/90">
            The Village at Corte Madera
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6"
        >
          Gourmet Dogs.{" "}
          <span className="text-mustard">Serious Sausage Snap.</span>{" "}
          Built Fresh in Corte Madera.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {heroData.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={businessInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-ketchup hover:bg-ketchup-dark text-white font-bold text-base rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-ketchup/30"
          >
            <MapPin size={18} />
            Get Directions
          </a>
          <a
            href={businessInfo.phoneLink}
            className="group flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-charcoal font-bold text-base rounded-full transition-all hover:scale-105 active:scale-95"
          >
            <Phone size={18} />
            Call Stang&apos;s
          </a>
          <a
            href="#menu"
            className="group flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-bold text-base rounded-full transition-all hover:scale-105 active:scale-95"
          >
            Explore Menu
          </a>
        </motion.div>

        {/* Phone number display */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-white/50 text-sm"
        >
          {businessInfo.phone}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs font-medium uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
