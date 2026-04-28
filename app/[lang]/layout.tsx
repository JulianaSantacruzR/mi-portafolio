import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css"; // ✅ Cambio 1: Subimos un nivel para encontrar el CSS

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juliana Santacruz | Portafolio", // ✅ Cambio 2: Personalizamos tu título
  description: "Ingeniera de Sistemas especializada en Análisis de Datos y ML",
};

export default function RootLayout({
  children,
  params, // ✅ Cambio 3: Recibimos los parámetros de la URL
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string }; // Definimos que params trae el idioma
}>) {
  return (
    // ✅ Cambio 4: El lang ahora es dinámico (es o en)
    <html
      lang={params.lang} 
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}