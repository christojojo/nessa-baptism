"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OpeningScreen } from "@/components/OpeningScreen";
import { HeroSection } from "@/components/sections/HeroSection";
import { PreciousMomentsSection } from "@/components/sections/PreciousMomentsSection";
import { CelebrationSection } from "@/components/sections/CelebrationSection";
import { BibleVerseSection } from "@/components/sections/BibleVerseSection";
import { FamilySection } from "@/components/sections/FamilySection";
import { AttendanceSection } from "@/components/sections/AttendanceSection";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { MusicControl } from "@/components/MusicControl";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#FAF7F2] text-[#2F3430] overflow-x-hidden selection:bg-[#C9A96E]/20 paper-atmosphere">
      {/* Discreet Background Music Control */}
      <MusicControl isOpened={isOpened} />

      {/* Fullscreen Ceremonial Opening Screen */}
      <AnimatePresence>
        {!isOpened && (
          <OpeningScreen onOpen={() => setIsOpened(true)} />
        )}
      </AnimatePresence>

      {/* Main Digital Stationery Canvas (Continuous Seamless Flow) */}
      <div 
        className={`w-full min-h-screen transition-opacity duration-1000 ${
          isOpened ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Top Ambient Stationery Margin */}
        <header className="pt-3 sm:pt-5 text-center" aria-hidden="true">
          <div className="w-10 h-[1px] bg-[#C9A96E]/35 mx-auto" />
        </header>

        {/* Continuous Invitation Journey */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isOpened ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-6"
        >
          {/* 1. Hero (Ivory) */}
          <HeroSection />

          {/* 2. Precious Moments (Album Page) */}
          <PreciousMomentsSection />

          {/* 3. Celebration (Cream Wash) */}
          <CelebrationSection />

          {/* 3. Bible Verse (Soft Blush/Cream Accents) */}
          <BibleVerseSection />

          {/* 4. Family (Ivory) */}
          <FamilySection />

          {/* 5. Attendance (Ivory) */}
          <AttendanceSection />

          {/* 6. Closing (Final Blessing) */}
          <ClosingSection />
        </motion.div>

        {/* Bottom Ambient Margin */}
        <div className="pb-12 text-center" aria-hidden="true">
          <div className="w-12 h-[1px] bg-[#C9A96E]/40 mx-auto" />
        </div>
      </div>
    </main>
  );
}
