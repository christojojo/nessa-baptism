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

        {/* Editorial Album Composition */}
        <div className="w-full flex flex-col md:grid md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 items-center md:items-start justify-center">
          
          {/* 1. Primary Feature: Full Baby Collage Artwork (Intact & Uncropped) */}
          <div className="w-full max-w-[310px] sm:max-w-[340px] md:max-w-none md:col-span-7 flex flex-col items-center">
            <div className="relative w-full p-2.5 sm:p-3 bg-white/95 rounded-xs border border-[#C9A96E]/30 shadow-[0_10px_30px_rgba(47,52,48,0.06)] transition-transform duration-500 hover:scale-[1.01]">
              {/* Outer paper mount */}
              <div className="relative w-full aspect-[900/1600] overflow-hidden rounded-[2px] bg-[#FAF7F2]">
                <Image
                  src={galleryPhotos.collage}
                  alt={`Precious moments baby collage of ${eventConfig.baby.childName}`}
                  fill
                  sizes="(max-width: 640px) 310px, (max-width: 1024px) 400px, 450px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column (Desktop) / Follow-up Photos (Mobile) */}
          <div className="w-full md:col-span-5 flex flex-col items-center md:items-stretch gap-6 sm:gap-7 md:gap-9 md:pt-3">
            
            {/* 2. Secondary Feature: Family Photograph (Nessa with Parents) */}
            <div className="w-full max-w-[250px] sm:max-w-[280px] md:max-w-none flex flex-col items-center sm:self-center">
              <div className="relative w-full p-2 sm:p-2.5 bg-white/95 rounded-xs border border-[#C9A96E]/25 shadow-[0_8px_24px_rgba(47,52,48,0.05)] transition-transform duration-500 hover:scale-[1.01]">
                <div className="relative w-full aspect-[1090/1381] overflow-hidden rounded-[2px] bg-[#FAF7F2]">
                  <Image
                    src={galleryPhotos.family}
                    alt={`${eventConfig.baby.childName} with her parents ${eventConfig.parents.father} and ${eventConfig.parents.mother}`}
                    fill
                    sizes="(max-width: 640px) 250px, 320px"
                    className="object-cover object-[center_35%]"
                  />
                </div>
              </div>
              <p className="font-serif italic text-xs sm:text-sm text-[#2F3430]/75 tracking-wide mt-2 text-center">
                {preciousMoments.familyCaption}
              </p>
            </div>

            {/* 3. Third Feature: Black-and-White Baby Portrait (Smaller Supporting Detail) */}
            <div className="w-full max-w-[185px] sm:max-w-[210px] md:max-w-[220px] self-center sm:self-end md:self-end flex flex-col items-center">
              <div className="relative w-full p-2 sm:p-2.5 bg-white/95 rounded-xs border border-[#C9A96E]/25 shadow-[0_6px_20px_rgba(47,52,48,0.05)] transition-transform duration-500 hover:scale-[1.01]">
                <div className="relative w-full aspect-[720/1280] overflow-hidden rounded-[2px] bg-[#FAF7F2]">
                  <Image
                    src={galleryPhotos.portrait}
                    alt={`Black and white portrait of ${eventConfig.baby.childName}`}
                    fill
                    sizes="(max-width: 640px) 185px, 240px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <p className="font-serif italic text-xs sm:text-sm text-[#2F3430]/75 tracking-wide mt-2 text-center">
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
