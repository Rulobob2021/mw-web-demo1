import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight, ShieldCheck, Building2, User, Mail, MessageSquare } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEmail?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialEmail = '',
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [selectedService, setSelectedService] = useState('data');
  const [selectedDate, setSelectedDate] = useState('Mañana (10:00 AM)');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialEmail) {
      setEmail(initialEmail);
    }
  }, [initialEmail]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-[#001F2B] via-[#0A2837] to-[#001F2B] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#80C431]/20 text-[#80C431] text-xs font-bold mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>Sesión Estratégica de 30 minutos</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {isSubmitted ? '¡Reunión Agendada con Éxito!' : 'Agendar una Consultoría'}
          </h3>
          <p className="mt-1 text-slate-300 text-xs sm:text-sm leading-relaxed">
            {isSubmitted
              ? 'Te hemos enviado la confirmación con el enlace de Google Meet a tu correo corporativo.'
              : 'Analicemos tus datos, desafíos y oportunidades de crecimiento digital con un consultor senior.'}
          </p>
        </div>

        {/* Content Body */}
        {isSubmitted ? (
          <div className="p-8 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#80C431]/20 text-[#80C431] flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-bold text-[#001F2B]">
                Confirmación enviada a {email}
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Nos reuniremos el <span className="font-semibold text-slate-900">{selectedDate}</span>. Un especialista en <span className="font-semibold text-[#80C431]">{SERVICES_DATA.find(s => s.id === selectedService)?.title || 'Estrategia Digital'}</span> revisará tu contexto previo a la llamada.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 text-left text-xs text-slate-600 space-y-2">
              <div className="font-bold text-[#001F2B] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#80C431]" />
                <span>¿Qué prepararemos para tu sesión?</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Pre-diagnóstico del stack de medición y tagging de tu industria.</li>
                <li>Casos de éxito y benchmarks aplicables a {company || 'tu empresa'}.</li>
                <li>Propuesta preliminar de arquitectura de datos y optimización de medios.</li>
              </ul>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 px-6 rounded-full bg-[#80C431] hover:bg-[#68A326] text-[#001F2B] font-bold text-sm shadow-md shadow-[#80C431]/25 transition-all cursor-pointer"
            >
              Entendido, volver al sitio
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 max-h-[72vh] overflow-y-auto">
            
            {/* Full Name & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nombre y Apellido *
                </label>
                <div className="relative flex items-center">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Rodrigo Vera"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#80C431] focus:ring-1 focus:ring-[#80C431] bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Empresa / Organización *
                </label>
                <div className="relative flex items-center">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5" />
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Ej. Empresa SpA"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#80C431] focus:ring-1 focus:ring-[#80C431] bg-slate-50/50"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Email Corporativo *
              </label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nombre@empresa.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#80C431] focus:ring-1 focus:ring-[#80C431] bg-slate-50/50"
                />
              </div>
            </div>

            {/* Service Focus */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Área de Interés Principal *
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#80C431] focus:ring-1 focus:ring-[#80C431] bg-slate-50/50 cursor-pointer"
              >
                {SERVICES_DATA.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title} — {service.shortDesc}
                  </option>
                ))}
              </select>
            </div>

            {/* Time Slot Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Horario Preferido para la Sesión *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  'Mañana (10:00 AM)',
                  'Mañana (11:30 AM)',
                  'Tarde (03:00 PM)',
                  'Tarde (04:30 PM)',
                  'Próximo Lunes (10:00 AM)',
                  'Próximo Martes (03:00 PM)',
                ].map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedDate(slot)}
                    className={`py-2 px-2 text-[11px] font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                      selectedDate === slot
                        ? 'bg-[#80C431]/15 border-[#80C431] text-[#001F2B] font-bold shadow-xs'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Context */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Desafío o Proyecto (Opcional)
              </label>
              <div className="relative">
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Cuéntanos brevemente sobre tu stack actual o los objetivos que buscas..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#80C431] focus:ring-1 focus:ring-[#80C431] bg-slate-50/50"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#80C431] hover:bg-[#68A326] text-[#001F2B] font-bold text-sm shadow-lg shadow-[#80C431]/25 transition-all cursor-pointer"
              >
                <span>Confirmar y Agendar Consultoría</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                Sesión virtual confidencial vía Google Meet.
              </p>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};
