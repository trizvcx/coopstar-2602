"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: "faq-1",
    question: "Quais horários vocês atendem?",
    answer:
      "Funcionamos 24 horas por dia, 7 dias por semana, de segunda a domingo — inclusive feriados. Trabalhamos com agendamento com hora marcada para garantir pontualidade.",
  },
  {
    id: "faq-2",
    question: "Qual a área de cobertura de vocês?",
    answer:
      "Atendemos toda a São Paulo Capital e Grande São Paulo. Também realizamos entregas em mais de 30 cidades do interior e litoral, como Campinas, Santos, Guarujá, entre outras. Confira nossa tabela de preços para detalhes.",
  },
  {
    id: "faq-3",
    question: "Como posso solicitar um motoboy?",
    answer:
      "Você pode nos contatar por telefone: (11) 5052-3563 ou 5051-4442, pelo formulário neste site, ou pelo e-mail coopstar_express@hotmail.com. Faremos seu cadastro e a coleta pode ser agendada imediatamente.",
  },
  {
    id: "faq-4",
    question: "Vocês fazem entregas de grandes volumes?",
    answer:
      "O serviço de moto frete é ideal para documentos, contratos, pequenas encomendas e volumes leves. Para cargas maiores, consulte-nos para verificarmos a melhor solução para sua necessidade.",
  },
  {
    id: "faq-5",
    question: "Vocês oferecem planos corporativos?",
    answer:
      "Sim! Implantamos serviços de delivery diário para empresas com grande volume de entregas — farmácias, restaurantes, distribuidoras, escritórios e muito mais. Entre em contato para montar um plano personalizado.",
  },
  {
    id: "faq-6",
    question: "Como funciona o serviço bancário e cartorário?",
    answer:
      "Realizamos coleta e entrega de documentos em bancos, cartórios, juntas comerciais e repartições públicas em toda a capital. O serviço é rápido e seguro, com confirmação de entrega.",
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-[#800020]/30 bg-[#F4D7C5]/10"
          : "border-[#800020]/10 bg-white hover:border-[#800020]/25"
      }`}
    >
      <button
        id={faq.id}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${faq.id}-answer`}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
      >
        <span className={`font-semibold text-sm leading-snug transition-colors ${isOpen ? "text-[#800020]" : "text-[#2a000a]"}`}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? "text-[#800020]" : "text-[#704a50]"}`} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${faq.id}-answer`}
            role="region"
            aria-labelledby={faq.id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5">
              <p className="text-[#333333] text-sm leading-relaxed border-t border-[#800020]/10 pt-4">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openId, setOpenId] = useState<string | null>("faq-1");

  return (
    <section
      id="faq"
      ref={ref}
      aria-labelledby="faq-heading"
      className="py-24 bg-[#FDF5F0]"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[#955251] font-bold text-sm uppercase tracking-widest mb-3"
          >
            <HelpCircle className="w-4 h-4" />
            Dúvidas frequentes
          </motion.div>
          <motion.h2
            id="faq-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#2a000a]"
          >
            Perguntas <span className="text-[#800020]">frequentes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-[#333333] text-sm"
          >
            Não encontrou o que procura? Entre em contato — respondemos rapidamente.
          </motion.p>
        </div>

        {/* Accordions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-3"
        >
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
