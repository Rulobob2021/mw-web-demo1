import React from 'react';
import { TRUST_METRICS } from '../data/content';
import { Trophy, Users, TrendingUp, Star } from 'lucide-react';

export const StatsStrip: React.FC = () => {
  const getMetricIcon = (iconName: string) => {
    switch (iconName) {
      case 'trophy':
        return <Trophy className="w-6 h-6 text-[#80C431]" />;
      case 'users':
        return <Users className="w-6 h-6 text-[#80C431]" />;
      case 'trending':
        return <TrendingUp className="w-6 h-6 text-[#80C431]" />;
      case 'star':
        return <Star className="w-6 h-6 text-[#80C431] fill-[#80C431]/20" />;
      default:
        return <Trophy className="w-6 h-6 text-[#80C431]" />;
    }
  };

  return (
    <section className="py-12 bg-gradient-to-r from-[#80C431]/8 via-[#39DCE5]/6 to-[#80C431]/8 border-y border-[#80C431]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
          {TRUST_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-4 text-left group ${
                idx !== 0 ? 'pt-6 sm:pt-0 sm:pl-8' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-[#80C431]/30 shadow-sm shrink-0 group-hover:scale-110 transition-transform">
                {getMetricIcon(metric.icon)}
              </div>

              <div>
                <div className="text-2xl lg:text-3xl font-extrabold text-[#001F2B] tabular-nums tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug mt-0.5">
                  {metric.label}
                </div>
                <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                  {metric.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
