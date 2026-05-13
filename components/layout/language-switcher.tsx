"use client"

import Link from "next/link"

import { usePathname } from "next/navigation"

export default function LanguageSwitcher() {
  const pathname = usePathname()

  const segments =
    pathname.split("/")

  const currentLang =
    segments[1] === "es"
      ? "es"
      : "en"

  const newLang =
    currentLang === "en"
      ? "es"
      : "en"

  segments[1] = newLang

  const newPath =
    segments.join("/") || `/${newLang}`

  return (
    <Link
      href={newPath}
      className="
        rounded-full
        border
        border-zinc-200
        bg-white/80
        px-4
        py-2
        text-sm
        font-medium
        text-slate-700
        shadow-sm
        backdrop-blur-xl
        transition
        hover:bg-white
        hover:text-slate-900

        dark:border-zinc-800
        dark:bg-[#11131a]
        dark:text-zinc-300
        dark:hover:bg-[#191d27]
        dark:hover:text-white
      "
    >
      {currentLang === "en"
        ? "ES"
        : "EN"}
    </Link>
  )
}