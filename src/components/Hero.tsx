import React, { useState } from 'react';
import { ArrowRight, ArrowDown, TrendingUp, Activity, ShieldCheck, Database, Layers } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [activeMetricTab, setActiveMetricTab] = useState<'30d' | 'realtime' | 'q3'>('30d');

  const metricData = {
    '30d': {
      growth: '+124%',
      growthLabel: 'Crecimiento en conversiones',
      roas: '5.2x',
      leads: '42.8K',
      cpa: '-31%',
      chartBars: [45, 60, 52, 78, 65, 84, 96, 88, 110, 124],
    },
    realtime: {
      growth: '+88%',
      growthLabel: 'Rendimiento en tiempo real',
      roas: '4.7x',
      leads: '1.2K hoy',
      cpa: '-24%',
      chartBars: [30, 48, 55, 62, 70, 75, 82, 89, 94, 98],
    },
    q3: {
      growth: '+168%',
      growthLabel: 'Acumulado trimestral',
      roas: '5.8x',
      leads: '156.4K',
      cpa: '-38%',
      chartBars: [40, 55, 68, 80, 88, 102, 115, 128, 145, 168],
    },
  };

  const current = metricData[activeMetricTab];

  return (
    <section id="inicio" className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-white">
      {/* Subtle Ambient Background Gradients in Brand Palette (#84AF25, #374556, #434349) */}
      <div
        className="absolute top-0 right-0 -z-10 w-[720px] h-[640px] pointer-events-none opacity-25 blur-3xl"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(132, 175, 37, 0.28), rgba(55, 69, 86, 0.14) 55%, transparent 100%)',
        }}
      />
      <div
        className="absolute top-1/2 left-0 -z-10 w-[480px] h-[480px] pointer-events-none opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(132, 175, 37, 0.22), transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 space-y-8 text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#84AF25]/15 border border-[#84AF25]/35 text-[#374556] text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#84AF25] animate-pulse" />
              <span>Google Cloud &amp; Marketing Platform Premier Partner</span>
            </div>

            {/* Headline with balanced wrap */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#434349] tracking-tight leading-[1.12] text-balance">
              Transformamos tus datos en{' '}
              <span className="text-[#84AF25]">
                resultados reales
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#434349]/80 leading-relaxed max-w-xl font-normal">
              Estrategia, tecnología y creatividad para hacer crecer tu negocio en el mundo digital con decisiones respaldadas por analítica avanzada.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-[#232930] bg-[#84AF25] hover:bg-[#374556] hover:text-white active:scale-[0.99] rounded-full shadow-lg shadow-[#84AF25]/25 transition-all duration-200 cursor-pointer"
              >
                <span>Agendar una consultoría</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-[#374556] hover:text-[#84AF25] bg-[#374556]/5 hover:bg-[#374556]/10 rounded-full border border-[#374556]/15 transition-all duration-200 cursor-pointer"
              >
                <span>Conoce nuestros servicios</span>
                <ArrowDown className="w-4 h-4 text-[#374556]/70" />
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#374556]/10">
              <div>
                <div className="text-2xl font-bold text-[#374556] tabular-nums">+15 años</div>
                <div className="text-xs text-[#434349]/75 font-medium">Liderando en LatAm</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#84AF25] tabular-nums">+200</div>
                <div className="text-xs text-[#434349]/75 font-medium">Empresas impulsadas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#374556] tabular-nums">98%</div>
                <div className="text-xs text-[#434349]/75 font-medium">Retención de clientes</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Analytics Command Center & Floating Card */}
          <div className="lg:col-span-6 relative">
            {/* Background Organic Wave Shape */}
            <div className="absolute -top-12 -right-8 -bottom-8 -left-6 -z-10 pointer-events-none">
              <svg viewBox="0 0 600 500" fill="none" className="w-full h-full opacity-90">
                <path
                  d="M100 120 C 250 40, 420 80, 520 180 C 620 280, 540 440, 380 480 C 220 520, 80 400, 60 280 C 40 160, 20 180, 100 120 Z"
                  fill="url(#heroBackdropGradient)"
                  className="blur-xl"
                />
                <defs>
                  <linearGradient id="heroBackdropGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#84AF25" stopOpacity="0.22" />
                    <stop offset="55%" stopColor="#374556" stopOpacity="0.16" />
                    <stop offset="100%" stopColor="#434349" stopOpacity="0.08" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Laptop Mockup Device Container */}
            <div className="relative mx-auto max-w-[540px] rounded-2xl bg-gradient-to-b from-[#374556] to-[#2B3543] p-3 sm:p-4 shadow-2xl border border-[#434349]/60 transition-transform duration-300 hover:scale-[1.01]">
              {/* Screen Header Bar */}
              <div className="flex items-center justify-between pb-2 px-1 text-white/60">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/30 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/50 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#84AF25] inline-block" />
                </div>
                <div className="text-[11px] font-mono text-white/85 font-medium flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-[#84AF25]" />
                  <span>Mentalidad Web · Cloud BI Hub</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Screen Interior: Enterprise Data Dashboard */}
              <div className="rounded-xl bg-[#2B3644] border border-white/10 p-4 text-white overflow-hidden space-y-4">
                {/* Dashboard Toolbar & Period Filter Tabs */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#84AF25] animate-ping inline-block" />
                    <span className="text-xs font-semibold text-white/90">Google Cloud BigQuery &amp; GA4</span>
                  </div>

                  {/* Interactive Filter Control */}
                  <div className="flex items-center bg-[#374556] rounded-lg p-0.5 border border-white/10">
                    <button
                      onClick={() => setActiveMetricTab('30d')}
                      className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all cursor-pointer ${
                        activeMetricTab === '30d'
                          ? 'bg-[#84AF25] text-[#232930] shadow-sm'
                          : 'text-white/70 hover:text-white'
                      }`}
                    >
                      30 días
                    </button>
                    <button
                      onClick={() => setActiveMetricTab('realtime')}
                      className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all cursor-pointer ${
                        activeMetricTab === 'realtime'
                          ? 'bg-[#84AF25] text-[#232930] shadow-sm'
                          : 'text-white/70 hover:text-white'
                      }`}
                    >
                      En vivo
                    </button>
                    <button
                      onClick={() => setActiveMetricTab('q3')}
                      className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all cursor-pointer ${
                        activeMetricTab === 'q3'
                          ? 'bg-[#84AF25] text-[#232930] shadow-sm'
                          : 'text-white/70 hover:text-white'
                      }`}
                    >
                      Q3 2026
                    </button>
                  </div>
                </div>

                {/* Top Metrics Row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-[#374556]/90 rounded-lg p-2.5 border border-white/10">
                    <span className="text-[10px] uppercase font-bold text-white/60 tracking-wider">ROAS Global</span>
                    <div className="text-xl font-extrabold text-white tabular-nums mt-0.5">{current.roas}</div>
                    <span className="text-[10px] text-[#84AF25] flex items-center gap-0.5 font-medium mt-0.5">
                      <TrendingUp className="w-3 h-3" /> +0.8x vs meta
                    </span>
                  </div>

                  <div className="bg-[#374556]/90 rounded-lg p-2.5 border border-white/10">
                    <span className="text-[10px] uppercase font-bold text-white/60 tracking-wider">Conversiones</span>
                    <div className="text-xl font-extrabold text-[#84AF25] tabular-nums mt-0.5">{current.growth}</div>
                    <span className="text-[10px] text-white/80 font-medium mt-0.5 truncate block">
                      {current.leads}
                    </span>
                  </div>

                  <div className="bg-[#374556]/90 rounded-lg p-2.5 border border-white/10">
                    <span className="text-[10px] uppercase font-bold text-white/60 tracking-wider">Eficiencia CPA</span>
                    <div className="text-xl font-extrabold text-white tabular-nums mt-0.5">{current.cpa}</div>
                    <span className="text-[10px] text-white/65 font-medium mt-0.5 block truncate">
                      Costo reducido
                    </span>
                  </div>
                </div>

                {/* Interactive Chart Visualizer */}
                <div className="bg-[#232C38] rounded-lg p-3 border border-white/10">
                  <div className="flex items-center justify-between text-xs text-white/70 mb-2">
                    <span className="font-semibold text-white/90 flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-[#84AF25]" />
                      Evolución de Rendimiento y Atribución
                    </span>
                    <span className="text-[11px] font-mono text-[#84AF25]">{current.growthLabel}</span>
                  </div>

                  {/* Dynamic Bar Chart in #84AF25 and #FFFFFF/#374556 */}
                  <div className="h-28 flex items-end justify-between gap-1.5 pt-4">
                    {current.chartBars.map((val, idx) => {
                      const heightPercent = Math.min(100, Math.max(15, (val / 170) * 100));
                      const isHigh = idx >= 6;
                      return (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-1 group relative">
                          {/* Tooltip on hover */}
                          <div className="absolute -top-6 hidden group-hover:block bg-[#84AF25] text-[#232930] font-bold text-[10px] font-mono px-1.5 py-0.5 rounded shadow z-10 whitespace-nowrap">
                            +{val}%
                          </div>
                          <div
                            className={`w-full rounded-t-sm transition-all duration-500 ${
                              isHigh
                                ? 'bg-gradient-to-t from-[#688B1D] to-[#84AF25] shadow-sm shadow-[#84AF25]/25'
                                : 'bg-[#434349] group-hover:bg-white/40'
                            }`}
                            style={{ height: `${heightPercent}%` }}
                          />
                          <span className="text-[9px] text-white/50 font-mono">
                            {idx % 2 === 0 ? `S${idx + 1}` : ''}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer status line */}
                <div className="flex items-center justify-between text-[11px] text-white/65 pt-1">
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-[#84AF25]" />
                    <span>Modelos de Atribución Data-Driven (DDA)</span>
                  </div>
                  <span className="text-[#84AF25] font-medium">99.9% Precisión</span>
                </div>
              </div>

              {/* Laptop Base Stand */}
              <div className="h-2 w-32 bg-[#434349] rounded-b-md mx-auto -mb-1 opacity-80" />
            </div>

            {/* Floating High-Impact Growth Card */}
            <div className="absolute -bottom-6 -right-2 sm:-bottom-4 sm:right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-[#374556]/15 flex items-center gap-3.5 animate-in fade-in duration-300">
              <div className="w-11 h-11 rounded-xl bg-[#84AF25] flex items-center justify-center text-[#232930] shadow-md shadow-[#84AF25]/30 shrink-0">
                <TrendingUp className="w-6 h-6 stroke-[2.8]" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-[#374556] font-black text-2xl tabular-nums tracking-tight">
                  <span>+124%</span>
                </div>
                <div className="text-xs font-semibold text-[#434349]/75">
                  Crecimiento en Conversiones
                </div>
              </div>
            </div>

            {/* Secondary Floating Proof Badge on top-left */}
            <div className="hidden sm:flex absolute -top-4 -left-4 z-20 bg-white/95 backdrop-blur-md rounded-xl px-3.5 py-2 shadow-lg border border-[#374556]/15 items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#84AF25]" />
              <span className="text-xs font-semibold text-[#374556]">Auditado por Google Cloud</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
