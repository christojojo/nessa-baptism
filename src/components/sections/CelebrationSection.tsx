"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Download, ExternalLink, ChevronDown, MapPin } from "lucide-react";
import { eventConfig } from "@/config/event";
import { getGoogleCalendarUrl, downloadIcsFile } from "@/utils/calendar";

/** Tiny sacred flared cross finial to crown the Date & Time opening moment */
function SacredCrossFinial() {
  return (
    <div className="flex items-center justify-center mb-3 opacity-75" aria-hidden="true">
      <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
        <path
          d="M6.3 1C6.3 0.6 6.6 0.3 7 0.3C7.4 0.3 7.7 0.6 7.7 1V5.3H12C12.4 5.3 12.7 5.6 12.7 6C12.7 6.4 12.4 6.7 12 6.7H7.7V19C7.7 19.4 7.4 19.7 7 19.7C6.6 19.7 6.3 19.4 6.3 19V6.7H2C1.6 6.7 1.3 6.4 1.3 6C1.3 5.6 1.6 5.3 2 5.3H6.3V1Z"
          fill="#C9A96E"
        />
        <circle cx="7" cy="6" r="0.75" fill="#C9A96E" />
      </svg>
    </div>
  );
}

/** Classical stationery line-art church silhouette ornament */
function ChurchStationeryMark() {
  return (
    <div className="mb-2.5 opacity-80" aria-hidden="true">
      <svg width="34" height="36" viewBox="0 0 34 36" fill="none" className="mx-auto">
        {/* Cross atop spire */}
        <line x1="17" y1="2" x2="17" y2="7.5" stroke="#C9A96E" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="14.8" y1="4.2" x2="19.2" y2="4.2" stroke="#C9A96E" strokeWidth="0.8" strokeLinecap="round" />
        {/* Slender spire */}
        <path d="M17 7.5L12.5 17H21.5L17 7.5Z" stroke="#C9A96E" strokeWidth="0.75" strokeLinejoin="round" opacity="0.85" />
        {/* Belfry tower */}
        <rect x="13.5" y="17" width="7" height="5.5" stroke="#C9A96E" strokeWidth="0.7" opacity="0.8" />
        <path d="M15.5 21V19C15.5 18.2 16.2 17.6 17 17.6C17.8 17.6 18.5 18.2 18.5 19V21" stroke="#8FA58A" strokeWidth="0.65" opacity="0.75" />
        {/* Main Gable Roof */}
        <path d="M6.5 25L17 19.5L27.5 25" stroke="#C9A96E" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
        {/* Side Walls */}
        <line x1="8.5" y1="25" x2="8.5" y2="33.5" stroke="#C9A96E" strokeWidth="0.7" opacity="0.8" />
        <line x1="25.5" y1="25" x2="25.5" y2="33.5" stroke="#C9A96E" strokeWidth="0.7" opacity="0.8" />
        {/* Arched Sanctuary Portal */}
        <path d="M14.5 33.5V27.5C14.5 26 15.6 25 17 25C18.4 25 19.5 26 19.5 27.5V33.5" stroke="#C9A96E" strokeWidth="0.75" opacity="0.9" />
        {/* Base step */}
        <line x1="5" y1="33.5" x2="29" y2="33.5" stroke="#C9A96E" strokeWidth="0.75" strokeLinecap="round" opacity="0.7" />
      </svg>
    </div>
  );
}

/** Celebratory botanical laurel emblem crowning the reception block */
function ReceptionStationeryMark() {
  return (
    <div className="mb-2.5 opacity-80" aria-hidden="true">
      <svg width="32" height="20" viewBox="0 0 32 20" fill="none" className="mx-auto">
        {/* Left celebratory laurel sprig */}
        <path d="M16 16C12 12.5 7.5 11.5 3 13C6.5 9.5 11 10.5 16 16Z" fill="#8FA58A" fillOpacity="0.75" />
        <path d="M16 16C12.5 9 9 5.5 4.5 4.5C7.5 3.5 12 4.5 16 16Z" fill="#8FA58A" fillOpacity="0.6" />
        {/* Right celebratory laurel sprig */}
        <path d="M16 16C20 12.5 24.5 11.5 29 13C25.5 9.5 21 10.5 16 16Z" fill="#8FA58A" fillOpacity="0.75" />
        <path d="M16 16C19.5 9 23 5.5 27.5 4.5C24.5 3.5 20 4.5 16 16Z" fill="#8FA58A" fillOpacity="0.6" />
        {/* Center golden pearl */}
        <circle cx="16" cy="16" r="1.3" fill="#C9A96E" />
        <circle cx="16" cy="7" r="1" fill="#C9A96E" fillOpacity="0.7" />
      </svg>
    </div>
  );
}

/** Editorial Divider 1: Olive sprig with gold hairlines and generous whitespace */
function BotanicalOliveDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-8 sm:my-10" aria-hidden="true">
      <div className="w-14 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-[#C9A96E]/20" />
      <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-[#8FA58A]">
        <path d="M12 6C9 3 5 3.5 1.5 6C5 7.5 8.5 8 12 6Z" fill="currentColor" fillOpacity="0.7" />
        <path d="M12 6C15 3 19 3.5 22.5 6C19 7.5 15.5 8 12 6Z" fill="currentColor" fillOpacity="0.7" />
        <circle cx="12" cy="6" r="1.2" fill="#C9A96E" />
      </svg>
      <div className="w-14 sm:w-20 h-[1px] bg-gradient-to-l from-transparent via-[#C9A96E]/50 to-[#C9A96E]/20" />
    </div>
  );
}

/** Editorial Divider 2: Geometric gold hairline with faceted diamond */
function DiamondFinialDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-8 sm:my-10" aria-hidden="true">
      <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/45 to-[#C9A96E]/20" />
      <div className="flex items-center gap-1.5 opacity-70">
        <div className="w-1 h-1 rotate-45 bg-[#C9A96E]" />
        <div className="w-1.5 h-1.5 rotate-45 border border-[#C9A96E] bg-white" />
        <div className="w-1 h-1 rotate-45 bg-[#C9A96E]" />
      </div>
      <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-l from-transparent via-[#C9A96E]/45 to-[#C9A96E]/20" />
    </div>
  );
}

/** Editorial Divider 3: Intimate gold heart and laurel motif */
function HeartLaurelDivider() {
  return (
    <div className="flex items-center justify-center gap-2.5 my-7 sm:my-8 opacity-75" aria-hidden="true">
      <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/45 to-transparent" />
      <svg width="24" height="14" viewBox="0 0 24 14" fill="none">
        <path d="M7 7C5 4.8 2 5.5 0.5 7C2 8 4.5 8.5 7 7Z" fill="#8FA58A" fillOpacity="0.7" />
        <path
          d="M12 11.2L11.1 10.38C7.9 7.48 5.8 5.58 5.8 3.25C5.8 1.35 7.3 0 9.2 0C10.25 0 11.25 0.5 12 1.3C12.75 0.5 13.75 0 14.8 0C16.7 0 18.2 1.35 18.2 3.25C18.2 5.58 16.1 7.48 12.9 10.38L12 11.2Z"
          transform="scale(0.8) translate(3.5, 1)"
          fill="#C9A96E"
          fillOpacity="0.85"
        />
        <path d="M17 7C19 4.8 22 5.5 23.5 7C22 8 19.5 8.5 17 7Z" fill="#8FA58A" fillOpacity="0.7" />
      </svg>
      <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent via-[#C9A96E]/45 to-transparent" />
    </div>
  );
}

export function CelebrationSection() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape or click outside
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isCalendarOpen) {
        setIsCalendarOpen(false);
        buttonRef.current?.focus();
      }
    }

    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsCalendarOpen(false);
      }
    }

    if (isCalendarOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isCalendarOpen]);

  const handleDownload = () => {
    downloadIcsFile();
    setIsCalendarOpen(false);
  };

  const googleUrl = getGoogleCalendarUrl();

  return (
    <section
      id="celebration"
      aria-label="Event Details"
      className="relative pt-12 sm:pt-16 pb-0 sm:pb-1 px-4 sm:px-6 max-w-xl mx-auto text-center"
    >
      {/* Background Soft Cream Gradient Wash */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F3EEE7]/60 to-transparent -z-10 pointer-events-none" 
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
        <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.34em] uppercase text-[#8FA58A] font-medium block mb-3">
          Service &amp; Gathering
        </span>

        {/* Tiny sacred flared cross finial crowning the date */}
        <SacredCrossFinial />

        {/* 1. DATE / TIME — Strong Typographic Opening Moment */}
        <div className="mb-2">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.65rem] text-[#2F3430] font-normal tracking-wide leading-tight mb-2 sm:mb-2.5">
            {eventConfig.baptism.date}
          </h2>
          <p className="font-sans text-xs sm:text-[13px] text-[#8FA58A] tracking-[0.28em] uppercase font-medium">
            {eventConfig.baptism.time}
          </p>
        </div>

        {/* Refined Divider 1: Olive sprig with champagne lines */}
        <BotanicalOliveDivider />

        {/* 2. HOLY BAPTISM / CHURCH — Stationery Line-Art Treatment */}
        <div className="flex flex-col items-center">
          <ChurchStationeryMark />
          <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#8FA58A] font-medium block mb-1.5">
            Holy Baptism
          </span>
          <p className="font-serif text-2xl sm:text-3xl text-[#2F3430] tracking-wide font-normal mb-1">
            {eventConfig.baptism.churchName}
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#2F3430]/70 tracking-[0.25em] uppercase font-light mb-3">
            {eventConfig.baptism.churchAddress}
          </p>
          {eventConfig.baptism.googleMapsUrl && (
            <a
              id="church-directions-link"
              href={eventConfig.baptism.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get directions to ${eventConfig.baptism.churchName}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#C9A96E]/30 hover:border-[#C9A96E]/70 bg-white/60 hover:bg-white text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-sans text-[#8FA58A] hover:text-[#2F3430] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C9A96E]"
            >
              <MapPin className="w-3 h-3 text-[#C9A96E]" aria-hidden="true" />
              <span>Get Directions</span>
            </a>
          )}
        </div>

        {/* Refined Divider 2: Geometric gold hairline with faceted diamond */}
        <DiamondFinialDivider />

        {/* 3. AFTER BAPTISM / KRK HALL — Celebratory Botanical Treatment */}
        <div className="flex flex-col items-center">
          <ReceptionStationeryMark />
          <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#8FA58A] font-medium block mb-1">
            {eventConfig.celebration.afterBaptismLabel || "After Baptism"}
          </span>
          <p className="font-sans text-xs sm:text-sm text-[#8FA58A] tracking-[0.25em] uppercase font-medium mb-1.5">
            {eventConfig.celebration.venueTime}
          </p>
          <p className="font-serif text-2xl sm:text-3xl text-[#2F3430] tracking-wide font-normal mb-1">
            {eventConfig.celebration.venueName}
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#2F3430]/70 tracking-[0.25em] uppercase font-light mb-3">
            {eventConfig.celebration.venueAddress}
          </p>
          {eventConfig.celebration.googleMapsUrl && (
            <a
              id="hall-directions-link"
              href={eventConfig.celebration.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get directions to ${eventConfig.celebration.venueName}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#C9A96E]/30 hover:border-[#C9A96E]/70 bg-white/60 hover:bg-white text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-sans text-[#8FA58A] hover:text-[#2F3430] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C9A96E]"
            >
              <MapPin className="w-3 h-3 text-[#C9A96E]" aria-hidden="true" />
              <span>Get Directions</span>
            </a>
          )}
        </div>

        {/* Refined Divider 3 & 4. ANNIVERSARY MESSAGE — Warm Handwritten Stationery Feel */}
        {eventConfig.anniversary?.celebrating && (
          <div className="w-full flex flex-col items-center">
            <HeartLaurelDivider />
            <div className="my-1 max-w-xs sm:max-w-sm mx-auto text-center">
              <p className="font-serif italic text-base sm:text-lg text-[#2F3430]/85 leading-relaxed tracking-wide font-normal whitespace-pre-line">
                {eventConfig.anniversary.message}
              </p>
            </div>
          </div>
        )}

        {/* 5. ADD TO CALENDAR — Unchanged functionality, seamless placement */}
        <div ref={containerRef} className="relative inline-flex flex-col items-center mt-5 mb-1">
          <button
            ref={buttonRef}
            id="add-to-calendar-btn"
            type="button"
            onClick={() => setIsCalendarOpen((prev) => !prev)}
            aria-expanded={isCalendarOpen}
            aria-haspopup="true"
            aria-controls="calendar-choice-menu"
            aria-label="Add celebration to calendar"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#C9A96E]/40 hover:border-[#C9A96E]/80 bg-white/80 hover:bg-white text-[11px] sm:text-xs tracking-[0.2em] uppercase font-sans font-medium text-[#2F3430] transition-all duration-300 shadow-xs cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C9A96E]"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C9A96E]" aria-hidden="true" />
            <span>Add to Calendar</span>
            <ChevronDown 
              className={`w-3 h-3 text-[#2F3430]/60 transition-transform duration-300 ${
                isCalendarOpen ? "rotate-180" : ""
              }`} 
              aria-hidden="true" 
            />
          </button>

          {/* Elegant Choice Dropdown UI */}
          <AnimatePresence>
            {isCalendarOpen && (
              <motion.div
                id="calendar-choice-menu"
                role="menu"
                aria-label="Calendar options"
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -4, scale: 0.98 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="absolute top-full mt-3 z-30 w-64 sm:w-72 bg-[#FAF7F2] rounded-xl border border-[#C9A96E]/35 shadow-[0_10px_28px_rgba(47,52,48,0.08)] p-2 text-left"
              >
                {/* Subtle Inner Hairline Frame */}
                <div 
                  className="absolute inset-1 border border-[#C9A96E]/15 rounded-lg pointer-events-none" 
                  aria-hidden="true" 
                />

                <div className="relative flex flex-col gap-1 z-10">
                  {/* Google Calendar Option */}
                  <a
                    role="menuitem"
                    href={googleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsCalendarOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-sans text-[#2F3430] hover:bg-white hover:text-[#2F3430] transition-all duration-200 border border-transparent hover:border-[#C9A96E]/25 group focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#C9A96E]"
                  >
                    <span className="font-medium tracking-wide">Google Calendar</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#C9A96E] opacity-75 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </a>

                  {/* Divider line */}
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent my-0.5" />

                  {/* Download ICS Option */}
                  <button
                    role="menuitem"
                    type="button"
                    onClick={handleDownload}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-sans text-[#2F3430] hover:bg-white hover:text-[#2F3430] transition-all duration-200 border border-transparent hover:border-[#C9A96E]/25 group cursor-pointer focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#C9A96E]"
                  >
                    <span className="font-medium tracking-wide">Download Calendar (.ics)</span>
                    <Download className="w-3.5 h-3.5 text-[#C9A96E] opacity-75 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
