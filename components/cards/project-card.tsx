import { ArrowUpRight, Download } from "lucide-react"

interface ProjectItem {
  title: string
  category: string
  problem?: string
  solution?: string[]
  technologies: string[]
  strategicValue?: string[]
  pdf?: string
}

interface Labels {
  problem: string
  solution: string
  technologies: string
  strategicValue: string
}

interface Props {
  project: ProjectItem
  viewPdf: string
  labels: Labels
}

export default function ProjectCard({
  project,
  viewPdf,
  labels,
}: Props) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-zinc-200
      bg-[#f3f4f6]
      p-10
      shadow-[0_10px_30px_rgba(15,23,42,0.06)]
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-xl

      dark:border-zinc-700

      dark:bg-[#1a2232]
      dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06)]

      dark:hover:border-violet-500/30
      dark:hover:bg-[#212c40]
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
          px-5
          py-2
          text-sm
          font-semibold
          text-violet-700
          shadow-sm

          dark:border-violet-500/20
          dark:bg-violet-900/30
          dark:text-violet-200
        "
        >
          {project.category}
        </span>

        <ArrowUpRight className="text-slate-500 dark:text-zinc-300" />
      </div>

      {/* CONTENT */}
      <div className="mt-8 space-y-8">

        {/* TITLE */}
        <h3 className="text-3xl font-black leading-tight text-slate-900 dark:text-white">
          {project.title}
        </h3>

        {/* PROBLEM */}
        {project.problem && (
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-400">
              {labels.problem}
            </h4>

            <p className="text-justify text-lg leading-loose text-slate-600 dark:text-zinc-200">
              {project.problem}
            </p>
          </div>
        )}

        {/* SOLUTION */}
        {project.solution && (
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-400">
              {labels.solution}
            </h4>

            <ul className="space-y-4">
              {project.solution.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-justify leading-relaxed text-slate-700 dark:text-zinc-200"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-violet-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* STRATEGIC VALUE */}
        {project.strategicValue && (
          <div
            className="
              rounded-2xl
              border
              border-violet-200
              bg-violet-50/70
              p-6

              dark:border-violet-500/20
              dark:bg-violet-900/25
            "
          >
            <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">
              {labels.strategicValue}
            </h4>

            <div className="space-y-2">
              {project.strategicValue.map((item) => (
                <p
                  key={item}
                  className="text-justify italic leading-loose text-slate-700 dark:text-zinc-200"
                >
                  • {item}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* TECHNOLOGIES */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-400">
            {labels.technologies}
          </h4>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="
                rounded-full
                border
                border-zinc-200
                bg-white
                px-5
                py-2
                text-sm
                font-medium
                text-slate-700
                shadow-sm

                dark:border-zinc-600
                dark:bg-[#2a3548]
                dark:text-zinc-100
              "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* BUTTON */}
      <div className="mt-10">

        {project.pdf ? (
          <a
            href={project.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#0f172a]
              px-7
              py-4
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:bg-[#1e293b]

              dark:bg-zinc-100
              dark:text-zinc-900
            "
          >
            <Download size={18} />
            {viewPdf}
          </a>
        ) : (
          <button
            disabled
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-zinc-300
              px-7
              py-4
              text-sm
              font-semibold
              text-zinc-600
              cursor-not-allowed

              dark:bg-zinc-800
              dark:text-zinc-500
            "
          >
            <Download size={18} />
            {viewPdf}
          </button>
        )}

      </div>

    </div>
  )
}