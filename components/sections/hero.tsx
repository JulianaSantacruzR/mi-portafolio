import Link from "next/link"
import { GitHub, Linkedin, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[120px]" />
        <div className="absolute bottom-20 left-20 h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">
          Data Scientist · AI Engineer
        </p>

        <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl lg:text-8xl">
          Building AI & Data Solutions
          <span className="block text-primary">
            with Modern Technologies
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Ingeniera de sistemas especializada en ciencia de datos,
          machine learning, visualización y desarrollo de soluciones
          inteligentes orientadas a negocio.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#projects"
            className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition hover:scale-105"
          >
            View Projects
            <ArrowRight size={18} />
          </Link>

          <Link
            href="#contact"
            className="rounded-full border border-border bg-background/60 px-8 py-4 text-sm font-medium backdrop-blur transition hover:bg-muted"
          >
            Contact Me
          </Link>
        </div>

        <div className="mt-10 flex items-center gap-6 text-muted-foreground">
          <Link
            href="https://github.com"
            target="_blank"
          >
            <GitHub className="transition hover:text-primary" />
          </Link>

          <Link
            href="https://linkedin.com"
            target="_blank"
          >
            <Linkedin className="transition hover:text-primary" />
          </Link>
        </div>
      </div>
    </section>
  )
}