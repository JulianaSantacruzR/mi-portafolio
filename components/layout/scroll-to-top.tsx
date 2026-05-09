"use client"

import { useEffect, useState } from "react"

import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [visible, setVisible] =
    useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(
        window.scrollY > 500
      )
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

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollTop}
      className={`fixed bottom-8 right-8 z-50 rounded-full border border-white/10 bg-background/70 p-4 backdrop-blur-xl transition ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <ArrowUp size={20} />
    </button>
  )
}