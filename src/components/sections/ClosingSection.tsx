"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cross } from "../decorations/Cross";
import { eventConfig } from "@/config/event";

export function ClosingSection() {
  const formattedDate = eventConfig.baptism.date.replace(/^[A-Za-z]+,\s*/, "");

  return (
    <footer
      id="closing"
      aria-label="Closing blessing"
      className="relative pt-8 sm:pt-10 pb-6 sm:pb-8 px-4 sm:px-6 max-w-xl mx-auto text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center"
      >
        {/* Subtle Christian Cross Ornament */}
        <div className="mb-4 opacity-80">
          <Cross size={20} className="text-[#C9A96E]" />
        </div>

        {/* Closing Thank You Line */}
        <p className="font-serif italic text-xl sm:text-2xl text-[#2F3430] leading-relaxed max-w-sm mx-auto mb-3 font-light">
          Thank you for being part of this special day.
        </p>

        {/* Small Decorative Divider */}
        <div className="flex items-center justify-center gap-2.5 mt-1 mb-4 sm:mb-5 opacity-60" aria-hidden="true">
          <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C9A96E]/50" />
          <div className="w-1.5 h-1.5 rotate-45 border border-[#C9A96E] bg-white" />
          <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C9A96E]/50" />
        </div>

        {/* Family Sign-off */}
        <div className="space-y-1 mb-5 sm:mb-6">
          <p className="font-serif italic text-base sm:text-lg text-[#2F3430]/70">
            With love,
          </p>
          <p className="font-serif text-2xl sm:text-3xl text-[#2F3430] tracking-wider">
            The Family
          </p>
        </div>

        {/* Event Date & Location */}
        <p className="font-sans text-[9px] tracking-[0.28em] uppercase text-[#2F3430]/40 font-light select-none">
          {formattedDate} &bull; {eventConfig.baptism.state}
        </p>

        {/* Creator Personal Signature */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center">
          <a
            href="https://www.linkedin.com/in/christo-jojo-32a085212/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Christo Jojo"
            className="font-serif italic text-[11px] sm:text-xs tracking-[0.16em] text-[#C9A96E] opacity-75 hover:opacity-100 transition-opacity duration-300 no-underline cursor-pointer inline-flex items-center justify-center py-1 px-2 focus:outline-none focus-visible:opacity-100"
          >
            C.J.
          </a>
        </div>

        {/* Final Delicate Bottom Line */}
        <div className="mt-4 sm:mt-5 flex justify-center" aria-hidden="true">
          <div className="w-12 h-[1px] bg-[#C9A96E]/40" />
        </div>
      </motion.div>
    </footer>
  );
}
