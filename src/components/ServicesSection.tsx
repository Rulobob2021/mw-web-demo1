import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';
import {
  BarChart3,
  Cloud,
  Megaphone,
  Play,
  Code2,
  Lightbulb,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenConsultation,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'data' | 'marketing' | 'tech'>('all');

  const filteredServices = selectedFilter === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => {
        if (selectedFilter === 'data') return s.category === 'data' || s.category === 'consulting';
        if (selectedFilter === 'marketing') return s.category === 'marketing';
        if (selectedFilter === 'tech') return s.category === 'tech';
        return true;
      });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'chart':
        return <BarChart3 className="w-6 h-6 text-[#80C431]" />;
      case 'cloud':
        return <Cloud className="w-6 h-6 text-[#39DCE5]" />;
      case 'megaphone':
        return <Megaphone className="w-6 h-6 text-[#80C431]" />;
      case 'media':
        return <Play className="w-6 h-6 text-[#39DCE5] fill-[#39DCE5]" />;
      case 'code':
        return <Code2 className="w-6 h-6 text-[#80C431]" />;
      case 'lightbulb':
        return <Lightbulb className="w-6 h-6 text-[#80C431]" />;
      default:
        return <BarChart3 className="w-6 h-6 text-[#80C431]" />;
    }
  };

  const getIconBg = (iconName: string) => {
    switch (iconName) {
      case 'cloud':
        return 'bg-[#39DCE5]/10 border-[#39DCE5]/30';
      case 'media':
        return 'bg-[#39DCE5]/10 border-[#39DCE5]/30';
      default:
        return 'bg-[#80C431]/10 border-[#80C431]/30';
    }
  };

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#80C431] block">
              NUESTROS SERVICIOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001F2B] tracking-tight">
              Soluciones digitales para hacer crecer tu negocio
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Ofrecemos servicios especializados en tecnología, marketing y estrategia digital respaldados por los estándares más exigentes de Google Cloud.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Interactive filter control tabs */}
            <div className="inline-flex p-1 bg-slate-100/90 rounded-xl border border-slate-200/80">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  selectedFilter === 'all'
                    ? 'bg-[#80C431] text-[#001F2B] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setSelectedFilter('data')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  selectedFilter === 'data'
                    ? 'bg-[#80C431] text-[#001F2B] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Datos & Cloud
              </button>
              <button
                onClick={() => setSelectedFilter('marketing')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  selectedFilter === 'marketing'
                    ? 'bg-[#80C431] text-[#001F2B] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Marketing Digital
              </button>
              <button
                onClick={() => setSelectedFilter('tech')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  selectedFilter === 'tech'
                    ? 'bg-[#80C431] text-[#001F2B] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tecnología
              </button>
            </div>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#80C431] hover:text-[#68A326] hover:underline cursor-pointer ml-2"
            >
              <span>Ver todos los servicios</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group relative bg-white hover:bg-slate-50/70 rounded-2xl p-7 border border-slate-200/80 hover:border-[#80C431] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between text-left"
            >
              <div>
                {/* Icon & Arrow Row */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border ${getIconBg(
                      service.iconName
                    )} transition-transform duration-200 group-hover:scale-105`}
                  >
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#80C431] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    <ArrowUpRight className="w-5 h-5 stroke-[2.4]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#001F2B] group-hover:text-[#80C431] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                  {service.shortDesc}
                </p>
              </div>

              {/* Technologies preview chips & Click hint */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-bold text-[#80C431] group-hover:underline inline-flex items-center gap-1">
                  Explorar capacidades
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-[11px] text-slate-400">Ver alcance</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
