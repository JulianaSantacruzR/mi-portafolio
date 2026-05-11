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
      border-[#d9e2ec]
      bg-[#f5f7fa]
      p-8
      shadow-[0_10px_40px_rgba(15,23,42,0.06)]
      backdrop-blur-xl
      transition-all
      duration-300

      hover:-translate-y-2
      hover:border-violet-200
      hover:bg-[#eef2f7]
      hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)]

      dark:border-[#272b35]
      dark:bg-[#181c24]
      dark:hover:border-violet-500/30
      dark:hover:bg-[#1d2230]
    "
    >
      {/* TOP */}
      <div className="flex items-center justify-between gap-4">
        <span
          className="
          rounded-full
          border
          border-violet-200
          bg-violet-50
          px-4
          py-2
          text-sm
          font-medium
          text-violet-700
          shadow-sm

          dark:border-zinc-700
          dark:bg-zinc-800/70
          dark:text-zinc-300
        "
        >
          Featured Project
        </span>

        <ArrowUpRight className="text-slate-500 dark:text-zinc-400" />
      </div>

      {/* TITLE */}
      <h3
        className="
        mt-8
        text-3xl
        font-black
        leading-tight
        text-slate-900

        dark:text-white
      "
      >
        {project.title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
        mt-6
        leading-relaxed
        text-slate-600

        dark:text-zinc-400
      "
      >
        {project.description}
      </p>

      {/* TECHNOLOGIES */}
      <div className="mt-8 flex flex-wrap gap-3">
        {project.technologies.map((tech: string) => (
          <span
            key={tech}
            className="
            rounded-full
            border
            border-[#cfd8e3]
            bg-white
            px-4
            py-2
            text-sm
            font-medium
            text-slate-700
            shadow-sm
            transition-all
            duration-300

            hover:border-violet-300
            hover:bg-violet-50
            hover:text-violet-700

            dark:border-zinc-700
            dark:bg-zinc-800/70
            dark:text-zinc-300
            dark:hover:bg-zinc-700
            dark:hover:text-white
          "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* BUTTON */}
      <div className="mt-10">
        <Link
          href={project.pdf}
          target="_blank"
          className="
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-slate-900
          px-6
          py-3
          text-sm
          font-semibold
          text-white
          transition-all
          duration-300

          hover:scale-[1.02]
          hover:bg-slate-800

          dark:bg-white
          dark:text-black
          dark:hover:bg-zinc-200
        "
        >
          <Download size={18} />

          View PDF
        </Link>
      </div>
    </div>
  )
}