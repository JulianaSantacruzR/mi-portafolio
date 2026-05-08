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

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="container-width flex h-20 items-center justify-between px-6">
        <Link
          href="#"
          className="text-xl font-black tracking-tight"
        >
          Juliana.
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#about"
            className={
              active === "about"
                ? "text-primary"
                : ""
            }
          >
            {dictionary.navbar.about}
          </Link>

          <Link
            href="#experience"
            className={
              active === "experience"
                ? "text-primary"
                : ""
            }
          >
            {dictionary.navbar.experience}
          </Link>

          <Link
            href="#projects"
            className={
              active === "projects"
                ? "text-primary"
                : ""
            }
          >
            {dictionary.navbar.projects}
          </Link>

          <Link
            href="#skills"
            className={
              active === "skills"
                ? "text-primary"
                : ""
            }
          >
            {dictionary.navbar.skills}
          </Link>

          <Link
            href="#education"
            className={
              active === "education"
                ? "text-primary"
                : ""
            }
          >
            {dictionary.navbar.education}
          </Link>

          <Link
            href="#contact"
            className={
              active === "contact"
                ? "text-primary"
                : ""
            }
          >
            {dictionary.navbar.contact}
          </Link>
        </nav>

        <MobileMenu dictionary={dictionary} />

        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}