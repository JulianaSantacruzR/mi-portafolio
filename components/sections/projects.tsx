// projects.tsx

import ProjectCard from "../cards/project-card"

import { projects } from "@/lib/data/projects"

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900 dark:text-white">
            Featured Projects
          </h2>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}