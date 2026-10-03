"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { eventConfig } from "@/config/event";

export function AttendanceSection() {
  const [selectedResponse, setSelectedResponse] = useState<"yes" | "no" | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { attendance } = eventConfig;

  return (
    <section
      id="attendance"
      aria-label="Attendance"
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-xl mx-auto text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center"
      >
        {/* Pre-title */}
        <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-[#8FA58A] font-medium block mb-2">
          {attendance.preTitle}
        </span>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2F3430] font-normal tracking-wide mb-3 leading-tight">
          {attendance.heading}
        </h2>

        {/* Description */}
        <p className="font-sans text-xs sm:text-sm text-[#2F3430]/70 font-light tracking-wide max-w-xs sm:max-w-sm mx-auto mb-8 sm:mb-9">
          {attendance.description}
        </p>

        {/* Two Understated Attendance Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto">
          <button
            id="attendance-yes-btn"
            type="button"
            onClick={() => setSelectedResponse("yes")}
            aria-pressed={selectedResponse === "yes"}
            aria-label={attendance.yesButtonText}
            className={`w-full sm:w-auto min-w-[200px] min-h-[46px] px-6 sm:px-7 py-3 rounded-full text-[11px] sm:text-xs tracking-[0.2em] uppercase font-sans font-medium transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#8FA58A] focus:ring-offset-2 focus:ring-offset-[#FAF7F2] ${
              selectedResponse === "yes"
                ? "bg-[#8FA58A]/15 text-[#2F3430] border border-[#8FA58A] shadow-xs ring-1 ring-[#8FA58A]/40 font-semibold"
                : "bg-white/90 hover:bg-white text-[#2F3430] border border-[#C9A96E]/40 hover:border-[#8FA58A] shadow-xs"
            }`}
          >
            <span>{attendance.yesButtonText}</span>
          </button>

          <button
            id="attendance-no-btn"
            type="button"
            onClick={() => setSelectedResponse("no")}
            aria-pressed={selectedResponse === "no"}
            aria-label={attendance.noButtonText}
            className={`w-full sm:w-auto min-w-[200px] min-h-[46px] px-6 sm:px-7 py-3 rounded-full text-[11px] sm:text-xs tracking-[0.2em] uppercase font-sans font-medium transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#DDB9B2] focus:ring-offset-2 focus:ring-offset-[#FAF7F2] ${
              selectedResponse === "no"
                ? "bg-stone-100 text-[#2F3430] border border-[#C9A96E]/60 ring-1 ring-[#C9A96E]/30 font-semibold"
                : "bg-transparent hover:bg-white/60 text-[#2F3430]/75 hover:text-[#2F3430] border border-[#2F3430]/20 hover:border-[#2F3430]/40"
            }`}
          >
            <span>{attendance.noButtonText}</span>
          </button>
        </div>

        {/* Immediate Inline Tasteful Confirmation Feedback */}
        <div className="min-h-[52px] flex items-center justify-center mt-5">
          <AnimatePresence mode="wait">
            {selectedResponse && (
              <motion.div
                key={selectedResponse}
                role="status"
                aria-live="polite"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col items-center px-4"
              >
                <p className="font-serif italic text-sm sm:text-base text-[#2F3430]/85 tracking-wide text-center">
                  {selectedResponse === "yes"
                    ? "Thank you — we're so happy you'll be joining us."
                    : "Thank you for letting us know."}
                </p>
                <div 
                  className="mt-2 w-8 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" 
                  aria-hidden="true" 
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
