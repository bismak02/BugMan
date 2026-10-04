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
    sm: { icon: 34, text: 'text-base', sub: 'text-[9px]' },
    md: { icon: 48, text: 'text-xl', sub: 'text-[11px]' },
    lg: { icon: 64, text: 'text-2xl', sub: 'text-xs' },
    xl: { icon: 96, text: 'text-4xl', sub: 'text-sm' }
  };

  const currentSize = sizeMap[size];

  // Authentic uploaded logo.png graphic
  const MascotIcon = (
    <img
      src="/logo.png"
      alt="BugMan Pest Control Mascot"
      className="shrink-0 object-contain transition-transform duration-200 group-hover:scale-105 select-none"
      style={{
        width: `${currentSize.icon}px`,
        height: `${Math.round(currentSize.icon * 1.3)}px`
      }}
    />
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
