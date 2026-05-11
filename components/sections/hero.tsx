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
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-300/20 blur-[140px] dark:bg-violet-500/10" />

        <div className="absolute bottom-20 left-20 h-[350px] w-[350px] rounded-full bg-cyan-300/20 blur-[120px] dark:bg-cyan-500/10" />
      </div>

      <FadeIn>
        <div className="mx-auto grid w-full max-w-7xl gap-20 lg:grid-cols-2 lg:items-center">
          {/* LEFT SIDE */}
          <div>
            <div className="w-fit rounded-full border border-violet-200 bg-white/80 px-5 py-2 text-sm tracking-[0.3em] text-slate-700 shadow-sm backdrop-blur-xl dark:border-zinc-800 dark:bg-[#11131a] dark:text-zinc-400">
              Systems Engineer · DATA SCIENTIST
            </div>

            <h1 className="mt-8 text-6xl font-black leading-[0.95] tracking-tight text-slate-900 md:text-8xl dark:text-white">
              Juliana Santacruz
              <br />
              Restrepo
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-700 dark:text-zinc-400">
              Building intelligent systems with Machine Learning,
              Data Analytics and AI-powered applications.
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="/cv/juliana-santacruz-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-zinc-900 px-7 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.02] dark:bg-white dark:text-black"
              >
                <ArrowRight size={18} />
                View Resume
              </a>

              <a
                href="/cv/juliana-santacruz-cv.pdf"
                download
                className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white/80 px-7 py-4 font-semibold text-slate-800 shadow-sm backdrop-blur-xl transition hover:bg-white dark:border-zinc-800 dark:bg-[#11131a] dark:text-white dark:hover:bg-[#191d27]"
              >
                <Download size={18} />
                Download CV
              </a>

              <Link
                href="#projects"
                className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white/80 px-7 py-4 font-semibold text-slate-800 shadow-sm backdrop-blur-xl transition hover:bg-white dark:border-zinc-800 dark:bg-[#11131a] dark:text-white dark:hover:bg-[#191d27]"
              >
                Projects
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* SOCIALS */}
            <div className="mt-10 flex items-center gap-6 text-slate-600 dark:text-zinc-400">
              <Link
                href="https://github.com"
                target="_blank"
              >
                <FaGithub className="text-2xl transition hover:text-black dark:hover:text-white" />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
              >
                <FaLinkedin className="text-2xl transition hover:text-black dark:hover:text-white" />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="rounded-[32px] border border-zinc-200 bg-white/80 p-10 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl transition dark:border-zinc-800 dark:bg-[#11131a]">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-zinc-500">
                Certifications & Expertise
              </p>

              <div className="mt-10 grid gap-5">
                {[
                  {
                    title: "Responsible Prompting",
                    desc: "AI prompting strategies and responsible AI practices.",
                  },
                  {
                    title: "Machine Learning",
                    desc: "Predictive modeling, classification and anomaly detection.",
                  },
                  {
                    title: "Data Analytics",
                    desc: "SQL, dashboards, business intelligence and EDA workflows.",
                  },
                  {
                    title: "Cybersecurity Research",
                    desc: "CAN Bus attack detection in connected vehicles.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-zinc-200 bg-white/90 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white dark:border-zinc-800 dark:bg-[#181b23] dark:hover:bg-[#20242e]"
                  >
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}