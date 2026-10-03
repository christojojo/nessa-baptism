"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BotanicalSprig } from "../decorations/BotanicalSprig";
import { eventConfig } from "@/config/event";

export function PreciousMomentsSection() {
  const { galleryPhotos } = eventConfig.baby;
  const { preciousMoments } = eventConfig;

  return (
    <section
      id="precious-moments"
      aria-label="Precious Moments"
      className="relative py-14 sm:py-20 px-4 sm:px-6 max-w-xl md:max-w-3xl mx-auto text-center"
    >
      {/* Background Soft Ambient Cream Gradient Wash */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F3EEE7]/50 to-transparent -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center"
      >
        {/* Section Pre-title */}
        <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-[#8FA58A] font-medium block mb-2">
          {preciousMoments.label}
        </span>

        {/* Section Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2F3430] font-normal tracking-wide mb-3">
          {preciousMoments.heading}
        </h2>

        {/* Supporting text */}
        <p className="font-sans text-xs sm:text-sm text-[#2F3430]/70 font-light tracking-wide max-w-sm mx-auto mb-10 sm:mb-14">
          {preciousMoments.supportingText}
        </p>

        {/* Responsive Editorial Photo-Story Composition */}
        <div className="w-full">
          {/* DESKTOP ASYMMETRIC SPREAD (md and above) */}
          <div className="hidden md:flex md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-10">
            {/* Visual Anchor: Full Baby Collage Artwork */}
            <div className="w-[54%] flex flex-col items-center">
              <div className="relative w-full p-3 bg-white/95 rounded-xs border border-[#C9A96E]/30 shadow-[0_12px_32px_rgba(47,52,48,0.06)] transition-transform duration-500 hover:scale-[1.01]">
                <div className="relative w-full aspect-[900/1500] max-h-[520px] overflow-hidden rounded-[2px] bg-[#FAF7F2]">
                  <Image
                    src={galleryPhotos.collage}
                    alt={`Precious moments baby collage of ${eventConfig.baby.childName}`}
                    fill
                    sizes="(max-width: 1024px) 420px, 460px"
                    className="object-contain"
                    quality={95}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Supporting Editorial Column: Family & Black/White Portrait */}
            <div className="w-[46%] flex flex-col justify-between self-stretch py-1">
              {/* Supporting 1: Family Photograph */}
              <div className="w-full max-w-[290px] ml-auto flex flex-col items-center">
                <div className="relative w-full p-2.5 bg-white/95 rounded-xs border border-[#C9A96E]/25 shadow-[0_8px_24px_rgba(47,52,48,0.05)] transition-transform duration-500 hover:scale-[1.01]">
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2px] bg-[#FAF7F2]">
                    <Image
                      src={galleryPhotos.family}
                      alt={`${eventConfig.baby.childName} with parents`}
                      fill
                      sizes="300px"
                      className="object-cover object-[center_30%]"
                      quality={95}
                    />
                  </div>
                </div>
                <p className="font-serif italic text-xs text-[#2F3430]/75 tracking-wide mt-2.5 text-center">
                  {preciousMoments.familyCaption}
                </p>
              </div>

              {/* Delicate Connector Line */}
              <div className="my-5 flex items-center justify-end pr-8 opacity-45" aria-hidden="true">
                <div className="w-20 h-[1px] bg-gradient-to-l from-[#C9A96E]/60 to-transparent" />
                <div className="w-1.5 h-1.5 rotate-45 border border-[#C9A96E] bg-white ml-2" />
              </div>

              {/* Supporting 2: Black-and-White Portrait */}
              <div className="w-full max-w-[195px] ml-auto mr-4 flex flex-col items-center">
                <div className="relative w-full p-2 bg-white/95 rounded-xs border border-[#C9A96E]/20 shadow-[0_6px_20px_rgba(47,52,48,0.05)] transition-transform duration-500 hover:scale-[1.01]">
                  <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[2px] bg-[#FAF7F2]">
                    <Image
                      src={galleryPhotos.portrait}
                      alt={`Portrait of ${eventConfig.baby.childName}`}
                      fill
                      sizes="200px"
                      className="object-cover object-center"
                      quality={95}
                    />
                  </div>
                </div>
                <p className="font-serif italic text-xs text-[#2F3430]/75 tracking-wide mt-2 text-center">
                  {preciousMoments.portraitCaption}
                </p>
              </div>
            </div>
          </div>

          {/* MOBILE SEQUENTIAL ALBUM STORY (< md) */}
          <div className="md:hidden flex flex-col items-center w-full">
            {/* 1. Main Anchor Photograph: Baby Collage */}
            <div className="w-full max-w-[285px] sm:max-w-[315px] flex flex-col items-center">
              <div className="relative w-full p-2.5 bg-white/95 rounded-xs border border-[#C9A96E]/30 shadow-[0_8px_24px_rgba(47,52,48,0.06)]">
                <div className="relative w-full aspect-[900/1450] max-h-[390px] overflow-hidden rounded-[2px] bg-[#FAF7F2]">
                  <Image
                    src={galleryPhotos.collage}
                    alt={`Precious moments baby collage of ${eventConfig.baby.childName}`}
                    fill
                    sizes="(max-width: 640px) 315px, 350px"
                    className="object-contain"
                    quality={95}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Subtle Editorial Breathing Divider */}
            <div className="flex items-center justify-center my-7 sm:my-8 opacity-40" aria-hidden="true">
              <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
            </div>

            {/* 2. Family Photograph */}
            <div className="w-full max-w-[245px] sm:max-w-[270px] flex flex-col items-center">
              <div className="relative w-full p-2 bg-white/95 rounded-xs border border-[#C9A96E]/25 shadow-[0_6px_20px_rgba(47,52,48,0.05)]">
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2px] bg-[#FAF7F2]">
                  <Image
                    src={galleryPhotos.family}
                    alt={`${eventConfig.baby.childName} with parents`}
                    fill
                    sizes="(max-width: 640px) 270px, 300px"
                    className="object-cover object-[center_30%]"
                    quality={95}
                  />
                </div>
              </div>
              <p className="font-serif italic text-xs text-[#2F3430]/75 tracking-wide mt-2.5 text-center">
                {preciousMoments.familyCaption}
              </p>
            </div>

            {/* Subtle Editorial Breathing Divider */}
            <div className="flex items-center justify-center my-7 sm:my-8 opacity-40" aria-hidden="true">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
            </div>

            {/* 3. Black-and-White Portrait */}
            <div className="w-full max-w-[180px] sm:max-w-[200px] flex flex-col items-center">
              <div className="relative w-full p-1.5 sm:p-2 bg-white/95 rounded-xs border border-[#C9A96E]/20 shadow-[0_4px_16px_rgba(47,52,48,0.04)]">
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[2px] bg-[#FAF7F2]">
                  <Image
                    src={galleryPhotos.portrait}
                    alt={`Portrait of ${eventConfig.baby.childName}`}
                    fill
                    sizes="(max-width: 640px) 200px, 220px"
                    className="object-cover object-center"
                    quality={95}
                  />
                </div>
              </div>
              <p className="font-serif italic text-xs text-[#2F3430]/75 tracking-wide mt-2 text-center">
                {preciousMoments.portraitCaption}
              </p>
            </div>
          </div>
        </div>

        {/* Delicate Printed Botanical Flourish at section end */}
        <div className="mt-12 sm:mt-16 opacity-75">
          <BotanicalSprig variant="horizontal" className="w-24 sm:w-28" />
        </div>
      </motion.div>
    </section>
  );
}
