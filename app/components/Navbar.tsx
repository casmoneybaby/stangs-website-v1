"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, businessInfo } from "../data/siteData";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span
                className={cn(
                  "text-xl sm:text-2xl font-black tracking-tight transition-colors",
                  scrolled ? "text-ketchup" : "text-white drop-shadow-md"
                )}
              >
                STANG&apos;S
              </span>
              <span
                className={cn(
                  "hidden sm:inline-block text-xs font-bold px-2 py-0.5 rounded-full transition-colors",
                  scrolled
                    ? "bg-mustard text-charcoal"
                    : "bg-white/20 text-white backdrop-blur-sm"
                )}
              >
                HOT DOGS
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-semibold rounded-full transition-all hover:scale-105",
                    scrolled
                      ? "text-charcoal hover:bg-ketchup/10 hover:text-ketchup"
                      : "text-white/90 hover:bg-white/15 hover:text-white"
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={businessInfo.phoneLink}
                className={cn(
                  "ml-3 px-5 py-2 text-sm font-bold rounded-full transition-all hover:scale-105 active:scale-95",
                  scrolled
                    ? "bg-ketchup text-white hover:bg-ketchup-dark"
                    : "bg-white text-ketchup hover:bg-white/90"
                )}
              >
                Call Now
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "md:hidden p-2 rounded-full transition-colors",
                scrolled
                  ? "text-charcoal hover:bg-gray-100"
                  : "text-white hover:bg-white/15"
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-bold text-white hover:text-mustard transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={businessInfo.phoneLink}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="mt-4 px-8 py-3 text-lg font-bold bg-ketchup text-white rounded-full hover:bg-ketchup-dark transition-colors"
              >
                Call Stang&apos;s
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
