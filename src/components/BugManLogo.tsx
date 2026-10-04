import React from 'react';

interface BugManLogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  inverted?: boolean;
}

export const BugManLogo: React.FC<BugManLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  inverted = false
}) => {
  const sizeMap = {
    sm: { icon: 36, text: 'text-base', sub: 'text-[9px]' },
    md: { icon: 50, text: 'text-xl', sub: 'text-[11px]' },
    lg: { icon: 66, text: 'text-2xl', sub: 'text-xs' },
    xl: { icon: 96, text: 'text-4xl', sub: 'text-sm' }
  };

  const currentSize = sizeMap[size];

  // SVG Mascot illustration matching the exact color scheme of the user's Logo.png
  // Palette: Deep Charcoal (#17181C), Warm Vintage Camel/Tan (#C59B56 & #B88B4A),
  // Bone / Off-White (#F6F3EC), Light Gold (#E0B76F)
  const MascotIcon = (
    <svg
      width={currentSize.icon}
      height={currentSize.icon * 1.25}
      viewBox="0 0 100 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-200 group-hover:scale-105"
      aria-label="BugMan Mascot"
    >
      {/* Outer circular badge frame */}
      <circle
        cx="50"
        cy="45"
        r="40"
        fill={inverted ? '#1a1d24' : '#faf7f2'}
        stroke={inverted ? '#c59b56' : '#1e2025'}
        strokeWidth="2.5"
      />
      <circle
        cx="50"
        cy="45"
        r="36"
        stroke={inverted ? '#c59b5640' : '#c59b5660'}
        strokeWidth="1.2"
        strokeDasharray="2 2"
      />

      {/* Radial engraved hatching lines */}
      <g stroke={inverted ? '#ffffff15' : '#1e202518'} strokeWidth="1">
        <line x1="50" y1="8" x2="50" y2="18" />
        <line x1="24" y1="18" x2="32" y2="26" />
        <line x1="76" y1="18" x2="68" y2="26" />
        <line x1="14" y1="45" x2="24" y2="45" />
        <line x1="86" y1="45" x2="76" y2="45" />
      </g>

      {/* Segmented Antennae */}
      <path
        d="M37 24 C 32 10, 22 5, 14 7"
        stroke={inverted ? '#e2d7c3' : '#1e2025'}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <circle cx="13" cy="7" r="2.2" fill="#c59b56" />
      <path
        d="M63 24 C 68 10, 78 5, 86 7"
        stroke={inverted ? '#e2d7c3' : '#1e2025'}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <circle cx="87" cy="7" r="2.2" fill="#c59b56" />

      {/* Baseball Cap Crown - Charcoal rear, Bone/Khaki front */}
      <path
        d="M30 30 C 33 16, 67 16, 70 30 Z"
        fill="#1e2025"
        stroke="#121316"
        strokeWidth="1.5"
      />
      <path
        d="M36 29 C 38 18, 62 18, 64 29 Z"
        fill="#f4efe6"
        stroke="#c59b56"
        strokeWidth="1"
      />

      {/* Cap Brim */}
      <path
        d="M26 31 C 36 27, 64 27, 74 31 C 72 34.5, 28 34.5, 26 31 Z"
        fill="#121316"
        stroke="#c59b56"
        strokeWidth="1"
      />

      {/* "BUGMAN" text on Cap */}
      <text
        x="50"
        y="25.5"
        fontSize="5"
        fontWeight="900"
        fontFamily="sans-serif"
        textAnchor="middle"
        fill="#121316"
        letterSpacing="0.6"
      >
        BUGMAN
      </text>

      {/* Head / Insect Face (Bone/Warm Ivory with contour shading) */}
      <path
        d="M30 33 C 27 50, 36 62, 50 64 C 64 62, 73 50, 70 33 Z"
        fill="#f7f4ed"
        stroke="#1e2025"
        strokeWidth="1.6"
      />

      {/* Aviator Sunglasses / Big Compound Bug Eyes */}
      <path
        d="M31 38 C 32 33, 47 33, 48 38 C 49 48, 32 48, 31 38 Z"
        fill="#17181c"
        stroke="#c59b56"
        strokeWidth="1.4"
      />
      <path
        d="M52 38 C 53 33, 68 33, 69 38 C 70 48, 53 48, 52 38 Z"
        fill="#17181c"
        stroke="#c59b56"
        strokeWidth="1.4"
      />
      {/* Eye Reflections (Cool slate-ivory glints) */}
      <path d="M34 37 Q 42 36 44 40" stroke="#f4efe6" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M55 37 Q 63 36 65 40" stroke="#f4efe6" strokeWidth="1.2" strokeLinecap="round" />

      {/* Mandibles / Beak Nose Detail */}
      <path
        d="M45 49 L 50 56 L 55 49 Z"
        fill="#e8e2d5"
        stroke="#1e2025"
        strokeWidth="1"
      />
      <path
        d="M41 57 Q 50 60 59 57"
        stroke="#1e2025"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      {/* Neck (Warm tan tone as in the logo) */}
      <path d="M44 63 L 44 68 L 56 68 L 56 63 Z" fill="#b88b4a" />

      {/* Suit Collar & Blazer (Warm Tweed Tan/Caramel: #B88B4A and #C59B56) */}
      <path
        d="M34 65 L 26 82 L 44 82 L 47 67 Z"
        fill="#b88b4a"
        stroke="#1e2025"
        strokeWidth="1.4"
      />
      <path
        d="M66 65 L 74 82 L 56 82 L 53 67 Z"
        fill="#b88b4a"
        stroke="#1e2025"
        strokeWidth="1.4"
      />

      {/* White Dress Shirt V-Neck */}
      <path d="M44 66 L 50 78 L 56 66 Z" fill="#ffffff" stroke="#1e2025" strokeWidth="1" />

      {/* Black Necktie */}
      <path
        d="M48.5 68 L 51.5 68 L 52.5 82 L 50 84 L 47.5 82 Z"
        fill="#121316"
      />

      {/* Lapel details */}
      <path d="M35 71 L 43 77" stroke="#121316" strokeWidth="1" />
      <path d="M65 71 L 57 77" stroke="#121316" strokeWidth="1" />

      {/* Lower Ribbon Banner with "BUGMAN" */}
      <path
        d="M12 85 L 88 85 L 83 103 L 50 106 L 17 103 Z"
        fill="#17181c"
        stroke="#c59b56"
        strokeWidth="1.8"
      />
      <text
        x="50"
        y="99"
        fontSize="13.5"
        fontWeight="900"
        fontFamily="serif"
        textAnchor="middle"
        fill="#f7f4ed"
        letterSpacing="1"
      >
        BUGMAN
      </text>

      {/* "— PEST CONTROL —" Sub-banner */}
      <rect x="18" y="108" width="64" height="12" rx="2" fill="#c59b56" stroke="#121316" strokeWidth="1" />
      <text
        x="50"
        y="117"
        fontSize="6.2"
        fontWeight="900"
        fontFamily="sans-serif"
        textAnchor="middle"
        fill="#121316"
        letterSpacing="0.8"
      >
        — PEST CONTROL —
      </text>
    </svg>
  );

  if (variant === 'mark') {
    return <div className={`inline-flex items-center ${className}`}>{MascotIcon}</div>;
  }

  if (variant === 'badge') {
    return (
      <div className={`inline-flex flex-col items-center group ${className}`}>
        {MascotIcon}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {MascotIcon}
      <div className="flex flex-col">
        <span
          className={`font-heading font-black tracking-tight uppercase leading-none ${
            inverted ? 'text-white' : 'text-[#121316]'
          } ${currentSize.text}`}
        >
          BUGMAN
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="h-0.5 w-3 bg-[#c59b56] rounded-full" />
          <span
            className={`font-heading font-bold uppercase tracking-widest text-[#c59b56] ${currentSize.sub}`}
          >
            PEST CONTROL
          </span>
          <span className="h-0.5 w-3 bg-[#c59b56] rounded-full" />
        </div>
      </div>
    </div>
  );
};
