"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cross } from "../decorations/Cross";
import { BotanicalSprig } from "../decorations/BotanicalSprig";
import { eventConfig } from "@/config/event";

export function HeroSection() {
  return (
    <section 
      id="hero"
      aria-label="Invitation Hero"
      className="relative flex flex-col items-center justify-center pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-12 px-4 sm:px-6 text-center max-w-xl mx-auto"
    >
      {/* Top tiny sacred symbol & label */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9 }}
        className="flex flex-col items-center mb-2.5 sm:mb-3"
      >
        <Cross size={16} className="text-[#C9A96E]/85 mb-1.5" />
        <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#8FA58A] font-medium">
          Holy Sacrament of Baptism
        </span>
      </motion.div>

      {/* Short Joyful Invitation Phrase */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, delay: 0.12 }}
        className="font-serif italic text-base sm:text-lg md:text-xl text-[#2F3430]/85 leading-snug max-w-xs sm:max-w-md mx-auto mb-4 sm:mb-5 font-normal"
      >
        With joyful hearts,<br />
        we invite you to celebrate
      </motion.p>

      {/* Hero Artwork Showcase (Preserves Complete Original Composition) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[340px] sm:max-w-[390px] md:max-w-[430px] mx-auto my-3 sm:my-5"
      >
        <div className="relative w-full aspect-[4/5]">
          <Image
            src={eventConfig.baby.photoSrc}
            alt={`Holy Baptism celebration of ${eventConfig.baby.childName}`}
            fill
            priority
            quality={95}
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 390px, 430px"
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* Minimal Supporting Baptism Text Below Artwork */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="space-y-1.5 sm:space-y-2 mt-1 sm:mt-2 mb-2 sm:mb-3"
      >
        {/* Semantic H1 for screen readers and SEO without visually repeating the name */}
        <h1 className="sr-only">
          Holy Baptism of {eventConfig.baby.childName}
        </h1>
        
        {/* Smaller elegant Baptism subtitle */}
        <div className="flex items-center justify-center gap-2.5 pt-0.5">
          <div className="h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-[#C9A96E]/50" />
          <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#8FA58A] tracking-[0.16em] font-light">
            Holy Baptism
          </p>
          <div className="h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-[#C9A96E]/50" />
        </div>

        {/* Subtle, understated Date of Birth */}
        {eventConfig.baby.dateOfBirth && (
          <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#2F3430]/50 font-light pt-0.5">
            Born {eventConfig.baby.dateOfBirthFormatted || eventConfig.baby.dateOfBirth}
          </p>
        )}
      </motion.div>

      {/* Subtle flourish separator */}
      <BotanicalSprig variant="divider" className="mt-4 sm:mt-5 mb-1" />
    </section>
  );
}
