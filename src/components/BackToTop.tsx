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
    <div
      className="fixed bottom-[calc(4.75rem+env(safe-area-inset-bottom,0px))] right-[calc(1.25rem+env(safe-area-inset-right,0px))] sm:bottom-22 sm:right-6 z-40 select-none pointer-events-none"
    >
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
            className="pointer-events-auto relative flex items-center justify-center w-8 h-8 rounded-full bg-[#FAF7F2]/95 border border-[#C9A96E]/40 hover:border-[#C9A96E]/80 text-[#C9A96E] hover:text-[#B5955B] shadow-2xs transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A96E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] active:scale-95 before:absolute before:-inset-2 before:content-['']"
          >
            <ChevronUp className="w-4 h-4 stroke-[1.75]" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
