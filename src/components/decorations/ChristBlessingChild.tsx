import React from "react";

interface ChristBlessingChildProps {
  className?: string;
  width?: number;
  height?: number;
}

/**
 * A delicate, classical Christian line-art illustration representing
 * Christ welcoming and blessing a little child ("Let the little children come to me...").
 * Typeset in ultra-thin champagne-gold (#C9A96E) and soft sage (#8FA58A) lines
 * in the style of antique letterpress religious engravings on luxury stationery.
 */
export function ChristBlessingChild({
  className = "",
  width = 135,
  height = 118,
}: ChristBlessingChildProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="14 4 122 126"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 1. Sacred Luminous Halo of Christ */}
      <ellipse
        cx="58"
        cy="21"
        rx="16"
        ry="16"
        stroke="#C9A96E"
        strokeWidth="0.8"
        opacity="0.8"
      />
      <ellipse
        cx="58"
        cy="21"
        rx="13.5"
        ry="13.5"
        stroke="#C9A96E"
        strokeWidth="0.5"
        strokeDasharray="1.5 2"
        opacity="0.5"
      />

      {/* 2. Gentle Dignified Head & Serene Profile of Christ */}
      {/* Back of head & neckline */}
      <path
        d="M58 13C52.5 13 48.5 17 48.5 22.5C48.5 27.5 52 31.5 56.5 32.5"
        stroke="#C9A96E"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Profile facing right toward child: forehead, nose, gentle lips, chin */}
      <path
        d="M57 14C61 15 64 18 64 21C64 21.8 63.5 22.4 63 23C63.6 23.4 63.6 24.2 63 24.8C63.3 25.5 62.6 26.2 61.6 26.5C60.2 27.5 58.8 29.5 58.8 32.5"
        stroke="#C9A96E"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      {/* Gentle flowing hair resting on shoulder */}
      <path
        d="M52 17C49.5 22 47.5 28 51.5 34C52.5 36 53.5 38 51.5 41"
        stroke="#C9A96E"
        strokeWidth="0.6"
        opacity="0.6"
      />
      <path
        d="M55 19C52.5 24 50.5 30 53.5 35"
        stroke="#C9A96E"
        strokeWidth="0.55"
        opacity="0.5"
      />

      {/* 3. Christ's Right Arm Extended in Gentle Blessing */}
      {/* Robe sleeve flowing from shoulder toward elbow */}
      <path
        d="M64 33C72 38.5 79 43 84 46"
        stroke="#C9A96E"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M61 41C69 45.5 76 47.5 81 49.5"
        stroke="#C9A96E"
        strokeWidth="0.7"
        opacity="0.7"
      />
      {/* Sleeve cuff fold */}
      <path
        d="M84 46C83 47.8 82 48.8 81 49.5"
        stroke="#C9A96E"
        strokeWidth="0.6"
        opacity="0.6"
      />
      {/* Forearm and Hand of Benediction extending over the child */}
      <path
        d="M83 47C87 49 92 50 97 51"
        stroke="#C9A96E"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Fingers arching gently in blessing over the child's head */}
      <path
        d="M97 51C100 51.5 103 52.5 105 54.5C103 55.5 100 55 97 54"
        stroke="#8FA58A"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      <path
        d="M96 53C99 54 102 55 103 56.5"
        stroke="#8FA58A"
        strokeWidth="0.65"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* 4. Christ's Left Arm Folded Gently at Chest / Mantle */}
      <path
        d="M47 36C41 44 39 54 39 67"
        stroke="#C9A96E"
        strokeWidth="0.75"
        opacity="0.75"
      />
      <path
        d="M47 36C55 40 61 46 65 53"
        stroke="#C9A96E"
        strokeWidth="0.7"
        opacity="0.7"
      />
      {/* Hand resting near heart */}
      <path
        d="M65 53C67 52 69 53 70 55C69 57 67 58 65 57"
        stroke="#8FA58A"
        strokeWidth="0.65"
        opacity="0.8"
      />

      {/* 5. Classical Robes & Mantle of Christ */}
      {/* Flowing back drapery */}
      <path
        d="M39 67C37 84 35 103 33 123"
        stroke="#C9A96E"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Front mantle line */}
      <path
        d="M65 57C71 71 72 91 69 123"
        stroke="#C9A96E"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Interior delicate drape folds */}
      <path
        d="M45 49C43 69 41 93 39 123"
        stroke="#C9A96E"
        strokeWidth="0.5"
        strokeDasharray="2.5 3"
        opacity="0.45"
      />
      <path
        d="M53 54C51 74 49 97 47 123"
        stroke="#C9A96E"
        strokeWidth="0.55"
        opacity="0.5"
      />
      <path
        d="M61 59C61 79 59 101 57 123"
        stroke="#C9A96E"
        strokeWidth="0.55"
        opacity="0.5"
      />
      {/* Hem of Christ's tunic */}
      <path
        d="M33 123C45 125 57 125 69 123"
        stroke="#C9A96E"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* 6. The Little Child Welcomed by Christ */}
      {/* Subtle innocent halo around child */}
      <ellipse
        cx="105"
        cy="62"
        rx="9.5"
        ry="9.5"
        stroke="#C9A96E"
        strokeWidth="0.65"
        opacity="0.7"
      />
      <ellipse
        cx="105"
        cy="62"
        rx="8"
        ry="8"
        stroke="#C9A96E"
        strokeWidth="0.4"
        strokeDasharray="1.5 1.5"
        opacity="0.4"
      />

      {/* Child's head & sweet profile looking up with trust */}
      {/* Back of head */}
      <path
        d="M105 57C110 57 113 61 113 65C113 69 110 73 106 74"
        stroke="#C9A96E"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Profile facing left toward Christ's face and hand */}
      <path
        d="M105 58C102 59 99.5 62 99.5 65C99.5 66 100 66.5 99.5 67C99 67.5 99.5 68.5 100 69C100.5 70 101.5 71.5 103.5 73"
        stroke="#C9A96E"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      {/* Hair curls */}
      <path
        d="M107 60C110 62 112 66 110 70"
        stroke="#C9A96E"
        strokeWidth="0.55"
        opacity="0.55"
      />

      {/* Child's small hands raised gently in trust/blessing */}
      <path
        d="M102 75C99 74 96 72 94 69"
        stroke="#8FA58A"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M100 78C97 77 94 75 93 71"
        stroke="#8FA58A"
        strokeWidth="0.65"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M94 69C93 68 93 70 93 71"
        stroke="#8FA58A"
        strokeWidth="0.6"
        opacity="0.75"
      />

      {/* Child's simple tunic */}
      {/* Front line */}
      <path
        d="M99 76C96 89 93 106 91 123"
        stroke="#C9A96E"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Back line */}
      <path
        d="M107 75C111 89 114 106 115 123"
        stroke="#C9A96E"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Center fold */}
      <path
        d="M103 79C102 93 102 108 103 123"
        stroke="#C9A96E"
        strokeWidth="0.5"
        strokeDasharray="2 2"
        opacity="0.45"
      />
      {/* Child's hem */}
      <path
        d="M91 123C99 124.5 107 124.5 115 123"
        stroke="#C9A96E"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* 7. Tiny Sacred Rays Descending from Blessing Hand */}
      <line
        x1="96"
        y1="57"
        x2="97"
        y2="64"
        stroke="#C9A96E"
        strokeWidth="0.6"
        strokeDasharray="1.5 2"
        opacity="0.6"
      />
      <line
        x1="100"
        y1="57"
        x2="102"
        y2="64"
        stroke="#C9A96E"
        strokeWidth="0.6"
        strokeDasharray="1.5 2"
        opacity="0.6"
      />
      <line
        x1="92"
        y1="55"
        x2="92"
        y2="63"
        stroke="#C9A96E"
        strokeWidth="0.6"
        strokeDasharray="1.5 2"
        opacity="0.5"
      />

      {/* 8. Peaceful Baseline & Delicate Olive Foliage */}
      <path
        d="M24 125C43 123 103 123 124 125"
        stroke="#8FA58A"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Left olive sprigs */}
      <path
        d="M26 124C24 121 20 122 18 124C21 125.5 24 125.5 26 124Z"
        fill="#8FA58A"
        opacity="0.65"
      />
      <path
        d="M33 124C32 120 28 121 26 124C28 125.5 31 125.5 33 124Z"
        fill="#8FA58A"
        opacity="0.65"
      />
      {/* Right olive sprigs */}
      <path
        d="M115 124C117 121 121 122 123 124C120 125.5 117 125.5 115 124Z"
        fill="#8FA58A"
        opacity="0.65"
      />
      <path
        d="M122 124C124 120 128 121 130 124C127 125.5 124 125.5 122 124Z"
        fill="#8FA58A"
        opacity="0.65"
      />
      {/* Center Sacred Accent Dot */}
      <circle cx="75" cy="124" r="1.3" fill="#C9A96E" opacity="0.75" />
    </svg>
  );
}
