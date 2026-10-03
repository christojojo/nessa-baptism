import React from "react";

interface GuardianAngelBlessingProps {
  className?: string;
  size?: number;
}

/**
 * A delicate, classical Christian line-art illustration of an angel extending
 * a gentle blessing over a little child, designed specifically for luxury
 * baptism stationery watermark ornamentation.
 * Fine, elegant line work in champagne gold and soft sage tones.
 */
export function GuardianAngelBlessing({
  className = "",
  size = 140,
}: GuardianAngelBlessingProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Radiant Ethereal Halo above Angel */}
      <ellipse
        cx="72"
        cy="32"
        rx="18"
        ry="6"
        stroke="#C9A96E"
        strokeWidth="0.8"
        strokeDasharray="2 2"
        opacity="0.75"
      />

      {/* Gentle Angel Head & Face in Compassionate Profile */}
      <path
        d="M68 34C68 30 71 27 75 27C78 27 80 29.5 80 33C80 36.5 78 39 74.5 39C71 39 68 37 68 34Z"
        stroke="#C9A96E"
        strokeWidth="0.75"
        opacity="0.8"
      />
      {/* Soft hairline / veil curl */}
      <path
        d="M72 30C75 32 77 34 76 37"
        stroke="#C9A96E"
        strokeWidth="0.6"
        opacity="0.6"
      />

      {/* Sweeping Left Seraph Wing */}
      <path
        d="M66 42C56 32 38 28 24 34C34 42 45 50 58 56"
        stroke="#C9A96E"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M62 48C50 39 34 41 22 51C33 56 44 60 56 63"
        stroke="#C9A96E"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M58 57C47 50 35 55 26 67C36 70 47 70 56 70"
        stroke="#C9A96E"
        strokeWidth="0.65"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Sweeping Right Wing in Graceful Arc */}
      <path
        d="M82 42C94 32 114 28 130 34C118 42 105 50 90 56"
        stroke="#C9A96E"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M86 48C100 39 118 41 132 51C119 56 106 60 92 63"
        stroke="#C9A96E"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M90 57C103 50 117 55 128 67C116 70 103 70 92 70"
        stroke="#C9A96E"
        strokeWidth="0.65"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Flowing Gown & Blessing Posture */}
      <path
        d="M71 40C68 47 64 62 58 84C55 96 50 114 46 124C60 127 88 127 102 124C98 114 93 96 90 84C84 62 80 47 77 40"
        stroke="#C9A96E"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.75"
      />
      {/* Soft folds of the tunic */}
      <path
        d="M68 64C66 78 64 98 62 122"
        stroke="#C9A96E"
        strokeWidth="0.55"
        strokeDasharray="2 3"
        opacity="0.45"
      />
      <path
        d="M80 64C82 78 84 98 86 122"
        stroke="#C9A96E"
        strokeWidth="0.55"
        strokeDasharray="2 3"
        opacity="0.45"
      />

      {/* Gentle Extended Arms & Hands of Blessing */}
      <path
        d="M68 49C73 53 78 57 82 59"
        stroke="#C9A96E"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M72 50C77 56 81 61 84 62"
        stroke="#C9A96E"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Hands held in gentle blessing arc */}
      <path
        d="M82 59C86 58 89 60 91 63"
        stroke="#8FA58A"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M84 62C88 62 90 64 92 66"
        stroke="#8FA58A"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Small Peaceful Child in Loving Protection below */}
      {/* Baby / Child Silhouette */}
      <ellipse
        cx="88"
        cy="94"
        rx="7"
        ry="8"
        stroke="#C9A96E"
        strokeWidth="0.75"
        opacity="0.75"
      />
      <ellipse
        cx="88"
        cy="83"
        rx="5.5"
        ry="2"
        stroke="#C9A96E"
        strokeWidth="0.6"
        strokeDasharray="1.5 2"
        opacity="0.6"
      />
      {/* Baby swaddling / cradle curves */}
      <path
        d="M81 96C81 106 85 114 96 114C102 114 105 108 105 101C105 96 100 93 94 93"
        stroke="#C9A96E"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Tiny Sacred Light Rays descending from blessing hands */}
      <line x1="86" y1="68" x2="88" y2="76" stroke="#C9A96E" strokeWidth="0.6" strokeDasharray="1.5 2" opacity="0.6" />
      <line x1="91" y1="68" x2="94" y2="77" stroke="#C9A96E" strokeWidth="0.6" strokeDasharray="1.5 2" opacity="0.6" />
      <line x1="82" y1="66" x2="82" y2="74" stroke="#C9A96E" strokeWidth="0.6" strokeDasharray="1.5 2" opacity="0.5" />

      {/* Decorative Botanical Olive Sprigs Framing the Base */}
      <path
        d="M48 126C58 124 70 125 78 128"
        stroke="#8FA58A"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M70 128C78 125 90 124 100 126"
        stroke="#8FA58A"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Leaves on left */}
      <path d="M54 125C52 121 47 122 45 125C48 127 52 127 54 125Z" fill="#8FA58A" opacity="0.6" />
      <path d="M64 125C63 129 68 131 71 128C70 125 66 124 64 125Z" fill="#8FA58A" opacity="0.6" />
      {/* Leaves on right */}
      <path d="M84 125C86 129 91 131 94 128C93 125 89 124 84 125Z" fill="#8FA58A" opacity="0.6" />
      <path d="M94 125C96 121 101 122 103 125C100 127 96 127 94 125Z" fill="#8FA58A" opacity="0.6" />

      {/* Center Sacred Accent Dot */}
      <circle cx="74" cy="126" r="1.5" fill="#C9A96E" opacity="0.75" />
    </svg>
  );
}
