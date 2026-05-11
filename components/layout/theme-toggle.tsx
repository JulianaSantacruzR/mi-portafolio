"use client"

import { useEffect, useState } from "react"

import {
  Moon,
  Sun,
} from "lucide-react"

export default function ThemeToggle() {
  const [darkMode, setDarkMode] =
    useState(false)

  useEffect(() => {
    const storedTheme =
      localStorage.getItem("theme")

    // DEFAULT LIGHT MODE
    if (storedTheme === "dark") {
      document.documentElement.classList.add(
        "dark"
      )

      setDarkMode(true)
    } else {
      document.documentElement.classList.remove(
        "dark"
      )

      setDarkMode(false)
    }
  }, [])

  function toggleTheme() {
    if (darkMode) {
      document.documentElement.classList.remove(
        "dark"
      )

      localStorage.setItem(
        "theme",
        "light"
      )

      setDarkMode(false)
    } else {
      document.documentElement.classList.add(
        "dark"
      )

      localStorage.setItem(
        "theme",
        "dark"
      )

      setDarkMode(true)
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      border-[#dbe2ea]
      bg-[#edf2f7]
      text-zinc-700
      shadow-sm
      transition
      hover:bg-[#e6edf5]

      dark:border-zinc-700
      dark:bg-zinc-900
      dark:text-white
      dark:hover:bg-zinc-800
    "
    >
      {darkMode ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  )
}