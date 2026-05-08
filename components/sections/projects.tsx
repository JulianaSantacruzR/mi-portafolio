import ProjectCard from "../cards/project-card"

import { projects } from "@/lib/data/projects"

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-spacing"
    >
      <div className="container-width">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Projects
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Featured Work
          </h2>
        </div>

        <div className="grid gap-8">
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