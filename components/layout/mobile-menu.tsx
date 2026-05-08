"use client"

import { useState } from "react"

import Link from "next/link"

import { Menu, X } from "lucide-react"

interface Props {
  dictionary: any
}

export default function MobileMenu({
  dictionary,
}: Props) {
  const [open, setOpen] =
    useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() =>
          setOpen(!open)
        }
      >
        {open ? (
          <X />
        ) : (
          <Menu />
        )}
      </button>

      {open && (
        <div className="glass-card absolute left-4 right-4 top-20 rounded-3xl p-6">
          <div className="flex flex-col gap-6">
            <Link href="#about">
              {dictionary.navbar.about}
            </Link>

            <Link href="#experience">
              {dictionary.navbar.experience}
            </Link>

            <Link href="#projects">
              {dictionary.navbar.projects}
            </Link>

            <Link href="#skills">
              {dictionary.navbar.skills}
            </Link>

            <Link href="#education">
              {dictionary.navbar.education}
            </Link>

            <Link href="#contact">
              {dictionary.navbar.contact}
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}