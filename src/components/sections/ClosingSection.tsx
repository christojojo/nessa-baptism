"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cross } from "../decorations/Cross";
import { eventConfig } from "@/config/event";

export function ClosingSection() {
  const initials = eventConfig.baby.childName
    .split(" ")
    .map((w) => w[0])
    .join("");

  const formattedDate = eventConfig.baptism.date.replace(/^[A-Za-z]+,\s*/, "");
  const parentsPhoto = eventConfig.parents.photoSrc || "/images/nessa-parents-closing.jpg";

  return (
    <footer
      id="closing"
      aria-label="Closing blessing"
      className="relative pt-10 pb-20 px-4 sm:px-6 max-w-xl mx-auto text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center"
      >
        {/* Subtle Christian Cross Ornament */}
        <div className="mb-5 opacity-80">
          <Cross size={20} className="text-[#C9A96E]" />
        </div>

        {/* Closing Thank You Line */}
        <p className="font-serif italic text-xl sm:text-2xl text-[#2F3430] leading-relaxed max-w-sm mx-auto mb-6 font-light">
          Thank you for being part of this special day.
        </p>

        {/* Small Decorative Divider */}
        <div className="flex items-center justify-center gap-2.5 my-6 opacity-60" aria-hidden="true">
          <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C9A96E]/50" />
          <div className="w-1.5 h-1.5 rotate-45 border border-[#C9A96E] bg-white" />
          <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C9A96E]/50" />
        </div>

        {/* A Final Little Memory - Parents Photograph */}
        <div className="w-full flex flex-col items-center mb-8">
          <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[#8FA58A] font-medium block mb-4">
            A final little memory
          </span>

          <div className="relative w-full max-w-[270px] sm:max-w-[320px] md:max-w-[350px] p-2.5 sm:p-3 bg-white/95 rounded-xs border border-[#C9A96E]/30 shadow-[0_12px_32px_rgba(47,52,48,0.06)]">
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2px] bg-[#FAF7F2]">
              <Image
                src={parentsPhoto}
                alt={`Parents ${eventConfig.parents.father} & ${eventConfig.parents.mother}`}
                fill
                sizes="(max-width: 640px) 300px, 400px"
                className="object-cover object-[center_20%]"
                quality={95}
              />
            </div>
          </div>
        </div>

        {/* Family Sign-off */}
        <div className="space-y-1 mb-10">
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
