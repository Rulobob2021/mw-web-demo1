import React from 'react';

export const ClientStrip: React.FC = () => {
  return (
    <section id="clientes" className="w-full py-10 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          
          {/* Label / Trust Header */}
          <div className="shrink-0 flex items-center gap-3">
            <span className="text-sm font-bold text-slate-800 tracking-wide">
              Confían en nosotros
            </span>
            <div className="hidden lg:block h-6 w-px bg-slate-200" />
          </div>

          {/* Client Logos Grid */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center opacity-85 hover:opacity-100 transition-opacity">
            
            {/* Google Logo / Partner */}
            <div className="flex items-center gap-2 group cursor-pointer transition-transform duration-200 hover:scale-105" title="Google Premier Partner">
              <svg className="w-6 h-6" viewBox="0 0 24 24" aria-label="Google">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span className="font-semibold text-lg tracking-tight text-slate-800">Google</span>
            </div>

            {/* Bci Logo */}
            <div className="flex items-center gap-1.5 group cursor-pointer transition-transform duration-200 hover:scale-105" title="Banco de Crédito e Inversiones">
              <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="7" cy="12" r="3" />
                <circle cx="17" cy="7" r="3" />
                <circle cx="17" cy="17" r="3" />
                <path d="M7 12 L17 7 M7 12 L17 17" stroke="currentColor" strokeWidth="2.5" />
              </svg>
              <span className="font-extrabold text-xl tracking-tight text-[#0B132B]">Bci</span>
            </div>

            {/* SAMSUNG Logo */}
            <div className="flex items-center group cursor-pointer transition-transform duration-200 hover:scale-105" title="Samsung Electronics">
              <span className="font-black text-lg tracking-widest text-slate-800 font-sans">
                SAMSUNG
              </span>
            </div>

            {/* ALEF Logo */}
            <div className="flex flex-col items-center group cursor-pointer transition-transform duration-200 hover:scale-105" title="ALEF Better Results">
              <span className="font-black text-lg tracking-wider text-[#1E3A8A]">ALEF</span>
              <span className="text-[9px] uppercase tracking-wider font-bold text-slate-500 -mt-1">
                Better Results
              </span>
            </div>

            {/* BancoEstado Logo */}
            <div className="flex items-center gap-1.5 group cursor-pointer transition-transform duration-200 hover:scale-105" title="BancoEstado Chile">
              <div className="w-5 h-5 bg-[#002B49] rounded-sm flex items-center justify-center text-amber-400 font-black text-xs">
                ▲
              </div>
              <span className="font-bold text-base tracking-tight text-[#002B49]">
                BancoEstado
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
