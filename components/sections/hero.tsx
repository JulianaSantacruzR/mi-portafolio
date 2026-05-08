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
    <section className="relative flex min-h-screen items-center overflow-hidden px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[140px]" />

        <div className="absolute bottom-20 left-20 h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      <FadeIn>
        <div className="container-width flex flex-col items-center text-center">
          <div className="glass-card rounded-full px-5 py-2 text-sm text-primary">
            {dictionary.hero.badge}
          </div>

          <h1 className="mt-8 max-w-6xl text-6xl font-black leading-[1] tracking-tight md:text-8xl lg:text-[110px]">
            {dictionary.hero.title}

            <span className="gradient-text block">
              AI & Data
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {dictionary.hero.subtitle}
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:scale-105"
            >
              {dictionary.hero.projects}

              <ArrowRight size={18} />
            </Link>

            <Link
              href="/cv/juliana-santacruz-cv.pdf"
              download
              className="flex items-center gap-2 rounded-full border border-border bg-background/60 px-8 py-4 text-sm font-semibold backdrop-blur transition hover:bg-muted"
            >
              <Download size={18} />

              {dictionary.hero.resume}
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6 text-muted-foreground">
            <Link
              href="https://github.com"
              target="_blank"
            >
              <FaGithub className="text-2xl transition hover:text-primary" />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
            >
              <FaLinkedin className="text-2xl transition hover:text-primary" />
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}