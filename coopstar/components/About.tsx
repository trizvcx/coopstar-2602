"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, MapPin, Users } from "lucide-react";

const stats = [
  { icon: Award, value: "9+", label: "Anos de mercado" },
  { icon: Clock, value: "24h", label: "Funcionamento" },
  { icon: MapPin, value: "30+", label: "Cidades atendidas" },
  { icon: Users, value: "100%", label: "Compromisso" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="sobre"
      ref={ref}
      aria-labelledby="about-heading"
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Lado esquerdo: texto */}
          <div>
            <motion.p
              custom={0}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-[#955251] font-bold text-sm uppercase tracking-widest mb-3"
            >
              Quem Somos
            </motion.p>

            <motion.h2
              id="about-heading"
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-extrabold text-[#2a000a] leading-tight"
            >
              Agilidade que move{" "}
              <span className="text-[#800020]">seu negócio.</span>
            </motion.h2>

            <motion.p
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="mt-6 text-[#333333] text-base leading-relaxed"
            >
              A <strong className="text-[#2a000a]">Coopstar Express</strong> é
              uma empresa especializada em serviços de entregas e coletas, atuando
              há mais de <strong className="text-[#2a000a]">nove anos</strong> no
              mercado. Nosso propósito é descomplicar a logística de empresas e
              pessoas, tornando cada entrega uma experiência confiável e pontual.
            </motion.p>

            <motion.p
              custom={3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="mt-4 text-[#333333] text-base leading-relaxed"
            >
              Atendemos em <strong className="text-[#2a000a]">São Paulo Capital</strong>{" "}
              e toda a <strong className="text-[#2a000a]">Grande São Paulo</strong> com
              uma equipe especializada e dedicada. Dispomos de agendamento com hora
              marcada e funcionamos <strong className="text-[#2a000a]">24 horas de
              segunda a domingo</strong> — porque seu negócio não pode esperar.
            </motion.p>

            <motion.div
              custom={4}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="mt-8"
            >
              <a
                href="#contato"
                id="about-cta"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-[#800020] hover:bg-[#600018] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#800020]/30"
              >
                Faça seu cadastro
              </a>
            </motion.div>
          </div>

          {/* Lado direito: imagem e stats */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-[#800020]/10"
            >
              <img 
                src="/about.png" 
                alt="Logística Coopstar Express" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#800020]/40 to-transparent" />
            </motion.div>

            <div className="grid grid-cols-2 gap-5">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  custom={i + 2}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="bg-gradient-to-br from-[#FDF5F0] to-[#F4D7C5]/30 rounded-2xl p-6 border border-[#800020]/10 group cursor-default"
                >
                  <div className="w-11 h-11 bg-[#800020] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#600018] transition-colors">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-3xl font-extrabold text-[#2a000a]">{value}</p>
                  <p className="text-sm text-[#333333] mt-1 font-medium">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
