import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white';
  showTagline?: boolean;
}

export const MentalidadWebLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  showTagline = false,
}) => {
  const isWhite = variant === 'white';
  const primaryStroke = isWhite ? '#FFFFFF' : '#434349';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Geometric MW Mark matching brand identity (#434349 + #84AF25) */}
      <div className="relative w-10 h-8 shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 52 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Left 4 interlocking strokes in Charcoal #434349 (or #FFFFFF on dark) */}
          <polygon points="3,36 9.5,36 16.5,4 10,4" fill={primaryStroke} />
          <polygon points="10,4 16.5,4 23.5,36 17,36" fill={primaryStroke} />
          <polygon points="17,36 23.5,36 30.5,4 24,4" fill={primaryStroke} />
          <polygon points="24,4 30.5,4 37.5,36 31,36" fill={primaryStroke} />
          {/* Rightmost upward stroke in Brand Olive Green #84AF25 */}
          <polygon points="31,36 37.5,36 47.5,4 41,4" fill="#84AF25" />
        </svg>
      </div>

      {/* Brand Wordmark: Mentalidad (#434349 / #FFFFFF) + Web (#84AF25) */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline tracking-tight font-extrabold text-xl font-sans">
          <span className={isWhite ? 'text-white' : 'text-[#434349]'}>Mentalidad</span>
          <span className="text-[#84AF25]">Web</span>
        </div>
        {showTagline && (
          <span
            className={`text-[10px] uppercase font-bold tracking-wider mt-1 ${
              isWhite ? 'text-white/70' : 'text-[#434349]/70'
            }`}
          >
            Datos que impulsan resultados
          </span>
        )}
      </div>
    </div>
  );
};
