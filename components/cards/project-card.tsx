// project-card.tsx

import Link from "next/link"

import {
  ArrowUpRight,
  Download,
} from "lucide-react"

interface Props {
  project: any
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-[#dbe2ea]
      bg-[#edf2f7]
      p-8
      shadow-[0_8px_30px_rgba(15,23,42,0.05)]
      transition
      duration-300
      hover:-translate-y-2
      hover:bg-[#e6edf5]

      dark:border-zinc-800
      dark:bg-[#11131a]
      dark:hover:border-violet-500/30
    "
    >
      <div className="flex items-center justify-between gap-4">
        <span
          className="
          rounded-full
          border
          border-[#d6dde8]
          bg-white
          px-4
          py-2
          text-sm
          font-medium
          text-zinc-700

          dark:border-zinc-700
          dark:bg-zinc-800/70
          dark:text-zinc-300
        "
        >
          Featured Project
        </span>

        <ArrowUpRight className="text-zinc-700 dark:text-zinc-300" />
      </div>

      <h3 className="mt-6 text-3xl font-black leading-tight text-zinc-900 dark:text-white">
        {project.title}
      </h3>

      <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.technologies.map((tech: string) => (
          <span
            key={tech}
            className="
            rounded-full
            border
            border-[#d6dde8]
            bg-white
            px-4
            py-2
            text-sm
            font-medium
            text-zinc-700
            shadow-sm

            dark:border-zinc-700
            dark:bg-zinc-800/70
            dark:text-zinc-300
          "
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href={project.pdf}
          target="_blank"
          className="
          flex
          items-center
          gap-2
          rounded-full
          bg-zinc-900
          px-6
          py-3
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-zinc-700

          dark:bg-white
          dark:text-black
        "
        >
          <Download size={18} />

          View PDF
        </Link>
      </div>
    </div>
  )
}