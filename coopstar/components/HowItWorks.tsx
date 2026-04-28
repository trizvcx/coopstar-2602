"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, ClipboardList, Bike, CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Entre em contato",
    description:
      "Ligue, envie um e-mail ou preencha nosso formulário. Nossa equipe responde rapidamente para entender sua necessidade.",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Cadastro e orçamento",
    description:
      "Faça seu cadastro em minutos. Definimos o melhor plano de entrega para o seu perfil: avulso, diário ou corporativo.",
  },
  {
    step: "03",
    icon: Bike,
    title: "Coleta pontual",
    description:
      "Nosso motoboy chega no horário combinado para coletar sua encomenda, com total segurança e responsabilidade.",
  },
  {
    step: "04",
    icon: CheckCircle2,
    title: "Entrega confirmada",
    description:
      "Acompanhe e receba a confirmação da entrega. Missão cumprida — no tempo certo, sempre.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="como-funciona"
      ref={ref}
      aria-labelledby="how-heading"
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#955251] font-bold text-sm uppercase tracking-widest mb-3"
          >
            Simples e rápido
          </motion.p>
          <motion.h2
            id="how-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#2a000a]"
          >
            Como funciona em{" "}
            <span className="text-[#800020]">4 passos</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-[#333333] max-w-xl mx-auto"
          >
            Da solicitação à confirmação de entrega — um processo transparente e
            descomplicado para você.
          </motion.p>
        </div>

        <div className="relative">
          {/* Linha conectora (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#F4D7C5]/20 via-[#F4D7C5]/60 to-[#F4D7C5]/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ step, icon: Icon, title, description }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Ícone circular */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10 w-24 h-24 bg-gradient-to-br from-[#800020] to-[#600018] rounded-2xl flex flex-col items-center justify-center shadow-lg shadow-[#800020]/20 mb-6 group-hover:shadow-[#800020]/40 transition-shadow"
                >
                  <Icon className="w-8 h-8 text-white mb-1" strokeWidth={1.5} />
                  <span className="text-white/60 text-[10px] font-bold tracking-widest">
                    {step}
                  </span>
                </motion.div>

                <h3 className="font-extrabold text-[#2a000a] text-base mb-2">
                  {title}
                </h3>
                <p className="text-[#333333] text-sm leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
