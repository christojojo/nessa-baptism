"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Download, ExternalLink, ChevronDown, MapPin, Heart } from "lucide-react";
import { BotanicalSprig } from "../decorations/BotanicalSprig";
import { eventConfig } from "@/config/event";
import { getGoogleCalendarUrl, downloadIcsFile } from "@/utils/calendar";

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
      className="relative pt-12 sm:pt-16 pb-4 sm:pb-6 px-4 sm:px-6 max-w-xl mx-auto text-center"
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
        <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-[#8FA58A] font-medium block mb-2">
          Service &amp; Gathering
        </span>

        {/* Section Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2F3430] font-normal tracking-wide mb-6">
          The Celebration
        </h2>

        {/* Fine Gold Separator */}
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/60 to-transparent mb-10" />

        {/* Date & Time Hierarchy */}
        <div className="space-y-2 mb-8">
          <p className="font-serif text-2xl sm:text-3xl text-[#2F3430] tracking-wide font-normal">
            {eventConfig.baptism.date}
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#8FA58A] tracking-[0.25em] uppercase font-medium">
            {eventConfig.baptism.time}
          </p>
        </div>

        {/* Delicate Printed Botanical Flourish */}
        <div className="my-6 opacity-75">
          <BotanicalSprig variant="horizontal" className="w-24 sm:w-28" />
        </div>

        {/* Church & Baptism Service Hierarchy */}
        <div className="space-y-1.5 mb-8 flex flex-col items-center">
          <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-[#8FA58A] font-medium">
            Holy Baptism
          </span>
          <p className="font-serif text-2xl sm:text-3xl text-[#2F3430] tracking-wide font-normal">
            {eventConfig.baptism.churchName}
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#2F3430]/70 tracking-[0.25em] uppercase font-light">
            {eventConfig.baptism.churchAddress}
          </p>
          {eventConfig.baptism.googleMapsUrl && (
            <a
              id="church-directions-link"
              href={eventConfig.baptism.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get directions to ${eventConfig.baptism.churchName}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#C9A96E]/30 hover:border-[#C9A96E]/70 bg-white/60 hover:bg-white text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-sans text-[#8FA58A] hover:text-[#2F3430] transition-all duration-300 mt-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C9A96E]"
            >
              <MapPin className="w-3 h-3 text-[#C9A96E]" aria-hidden="true" />
              <span>Get Directions</span>
            </a>
          )}
        </div>

        {/* Subtle Decorative Separator between Church and Reception */}
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent my-6" aria-hidden="true" />

        {/* Hall & Reception Hierarchy */}
        <div className="space-y-1.5 mb-8 flex flex-col items-center">
          <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-[#8FA58A] font-medium">
            {eventConfig.celebration.afterBaptismLabel || "After Baptism"}
          </span>
          <p className="font-sans text-xs sm:text-sm text-[#8FA58A] tracking-[0.25em] uppercase font-medium mb-1">
            {eventConfig.celebration.venueTime}
          </p>
          <p className="font-serif text-2xl sm:text-3xl text-[#2F3430] tracking-wide font-normal">
            {eventConfig.celebration.venueName}
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#2F3430]/70 tracking-[0.25em] uppercase font-light">
            {eventConfig.celebration.venueAddress}
          </p>
          {eventConfig.celebration.googleMapsUrl && (
            <a
              id="hall-directions-link"
              href={eventConfig.celebration.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get directions to ${eventConfig.celebration.venueName}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#C9A96E]/30 hover:border-[#C9A96E]/70 bg-white/60 hover:bg-white text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-sans text-[#8FA58A] hover:text-[#2F3430] transition-all duration-300 mt-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C9A96E]"
            >
              <MapPin className="w-3 h-3 text-[#C9A96E]" aria-hidden="true" />
              <span>Get Directions</span>
            </a>
          )}
        </div>

        {/* Understated Wedding Anniversary Blessing */}
        {eventConfig.anniversary?.celebrating && (
          <div className="mt-2 mb-8 max-w-xs sm:max-w-sm mx-auto text-center space-y-1.5">
            <div className="flex items-center justify-center gap-2 mb-1.5 opacity-60">
              <div className="w-8 h-[1px] bg-[#C9A96E]/40" />
              <Heart className="w-2.5 h-2.5 text-[#C9A96E] fill-current" aria-hidden="true" />
              <div className="w-8 h-[1px] bg-[#C9A96E]/40" />
            </div>
            <p className="font-serif italic text-sm sm:text-base text-[#2F3430]/80 leading-relaxed whitespace-pre-line font-normal">
              {eventConfig.anniversary.message}
            </p>
          </div>
        )}

        {/* Add to Calendar Section */}
        <div ref={containerRef} className="relative inline-flex flex-col items-center mt-2">
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
