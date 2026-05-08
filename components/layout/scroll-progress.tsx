"use client"

import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const [width, setWidth] =
    useState(0)

  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        window.scrollY

      const height =
        document.body.scrollHeight -
        window.innerHeight

      setWidth(
        (scrollTop / height) * 100
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

  return (
    <div
      className="fixed left-0 top-0 z-[100] h-[3px] bg-primary transition-all"
      style={{
        width: `${width}%`,
      }}
    />
  )
}