import type { Metadata } from "next"
import { Inter } from "next/font/google"

// @ts-ignore
 import "@/app/globals.css"

import Providers from "@/app/providers"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Juliana Santacruz | Data Scientist",
  description: "AI Engineer & Data Scientist Portfolio",
}

export default function LangLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
