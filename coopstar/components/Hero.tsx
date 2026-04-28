"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Clock, MapPin, Star } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      aria-label="Seção principal"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Fundo com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a000a] via-[#600018] to-[#800020]" />

      {/* Imagem de fundo sutil */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-moto.png')" }}
      />

      {/* Grade decorativa */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Círculo decorativo */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#800020]/20 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-[#F4D7C5]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo esquerdo */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold px-4 py-2 rounded-full mb-6"
            >
              <Star className="w-3 h-3 fill-[#F4D7C5] text-[#F4D7C5]" />
              Mais de 9 anos de excelência em entregas
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
            >
              Sua entrega,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4D7C5] to-[#955251]">
                no tempo certo.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-white/75 leading-relaxed max-w-lg"
            >
              Moto frete, delivery e coletas em São Paulo Capital e Grande SP.
              Funcionamos{" "}
              <strong className="text-white font-semibold">
                24 horas, 7 dias por semana
              </strong>{" "}
              para garantir que seu negócio nunca pare.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                id="hero-cta-contact"
                onClick={() => scrollToSection("#contato")}
                className="group flex items-center gap-2 bg-[#800020] hover:bg-[#600018] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#800020]/30 hover:shadow-[#800020]/50 hover:scale-105"
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                id="hero-cta-services"
                onClick={() => scrollToSection("#servicos")}
                className="flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-full transition-all duration-300"
              >
                Ver Serviços
              </button>
            </motion.div>

            {/* Badges rápidas */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-6"
            >
              {[
                { icon: Clock, text: "24h / 7 dias" },
                { icon: MapPin, text: "SP Capital e Grande SP" },
                { icon: Star, text: "9+ anos de mercado" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/70 text-sm">
                  <Icon className="w-4 h-4 text-[#F4D7C5]" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Cards flutuantes lado direito */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {[
              {
                title: "Moto Frete Express",
                desc: "Documentos e pequenos volumes com máxima agilidade",
                tag: "Mais rápido",
                color: "from-[#800020] to-[#600018]",
              },
              {
                title: "Delivery Corporativo",
                desc: "Solução completa para farmácias, restaurantes e empresas",
                tag: "Mais popular",
                color: "from-[#955251] to-[#800020]",
              },
              {
                title: "Fora da Capital",
                desc: "Cobertura em toda a Grande São Paulo e interior",
                tag: "Amplo alcance",
                color: "from-[#600018] to-[#2a000a]",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                whileHover={{ x: -4, scale: 1.02 }}
                className={`bg-gradient-to-r ${card.color} p-5 rounded-2xl border border-white/10 cursor-default`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-white font-bold text-base">{card.title}</p>
                    <p className="text-white/65 text-sm mt-1">{card.desc}</p>
                  </div>
                  <span className="shrink-0 bg-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                    {card.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.button
        onClick={() => scrollToSection("#sobre")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, delay: 1, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors cursor-pointer"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-7 h-7" />
      </motion.button>
    </section>
  );
}
