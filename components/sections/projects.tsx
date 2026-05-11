import Link from "next/link"

import {
  ArrowUpRight,
  FileText,
} from "lucide-react"

import Badge from "../ui/badge"

import { projects } from "@/lib/data/projects"

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Featured Projects
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 transition hover:-translate-y-1 hover:border-zinc-700"
            >
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-700 px-4 py-1 text-sm text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="mt-8 text-3xl font-bold">
                {project.title}
              </h3>

              <p className="mt-6 leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                {project.pdf !== "#" && (
                  <a
                    href={project.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-black"
                  >
                    <FileText size={18} />

                    PDF
                  </a>
                )}
{/*
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 font-semibold"
                >
                  GitHub

                  <ArrowUpRight size={18} />
                </a>
              */}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}