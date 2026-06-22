"use client";

import { MapPin, Phone } from "lucide-react";
import { footerLinks, businessInfo } from "../data/siteData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-white mb-2">STANG&apos;S</h3>
            <p className="text-sm text-white/50 mb-4">
              Gourmet Hot Dogs & Sausages
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-white/50">
                <MapPin size={14} className="text-ketchup" />
                {businessInfo.address.full}
              </div>
              <a
                href={businessInfo.phoneLink}
                className="flex items-center gap-2 text-sm text-white/50 hover:text-mustard transition-colors"
              >
                <Phone size={14} className="text-ketchup" />
                {businessInfo.phone}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-mustard transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours / Note */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Hours
            </h4>
            <p className="text-sm text-white/50 mb-3">
              Current hours are unverified. Please call ahead to confirm.
            </p>
            <a
              href={businessInfo.phoneLink}
              className="inline-flex items-center gap-2 px-4 py-2 bg-ketchup hover:bg-ketchup-dark text-white text-sm font-bold rounded-full transition-colors"
            >
              <Phone size={14} />
              Call to Confirm
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {year} Stang&apos;s Hot Dogs and Sausages. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Website preview — some details pending owner confirmation.
          </p>
        </div>
      </div>
    </footer>
  );
}
