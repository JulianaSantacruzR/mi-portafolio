"use client"

import Link from "next/link"

import { useState } from "react"

import { Menu, X } from "lucide-react"

interface Props {
  dictionary: any
}

export default function MobileMenu({
  dictionary,
}: Props) {
  const [open, setOpen] =
    useState(false)

  function closeMenu() {
    setOpen(false)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 backdrop-blur-xl"
      >
        {open ? (
          <X size={24} />
        ) : (
          <Menu size={24} />
        )}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl">
          <div className="flex h-full flex-col items-center justify-center gap-10 text-3xl font-semibold">
            <Link
              href="#about"
              onClick={closeMenu}
            >
              {
                dictionary.navbar
                  .about
              }
            </Link>

            <Link
              href="#experience"
              onClick={closeMenu}
            >
              {
                dictionary.navbar
                  .experience
              }
            </Link>

            <Link
              href="#projects"
              onClick={closeMenu}
            >
              {
                dictionary.navbar
                  .projects
              }
            </Link>

            <Link
              href="#skills"
              onClick={closeMenu}
            >
              {
                dictionary.navbar
                  .skills
              }
            </Link>

            <Link
              href="#education"
              onClick={closeMenu}
            >
              {
                dictionary.navbar
                  .education
              }
            </Link>

            <Link
              href="#contact"
              onClick={closeMenu}
            >
              {
                dictionary.navbar
                  .contact
              }
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}