import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Luiz | Software Developer",
  description:
    "Portfólio de Luiz Janampa. Desenvolvedor de Software especializado em Frontend e aplicações web modernas utilizando React, Next.js e ecossistema Node.js.",
  keywords: [
    "Frontend",
    "React",
    "Next.js",
    "Node.js",
    "Developer",
    "Software Engineer",
    "Portfólio",
    "Luiz Janampa",
  ],
  authors: [{ name: "Luiz Janampa" }],
  openGraph: {
    title: "Luiz | Software Developer",
    description: "Confira meu portfólio e projetos de alta performance.",
    url: "https://portfolio-two-murex-39.vercel.app/",
    siteName: "Luiz Janampa Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
