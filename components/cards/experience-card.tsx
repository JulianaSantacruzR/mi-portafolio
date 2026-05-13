interface ExperienceItem {
  role: string
  company: string
  period: string
  description?: string
  responsibilities?: string[]
  technologies: string[]
}

interface Props {
  item: ExperienceItem
}

export default function ExperienceCard({
  item,
}: Props) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-zinc-200
      bg-white/80
      p-8
      shadow-[0_8px_30px_rgba(15,23,42,0.06)]
      backdrop-blur-xl
      transition
      duration-300
      hover:-translate-y-2
      hover:shadow-xl

      dark:border-zinc-700
      dark:bg-[#1a2232]
      dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)]
      dark:hover:bg-[#212c40]
    "
    >
      {/* TOP */}
      <div className="flex flex-wrap items-center justify-between gap-4">

        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {item.role}
          </h3>

          <p className="mt-2 font-medium text-violet-600 dark:text-violet-300">
            {item.company}
          </p>
        </div>

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

          dark:border-violet-500/20
          dark:bg-violet-900/30
          dark:text-violet-200
        "
        >
          {item.period}
        </span>
      </div>

      {/* DESCRIPTION */}
      {item.description && (
        <p className="mt-6 leading-relaxed text-slate-700 dark:text-zinc-300">
          {item.description}
        </p>
      )}

      {/* RESPONSIBILITIES */}
      {item.responsibilities && (
        <ul className="mt-6 list-disc space-y-2 pl-5 text-slate-700 dark:text-zinc-300">
          {item.responsibilities.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      )}

      {/* TECHNOLOGIES */}
      <div className="mt-6 flex flex-wrap gap-3">
        {item.technologies.map((tech) => (
          <span
            key={tech}
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

            dark:border-zinc-600
            dark:bg-[#2a3548]
            dark:text-zinc-200
          "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}