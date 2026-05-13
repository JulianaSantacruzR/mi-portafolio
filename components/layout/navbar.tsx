"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import ThemeToggle from "./theme-toggle"
import LanguageSwitcher from "./language-switcher"
import MobileMenu from "./mobile-menu"

interface Props {
  dictionary: any
}

export default function Navbar({
  dictionary,
}: Props) {
  const [active, setActive] = useState("")

  useEffect(() => {
    function handleScroll() {
      const sections = [
        "about",
        "experience",
        "projects",
        "skills",
        "education",
        "achievements",
        "contact",
      ]

      for (const section of sections) {
        const element = document.getElementById(section)

        if (!element) continue

        const rect = element.getBoundingClientRect()

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navClass = (section: string) =>
    active === section
      ? "text-slate-900 dark:text-white"
      : `
          text-slate-700
          transition-all
          duration-300
          hover:text-slate-900
          hover:[text-shadow:0_0_14px_rgba(0,0,0,0.45)]
          dark:text-zinc-400
          dark:hover:text-white
          dark:hover:[text-shadow:0_0_14px_rgba(255,255,255,0.35)]
        `

  return (
    <header
      className="
      fixed left-0 top-0 z-50 w-full
      border-b border-black/5
      bg-white/70 shadow-sm backdrop-blur-2xl
      dark:border-white/5 dark:bg-black/20
    "
    >
      <div className="container-width flex h-20 items-center justify-between px-6">

        <Link
          href="#"
          className="text-xl font-black tracking-tight text-slate-900 dark:text-white"
        >
          {dictionary.navbar.badge}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">

          <Link href="#about" className={navClass("about")}>
            {dictionary.navbar.about}
          </Link>

          <Link href="#experience" className={navClass("experience")}>
            {dictionary.navbar.experience}
          </Link>

          <Link href="#projects" className={navClass("projects")}>
            {dictionary.navbar.projects}
          </Link>

          <Link href="#skills" className={navClass("skills")}>
            {dictionary.navbar.skills}
          </Link>

          <Link href="#education" className={navClass("education")}>
            {dictionary.navbar.education}
          </Link>

          <Link href="#achievements" className={navClass("achievements")}>
            {dictionary.navbar.achievements}
          </Link>

          <Link href="#contact" className={navClass("contact")}>
            {dictionary.navbar.contact}
          </Link>

        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <MobileMenu dictionary={dictionary} />
        </div>

      </div>
    </header>
  )
}