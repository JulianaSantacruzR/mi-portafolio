import Link from "next/link"

import {
  ArrowUpRight,
  Download,
} from "lucide-react"

import Badge from "../ui/badge"

interface Props {
  project: any
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <div className="glass-card rounded-3xl p-8 transition duration-300 hover:-translate-y-2 hover:border-primary/30">
      <div className="flex items-center justify-between gap-4">
        <Badge>
          Featured Project
        </Badge>

        <ArrowUpRight />
      </div>

      <h3 className="mt-6 text-3xl font-black leading-tight">
        {project.title}
      </h3>

      <p className="mt-6 leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.technologies.map((tech: string) => (
          <Badge key={tech}>
            {tech}
          </Badge>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href={project.pdf}
          target="_blank"
          className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          <Download size={18} />

          Download Research PDF
        </Link>
      </div>
    </div>
  )
}