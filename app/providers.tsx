"use client"

import { ThemeProvider } from "next-themes"

import { Toaster } from "react-hot-toast"

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
    >
      <Toaster position="top-right" />

      {children}
    </ThemeProvider>
  )
}