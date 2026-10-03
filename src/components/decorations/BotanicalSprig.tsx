import React from "react";

interface BotanicalProps {
  className?: string;
  variant?: "horizontal" | "sprig" | "divider" | "corner" | "flourish";
}

export function BotanicalSprig({ className = "", variant = "sprig" }: BotanicalProps) {
  if (variant === "divider") {
    return (
      <div className={`flex items-center justify-center gap-3 my-6 ${className}`} aria-hidden="true">
        <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-[#C9A96E]/20" />
        <svg width="28" height="16" viewBox="0 0 28 16" fill="none" className="text-[#8FA58A]">
          {/* Subtle printed olive leaves with tiny champagne gold dot */}
          <path
            d="M14 8C10.5 4.5 6 5.5 2 8C6 9.5 9.5 10.5 14 8Z"
            fill="currentColor"
            fillOpacity="0.75"
          />
          <path
            d="M14 8C17.5 4.5 22 5.5 26 8C22 9.5 18.5 10.5 14 8Z"
            fill="currentColor"
            fillOpacity="0.75"
          />
          {/* Tiny blush bud */}
          <circle cx="14" cy="8" r="1.5" fill="#DDB9B2" />
          <circle cx="14" cy="8" r="0.8" fill="#C9A96E" />
        </svg>
        <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent via-[#C9A96E]/50 to-[#C9A96E]/20" />
      </div>
    );
  }

  if (variant === "flourish") {
    return (
      <div className={`flex items-center justify-center my-4 ${className}`} aria-hidden="true">
        <svg width="60" height="14" viewBox="0 0 60 14" fill="none">
          <line x1="0" y1="7" x2="22" y2="7" stroke="#C9A96E" strokeWidth="0.6" strokeDasharray="1.5 2" opacity="0.6" />
          <path d="M30 3C27 5.5 24 6 22 7C24 8 27 8.5 30 11C29 8 30 7 30 7C30 7 29 6 30 3Z" fill="#8FA58A" opacity="0.75" />
          <path d="M30 3C33 5.5 36 6 38 7C36 8 33 8.5 30 11C31 8 30 7 30 7C30 7 31 6 30 3Z" fill="#8FA58A" opacity="0.75" />
          <circle cx="30" cy="7" r="1.2" fill="#C9A96E" />
          <line x1="38" y1="7" x2="60" y2="7" stroke="#C9A96E" strokeWidth="0.6" strokeDasharray="1.5 2" opacity="0.6" />
        </svg>
      </div>
    );
  }

  if (variant === "horizontal") {
    return (
      <svg
        width="110"
        height="20"
        viewBox="0 0 110 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`text-[#8FA58A] ${className}`}
        aria-hidden="true"
      >
        <path
          d="M10 10C35 9.5 75 9.5 100 10"
          stroke="#C9A96E"
          strokeWidth="0.6"
          strokeLinecap="round"
          strokeDasharray="2 3"
          opacity="0.5"
        />
        <path d="M36 10C33 6.5 28 7.5 26 9.5C29 11 33 11 36 10Z" fill="currentColor" opacity="0.75" />
        <path d="M42 10C45 6.5 50 7.5 52 9.5C49 11 45 11 42 10Z" fill="currentColor" opacity="0.75" />
        <path d="M55 10C52 13 47 12 45 10C48 8.5 52 9 55 10Z" fill="#DDB9B2" opacity="0.7" />
        <path d="M68 10C65 6 60 7 58 8.5C61 10.5 65 11 68 10Z" fill="currentColor" opacity="0.75" />
        <path d="M74 10C77 13 82 13 84 10C81 9 77 9 74 10Z" fill="currentColor" opacity="0.75" />
        <circle cx="55" cy="10" r="1.2" fill="#C9A96E" />
      </svg>
    );
  }

  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-[#8FA58A] ${className}`}
      aria-hidden="true"
    >
      <path
        d="M22 6C22 15 20 26 13 36"
        stroke="#C9A96E"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path d="M22 9C19 7 14 9 15 13C18 13 21 11 22 9Z" fill="currentColor" opacity="0.75" />
      <path d="M22 14C25 12 30 14 29 18C26 18 23 16 22 14Z" fill="currentColor" opacity="0.75" />
      <path d="M21 20C18 18 13 20 14 24C17 24 20 22 21 20Z" fill="#DDB9B2" opacity="0.8" />
      <path d="M19 26C22 24 27 26 26 30C23 30 20 28 19 26Z" fill="currentColor" opacity="0.75" />
      <path d="M16 32C13 31 9 33 10 36C13 36 15 34 16 32Z" fill="currentColor" opacity="0.75" />
    </svg>
  );
}
