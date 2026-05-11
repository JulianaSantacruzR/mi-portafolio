"use client"

import Link from "next/link"

import FadeIn from "../animations/fade-in"

import {
  ArrowRight,
  Download,
} from "lucide-react"

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"

interface Props {
  dictionary: any
}

export default function Hero({
  dictionary,
}: Props) {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24">
      <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-400">
            Data Scientist · AI Engineer
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Juliana
            <br />
            Santacruz.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
            Building intelligent systems with Machine Learning,
            Data Analytics and AI-powered applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-[1.02]"
            >
              View Projects

              <ArrowRight size={18} />
            </Link>

            <a
              href="/cv/juliana-santacruz-cv.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-zinc-800 px-6 py-4 font-semibold transition hover:bg-zinc-900"
            >
              <Download size={18} />

              Download CV
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-zinc-400">
            <Link
              href="https://github.com"
              target="_blank"
            >
              <FaGithub className="text-2xl transition hover:text-white" />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
            >
              <FaLinkedin className="text-2xl transition hover:text-white" />
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="h-[420px] w-[320px] rounded-[32px] border border-zinc-800 bg-zinc-900" />
        </div>
      </div>
    </section>
  )
}