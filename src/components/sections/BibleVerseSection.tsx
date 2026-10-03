"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChristBlessingChild } from "../decorations/ChristBlessingChild";
import { eventConfig } from "@/config/event";

export function BibleVerseSection() {
  return (
    <section
      id="scripture"
      aria-label="Holy Scripture"
      className="relative pt-6 sm:pt-8 pb-12 sm:pb-16 px-6 sm:px-8 max-w-xl mx-auto text-center"
    >
      {/* Soft Blush / Cream Accent Glow */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#DDB9B2]/10 to-transparent -z-10 pointer-events-none" 
        aria-hidden="true" 
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center"
      >
        {/* Classical Christian Line-Art: Christ Blessing a Child ("Let the little children come to me...") */}
        <div className="mb-2.5 sm:mb-3 opacity-80 hover:opacity-95 transition-opacity pointer-events-none select-none">
          <ChristBlessingChild width={128} height={112} />
        </div>

        {/* Small decorative quotation mark */}
        <div className="font-serif text-[#C9A96E]/50 text-2xl sm:text-3xl leading-none select-none mb-2" aria-hidden="true">
          &ldquo;
        </div>

        {/* Scripture Typography */}
        <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-[2rem] text-[#2F3430] leading-relaxed font-light tracking-wide max-w-md mx-auto mb-3">
          {eventConfig.bible.verse}
        </blockquote>

        {/* Biblical Citation */}
        <cite className="font-sans text-xs tracking-[0.3em] uppercase text-[#8FA58A] font-medium not-italic mt-2 block">
          {eventConfig.bible.reference}
        </cite>

        {/* Small refined divider */}
        <div className="mt-7 sm:mt-8 flex items-center gap-2.5 opacity-65" aria-hidden="true">
          <div className="w-10 sm:w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent" />
          <div className="w-1.5 h-1.5 rotate-45 border border-[#C9A96E] bg-white" />
          <div className="w-10 sm:w-12 h-[1px] bg-gradient-to-l from-transparent via-[#C9A96E]/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
