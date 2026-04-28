"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Bike,
  Building2,
  MapPin,
  FileText,
  Landmark,
  ShoppingBag,
  Pill,
  Pizza,
  Wrench,
} from "lucide-react";

const services = [
  {
    id: "moto-frete",
    icon: Bike,
    title: "Moto Frete Express",
    description:
      "Entregas ultrarrápidas de documentos e pequenos volumes de um ponto a outro da cidade. Ideal para quem precisa de velocidade e confiabilidade.",
    subItems: [
      { icon: FileText, label: "Documentos e contratos" },
      { icon: Landmark, label: "Serviços bancários e cartoriais" },
      { icon: MapPin, label: "Retiradas em aeroportos" },
    ],
    badge: "Mais rápido",
    gradient: "from-[#800020] to-[#600018]",
    light: "bg-[#f5e6e8]",
    accent: "text-[#800020]",
    image: "/hero-moto.png",
  },
  {
    id: "delivery",
    icon: ShoppingBag,
    title: "Delivery Corporativo",
    description:
      "Sua empresa tem grande volume de documentos ou encomendas leves? Implantamos um serviço de delivery completo com o melhor custo-benefício do mercado.",
    subItems: [
      { icon: Pill, label: "Farmácias" },
      { icon: Pizza, label: "Restaurantes e Pizzarias" },
      { icon: Wrench, label: "Auto Peças e distribuidoras" },
    ],
    badge: "Mais popular",
    gradient: "from-[#955251] to-[#800020]",
    light: "bg-[#faf0f0]",
    accent: "text-[#955251]",
    image: "/service-delivery.png",
  },
  {
    id: "fora-capital",
    icon: Building2,
    title: "Fora da Capital",
    description:
      "Cobertura completa na Grande São Paulo e cidades do interior. Consulte nossa tabela de preços e descubra que atender sua região é mais simples do que parece.",
    subItems: [
      { icon: MapPin, label: "30+ cidades atendidas" },
      { icon: MapPin, label: "Alphaville, Guarulhos, Santo André" },
      { icon: MapPin, label: "Santos, Campinas e muito mais" },
    ],
    badge: "Amplo alcance",
    gradient: "from-[#600018] to-[#2a000a]",
    light: "bg-[#e6f5e6]",
    accent: "text-[#600018]",
    image: "/about.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="servicos"
      ref={ref}
      aria-labelledby="services-heading"
      className="py-24 bg-[#FDF5F0]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#955251] font-bold text-sm uppercase tracking-widest mb-3"
          >
            O que oferecemos
          </motion.p>
          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#2a000a]"
          >
            Soluções para cada{" "}
            <span className="text-[#800020]">necessidade</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-[#333333] text-base max-w-xl mx-auto"
          >
            Do documento urgente ao delivery diário — temos o serviço certo para
            manter seu negócio em movimento.
          </motion.p>
        </div>

        {/* Cards dos serviços */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.article
                key={svc.id}
                id={`service-card-${svc.id}`}
                custom={i}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#800020]/8 flex flex-col"
              >
                {/* Cabeçalho do card com imagem */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={svc.image} 
                    alt={svc.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0" style={{ backgroundColor: "rgba(165, 42, 42, 0.08)" }} />
                  <div className="absolute inset-0 p-7 flex flex-col justify-between">
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                      </div>
                      <span className="bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        {svc.badge}
                      </span>
                    </div>
                    <h3 className="text-white font-extrabold text-xl leading-tight">
                      {svc.title}
                    </h3>
                  </div>
                </div>

                {/* Corpo do card */}
                <div className="p-7 flex flex-col flex-1">
                  <p className="text-[#333333] text-sm leading-relaxed mb-6">
                    {svc.description}
                  </p>
                  <ul className="mt-auto space-y-3">
                    {svc.subItems.map(({ icon: SubIcon, label }) => (
                      <li key={label} className="flex items-center gap-3">
                        <div className={`w-7 h-7 ${svc.light} rounded-lg flex items-center justify-center shrink-0`}>
                          <SubIcon className={`w-3.5 h-3.5 ${svc.accent}`} />
                        </div>
                        <span className="text-sm text-[#2a000a] font-medium">
                          {label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
