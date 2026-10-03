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
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-center"
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
        <p className="font-sans text-xs sm:text-sm text-[#2F3430]/70 font-light tracking-wide max-w-sm mx-auto mb-8 sm:mb-12">
          {preciousMoments.supportingText}
        </p>

        {/* Layered Editorial Magazine Photo-Story Composition */}
        <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[490px] lg:max-w-[530px] mx-auto px-1 sm:px-2">
          {/* 1. Large Hero Photo: Baby Collage (Dominant Anchor, No surrounding card/frame) */}
          <div className="relative w-full z-0">
            <div className="relative w-full aspect-[9/16] overflow-hidden rounded-[2px] shadow-[0_12px_36px_rgba(47,52,48,0.08)] bg-[#FAF7F2]">
              <Image
                src={galleryPhotos.collage}
                alt={`Precious moments baby collage of ${eventConfig.baby.childName}`}
                fill
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 490px, 530px"
                className="object-contain"
                quality={95}
                priority
              />
            </div>
          </div>

          {/* 2. Medium Family Photo: Layered / Offset toward the RIGHT side (overlaps bottom-right) */}
          <div className="relative z-10 w-[58%] sm:w-[52%] md:w-[48%] max-w-[240px] sm:max-w-[270px] md:max-w-[300px] ml-auto mr-1 sm:mr-3 md:mr-4 -mt-16 sm:-mt-22 md:-mt-28">
            <div className="p-1.5 sm:p-2 md:p-2.5 bg-white/95 rounded-[2px] border border-[#C9A96E]/30 shadow-[0_10px_28px_rgba(47,52,48,0.12)] rotate-[1.5deg] sm:rotate-[2deg] transition-transform duration-300 hover:rotate-0">
              <div className="relative w-full aspect-[1090/1381] overflow-hidden rounded-[1px] bg-[#FAF7F2]">
                <Image
                  src={galleryPhotos.family}
                  alt={`${eventConfig.baby.childName} with parents`}
                  fill
                  sizes="(max-width: 640px) 240px, 300px"
                  className="object-cover object-[center_20%]"
                  quality={95}
                />
              </div>
            </div>
          </div>

          {/* 3. Small Black-and-White Portrait: Offset toward the LEFT side below */}
          <div className="relative z-20 w-[42%] sm:w-[38%] md:w-[34%] max-w-[170px] sm:max-w-[195px] md:max-w-[215px] mr-auto ml-1 sm:ml-3 md:ml-4 -mt-10 sm:-mt-14 md:-mt-18">
            <div className="p-1.5 sm:p-2 bg-white/95 rounded-[2px] border border-[#C9A96E]/25 shadow-[0_8px_24px_rgba(47,52,48,0.10)] -rotate-[2deg] sm:-rotate-[2.5deg] transition-transform duration-300 hover:rotate-0">
              <div className="relative w-full aspect-[9/16] overflow-hidden rounded-[1px] bg-[#FAF7F2]">
                <Image
                  src={galleryPhotos.portrait}
                  alt={`Portrait of ${eventConfig.baby.childName}`}
                  fill
                  sizes="(max-width: 640px) 170px, 215px"
                  className="object-cover object-center"
                  quality={95}
                />
              </div>
            </div>
          </div>

          {/* Subtle Editorial Caption */}
          <p className="font-serif italic text-xs sm:text-[13px] text-[#2F3430]/70 tracking-wide mt-6 sm:mt-8 text-center max-w-xs mx-auto">
            {preciousMoments.familyCaption}
          </p>
        </div>

        {/* Delicate Printed Botanical Flourish at section end */}
        <div className="mt-10 sm:mt-14 opacity-75">
          <BotanicalSprig variant="horizontal" className="w-24 sm:w-28" />
        </div>
      </motion.div>
    </section>
  );
}
