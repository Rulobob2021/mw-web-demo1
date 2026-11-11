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
import { ServiceItem, ArticleItem } from './types';
import { Eye, X } from 'lucide-react';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationEmail, setConsultationEmail] = useState('');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [showReferenceComparison, setShowReferenceComparison] = useState(false);

  const handleOpenConsultation = (email = '') => {
    setConsultationEmail(email);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#242E35] flex flex-col font-sans selection:bg-[#80C431] selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

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

      {/* Subtle Floating Reference Preview Toggle for comparison */}
      <div className="fixed bottom-4 left-4 z-30">
        <button
          onClick={() => setShowReferenceComparison(true)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#001F2B]/90 hover:bg-[#001F2B] text-white text-xs font-semibold shadow-lg backdrop-blur-md transition-all cursor-pointer opacity-85 hover:opacity-100"
          title="Ver imagen del diseño de referencia adjunto"
        >
          <Eye className="w-3.5 h-3.5 text-[#80C431]" />
          <span>Ver diseño original adjunto</span>
        </button>
      </div>

      {/* Reference Image Comparison Modal */}
      {showReferenceComparison && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 text-left">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  Diseño de Referencia Original (Mentalidad Web)
                </h3>
                <p className="text-xs text-slate-500">
                  Referencia adjunta: /public/assets/aistudio/MentalidadWeb__Datos_que_Impulsan_Resultados__1__76cb0020.png
                </p>
              </div>
              <button
                onClick={() => setShowReferenceComparison(false)}
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4 max-h-[75vh] overflow-y-auto rounded-lg border border-slate-200">
              <img
                src="/assets/aistudio/MentalidadWeb__Datos_que_Impulsan_Resultados__1__76cb0020.png"
                alt="Diseño original Mentalidad Web"
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
