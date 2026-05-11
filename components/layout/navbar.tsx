// navbar.tsx

"use client"

import Link from "next/link"

import {
  useEffect,
  useState,
} from "react"

import ThemeToggle from "./theme-toggle"
import LanguageSwitcher from "./language-switcher"
import MobileMenu from "./mobile-menu"

interface Props {
  dictionary: any
}

export default function Navbar({
  dictionary,
}: Props) {
  const [active, setActive] =
    useState("")

  useEffect(() => {
    function handleScroll() {
      const sections = [
        "about",
        "experience",
        "projects",
        "skills",
        "education",
        "contact",
      ]

      for (const section of sections) {
        const element =
          document.getElementById(section)

        if (!element) continue

        const rect =
          element.getBoundingClientRect()

        if (
          rect.top <= 120 &&
          rect.bottom >= 120
        ) {
          setActive(section)
        }
      }
    }

    window.addEventListener(
      "scroll",
      handleScroll
    )

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      )
  }, [])

  const navClass = (
    section: string
  ) =>
    active === section
      ? "text-black dark:text-white"
      : "text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white"

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-white/40 backdrop-blur-2xl dark:border-white/5 dark:bg-black/20">
      <div className="container-width flex h-20 items-center justify-between px-6">
        <Link
          href="#"
          className="text-xl font-black tracking-tight"
        >
          Juliana Santacruz
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#about"
            className={navClass(
              "about"
            )}
          >
            {dictionary.navbar.about}
          </Link>

          <Link
            href="#experience"
            className={navClass(
              "experience"
            )}
          >
            {dictionary.navbar.experience}
          </Link>

          <Link
            href="#projects"
            className={navClass(
              "projects"
            )}
          >
            {dictionary.navbar.projects}
          </Link>

          <Link
            href="#skills"
            className={navClass(
              "skills"
            )}
          >
            {dictionary.navbar.skills}
          </Link>

          <Link
            href="#education"
            className={navClass(
              "education"
            )}
          >
            {dictionary.navbar.education}
          </Link>

          <Link
            href="#contact"
            className={navClass(
              "contact"
            )}
          >
            {dictionary.navbar.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          <ThemeToggle />

          <MobileMenu
            dictionary={
              dictionary
            }
          />
        </div>
      </div>
    </header>
  )
}