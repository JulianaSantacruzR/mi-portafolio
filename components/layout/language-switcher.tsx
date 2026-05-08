"use client"

import { usePathname } from "next/navigation"

import Link from "next/link"

export default function LanguageSwitcher() {
  const pathname = usePathname()

  const isEnglish =
    pathname.startsWith("/en")

  const newPath = isEnglish
    ? pathname.replace("/en", "/es")
    : pathname.replace("/es", "/en")

  return (
    <Link
      href={newPath}
      className="rounded-full border border-border px-4 py-2 text-sm"
    >
      {isEnglish ? "ES" : "EN"}
    </Link>
  )
}