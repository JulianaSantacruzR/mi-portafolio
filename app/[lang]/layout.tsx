import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juliana Santacruz | Portafolio",
  description: "Ingeniera de Sistemas especializada en Análisis de Datos y ML",
};

// CAMBIO 1: Agregamos 'async' a la función
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>; // ✅ CAMBIO 2: params ahora es una Promise
}>) {
  // CAMBIO 2: Esperamos (await) a que los parámetros se resuelvan
  const { lang } = await params;

  return (
    <html
      lang={lang} // Usamos la variable extraída con await
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}