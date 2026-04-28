"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Search, MapPin } from "lucide-react";

const priceData = [
  { city: "Alphaville", price: "R$ 40,00" },
  { city: "Arujá", price: "R$ 65,00" },
  { city: "Barueri", price: "R$ 45,00" },
  { city: "Bom Sucesso", price: "R$ 55,00" },
  { city: "Cajamar", price: "R$ 75,00" },
  { city: "Campinas", price: "R$ 135,00" },
  { city: "Cotia", price: "R$ 45,00" },
  { city: "Diadema", price: "R$ 40,00" },
  { city: "Guarujá", price: "R$ 130,00" },
  { city: "Guarulhos", price: "R$ 45,00" },
  { city: "Jandira", price: "R$ 65,00" },
  { city: "Litoral", price: "R$ 130,00" },
  { city: "Mauá", price: "R$ 65,00" },
  { city: "Mogi das Cruzes", price: "R$ 100,00" },
  { city: "Mogi Guaçu", price: "R$ 190,00" },
  { city: "Mogi Mirim", price: "R$ 165,00" },
  { city: "Osasco", price: "R$ 40,00" },
  { city: "Paulínia", price: "R$ 145,00" },
  { city: "Poá", price: "R$ 75,00" },
  { city: "Santo André", price: "R$ 45,00" },
  { city: "Santos", price: "R$ 110,00" },
  { city: "São B. do Campo", price: "R$ 45,00" },
  { city: "São Caetano do Sul", price: "R$ 40,00" },
  { city: "São Miguel", price: "R$ 50,00" },
];

export default function PriceTable() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [search, setSearch] = useState("");

  const filtered = priceData.filter((item) =>
    item.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="tabela"
      ref={ref}
      aria-labelledby="price-heading"
      className="py-24 bg-gradient-to-br from-[#2a000a] via-[#600018] to-[#800020]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[#F4D7C5] font-bold text-sm uppercase tracking-widest mb-3"
          >
            Fora da Capital
          </motion.p>
          <motion.h2
            id="price-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            Tabela de Preços
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-white/65 max-w-md mx-auto text-sm"
          >
            Valores por entrega/coleta para cidades da Grande SP e interior.
            Consulte-nos para rotas especiais.
          </motion.p>
        </div>

        {/* Campo de busca */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-sm mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              id="price-search"
              type="text"
              placeholder="Buscar cidade..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Buscar cidade na tabela de preços"
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/40 rounded-full pl-11 pr-5 py-3 text-sm outline-none focus:border-white/50 focus:bg-white/15 transition-all"
            />
          </div>
        </motion.div>

        {/* Grade de preços */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
          role="list"
          aria-label="Tabela de preços por cidade"
        >
          {filtered.length > 0 ? (
            filtered.map(({ city, price }, i) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.35 + i * 0.02 }}
                whileHover={{ scale: 1.05, y: -2 }}
                role="listitem"
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-4 flex flex-col gap-1 cursor-default group hover:bg-white/20 transition-all"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3 h-3 text-[#F4D7C5] shrink-0" />
                  <span className="text-white/80 text-xs font-medium truncate">
                    {city}
                  </span>
                </div>
                <p className="text-white font-extrabold text-lg leading-tight">
                  {price}
                </p>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-white/50 text-sm">
              Nenhuma cidade encontrada para &quot;{search}&quot;
            </div>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center text-white/40 text-xs mt-8"
        >
          * Preços sujeitos a alteração. Entre em contato para confirmar valores atualizados.
        </motion.p>
      </div>
    </section>
  );
}
