"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cross } from "./decorations/Cross";

interface OpeningScreenProps {
  onOpen: () => void;
}

export function OpeningScreen({ onOpen }: OpeningScreenProps) {
  const [isLit, setIsLit] = useState(false);
  const [hasStartedTransition, setHasStartedTransition] = useState(false);

  const handleOpen = () => {
    if (isLit) return;
    setIsLit(true);

    // Ceremonial slow timing
    setTimeout(() => {
      setHasStartedTransition(true);
      setTimeout(() => {
        onOpen();
      }, 1000);
    }, 1500);
  };

  // 4 extremely subtle, ethereal light embers
  const subtleParticles = [
    { id: 1, x: -14, y: -28, delay: 0.2, scale: 0.8 },
    { id: 2, x: 16, y: -42, delay: 0.4, scale: 1 },
    { id: 3, x: -8, y: -56, delay: 0.6, scale: 0.7 },
    { id: 4, x: 10, y: -68, delay: 0.5, scale: 0.9 },
  ];

  return (
    <AnimatePresence>
      {!hasStartedTransition && (
        <motion.div
          key="opening-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between px-6 py-6 sm:py-10 md:py-14 bg-[#FAF7F2] select-none overflow-hidden"
          role="region"
          aria-label="Baptism Blessing Opening"
        >
          {/* Subtle Deckled / Stationery Hairline Frame */}
          <div 
            className="absolute inset-3 sm:inset-5 md:inset-7 border border-[#C9A96E]/20 pointer-events-none rounded-xs" 
            aria-hidden="true"
          >
            {/* Minimalist corner crosshairs */}
            <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#C9A96E]/30" />
            <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#C9A96E]/30" />
            <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[#C9A96E]/30" />
            <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#C9A96E]/30" />
          </div>

          {/* Top discreet sacred badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLit ? 0.4 : 1 }}
            transition={{ duration: 1 }}
            className="pt-1 sm:pt-2 text-center z-10"
          >
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-[#8FA58A] font-medium">
              Holy Sacrament of Baptism
            </span>
          </motion.div>

          {/* Interactive Candle Centerpiece */}
          <div className="flex flex-col items-center justify-center my-auto z-10 w-full max-w-sm">
            {/* Very subtle Christian Cross */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="mb-4 sm:mb-5 flex justify-center text-[#C9A96E]/90"
            >
              <Cross size={20} />
            </motion.div>

            {/* Clickable Baptism Candle */}
            <button
              id="open-invitation-btn"
              type="button"
              onClick={handleOpen}
              disabled={isLit}
              aria-label="Tap to light baptismal candle and open invitation"
              className="relative flex flex-col items-center justify-end h-44 sm:h-48 mb-4 sm:mb-5 group cursor-pointer focus:outline-none"
            >
              {/* Warm Golden Radiant Glow */}
              <AnimatePresence>
                {isLit && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ 
                      opacity: [0, 0.8, 0.65],
                      scale: [0.3, 1.4, 1.25]
                    }}
                    transition={{
                      duration: 2.2,
                      ease: "easeOut",
                    }}
                    className="absolute -top-10 w-44 h-44 rounded-full bg-gradient-radial from-[#C9A96E]/40 via-[#F3EEE7]/30 to-transparent pointer-events-none blur-2xl"
                    aria-hidden="true"
                  />
                )}
              </AnimatePresence>

              {/* Extremely subtle floating light particles */}
              <AnimatePresence>
                {isLit && (
                  <div className="absolute -top-6 w-20 h-20 pointer-events-none" aria-hidden="true">
                    {subtleParticles.map((p) => (
                      <motion.div
                        key={p.id}
                        initial={{ opacity: 0, x: 0, y: 0 }}
                        animate={{ 
                          opacity: [0, 0.65, 0],
                          x: p.x,
                          y: p.y,
                        }}
                        transition={{
                          duration: 2.4,
                          delay: p.delay,
                          ease: "easeOut",
                        }}
                        className="absolute left-1/2 bottom-0 w-1 h-1 rounded-full bg-[#C9A96E] blur-[0.5px]"
                        style={{ transform: `scale(${p.scale})` }}
                      />
                    ))}
                  </div>
                )}
              </AnimatePresence>

              {/* Flame Graphic & Static Wick Zone */}
              <div className="relative w-8 h-12 flex items-end justify-center pointer-events-none">
                {/* The Static Wick - strictly rendered when UNLIT; removed when lit so no black artifact remains */}
                {!isLit && (
                  <div
                    className="w-[1.5px] h-3 bg-[#2F3430]/75 rounded-t-xs"
                    aria-hidden="true"
                  />
                )}

                {/* Pure Elegant Flame Graphic */}
                <AnimatePresence>
                  {isLit && (
                    <motion.div
                      key="candle-flame"
                      initial={{ scaleY: 0, scaleX: 0.2, opacity: 0 }}
                      animate={{ scaleY: 1, scaleX: 1, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="absolute bottom-0 flex flex-col items-center origin-bottom animate-flame"
                    >
                      {/* Outer translucent golden flame envelope */}
                      <div className="w-3.5 h-8 rounded-[50%_50%_40%_40%/70%_70%_30%_30%] bg-gradient-to-t from-[#C9A96E] via-[#F3EEE7] to-white shadow-[0_0_14px_3px_rgba(201,169,110,0.6)]" />
                      {/* Inner warm radiant core */}
                      <div className="absolute bottom-0.5 w-1.5 h-3.5 rounded-full bg-gradient-to-t from-[#C9A96E]/60 via-[#F3EEE7] to-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Candle Body - Completely Static */}
              <div className="relative w-9 sm:w-10 h-24 sm:h-26 rounded-t-xs bg-gradient-to-r from-[#FAF7F2] via-[#FFFFFF] to-[#F3EEE7] shadow-[0_4px_14px_rgba(47,52,48,0.05)] border border-[#C9A96E]/25 flex flex-col items-center justify-between py-2.5 overflow-hidden">
                {/* Candle Top Wax Rim */}
                <div className="w-full h-1 bg-[#F3EEE7] border-b border-[#C9A96E]/15 rounded-full" />
                
                {/* Refined Gold Baptism Ribbon Band */}
                <div className="w-full py-1 bg-gradient-to-r from-[#C9A96E]/20 via-[#C9A96E]/60 to-[#C9A96E]/20 border-y border-[#C9A96E]/40 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rotate-45 border border-white/90 bg-[#C9A96E]" />
                </div>

                {/* Candle Base Accent */}
                <div className="w-full h-1 bg-[#F3EEE7] border-t border-[#C9A96E]/15" />
              </div>

              {/* Candle Pedestal Base */}
              <div className="w-14 h-2 bg-gradient-to-r from-[#F3EEE7] via-[#C9A96E]/30 to-[#F3EEE7] rounded-full border border-[#C9A96E]/25 shadow-xs" />
            </button>

            {/* Display Heading: A Blessing Begins */}
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: isLit ? 0.3 : 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2F3430] font-normal tracking-wide text-center mb-1.5 italic"
            >
              A Blessing Begins
            </motion.h1>

            {/* Small understated instruction: Tap to open */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isLit ? 0 : 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-2"
            >
              <button
                type="button"
                onClick={handleOpen}
                disabled={isLit}
                className="group inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#C9A96E]/30 hover:border-[#C9A96E]/60 bg-white/60 hover:bg-white transition-all duration-300 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-sans text-[#2F3430]/75 hover:text-[#2F3430] cursor-pointer"
              >
                <span>Tap to open</span>
                <span className="w-1 h-1 rounded-full bg-[#C9A96E] group-hover:scale-125 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Understated sacred footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLit ? 0.2 : 0.5 }}
            transition={{ duration: 1 }}
            className="text-center pb-1 z-10"
          >
            <span className="font-serif italic text-xs tracking-widest text-[#2F3430]/70">
              In the Name of the Father, and of the Son, and of the Holy Spirit
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
