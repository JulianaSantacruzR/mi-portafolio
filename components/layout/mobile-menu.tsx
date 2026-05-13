"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

interface NavbarDictionary {
  navbar: {
    about: string
    experience: string
    projects: string
    skills: string
    education: string
    achievements: string
    contact: string
  }
}

interface Props {
  dictionary: NavbarDictionary
}

export default function MobileMenu({ dictionary }: Props) {
  const [open, setOpen] = useState(false)

  // cerrar al hacer click fuera (UX pro)
  useEffect(() => {
    const handleClickOutside = () => setOpen(false)

    if (open) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [open])

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation()
          setOpen(!open)
        }}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white/70 backdrop-blur-xl md:hidden dark:border-zinc-700 dark:bg-zinc-900/70"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute left-6 right-6 top-24 rounded-3xl border border-zinc-200 bg-white/95 p-6 shadow-2xl backdrop-blur-2xl md:hidden dark:border-zinc-800 dark:bg-zinc-950/95"
        >
          <nav className="flex flex-col gap-6 text-lg font-medium">

            <Link href="#about" onClick={() => setOpen(false)} className="text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white">
              {dictionary.navbar.about}
            </Link>

            <Link href="#experience" onClick={() => setOpen(false)} className="text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white">
              {dictionary.navbar.experience}
            </Link>

            <Link href="#projects" onClick={() => setOpen(false)} className="text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white">
              {dictionary.navbar.projects}
            </Link>

            <Link href="#skills" onClick={() => setOpen(false)} className="text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white">
              {dictionary.navbar.skills}
            </Link>

            <Link href="#education" onClick={() => setOpen(false)} className="text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white">
              {dictionary.navbar.education}
            </Link>

            <Link href="#achievements" onClick={() => setOpen(false)} className="text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white">
              {dictionary.navbar.achievements}
            </Link>

            <Link href="#contact" onClick={() => setOpen(false)} className="text-zinc-700 transition hover:text-black dark:text-zinc-300 dark:hover:text-white">
              {dictionary.navbar.contact}
            </Link>

          </nav>
        </div>
      )}
    </>
  )
}