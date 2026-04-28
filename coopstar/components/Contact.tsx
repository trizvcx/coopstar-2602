"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefones",
    value: "(11) 5052-3563 / 5051-4442",
    href: "tel:1150523563",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "coopstar_express@hotmail.com",
    href: "mailto:coopstar_express@hotmail.com",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Av. Juruçê, 898 — Moema, São Paulo-SP",
    href: "https://maps.google.com/?q=Av.+Juruçê,+898+Moema+São+Paulo",
  },
  {
    icon: Clock,
    label: "Funcionamento",
    value: "24h por dia, 7 dias por semana",
    href: null,
  },
];

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const newErrors: Partial<typeof form> = {};
    if (!form.nome.trim()) newErrors.nome = "Por favor, informe seu nome.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Informe um e-mail válido.";
    if (!form.assunto.trim()) newErrors.assunto = "Por favor, informe o assunto.";
    if (!form.mensagem.trim()) newErrors.mensagem = "Por favor, escreva sua mensagem.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setFormState("sending");
    // Simula envio (integrar com enviar_hotsite.php ou serviço externo)
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof typeof form]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  return (
    <section
      id="contato"
      ref={ref}
      aria-labelledby="contact-heading"
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#955251] font-bold text-sm uppercase tracking-widest mb-3"
          >
            Fale conosco
          </motion.p>
          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#2a000a]"
          >
            Pronto para começar?{" "}
            <span className="text-[#800020]">Entre em contato.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="bg-gradient-to-br from-[#2a000a] to-[#800020] rounded-3xl p-7 text-white">
              <h3 className="font-extrabold text-lg mb-6">Informações de Contato</h3>
              <div className="flex flex-col gap-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-[#F4D7C5]" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-white text-sm font-medium hover:text-[#F4D7C5] transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-white text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA WhatsApp / Ligação */}
            <a
              href="tel:1150523563"
              id="contact-call-cta"
              className="flex items-center justify-center gap-3 bg-[#800020] hover:bg-[#600018] text-white font-bold py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-[#800020]/30 group"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Ligar agora: (11) 5052-3563
            </a>
          </motion.div>

          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center bg-[#FDF5F0] rounded-3xl p-12 border border-[#800020]/15"
              >
                <CheckCircle2 className="w-16 h-16 text-[#800020] mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-extrabold text-[#2a000a] mb-2">Mensagem enviada!</h3>
                <p className="text-[#333333] text-sm max-w-xs">
                  Recebemos seu contato e responderemos em breve. Obrigado!
                </p>
                <button
                  onClick={() => { setFormState("idle"); setForm({ nome: "", email: "", assunto: "", mensagem: "" }); }}
                  className="mt-6 text-[#800020] font-semibold text-sm hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                noValidate
                className="bg-[#FDF5F0] rounded-3xl p-8 border border-[#800020]/10 flex flex-col gap-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Nome */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nome" className="text-xs font-bold text-[#2a000a] uppercase tracking-wide">
                      Nome *
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      aria-required="true"
                      aria-describedby={errors.nome ? "nome-error" : undefined}
                      className={`rounded-xl border bg-white px-4 py-3 text-sm text-[#2a000a] outline-none transition-all focus:ring-2 focus:ring-[#800020]/30 ${
                        errors.nome ? "border-red-400" : "border-[#800020]/20 focus:border-[#800020]"
                      }`}
                    />
                    {errors.nome && (
                      <p id="nome-error" role="alert" className="text-xs text-red-500">{errors.nome}</p>
                    )}
                  </div>

                  {/* E-mail */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-[#2a000a] uppercase tracking-wide">
                      E-mail *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      aria-required="true"
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`rounded-xl border bg-white px-4 py-3 text-sm text-[#2a000a] outline-none transition-all focus:ring-2 focus:ring-[#800020]/30 ${
                        errors.email ? "border-red-400" : "border-[#800020]/20 focus:border-[#800020]"
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Assunto */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="assunto" className="text-xs font-bold text-[#2a000a] uppercase tracking-wide">
                    Assunto *
                  </label>
                  <input
                    id="assunto"
                    name="assunto"
                    type="text"
                    value={form.assunto}
                    onChange={handleChange}
                    placeholder="Como podemos ajudá-lo?"
                    aria-required="true"
                    aria-describedby={errors.assunto ? "assunto-error" : undefined}
                    className={`rounded-xl border bg-white px-4 py-3 text-sm text-[#2a000a] outline-none transition-all focus:ring-2 focus:ring-[#800020]/30 ${
                      errors.assunto ? "border-red-400" : "border-[#800020]/20 focus:border-[#800020]"
                    }`}
                  />
                  {errors.assunto && (
                    <p id="assunto-error" role="alert" className="text-xs text-red-500">{errors.assunto}</p>
                  )}
                </div>

                {/* Mensagem */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="mensagem" className="text-xs font-bold text-[#2a000a] uppercase tracking-wide">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    value={form.mensagem}
                    onChange={handleChange}
                    placeholder="Descreva sua necessidade de entrega..."
                    aria-required="true"
                    aria-describedby={errors.mensagem ? "mensagem-error" : undefined}
                    className={`rounded-xl border bg-white px-4 py-3 text-sm text-[#2a000a] outline-none transition-all focus:ring-2 focus:ring-[#800020]/30 resize-none ${
                      errors.mensagem ? "border-red-400" : "border-[#800020]/20 focus:border-[#800020]"
                    }`}
                  />
                  {errors.mensagem && (
                    <p id="mensagem-error" role="alert" className="text-xs text-red-500">{errors.mensagem}</p>
                  )}
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  disabled={formState === "sending"}
                  className="flex items-center justify-center gap-2.5 bg-[#955251] hover:bg-[#800020] disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#955251]/30 mt-1"
                >
                  {formState === "sending" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
