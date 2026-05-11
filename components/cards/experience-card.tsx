interface Props {
  item: any
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

      dark:border-zinc-800
      dark:bg-[#11131a]
      dark:hover:border-violet-500/30
    "
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {item.role}
          </h3>

          <p className="mt-2 font-medium text-violet-600 dark:text-violet-400">
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
          shadow-sm

          dark:border-zinc-700
          dark:bg-zinc-800/70
          dark:text-zinc-300
        "
        >
          {item.period}
        </span>
      </div>

      <p className="mt-6 leading-relaxed text-slate-700 dark:text-zinc-400">
        {item.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {item.technologies.map((tech: string) => (
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
    </div>
  )
}