"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { reviewThemes } from "../data/siteData";

export default function Reviews() {
  return (
    <section className="py-20 sm:py-28 bg-charcoal relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-ketchup/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-mustard/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wide uppercase bg-white/10 text-mustard rounded-full">
            What People Say
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Local <span className="text-mustard">Love</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Themes from public mentions and reviews over the years.
          </p>
        </motion.div>

        {/* Review Theme Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewThemes.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, si) => (
                  <Star
                    key={si}
                    size={16}
                    className="text-mustard fill-mustard"
                  />
                ))}
              </div>
              <div className="relative">
                <Quote
                  size={24}
                  className="absolute -top-1 -left-1 text-ketchup/30"
                />
                <p className="text-white/90 font-medium leading-relaxed pl-6">
                  {review.theme}
                </p>
              </div>
              <p className="mt-4 text-xs text-white/30 uppercase tracking-wider font-semibold">
                {review.source}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
