/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientStrip } from './components/ClientStrip';
import { ServicesSection } from './components/ServicesSection';
import { MethodologySection } from './components/MethodologySection';
import { BlogSection } from './components/BlogSection';
import { StatsStrip } from './components/StatsStrip';
import { CallToActionBanner } from './components/CallToActionBanner';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ArticleModal } from './components/ArticleModal';
import { GoogleDriveExplorer } from './components/GoogleDriveExplorer';
import { ServiceItem, ArticleItem } from './types';
import { Palette, X } from 'lucide-react';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationEmail, setConsultationEmail] = useState('');
  const [isDriveOpen, setIsDriveOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [showPaletteModal, setShowPaletteModal] = useState(false);

  const handleOpenConsultation = (email = '') => {
    setConsultationEmail(email);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#434349] flex flex-col font-sans selection:bg-[#84AF25] selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenDrive={() => setIsDriveOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        <ClientStrip />

        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        <MethodologySection
          onOpenConsultation={() => handleOpenConsultation()}
        />

        <BlogSection
          onSelectArticle={(article) => setSelectedArticle(article)}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        <StatsStrip />

        <CallToActionBanner
          onOpenConsultationWithEmail={(email) => handleOpenConsultation(email)}
        />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* Interactive Consultation Scheduler Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialEmail={consultationEmail}
      />

      {/* Service Deep-Dive Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Article Insight Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Google Drive Workspace Explorer Modal */}
      <GoogleDriveExplorer
        isOpen={isDriveOpen}
        onClose={() => setIsDriveOpen(false)}
      />

      {/* Floating Buttons: Google Drive & Palette Reference */}
      <div className="fixed bottom-4 left-4 z-30 flex items-center gap-2">
        <button
          onClick={() => setIsDriveOpen(true)}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#374556] hover:bg-[#434349] text-white text-xs font-semibold shadow-xl border border-white/15 transition-all cursor-pointer"
          title="Abrir Google Drive Workspace"
        >
          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
            <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.9 2.5 3.2 3.3l12.3-21.3H6.6c0 1.6.4 3.1 1.2 4.5z" fill="#0066da"/>
            <path d="M43.65 25 29.5 0c-1.3.8-2.4 1.9-3.2 3.3L1.2 46.1c-.8 1.4-1.2 2.9-1.2 4.5h25.95z" fill="#00ac47"/>
            <path d="M73.55 76.8c1.3-.8 2.4-1.9 3.2-3.3l1.6-2.75 7.75-13.4c.8-1.4 1.2-2.9 1.2-4.5H61.35l5.3 9.15z" fill="#ea4335"/>
            <path d="M43.65 25 57.8 0H29.5z" fill="#00832d"/>
            <path d="m57.8 0-14.15 25H87.3c0-1.6-.4-3.1-1.2-4.5L72.45 3.3C71.65 1.9 70.55.8 69.25 0z" fill="#ffba00"/>
            <path d="m25.95 55.45-12.3 21.35c1.3.8 2.8 1.2 4.35 1.2h51.3c1.55 0 3.05-.4 4.35-1.2l-12.3-21.35z" fill="#2684fc"/>
          </svg>
          <span className="font-bold">Google Drive</span>
        </button>

        <button
          onClick={() => setShowPaletteModal(true)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#434349]/90 hover:bg-[#374556] text-white text-xs font-semibold shadow-lg backdrop-blur-md transition-all cursor-pointer opacity-80 hover:opacity-100"
          title="Ver paleta de colores corporativa"
        >
          <Palette className="w-3.5 h-3.5 text-[#84AF25]" />
          <span>Paleta de marca</span>
        </button>
      </div>

      {/* Brand Palette Reference Modal */}
      {showPaletteModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#374556]/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 text-left border border-[#374556]/15">
            <div className="flex items-center justify-between pb-4 border-b border-[#374556]/15">
              <div>
                <h3 className="font-bold text-[#374556] text-base">
                  Paleta de Colores Corporativa — Mentalidad Web
                </h3>
                <p className="text-xs text-[#434349]/70">
                  Basada en los 4 colores oficiales: #434349, #374556, #84AF25 y #FFFFFF
                </p>
              </div>
              <button
                onClick={() => setShowPaletteModal(false)}
                className="p-1.5 rounded-lg bg-[#374556]/10 hover:bg-[#374556]/20 text-[#434349] cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-xl border border-[#374556]/15 p-3">
                <div className="h-12 rounded-lg bg-[#434349] mb-2" />
                <div className="font-mono text-xs font-bold text-[#434349]">#434349</div>
                <div className="text-[11px] text-[#434349]/70">Grafito Principal</div>
              </div>
              <div className="rounded-xl border border-[#374556]/15 p-3">
                <div className="h-12 rounded-lg bg-[#374556] mb-2" />
                <div className="font-mono text-xs font-bold text-[#374556]">#374556</div>
                <div className="text-[11px] text-[#434349]/70">Azul Pizarra</div>
              </div>
              <div className="rounded-xl border border-[#374556]/15 p-3">
                <div className="h-12 rounded-lg bg-[#84AF25] mb-2" />
                <div className="font-mono text-xs font-bold text-[#6B8E1C]">#84AF25</div>
                <div className="text-[11px] text-[#434349]/70">Verde Acento</div>
              </div>
              <div className="rounded-xl border border-[#374556]/15 p-3">
                <div className="h-12 rounded-lg bg-white border border-[#374556]/15 mb-2" />
                <div className="font-mono text-xs font-bold text-[#434349]">#FFFFFF</div>
                <div className="text-[11px] text-[#434349]/70">Blanco Puro</div>
              </div>
            </div>
            <div className="mt-4 max-h-[55vh] overflow-y-auto rounded-xl border border-[#374556]/15 bg-white">
              <img
                src="/assets/aistudio/image_ecfc0499.png"
                alt="Paleta corporativa Mentalidad Web"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
