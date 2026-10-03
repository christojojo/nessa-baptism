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
      className="relative flex flex-col items-center justify-center pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-12 px-4 sm:px-6 text-center max-w-xl mx-auto"
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

      {/* Heirloom Baby Photograph - Arch Portrait Presentation (True Mathematical Centering) */}
      <div className="w-full flex justify-center items-center my-1.5 mb-5 sm:mb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center mx-auto"
        >
          {/* Soft botanical accent sprig framing top-right */}
          <div 
            className="absolute -top-3 -right-3 text-[#8FA58A]/70 pointer-events-none z-10" 
            aria-hidden="true"
          >
            <BotanicalSprig variant="sprig" className="w-7 h-7 sm:w-8 sm:h-8 rotate-45" />
          </div>

          {/* Soft botanical accent sprig framing bottom-left */}
          <div 
            className="absolute -bottom-2.5 -left-2.5 text-[#8FA58A]/60 pointer-events-none z-10" 
            aria-hidden="true"
          >
            <BotanicalSprig variant="sprig" className="w-6 h-6 sm:w-7 sm:h-7 -rotate-135" />
          </div>

          {/* Outer soft ambient aura */}
          <div 
            className="absolute -inset-2.5 rounded-t-[110px] sm:rounded-t-[130px] rounded-b-[30px] sm:rounded-b-[36px] bg-gradient-to-b from-[#C9A96E]/12 via-[#DDB9B2]/10 to-transparent blur-md -z-10" 
            aria-hidden="true" 
          />

          {/* Arch Heirloom Frame Container */}
          <div className="relative w-44 h-56 sm:w-52 sm:h-66 md:w-56 md:h-72 p-2 sm:p-2.5 bg-[#FFFFFF]/90 rounded-t-[100px] sm:rounded-t-[120px] rounded-b-[24px] sm:rounded-b-[28px] shadow-[0_12px_32px_rgba(47,52,48,0.06)] border border-[#C9A96E]/30 flex flex-col items-center mx-auto">
            {/* Inner hairline gold border */}
            <div className="relative w-full h-full rounded-t-[92px] sm:rounded-t-[112px] rounded-b-[18px] sm:rounded-b-[22px] overflow-hidden border border-[#C9A96E]/20 bg-[#F3EEE7]">
              <Image
                src={eventConfig.baby.photoSrc}
                alt={`Portrait of baby ${eventConfig.baby.childName}`}
                fill
                priority
                sizes="(max-width: 640px) 180px, 230px"
                className="object-cover object-[50%_12%] filter contrast-[1.01] brightness-[1.01]"
              />
              {/* Soft vignette overlay */}
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#2F3430]/10 pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Baby's Name - The Strongest Typographic Element */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="space-y-1.5 sm:space-y-2 mb-2 sm:mb-3"
      >
        <h1 className="font-serif text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] text-[#2F3430] font-normal tracking-[0.16em] sm:tracking-[0.22em] uppercase leading-none select-none">
          {eventConfig.baby.childName}
        </h1>
        
        {/* Smaller elegant Baptism subtitle */}
        <div className="flex items-center justify-center gap-2.5 pt-0.5">
          <div className="h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-[#C9A96E]/50" />
          <p className="font-serif italic text-base sm:text-lg text-[#8FA58A] tracking-widest font-light">
            Baptism
          </p>
          <div className="h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-[#C9A96E]/50" />
        </div>

        {/* Subtle, understated Date of Birth */}
        {eventConfig.baby.dateOfBirth && (
          <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-[#2F3430]/50 font-light pt-1">
            Born {eventConfig.baby.dateOfBirthFormatted || eventConfig.baby.dateOfBirth}
          </p>
        )}
      </motion.div>

      {/* Subtle flourish separator */}
      <BotanicalSprig variant="divider" className="mt-5 sm:mt-6 mb-1" />
    </section>
  );
}
