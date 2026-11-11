import React from 'react';
import { ARTICLES_DATA } from '../data/content';
import { ArticleItem } from '../types';
import { ArrowRight, Calendar, ArrowUpRight, Cpu, Network, BarChart2 } from 'lucide-react';

interface BlogSectionProps {
  onSelectArticle: (article: ArticleItem) => void;
  onOpenConsultation: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onSelectArticle,
  onOpenConsultation,
}) => {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 text-left">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#80C431] block">
              BLOG
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#001F2B] tracking-tight">
              Noticias y Novedades
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Aprende, inspírate y mantente al día con las últimas tendencias e innovaciones en marketing, analítica y cloud.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#80C431] hover:text-[#68A326] hover:underline cursor-pointer"
          >
            <span>Ver más artículos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES_DATA.map((article, idx) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:border-[#80C431] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer text-left"
            >
              <div>
                {/* Visual Header / Cover Image Container */}
                <div className="relative h-48 w-full overflow-hidden bg-[#001F2B] flex items-center justify-center">
                  
                  {/* Card 1: Google Cloud Analytics visual */}
                  {idx === 0 && (
                    <div className="w-full h-full bg-gradient-to-tr from-[#001F2B] via-[#0A1622] to-[#0D2430] relative p-4 flex flex-col justify-between">
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <span className="flex items-center gap-1 font-mono">
                          <BarChart2 className="w-3.5 h-3.5 text-[#80C431]" />
                          BigQuery Analytics
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#80C431]/20 text-[#80C431] text-[10px] font-mono font-bold">
                          Live Data
                        </span>
                      </div>
                      {/* Mini bar & line visualization */}
                      <div className="space-y-2">
                        <div className="flex items-end gap-1.5 h-16 pt-2">
                          {[35, 50, 42, 68, 58, 80, 92, 85, 110, 130].map((h, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-gradient-to-t from-[#39DCE5] to-[#80C431] rounded-t-sm"
                              style={{ height: `${(h / 140) * 100}%` }}
                            />
                          ))}
                        </div>
                        <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-[#80C431] w-3/4 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Card 2: Floodlight & Neural Network visual */}
                  {idx === 1 && (
                    <div className="w-full h-full bg-gradient-to-tr from-[#001F2B] via-[#0A1A24] to-[#002B3D] relative flex items-center justify-center p-4">
                      <div className="relative w-28 h-28 flex items-center justify-center">
                        {/* Glowing concentric rings */}
                        <div className="absolute inset-0 rounded-full border border-[#80C431]/40 animate-spin" style={{ animationDuration: '12s' }} />
                        <div className="absolute inset-3 rounded-full border border-[#39DCE5]/40 animate-ping opacity-30" />
                        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#80C431] to-[#39DCE5] flex items-center justify-center shadow-lg shadow-[#80C431]/30">
                          <Network className="w-8 h-8 text-[#001F2B]" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-4 text-[11px] font-mono text-[#39DCE5] flex items-center gap-1">
                        <span>GMP Floodlight Matrix</span>
                      </div>
                    </div>
                  )}

                  {/* Card 3: Automation & AI Robotics visual */}
                  {idx === 2 && (
                    <div className="w-full h-full bg-gradient-to-tr from-[#001F2B] via-[#071922] to-[#0D2633] relative p-4 flex flex-col justify-between">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1 font-mono text-[#39DCE5]">
                          <Cpu className="w-3.5 h-3.5 text-[#80C431]" />
                          ETL Automated Pipeline
                        </span>
                        <span className="text-[10px] font-mono text-[#80C431] font-bold">
                          ● Running
                        </span>
                      </div>
                      <div className="flex items-center justify-center py-2">
                        {/* Robotic/Circuit stylized icon */}
                        <div className="p-3 rounded-2xl bg-[#001720] border border-slate-700 text-[#80C431] shadow-inner group-hover:scale-110 transition-transform">
                          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="3" y="11" width="18" height="10" rx="2" />
                            <circle cx="12" cy="5" r="2" />
                            <path d="M12 7v4" />
                            <line x1="8" y1="16" x2="8" y2="16.01" strokeWidth="2.5" />
                            <line x1="16" y1="16" x2="16.01" strokeWidth="2.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono text-center">
                        Zero-latency synchronization
                      </div>
                    </div>
                  )}

                  {/* Subtle hover gradient scrim */}
                  <div className="absolute inset-0 bg-[#80C431]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Metadata: Zero-Pill discipline */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-2.5">
                    <span className="flex items-center gap-1 text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-[#80C431]" />
                      {article.date}
                    </span>
                    <span aria-hidden="true" className="text-slate-300">|</span>
                    <span className="text-[#80C431] font-bold">{article.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#001F2B] group-hover:text-[#80C431] transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#80C431] group-hover:text-[#68A326] transition-colors">
                  <span>Leer artículo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
