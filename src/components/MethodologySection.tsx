import React, { useState } from 'react';
import { METHODOLOGY_STEPS } from '../data/content';
import {
  Search,
  Calendar,
  Rocket,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';

interface MethodologySectionProps {
  onOpenConsultation: () => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({
  onOpenConsultation,
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (iconName: string, isSelected: boolean) => {
    const iconClass = `w-6 h-6 transition-colors ${
      isSelected ? 'text-[#001F2B]' : 'text-slate-700'
    }`;
    switch (iconName) {
      case 'search':
        return <Search className={iconClass} />;
      case 'calendar':
        return <Calendar className={iconClass} />;
      case 'rocket':
        return <Rocket className={iconClass} />;
      case 'trending':
        return <TrendingUp className={iconClass} />;
      default:
        return <Search className={iconClass} />;
    }
  };

  const currentStepData = METHODOLOGY_STEPS.find((s) => s.stepNumber === activeStep) || METHODOLOGY_STEPS[0];

  return (
    <section id="metodologia" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 text-left">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#80C431] block">
              METODOLOGÍA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001F2B] tracking-tight">
              Cómo trabajamos
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Un proceso simple, transparente y colaborativo, estructurado para maximizar el valor de cada punto de contacto y lograr grandes resultados.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#80C431] hover:text-[#68A326] hover:underline cursor-pointer"
          >
            <span>Conoce nuestro proceso</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4-Step Interactive Timeline */}
        <div className="relative mb-12">
          {/* Connecting line (Desktop) */}
          <div className="hidden md:block absolute top-4 left-[12%] right-[12%] h-[2.5px] bg-slate-200 -z-0">
            {/* Active progress fill */}
            <div
              className="h-full bg-[#80C431] transition-all duration-300"
              style={{
                width: `${((activeStep - 1) / (METHODOLOGY_STEPS.length - 1)) * 100}%`,
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {METHODOLOGY_STEPS.map((step) => {
              const isSelected = activeStep === step.stepNumber;
              const isPassed = activeStep > step.stepNumber;

              return (
                <div
                  key={step.stepNumber}
                  onClick={() => setActiveStep(step.stepNumber)}
                  className={`flex flex-col items-center text-center cursor-pointer group p-4 rounded-2xl transition-all duration-200 ${
                    isSelected
                      ? 'bg-white shadow-md border border-[#80C431]/40'
                      : 'hover:bg-white/60'
                  }`}
                >
                  {/* Step Number Badge above icon */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-4 shadow-sm transition-all ${
                      isSelected || isPassed
                        ? 'bg-[#80C431] text-[#001F2B]'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {step.stepNumber}
                  </div>

                  {/* Circular Icon Container */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-2 mb-4 transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#80C431] border-[#80C431] shadow-md shadow-[#80C431]/30'
                        : 'bg-white border-slate-200 group-hover:border-[#80C431]'
                    }`}
                  >
                    {getStepIcon(step.iconName, isSelected)}
                  </div>

                  {/* Title & Short Summary */}
                  <h3
                    className={`text-lg font-bold transition-colors ${
                      isSelected ? 'text-[#80C431]' : 'text-[#001F2B]'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed max-w-[220px]">
                    {step.summary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Breakdown Card for Active Step */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm text-left animate-in fade-in duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#80C431]/15 text-[#001F2B] font-bold text-xs">
                  Fase {currentStepData.stepNumber} de 4
                </span>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {currentStepData.duration}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#001F2B]">
                {currentStepData.title}: Enfoque Operativo y Estratégico
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {currentStepData.details}
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-50/80 rounded-2xl p-5 border border-slate-100 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#80C431]" />
                Entregables concretos de esta fase:
              </span>
              <ul className="space-y-2">
                {currentStepData.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#80C431] shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
