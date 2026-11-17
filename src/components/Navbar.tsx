import React, { useState } from 'react';
import { MentalidadWebLogo } from './MentalidadWebLogo';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenDrive: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenDrive }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#374556]/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark & geometric MW mark */}
        <a href="#" className="flex items-center shrink-0" aria-label="Mentalidad Web Inicio">
          <MentalidadWebLogo />
        </a>

        {/* Zone 2: Single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#434349]/80">
          <a
            href="#inicio"
            className="text-[#374556] font-semibold relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2.5px] after:bg-[#84AF25] after:rounded-full whitespace-nowrap shrink-0"
          >
            Inicio
          </a>
          <a
            href="#servicios"
            className="hover:text-[#84AF25] transition-colors whitespace-nowrap shrink-0"
          >
            Servicios
          </a>
          <a
            href="#clientes"
            className="hover:text-[#84AF25] transition-colors whitespace-nowrap shrink-0"
          >
            Clientes
          </a>
          <a
            href="#metodologia"
            className="hover:text-[#84AF25] transition-colors whitespace-nowrap shrink-0"
          >
            Metodología
          </a>
          <a
            href="#blog"
            className="hover:text-[#84AF25] transition-colors whitespace-nowrap shrink-0"
          >
            Blog
          </a>
        </nav>

        {/* Zone 3: Google Drive & Primary Action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenDrive}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-[#434349] hover:text-[#374556] bg-[#374556]/5 hover:bg-[#374556]/10 rounded-full transition-all duration-200 cursor-pointer border border-[#374556]/15 whitespace-nowrap shrink-0"
            title="Abrir Google Drive Workspace"
          >
            {/* Google Drive mini SVG */}
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
              <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.9 2.5 3.2 3.3l12.3-21.3H6.6c0 1.6.4 3.1 1.2 4.5z" fill="#0066da"/>
              <path d="M43.65 25 29.5 0c-1.3.8-2.4 1.9-3.2 3.3L1.2 46.1c-.8 1.4-1.2 2.9-1.2 4.5h25.95z" fill="#00ac47"/>
              <path d="M73.55 76.8c1.3-.8 2.4-1.9 3.2-3.3l1.6-2.75 7.75-13.4c.8-1.4 1.2-2.9 1.2-4.5H61.35l5.3 9.15z" fill="#ea4335"/>
              <path d="M43.65 25 57.8 0H29.5z" fill="#00832d"/>
              <path d="m57.8 0-14.15 25H87.3c0-1.6-.4-3.1-1.2-4.5L72.45 3.3C71.65 1.9 70.55.8 69.25 0z" fill="#ffba00"/>
              <path d="m25.95 55.45-12.3 21.35c1.3.8 2.8 1.2 4.35 1.2h51.3c1.55 0 3.05-.4 4.35-1.2l-12.3-21.35z" fill="#2684fc"/>
            </svg>
            <span className="hidden sm:inline">Google Drive</span>
          </button>

          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#374556] hover:bg-[#84AF25] hover:text-[#232930] active:scale-[0.98] rounded-full transition-all duration-200 shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Hablemos</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#434349] hover:text-[#374556] hover:bg-[#374556]/10 transition-colors cursor-pointer"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#374556]/15 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-semibold text-[#374556] rounded-md bg-[#84AF25]/15"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-[#434349] hover:bg-[#374556]/5 rounded-md"
            >
              Servicios
            </a>
            <a
              href="#clientes"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-[#434349] hover:bg-[#374556]/5 rounded-md"
            >
              Clientes
            </a>
            <a
              href="#metodologia"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-[#434349] hover:bg-[#374556]/5 rounded-md"
            >
              Metodología
            </a>
            <a
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-base font-medium text-[#434349] hover:bg-[#374556]/5 rounded-md"
            >
              Blog
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDrive();
              }}
              className="px-3 py-2 text-base font-semibold text-[#374556] hover:bg-[#374556]/5 rounded-md flex items-center gap-2 text-left"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
                <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.9 2.5 3.2 3.3l12.3-21.3H6.6c0 1.6.4 3.1 1.2 4.5z" fill="#0066da"/>
                <path d="M43.65 25 29.5 0c-1.3.8-2.4 1.9-3.2 3.3L1.2 46.1c-.8 1.4-1.2 2.9-1.2 4.5h25.95z" fill="#00ac47"/>
                <path d="M73.55 76.8c1.3-.8 2.4-1.9 3.2-3.3l1.6-2.75 7.75-13.4c.8-1.4 1.2-2.9 1.2-4.5H61.35l5.3 9.15z" fill="#ea4335"/>
                <path d="M43.65 25 57.8 0H29.5z" fill="#00832d"/>
                <path d="m57.8 0-14.15 25H87.3c0-1.6-.4-3.1-1.2-4.5L72.45 3.3C71.65 1.9 70.55.8 69.25 0z" fill="#ffba00"/>
                <path d="m25.95 55.45-12.3 21.35c1.3.8 2.8 1.2 4.35 1.2h51.3c1.55 0 3.05-.4 4.35-1.2l-12.3-21.35z" fill="#2684fc"/>
              </svg>
              <span>Abrir Google Drive</span>
            </button>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-[#232930] bg-[#84AF25] hover:bg-[#71981E] hover:text-white rounded-xl transition-all shadow-sm cursor-pointer"
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
