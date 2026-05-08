import type { Metadata } from "next"

import { Inter } from "next/font/google"

import "@/app/globals.css"

import Providers from "@/app/providers"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Juliana Santacruz | Data Scientist",
  description:
    "AI Engineer & Data Scientist Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}