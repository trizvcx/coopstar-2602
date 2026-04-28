"use client";

import { Bike, Phone, Mail, MapPin } from "lucide-react";

const footerLinks = [
  { label: "Quem Somos", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Tabela de Preços", href: "#tabela" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2a000a] text-white" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Marca */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#800020] rounded-lg flex items-center justify-center">
                <Bike className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <div className="leading-tight">
                <span className="font-bold text-base tracking-tight text-white block">Coopstar</span>
                <span className="text-[10px] uppercase tracking-widest font-medium text-[#F4D7C5]">Express</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Há mais de 9 anos conectando empresas e pessoas com agilidade,
              segurança e compromisso. São Paulo Capital e Grande SP, 24h/7 dias.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Navegação</h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Contato</h3>
            <ul className="flex flex-col gap-3.5">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#F4D7C5] mt-0.5 shrink-0" />
                <a href="tel:1150523563" className="text-sm text-white/60 hover:text-white transition-colors">
                  (11) 5052-3563 / 5051-4442
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#F4D7C5] mt-0.5 shrink-0" />
                <a href="mailto:coopstar_express@hotmail.com" className="text-sm text-white/60 hover:text-white transition-colors break-all">
                  coopstar_express@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F4D7C5] mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">
                  Av. Juruçê, 898 — Moema<br />São Paulo - SP
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Coopstar Express. Todos os direitos reservados.</p>
          <p>Moema · São Paulo · SP</p>
        </div>
      </div>
    </footer>
  );
}
