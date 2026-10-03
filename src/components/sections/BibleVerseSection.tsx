"use client";

import React from "react";
import { motion } from "framer-motion";
import { GuardianAngelBlessing } from "../decorations/GuardianAngelBlessing";
import { eventConfig } from "@/config/event";

export function BibleVerseSection() {
  return (
    <section
      id="scripture"
      aria-label="Holy Scripture"
      className="relative pt-6 sm:pt-10 pb-14 sm:pb-20 px-6 sm:px-8 max-w-xl mx-auto text-center"
    >
      {/* Soft Blush / Cream Accent Glow */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#DDB9B2]/10 to-transparent -z-10 pointer-events-none" 
        aria-hidden="true" 
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center"
      >
        {/* Classical Christian Line-Art Angel Blessing Motive */}
        <div className="mb-4 sm:mb-5 opacity-40 hover:opacity-50 transition-opacity pointer-events-none select-none">
          <GuardianAngelBlessing size={105} />
        </div>

        {/* Illuminated quote opening mark */}
        <div className="font-serif text-[#C9A96E]/40 text-3xl sm:text-4xl leading-none select-none mb-2" aria-hidden="true">
          &ldquo;
        </div>

        {/* Scripture Typography */}
        <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-[2rem] text-[#2F3430] leading-relaxed font-light tracking-wide max-w-md mx-auto mb-4">
          {eventConfig.bible.verse}
        </blockquote>

        {/* Biblical Citation */}
        <cite className="font-sans text-xs tracking-[0.3em] uppercase text-[#8FA58A] font-medium not-italic mt-3 block">
          {eventConfig.bible.reference}
        </cite>

        {/* Minimalist ornamental underline */}
        <div className="mt-8 flex items-center gap-2.5 opacity-60">
          <div className="w-10 h-[1px] bg-[#C9A96E]/40" />
          <div className="w-1.5 h-1.5 rotate-45 border border-[#C9A96E] bg-white" />
          <div className="w-10 h-[1px] bg-[#C9A96E]/40" />
        </div>
      </motion.div>
    </section>
  );
}
