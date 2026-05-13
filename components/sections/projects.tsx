import ProjectCard from "../cards/project-card"
import { Dictionary } from "@/types/dictionary"

interface Props {
  dictionary: Dictionary
}

export default function Projects({ dictionary }: Props) {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            {dictionary.projects.badge}
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900 dark:text-white">
            {dictionary.projects.title}
          </h2>
        </div>

        {/* GRID */}
        <div className="grid gap-8 lg:grid-cols-2">
          {dictionary.projects.items.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              viewPdf={dictionary.projects.viewPdf}
              labels={dictionary.projects.labels}
            />
          ))}
        </div>

      </div>
    </section>
  )
}