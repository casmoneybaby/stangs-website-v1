"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { businessInfo } from "../data/siteData";

export default function Location() {
  return (
    <section id="visit" className="py-20 sm:py-28 bg-cream">
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
            Visit Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal mb-4">
            Find Stang&apos;s at <span className="text-ketchup">The Village</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Easy to find, hard to forget. Stop by for a quick bite in Corte Madera.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm shadow-black/5"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-ketchup/10 flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-ketchup" />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal mb-1">Address</h3>
                  <p className="text-gray-500">{businessInfo.address.full}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    {businessInfo.locationContext}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-mustard/10 flex items-center justify-center shrink-0">
                  <Phone size={22} className="text-mustard" />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal mb-1">Phone</h3>
                  <a
                    href={businessInfo.phoneLink}
                    className="text-gray-500 hover:text-ketchup transition-colors"
                  >
                    {businessInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-pickle/10 flex items-center justify-center shrink-0">
                  <Clock size={22} className="text-pickle" />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal mb-1">Hours</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Current hours are unverified. Please call ahead to confirm.
                  </p>
                  <div className="space-y-1.5">
                    {businessInfo.hours.map((h) => (
                      <div
                        key={h.day}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-gray-500">{h.day}</span>
                        <span className="text-gray-400 font-medium">
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a
              href={businessInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-2 w-full py-3.5 bg-ketchup hover:bg-ketchup-dark text-white font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Navigation size={18} />
              Get Directions
            </a>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm shadow-black/5 overflow-hidden h-full min-h-[400px]"
          >
            <iframe
              title="Stang's Location"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.0!2d-122.518!3d37.927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d0x0!2sStang's+Hot+Dogs+and+Sausages!5e0!3m2!1sen!2sus!4v1`}
              className="w-full h-full min-h-[400px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
