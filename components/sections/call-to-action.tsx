import Link from "next/link"

import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="section-spacing">
      <div className="container-width">
        <div className="glass-card rounded-[40px] p-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Open to Opportunities
          </p>

          <h2 className="mt-6 text-5xl font-black leading-tight">
            Let’s create intelligent solutions together.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Passionate about Artificial Intelligence, Data Science,
            Cloud Technologies and Cybersecurity for next-generation systems.
          </p>

          <div className="mt-10">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition hover:scale-105"
            >
              Contact Me

              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}