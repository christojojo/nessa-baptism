"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
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

        {/* Two Refined Stationery Attendance Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto">
          <button
            id="attendance-yes-btn"
            type="button"
            onClick={() => setSelectedResponse("yes")}
            aria-pressed={selectedResponse === "yes"}
            aria-label={attendance.yesButtonText}
            className={`w-full sm:w-auto min-w-[210px] min-h-[46px] px-6 sm:px-7 py-3 rounded-full text-[11px] sm:text-xs tracking-[0.2em] uppercase font-sans transition-all duration-300 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#8FA58A] focus:ring-offset-1 ${
              selectedResponse === "yes"
                ? "bg-[#8FA58A]/10 text-[#2F3430] border border-[#8FA58A]/60 font-medium"
                : "bg-white/80 hover:bg-white text-[#2F3430]/80 hover:text-[#2F3430] border border-[#C9A96E]/35 hover:border-[#8FA58A]/50 font-normal"
            }`}
          >
            <span className="inline-flex items-center gap-1.5">
              {selectedResponse === "yes" && (
                <Check className="w-3.5 h-3.5 text-[#8FA58A] stroke-[2]" aria-hidden="true" />
              )}
              <span>{attendance.yesButtonText}</span>
            </span>
          </button>

          <button
            id="attendance-no-btn"
            type="button"
            onClick={() => setSelectedResponse("no")}
            aria-pressed={selectedResponse === "no"}
            aria-label={attendance.noButtonText}
            className={`w-full sm:w-auto min-w-[210px] min-h-[46px] px-6 sm:px-7 py-3 rounded-full text-[11px] sm:text-xs tracking-[0.2em] uppercase font-sans transition-all duration-300 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C9A96E] focus:ring-offset-1 ${
              selectedResponse === "no"
                ? "bg-[#FAF7F2] text-[#2F3430]/80 border border-[#C9A96E]/50 font-medium"
                : "bg-transparent hover:bg-white/50 text-[#2F3430]/65 hover:text-[#2F3430] border border-[#2F3430]/15 hover:border-[#2F3430]/30 font-normal"
            }`}
          >
            <span className="inline-flex items-center gap-1.5">
              {selectedResponse === "no" && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]/80" aria-hidden="true" />
              )}
              <span>{attendance.noButtonText}</span>
            </span>
          </button>
        </div>

        {/* Immediate Inline Tasteful Confirmation Feedback */}
        <div className="min-h-[64px] flex items-center justify-center mt-5">
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
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#8FA58A]/10 border border-[#8FA58A]/25 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8FA58A]" aria-hidden="true" />
                  <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-[#8FA58A] font-medium">
                    Response Received
                  </span>
                </div>
                <p className="font-serif italic text-sm sm:text-base text-[#2F3430]/85 tracking-wide text-center">
                  {selectedResponse === "yes"
                    ? "Thank you — we're so happy you'll be joining us."
                    : "Thank you for letting us know."}
                </p>
                <div 
                  className="mt-2.5 w-8 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" 
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
