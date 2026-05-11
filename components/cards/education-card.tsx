// education-card.tsx

interface Props {
  item: any
}

export default function EducationCard({
  item,
}: Props) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-zinc-200
      bg-white/70
      p-8
      shadow-sm
      backdrop-blur-xl
      transition
      duration-300
      hover:-translate-y-1
      hover:shadow-lg

      dark:border-zinc-800
      dark:bg-zinc-900/40
    "
    >
      {/* TOP */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          {/* DEGREE */}
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
            {item.degree}
          </h3>

          {/* INSTITUTION */}
          <p className="mt-2 font-medium text-violet-600 dark:text-violet-400">
            {item.institution}
          </p>
        </div>

        {/* PERIOD */}
        <span
          className="
          rounded-full
          border
          border-zinc-200
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
          {item.period}
        </span>
      </div>

      {/* DESCRIPTION */}
      <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
        {item.description}
      </p>
    </div>
  )
}