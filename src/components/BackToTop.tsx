"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronUp } from "lucide-react";

interface BackToTopProps {
  isOpened?: boolean;
}

export function BackToTop({ isOpened = true }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpened) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsVisible(window.scrollY > 500);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpened]);

  const scrollToTop = () => {
    if (typeof window === "undefined") return;

    const isReduced =
      Boolean(shouldReduceMotion) ||
      (typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    window.scrollTo({
      top: 0,
      behavior: isReduced ? "instant" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isOpened && isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="pointer-events-auto relative flex items-center justify-center p-2.5 rounded-full bg-[#FAF7F2]/95 backdrop-blur-md border border-[#C9A96E]/40 hover:border-[#C9A96E]/80 text-[#C9A96E] hover:text-[#B5955B] shadow-[0_6px_20px_rgba(47,52,48,0.08)] transition-all duration-300 cursor-pointer active:scale-95 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A96E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2]"
        >
          <ChevronUp className="w-4 h-4 stroke-[1.75]" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
