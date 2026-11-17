import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, ArrowRight, Sparkles, Cpu, Layers } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenConsultation,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#374556]/65 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#374556]/15 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-[#374556] via-[#3E4857] to-[#434349] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#84AF25]/20 text-[#84AF25] text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Servicio Estratégico Mentalidad Web</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {service.title}
          </h3>
          <p className="mt-2 text-white/80 text-sm sm:text-base leading-relaxed">
            {service.shortDesc}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Deep Overview */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#434349]/55 mb-2">
              Alcance y Visión General
            </h4>
            <p className="text-[#434349]/85 text-sm sm:text-base leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Deliverables List */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#434349]/55 mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#84AF25]" />
              <span>Entregables Clave</span>
            </h4>
            <div className="space-y-2.5">
              {service.deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5 text-sm text-[#434349]">
                  <CheckCircle2 className="w-4 h-4 text-[#84AF25] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#434349]/55 mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-[#84AF25]" />
              <span>Tecnologías y Plataformas</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-[#374556]/6 text-[#374556] text-xs font-semibold border border-[#374556]/15"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Expected Business Impact */}
          <div className="p-4 rounded-2xl bg-[#84AF25]/12 border border-[#84AF25]/35 text-sm">
            <span className="font-bold text-[#374556] block mb-1">Impacto Esperado:</span>
            <span className="text-[#434349]">{service.expectedImpact}</span>
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="p-6 bg-[#374556]/[0.03] border-t border-[#374556]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-[#434349] hover:text-[#374556] transition-colors cursor-pointer"
          >
            Volver a servicios
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold text-[#232930] bg-[#84AF25] hover:bg-[#374556] hover:text-white rounded-full shadow-md shadow-[#84AF25]/25 transition-all cursor-pointer"
          >
            <span>Cotizar este servicio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
