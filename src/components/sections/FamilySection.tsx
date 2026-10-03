"use client";

import React from "react";
import { motion } from "framer-motion";
import { BotanicalSprig } from "../decorations/BotanicalSprig";
import { GuardianAngelOrnament } from "../decorations/GuardianAngelOrnament";
import { eventConfig } from "@/config/event";

export function FamilySection() {
  return (
    <section
      id="family"
      aria-label="Family & Godparents"
      className="relative py-14 sm:py-20 px-4 sm:px-6 max-w-xl mx-auto text-center"
    >
      {/* Asymmetrical Faint Guardian Angel Watermark Illustration */}
      <div 
        className="absolute top-8 right-2 sm:right-6 pointer-events-none opacity-25 select-none -z-10" 
        aria-hidden="true"
      >
        <GuardianAngelOrnament size={115} />
      </div>

      {/* Opposite Subtle Olive Sprig Accent */}
      <div 
        className="absolute bottom-10 left-2 sm:left-6 pointer-events-none opacity-20 select-none -z-10" 
        aria-hidden="true"
      >
        <BotanicalSprig variant="sprig" className="w-10 h-10 -rotate-45" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 space-y-9 sm:space-y-11"
      >
        {/* Parents Group */}
        <div className="space-y-2">
          <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#8FA58A] font-medium block">
            With love from
          </span>
          <p className="font-serif text-3xl sm:text-4xl text-[#2F3430] font-normal tracking-wide">
            {eventConfig.parents.father} &amp; {eventConfig.parents.mother}
          </p>
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#2F3430]/45 font-light block">
            Parents
          </span>
        </div>

        {/* Refined Printed Stationery Interlude Divider */}
        <div className="flex items-center justify-center py-1 opacity-80">
          <BotanicalSprig variant="divider" />
        </div>

        {/* Godparents Group */}
        <div className="space-y-2">
          <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#8FA58A] font-medium block">
            Together with
          </span>
          <p className="font-serif text-3xl sm:text-4xl text-[#2F3430] font-normal tracking-wide">
            {eventConfig.godparents.godfather} &amp; {eventConfig.godparents.godmother}
          </p>
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#2F3430]/45 font-light block">
            Godparents
          </span>
        </div>
      </motion.div>
    </section>
  );
}
