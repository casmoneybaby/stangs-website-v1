"use client";

import { Phone, MapPin, UtensilsCrossed } from "lucide-react";
import { businessInfo } from "../data/siteData";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden">
      <div className="flex items-center justify-around py-2 px-2">
        <a
          href={businessInfo.phoneLink}
          className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg active:bg-gray-100 transition-colors"
        >
          <Phone size={20} className="text-ketchup" />
          <span className="text-[10px] font-bold text-charcoal">Call</span>
        </a>
        <a
          href={businessInfo.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg active:bg-gray-100 transition-colors"
        >
          <MapPin size={20} className="text-pickle" />
          <span className="text-[10px] font-bold text-charcoal">Directions</span>
        </a>
        <a
          href="#menu"
          className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg active:bg-gray-100 transition-colors"
        >
          <UtensilsCrossed size={20} className="text-mustard" />
          <span className="text-[10px] font-bold text-charcoal">Menu</span>
        </a>
      </div>
      {/* Safe area padding for iOS */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </div>
  );
}
