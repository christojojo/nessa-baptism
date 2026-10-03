import React from "react";

interface CrossProps {
  className?: string;
  size?: number;
}

export function Cross({ className = "text-champagne-gold", size = 24 }: CrossProps) {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 20 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Subtle classical Christian cross with flared ends */}
      <path
        d="M9.25 1.5C9.25 1.08579 9.58579 0.75 10 0.75C10.4142 0.75 10.75 1.08579 10.75 1.5V7.25H16.5C16.9142 7.25 17.25 7.58579 17.25 8C17.25 8.41421 16.9142 8.75 16.5 8.75H10.75V26.5C10.75 26.9142 10.4142 27.25 10 27.25C9.58579 27.25 9.25 26.9142 9.25 26.5V8.75H3.5C3.08579 8.75 2.75 8.41421 2.75 8C2.75 7.58579 3.08579 7.25 3.5 7.25H9.25V1.5Z"
        fill="currentColor"
      />
      {/* Tiny center jewel accent */}
      <circle cx="10" cy="8" r="0.75" fill="currentColor" fillOpacity="0.8" />
    </svg>
  );
}
