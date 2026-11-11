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

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Dynamic MW Brand Icon with #80C431 and #001F2B */}
      <div className="relative w-9 h-9 shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 48 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="mwGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={isWhite ? '#ffffff' : '#001F2B'} />
              <stop offset="60%" stopColor="#39DCE5" />
              <stop offset="100%" stopColor="#80C431" />
            </linearGradient>
            <linearGradient id="mwGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#80C431" />
              <stop offset="100%" stopColor="#68A326" />
            </linearGradient>
          </defs>
          {/* Stylized M/W Interlocking Ribbon */}
          <path
            d="M6 34 L14 10 C15 7 18 7 19 10 L25 24 L29 10 C30 7 33 7 34 10 L42 34"
            stroke="url(#mwGrad1)"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 26 L20 34 C21 35.5 23 35.5 24 34 L30 26"
            stroke="url(#mwGrad2)"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand Text: Mentalidad in Dark/White + Web in #80C431 */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline tracking-tight font-extrabold text-xl font-sans">
          <span className={isWhite ? 'text-white' : 'text-[#001F2B]'}>Mentalidad</span>
          <span className="text-[#80C431]">Web</span>
        </div>
        {showTagline && (
          <span
            className={`text-[10px] uppercase font-bold tracking-wider mt-0.5 ${
              isWhite ? 'text-slate-300' : 'text-slate-500'
            }`}
          >
            Datos que impulsan resultados
          </span>
        )}
      </div>
    </div>
  );
};
