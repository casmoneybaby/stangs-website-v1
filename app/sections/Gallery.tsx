"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";


const galleryImages = [
  {
    src: "/images/hotdog-1.jpg",
    alt: "Gourmet hot dog with fresh toppings",
    label: "Classic Dog",
  },
  {
    src: "/images/hotdog-2.jpg",
    alt: "Grilled hot dog close up",
    label: "Grilled Perfection",
  },
  {
    src: "/images/sausage-1.jpg",
    alt: "Grilled sausage platter",
    label: "Polish Sausage",
  },
  {
    src: "/images/chili-dog.jpg",
    alt: "Chili cheese hot dog",
    label: "Chili Dog",
  },
  {
    src: "/images/toppings.jpg",
    alt: "Hot dog loaded with toppings",
    label: "Loaded Up",
  },
  {
    src: "/images/outdoor.jpg",
    alt: "Outdoor dining patio atmosphere",
    label: "Outdoor Vibes",
  },
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
            Bold flavors, fresh builds, and that perfect snap. See what is waiting for you at The Village.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm shadow-black/10 hover:shadow-xl hover:shadow-black/20 transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-bold text-sm drop-shadow-md">
                  {item.label}
                </span>
              </div>
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
          Stock photography used for preview. Replace with official Stang&apos;s photos before publishing.
        </motion.p>
      </div>
    </section>
  );
}
