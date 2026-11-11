import React, { useState } from 'react';
import { MentalidadWebLogo } from './MentalidadWebLogo';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark & ribbon icon */}
        <a href="#" className="flex items-center shrink-0" aria-label="Mentalidad Web Inicio">
          <MentalidadWebLogo />
        </a>

        {/* Zone 2: 4-5 single-line text links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a
            href="#inicio"
            className="text-[#001F2B] font-semibold relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2.5px] after:bg-[#80C431] after:rounded-full whitespace-nowrap shrink-0"
          >
            Inicio
          </a>
          <a
            href="#servicios"
            className="hover:text-[#80C431] transition-colors whitespace-nowrap shrink-0"
          >
            Servicios
          </a>
          <a
            href="#clientes"
            className="hover:text-[#80C431] transition-colors whitespace-nowrap shrink-0"
          >
            Clientes
          </a>
          <a
            href="#metodologia"
            className="hover:text-[#80C431] transition-colors whitespace-nowrap shrink-0"
          >
            Metodología
          </a>
          <a
            href="#blog"
            className="hover:text-[#80C431] transition-colors whitespace-nowrap shrink-0"
          >
            Blog
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#001F2B] hover:bg-[#80C431] hover:text-[#001F2B] active:scale-[0.98] rounded-full transition-all duration-200 shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Hablemos</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-semibold text-[#80C431] rounded-md bg-[#80C431]/10"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Servicios
            </a>
            <a
              href="#clientes"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Clientes
            </a>
            <a
              href="#metodologia"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Metodología
            </a>
            <a
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              Blog
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#001F2B] bg-[#80C431] hover:bg-[#68A326] rounded-xl transition-all shadow-sm cursor-pointer"
              >
                <span>Hablemos</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
