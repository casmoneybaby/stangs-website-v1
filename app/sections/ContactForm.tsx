"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real deployment, this would connect to a backend or email service.
    // For now, we log to console and show a success message.
    console.log("Catering inquiry:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-bun/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-bold tracking-wide uppercase bg-pickle/10 text-pickle rounded-full">
            <Mail size={14} />
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal mb-4">
            Ask About <span className="text-pickle">Catering.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Planning an event? Reach out to learn more about catering and private options.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm shadow-black/5"
        >
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-pickle/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send size={28} className="text-pickle" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Message Sent!</h3>
              <p className="text-gray-500">
                Thanks for reaching out. We will get back to you soon.
              </p>
              <p className="text-xs text-gray-400 mt-4">
                (In the preview, messages are logged locally. Connect to email for production.)
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-sm font-bold text-charcoal mb-2"
                >
                  <User size={14} className="text-ketchup" />
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ketchup focus:ring-2 focus:ring-ketchup/20 outline-none transition-all text-charcoal"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-sm font-bold text-charcoal mb-2"
                >
                  <Mail size={14} className="text-ketchup" />
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ketchup focus:ring-2 focus:ring-ketchup/20 outline-none transition-all text-charcoal"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="flex items-center gap-2 text-sm font-bold text-charcoal mb-2"
                >
                  <MessageSquare size={14} className="text-ketchup" />
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ketchup focus:ring-2 focus:ring-ketchup/20 outline-none transition-all text-charcoal resize-none"
                  placeholder="Tell us about your event or question..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-ketchup hover:bg-ketchup-dark text-white font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send size={18} />
                Send Message
              </button>

              <p className="text-xs text-gray-400 text-center">
                This is a preview. In production, connect this form to your email service.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
