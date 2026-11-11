import React from 'react';
import { MentalidadWebLogo } from './MentalidadWebLogo';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="w-full bg-[#001F2B] text-slate-400 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand info & Google Partner statement */}
          <div className="lg:col-span-2 space-y-4">
            <MentalidadWebLogo variant="white" showTagline />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Especialistas en consultoría de datos, ingeniería de analítica y optimización de medios con certificaciones de élite en Google Cloud y Google Marketing Platform.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-[#80C431]/30 text-xs text-[#80C431]">
              <span className="w-2 h-2 rounded-full bg-[#80C431]" />
              <span>Google Premier Partner · Chile & LatAm</span>
            </div>
          </div>

          {/* Column: Servicios */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Servicios
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicios" className="hover:text-[#80C431] transition-colors">
                  Consultoría Estratégica
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#80C431] transition-colors">
                  Data & Analytics
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#80C431] transition-colors">
                  Marketing Digital (GMP)
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#80C431] transition-colors">
                  Marketing de Contenido
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#80C431] transition-colors">
                  Tecnología & Integraciones
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#80C431] transition-colors">
                  Creatividad y Desarrollo
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Metodología & Empresa */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Compañía
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#metodologia" className="hover:text-[#80C431] transition-colors">
                  Nuestra Metodología
                </a>
              </li>
              <li>
                <a href="#clientes" className="hover:text-[#80C431] transition-colors">
                  Clientes y Casos
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-[#80C431] transition-colors">
                  Blog & Knowledge Hub
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="hover:text-[#80C431] transition-colors text-left cursor-pointer"
                >
                  Agendar Consultoría
                </button>
              </li>
              <li>
                <a
                  href="https://mentalidadweb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#80C431] transition-colors inline-flex items-center gap-1"
                >
                  <span>Portal Oficial</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Contacto & Oficinas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contacto
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#80C431] shrink-0 mt-0.5" />
                <span>Santiago de Chile · Las Condes / Providencia</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#80C431] shrink-0" />
                <a href="mailto:contacto@mentalidadweb.com" className="hover:text-white transition-colors">
                  contacto@mentalidadweb.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#80C431] shrink-0" />
                <span>+56 2 2950 0000</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Mentalidad Web SpA. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              Política de Privacidad
            </span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              Términos del Servicio
            </span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              Seguridad de la Información
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
