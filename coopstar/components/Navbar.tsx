"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bike, Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Quem Somos", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Tabela de Preços", href: "#tabela" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-lg shadow-lg border-b border-[#800020]/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 group"
              aria-label="Coopstar Express - Página inicial"
            >
              <div className="w-9 h-9 bg-[#800020] rounded-lg flex items-center justify-center group-hover:bg-[#600018] transition-colors">
                <Bike className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <div className="leading-tight">
                <span
                  className={`font-bold text-base tracking-tight block transition-colors ${
                    scrolled ? "text-[#800020]" : "text-white"
                  }`}
                >
                  Coopstar
                </span>
                <span
                  className={`text-[10px] uppercase tracking-widest font-medium transition-colors ${
                    scrolled ? "text-[#955251]" : "text-[#F4D7C5]"
                  }`}
                >
                  Express
                </span>
              </div>
            </a>

            {/* Links desktop */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Menu principal">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`text-sm font-medium transition-colors hover:text-[#955251] cursor-pointer ${
                    scrolled ? "text-[#2a000a]" : "text-white/90"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA + Mobile menu */}
            <div className="flex items-center gap-3">
              <a
                href="tel:1150523563"
                id="navbar-cta-phone"
                className={`hidden md:flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                  scrolled
                    ? "bg-[#800020] text-white hover:bg-[#600018]"
                    : "bg-white/20 text-white border border-white/30 hover:bg-white/30"
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                (11) 5052-3563
              </a>

              <button
                id="mobile-menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menu"
                aria-expanded={menuOpen}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  scrolled
                    ? "text-[#800020] hover:bg-[#800020]/10"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl shadow-xl border-b border-[#800020]/10 lg:hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Menu mobile">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-left px-4 py-3 rounded-lg text-[#2a000a] text-sm font-medium hover:bg-[#800020]/10 hover:text-[#800020] transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:1150523563"
                className="mt-2 flex items-center justify-center gap-2 bg-[#800020] text-white py-3 rounded-lg font-semibold text-sm hover:bg-[#600018] transition-colors"
              >
                <Phone className="w-4 h-4" />
                (11) 5052-3563
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
