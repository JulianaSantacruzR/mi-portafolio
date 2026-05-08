import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface Props {
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
}: Props) {
  return (
    <div className="group rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-2 hover:border-primary">
      <div className="flex items-start justify-between">
        <h3 className="text-2xl font-semibold">{title}</h3>

        <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>

      <p className="mt-5 leading-relaxed text-muted-foreground">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border px-4 py-2 text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8 flex gap-4">
        {github && (
          <Link href={github} className="text-sm text-primary">
            GitHub
          </Link>
        )}

        {demo && (
          <Link href={demo} className="text-sm text-primary">
            Live Demo
          </Link>
        )}
      </div>
    </div>
  )
}