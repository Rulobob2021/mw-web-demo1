import React from 'react';
import { ArticleItem } from '../types';
import { X, Calendar, Clock, ArrowRight, Share2, Bookmark } from 'lucide-react';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onOpenConsultation,
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-100 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white hover:bg-slate-200 text-slate-700 transition-colors shadow-sm cursor-pointer"
            aria-label="Cerrar artículo"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Metadata: Zero-Pill discipline */}
          <div className="flex items-center gap-2 text-xs font-bold text-[#80C431] mb-3">
            <span>{article.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-slate-500 font-normal">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-slate-500 font-normal">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#001F2B] tracking-tight leading-snug">
            {article.title}
          </h3>

          <div className="mt-4 flex items-center justify-between border-t border-slate-200/80 pt-3 text-xs text-slate-600">
            <div>
              <span className="font-bold text-slate-900">{article.author.name}</span>
              <span className="text-slate-400 ml-1.5 font-normal">{article.author.role}</span>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto text-slate-700 text-sm sm:text-base leading-relaxed">
          <p className="font-semibold text-slate-900 text-base sm:text-lg border-l-3 border-[#80C431] pl-4 py-0.5">
            {article.excerpt}
          </p>

          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          {/* Tags */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
            {article.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer with Call-To-Action */}
        <div className="p-6 bg-slate-50/90 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            ¿Quieres implementar esta solución en tu empresa?
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold text-[#001F2B] bg-[#80C431] hover:bg-[#68A326] hover:text-white rounded-full shadow-md shadow-[#80C431]/20 transition-all cursor-pointer"
          >
            <span>Consultar con un especialista</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
