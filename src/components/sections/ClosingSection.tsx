"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cross } from "../decorations/Cross";
import { eventConfig } from "@/config/event";

export function ClosingSection() {
  const initials = eventConfig.baby.childName
    .split(" ")
    .map((w) => w[0])
    .join("");

  const formattedDate = eventConfig.baptism.date.replace(/^[A-Za-z]+,\s*/, "");

  return (
    <footer
      id="closing"
      aria-label="Closing blessing"
      className="relative pt-12 pb-24 px-4 sm:px-6 max-w-xl mx-auto text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center"
      >
        {/* Subtle Christian Cross Ornament */}
        <div className="mb-6 opacity-80">
          <Cross size={20} className="text-[#C9A96E]" />
        </div>

        {/* Closing Thank You Line */}
        <p className="font-serif italic text-xl sm:text-2xl text-[#2F3430] leading-relaxed max-w-sm mx-auto mb-8 font-light">
          Thank you for being part of this special day.
        </p>

        {/* Family Sign-off */}
        <div className="space-y-1 mb-12">
          <p className="font-serif italic text-base sm:text-lg text-[#2F3430]/70">
            With love,
          </p>
          <p className="font-serif text-2xl sm:text-3xl text-[#2F3430] tracking-wider">
            The Family
          </p>
        </div>

        {/* Small Decorative Candle / Cross Wax Seal End-motif */}
        <div className="flex flex-col items-center gap-2.5 opacity-60">
          <div className="w-9 h-9 rounded-full border border-[#C9A96E]/50 flex items-center justify-center bg-white/60 shadow-xs">
            <span className="font-serif text-[11px] italic text-[#C9A96E] font-medium">{initials}</span>
          </div>
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#2F3430]/40">
            {formattedDate} &bull; {eventConfig.baptism.state}
          </span>
        </div>
      </motion.div>
    </footer>
  );
}
