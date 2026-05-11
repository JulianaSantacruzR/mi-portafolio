// theme-toggle.tsx

"use client"

import { useEffect, useState } from "react"

import { Moon, Sun } from "lucide-react"

import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const {
    resolvedTheme,
    setTheme,
  } = useTheme()

  const [mounted, setMounted] =
    useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark =
    resolvedTheme === "dark"

  return (
    <button
      onClick={() =>
        setTheme(
          isDark
            ? "light"
            : "dark"
        )
      }
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-zinc-200
        bg-[#f5f7fa]
        text-slate-700
        transition-all
        duration-300
        hover:bg-[#edf2f7]

        dark:border-zinc-700
        dark:bg-[#181c24]
        dark:text-white
        dark:hover:bg-[#202634]
      "
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  )
}