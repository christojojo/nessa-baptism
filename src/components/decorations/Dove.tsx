import React from "react";

interface DoveProps {
  className?: string;
  size?: number;
}

export function Dove({ className = "text-champagne-gold", size = 28 }: DoveProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Delicate Holy Spirit peace dove in flight carrying a tiny olive branch */}
      <path
        d="M16 7C14.5 9 12 11 8 11.5C10 13.5 13 14 15 13.5C14 16 12 19 9 21C13 20 17 18 19 15C21 16 24 16.5 27 16C25 14.5 23 13 21 12C23 10 25.5 8 28 6C24 6.5 20.5 8 18 10C17.5 8.8 17 7.8 16 7Z"
        fill="currentColor"
        fillOpacity="0.85"
      />
      {/* Tiny olive leaf in beak */}
      <path
        d="M7.5 11.8C6 11 5 11.5 4 12C5 12.8 6 12.6 7 12.2"
        stroke="#8FA58A"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <circle cx="5" cy="11.5" r="0.8" fill="#8FA58A" />
    </svg>
  );
}
