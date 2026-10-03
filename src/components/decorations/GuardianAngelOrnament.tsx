import React from "react";

interface GuardianAngelOrnamentProps {
  className?: string;
  size?: number;
}

/**
 * An ultra-fine, classical Christian line-art guardian angel illustration
 * designed specifically for luxury stationery watermark ornamentation.
 * Faint, graceful, architectural line work (wings, halo, gentle blessing posture).
 */
export function GuardianAngelOrnament({ className = "", size = 120 }: GuardianAngelOrnamentProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Delicate Golden Halo */}
      <ellipse
        cx="50"
        cy="22"
        rx="14"
        ry="4.5"
        stroke="#C9A96E"
        strokeWidth="0.75"
        strokeDasharray="1.5 2"
        opacity="0.8"
      />

      {/* Serene Head Contour */}
      <path
        d="M47 24C47 21.5 48.5 19 50 19C51.5 19 53 21.5 53 24C53 27 51.8 28.5 50 28.5C48.2 28.5 47 27 47 24Z"
        stroke="#C9A96E"
        strokeWidth="0.7"
        opacity="0.7"
      />

      {/* Seraphic Left Wing (Graceful sweeping feathered curves) */}
      <path
        d="M44 32C37 25 24 23 15 28C22 34 29 40 38 43"
        stroke="#C9A96E"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.65"
      />
      <path
        d="M40 37C32 30 20 33 13 41C20 45 28 47 36 49"
        stroke="#C9A96E"
        strokeWidth="0.65"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M37 45C30 40 21 44 16 53C22 55 29 55 35 55"
        stroke="#C9A96E"
        strokeWidth="0.6"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* Seraphic Right Wing (Graceful sweeping feathered curves) */}
      <path
        d="M56 32C63 25 76 23 85 28C78 34 71 40 62 43"
        stroke="#C9A96E"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.65"
      />
      <path
        d="M60 37C68 30 80 33 87 41C80 45 72 47 64 49"
        stroke="#C9A96E"
        strokeWidth="0.65"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M63 45C70 40 79 44 84 53C78 55 71 55 65 55"
        stroke="#C9A96E"
        strokeWidth="0.6"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* Flowing Gown & Prayer Posture Silhouette */}
      <path
        d="M48 30C46 36 43 45 40 60C38 70 35 84 33 90C43 92 57 92 67 90C65 84 62 70 60 60C57 45 54 36 52 30"
        stroke="#C9A96E"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Gentle Robe Fold Lines */}
      <path
        d="M47 48C46 58 45 74 44 89"
        stroke="#C9A96E"
        strokeWidth="0.5"
        strokeDasharray="2 3"
        opacity="0.4"
      />
      <path
        d="M53 48C54 58 55 74 56 89"
        stroke="#C9A96E"
        strokeWidth="0.5"
        strokeDasharray="2 3"
        opacity="0.4"
      />

      {/* Revering Hands in Prayer */}
      <path
        d="M48 37C49.5 35 50.5 35 52 37L50 43Z"
        stroke="#8FA58A"
        strokeWidth="0.65"
        strokeLinejoin="round"
        opacity="0.75"
      />

      {/* Delicate tiny olive sprig at the base */}
      <path
        d="M42 92C46 90.5 54 90.5 58 92"
        stroke="#8FA58A"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="45" cy="91" r="1.2" fill="#8FA58A" opacity="0.6" />
      <circle cx="55" cy="91" r="1.2" fill="#8FA58A" opacity="0.6" />
      <circle cx="50" cy="90" r="1" fill="#C9A96E" opacity="0.7" />
    </svg>
  );
}
