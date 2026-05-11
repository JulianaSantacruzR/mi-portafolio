// providers.tsx

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
      forcedTheme={undefined}
      enableSystem={false}
      storageKey="portfolio-theme"
    >
      <Toaster position="top-right" />

      {children}
    </ThemeProvider>
  )
}