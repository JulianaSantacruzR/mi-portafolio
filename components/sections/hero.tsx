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
        <div className="absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

        <div className="absolute bottom-20 left-20 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <FadeIn>
        <div className="mx-auto grid w-full max-w-7xl gap-20 lg:grid-cols-2 lg:items-center">
          {/* LEFT SIDE */}
          <div>
            <div className="w-fit rounded-full border border-zinc-800 bg-zinc-900/60 px-5 py-2 text-sm tracking-[0.3em] text-zinc-400 backdrop-blur-xl">
              Systems Engineer · DATA SCIENTIST
            </div>

            <h1 className="mt-8 text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
              Juliana Santacruz
              <br />
              Restrepo
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
              Building intelligent systems with Machine Learning,
              Data Analytics and AI-powered applications.
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-4">
              {/* VIEW RESUME */}
              <a
                href="/cv/juliana-santacruz-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-black transition hover:scale-[1.02]"
              >
                <ArrowRight size={18} />

                View Resume
              </a>

              {/* DOWNLOAD CV */}
              <a
                href="/cv/juliana-santacruz-cv.pdf"
                download
                className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/40 px-7 py-4 font-semibold backdrop-blur-xl transition hover:bg-zinc-800/60"
              >
                <Download size={18} />

                Download CV
              </a>

              {/* PROJECTS */}
              <Link
                href="#projects"
                className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/40 px-7 py-4 font-semibold backdrop-blur-xl transition hover:bg-zinc-800/60"
              >
                Projects

                <ArrowRight size={18} />
              </Link>
            </div>

            {/* SOCIALS */}
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

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="rounded-[32px] border border-zinc-800 bg-zinc-900/50 p-10 backdrop-blur-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Certifications & Expertise
              </p>

              <div className="mt-10 grid gap-5">
                <div className="rounded-2xl border border-zinc-800 bg-black/30 p-5">
                  <h3 className="text-lg font-bold">
                    Responsible Prompting
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    AI prompting strategies and responsible AI practices.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-black/30 p-5">
                  <h3 className="text-lg font-bold">
                    Machine Learning
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    Predictive modeling, classification and anomaly detection.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-black/30 p-5">
                  <h3 className="text-lg font-bold">
                    Data Analytics
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    SQL, dashboards, business intelligence and EDA workflows.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-black/30 p-5">
                  <h3 className="text-lg font-bold">
                    Cybersecurity Research
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    CAN Bus attack detection in connected vehicles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}