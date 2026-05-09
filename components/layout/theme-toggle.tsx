"use client"

import { useEffect, useState } from "react"

import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const [mounted, setMounted] =
    useState(false)

  const [theme, setTheme] =
    useState("dark")

  useEffect(() => {
    setMounted(true)

    const savedTheme =
      localStorage.getItem("theme")

    if (savedTheme) {
      setTheme(savedTheme)

      document.documentElement.classList.toggle(
        "dark",
        savedTheme === "dark"
      )
    }
  }, [])

  if (!mounted) {
    return null
  }

  function toggleTheme() {
    const newTheme =
      theme === "dark"
        ? "light"
        : "dark"

    setTheme(newTheme)

    localStorage.setItem(
      "theme",
      newTheme
    )

    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur"
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  )
}