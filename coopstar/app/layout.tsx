import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coopstar Express | Moto Frete e Entregas em São Paulo",
  description:
    "Há mais de 9 anos conectando empresas e clientes com agilidade. Moto frete, delivery e serviços fora da capital, 24h por dia, 7 dias por semana. Atendemos São Paulo Capital e Grande SP.",
  keywords: [
    "moto frete",
    "entrega rápida",
    "delivery São Paulo",
    "motoboy",
    "coleta e entrega",
    "Coopstar Express",
    "Moema",
  ],
  openGraph: {
    title: "Coopstar Express | Moto Frete e Entregas em São Paulo",
    description:
      "Entregas rápidas e seguras em São Paulo e Grande SP. 24h por dia, 7 dias por semana.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
