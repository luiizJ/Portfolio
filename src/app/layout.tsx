import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luizj | Software Developer",
  description:
    "Portfólio de Luiz Janampa. Desenvolvedor de Software especializado em Frontend e aplicações web modernas utilizando React, Next.js e ecossistema Node.js.",
  keywords: [
    "Frontend",
    "React",
    "Next.js",
    "Developer",
    "Software Engineer",
    "Portfólio",
    "Luiz Janampa",
  ],
  authors: [{ name: "Luiz Janampa" }],
  openGraph: {
    title: "Luiz | Software Developer",
    description: "Confira meu portfólio e projetos de alta performance.",
    type: "website",
    locale: "pt_BR",
    url: "https://portfolio-two-murex-39.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
