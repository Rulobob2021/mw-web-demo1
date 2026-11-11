import React, { useState } from 'react';
import { MentalidadWebLogo } from './MentalidadWebLogo';
import { Mail, ArrowRight, CheckCircle2, Linkedin, Youtube, Instagram, Twitter } from 'lucide-react';

interface CallToActionBannerProps {
  onOpenConsultationWithEmail: (email: string) => void;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({
  onOpenConsultationWithEmail,
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Por favor ingresa un correo corporativo válido.');
      return;
    }
    setError('');
    setSubmitted(true);
    setTimeout(() => {
      onOpenConsultationWithEmail(email);
    }, 600);
  };

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner with Mentalidad Web Brand Gradient & Wave Curve */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#001F2B] via-[#0A2837] to-[#001720] p-8 sm:p-12 lg:p-14 text-white">
          
          {/* Subtle decorative glow with #80C431 and #39DCE5 */}
          <div
            className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #80C431, #001F2B)' }}
          />
          <div
            className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #39DCE5, #001F2B)' }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Headline & Subtitle */}
            <div className="lg:col-span-5 text-left space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                ¿Hablamos 30 minutos de tu proyecto?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Agenda una sesión estratégica sin costo con nuestros consultores senior y descubre cómo podemos potenciar tus resultados con datos.
              </p>
            </div>

            {/* Middle Column: Interactive Email Capture Form */}
            <div className="lg:col-span-5">
              {submitted ? (
                <div className="bg-[#80C431]/20 border border-[#80C431]/40 rounded-2xl p-4 flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-[#80C431] shrink-0" />
                  <span className="text-sm font-medium">
                    ¡Excelente! Abriendo calendario para coordinar tu llamada...
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2">
                  <div className="bg-white p-1.5 sm:p-2 rounded-2xl sm:rounded-full shadow-lg flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <div className="flex items-center gap-3 px-4 py-2 sm:py-0 flex-1">
                      <Mail className="w-5 h-5 text-slate-400 shrink-0" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError('');
                        }}
                        placeholder="Tu email corporativo"
                        className="w-full text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none bg-transparent"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#001F2B] bg-[#80C431] hover:bg-[#68A326] hover:text-white active:scale-[0.98] rounded-xl sm:rounded-full transition-all duration-200 shadow-md shadow-[#80C431]/30 whitespace-nowrap cursor-pointer shrink-0"
                    >
                      <span>Agendar llamada</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  {error && (
                    <p className="text-xs text-rose-300 pl-4 text-left font-medium">
                      {error}
                    </p>
                  )}
                  <p className="text-[11px] text-slate-400 pl-4 text-left">
                    Sin compromisos. Respetamos tu privacidad y seguridad de datos.
                  </p>
                </form>
              )}
            </div>

            {/* Right Column: Logo & Social Links */}
            <div className="lg:col-span-2 flex flex-col lg:items-end items-start gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10">
              <MentalidadWebLogo variant="white" />
              
              {/* Social Channels */}
              <div className="flex items-center gap-3 text-slate-300">
                <a
                  href="https://www.linkedin.com/company/mentalidad-web/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white/10 hover:text-[#80C431] transition-colors"
                  aria-label="LinkedIn Mentalidad Web"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@MentalidadWeb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white/10 hover:text-[#80C431] transition-colors"
                  aria-label="YouTube Mentalidad Web"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/mentalidadweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white/10 hover:text-[#80C431] transition-colors"
                  aria-label="X Twitter Mentalidad Web"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/mentalidadweb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white/10 hover:text-[#80C431] transition-colors"
                  aria-label="Instagram Mentalidad Web"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
