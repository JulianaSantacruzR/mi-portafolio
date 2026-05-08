"use client"

import { Moon, Sun } from "lucide-react"

import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() =>
        setTheme(
          theme === "dark"
            ? "light"
            : "dark"
        )
      }
      className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur transition hover:bg-muted"
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  )
}