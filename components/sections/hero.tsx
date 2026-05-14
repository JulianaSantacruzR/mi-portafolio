"use client"

import Link from "next/link"
import FadeIn from "../animations/fade-in"
import { Dictionary } from "@/types/dictionary"

import { ArrowRight, Download } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

interface Props {
  dictionary: Dictionary
}

export default function Hero({ dictionary }: Props) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-8 pt-24">

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-300/20 blur-[140px]" />
        <div className="absolute bottom-20 left-20 h-[350px] w-[350px] rounded-full bg-cyan-300/20 blur-[120px]" />
      </div>

      <FadeIn>
        <div className="mx-auto grid max-w-7xl gap-16 lg:gap-20 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT */}
          <div className="max-w-2xl">

            <div className="w-fit rounded-full border border-zinc-200 bg-[#f3f4f6] px-5 py-2 text-sm tracking-[0.3em] text-slate-700 shadow-sm dark:border-zinc-700 dark:bg-[#1a2232] dark:text-zinc-300">
              {dictionary.hero.badge}
            </div>

            <h1 className="mt-8 text-5xl font-black leading-[0.95] text-slate-900 sm:text-6xl lg:text-7xl xl:text-7xl dark:text-white">
              {dictionary.hero.title}
            </h1>

            <p className="mt-8 text-lg leading-loose text-justify text-slate-700 dark:text-zinc-300">
              {dictionary.hero.description}
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href={dictionary.hero.cv.file}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-7 py-4 text-white transition hover:scale-[1.02] dark:bg-zinc-100 dark:text-black"
              >
                <ArrowRight size={18} />
                {dictionary.hero.buttons.resume}
              </a>

              <a
                href={dictionary.hero.cv.file}
                download={dictionary.hero.cv.downloadName}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-[#f3f4f6] px-7 py-4 text-slate-800 transition hover:scale-[1.02] dark:border-zinc-700 dark:bg-[#1a2232] dark:text-zinc-100"
              >
                <Download size={18} />
                {dictionary.hero.buttons.cv}
              </a>

              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-[#f3f4f6] px-7 py-4 text-slate-800 transition hover:scale-[1.02] dark:border-zinc-700 dark:bg-[#1a2232] dark:text-zinc-100"
              >
                {dictionary.hero.buttons.projects}
                <ArrowRight size={18} />
              </Link>

            </div>

            {/* SOCIAL */}
            <div className="mt-10 flex gap-6 text-slate-600 dark:text-zinc-300">
              
              <a
                href="https://github.com/JulianaSantacruzR?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:scale-110 hover:text-black dark:hover:text-white"
              >
                <FaGithub className="text-2xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/juliana-santacruz-restrepo-13060a196/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:scale-110 hover:text-blue-600"
              >
                <FaLinkedin className="text-2xl" />
              </a>

            </div>

          </div>

          {/* RIGHT */}
          <div className="ml-10 rounded-3xl border border-zinc-200 bg-[#f3f4f6] p-8 lg:p-10 shadow-[0_10px_30px_rgba(15,23,42,0.06)] dark:border-zinc-700 dark:bg-[#1a2232]">

            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
              {dictionary.hero.expertiseTitle}
            </p>

            <div className="mt-10 lg:mt-14 grid gap-6">

              {dictionary.hero.expertise.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 transition dark:border-zinc-700 dark:bg-[#212c40]"
                >
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 dark:text-zinc-300">
                    {item.description}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </FadeIn>
    </section>
  )
}