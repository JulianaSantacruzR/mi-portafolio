// projects.tsx

import {
  FileText,
} from "lucide-react"

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

          <h2 className="mt-4 text-5xl font-black text-zinc-900 dark:text-white">
            Featured Projects
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
              rounded-3xl
              border
              border-[#dbe2ea]
              bg-[#edf2f7]
              p-8
              shadow-[0_8px_30px_rgba(15,23,42,0.05)]
              transition
              duration-300
              hover:-translate-y-1
              hover:bg-[#e6edf5]
              dark:border-zinc-800
              dark:bg-[#11131a]
              dark:hover:bg-[#191d27]
            "
            >
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                {project.category}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                    rounded-full
                    border
                    border-[#d5dde8]
                    bg-[#ffffff]
                    px-4
                    py-1
                    text-sm
                    font-medium
                    text-zinc-700
                    dark:border-zinc-700
                    dark:bg-zinc-800/70
                    dark:text-zinc-300
                  "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="mt-8 text-3xl font-bold text-zinc-900 dark:text-white">
                {project.title}
              </h3>

              <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                {project.pdf !== "#" && (
                  <a
                    href={project.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-black"
                  >
                    <FileText size={18} />
                    View PDF
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}