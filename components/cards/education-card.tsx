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
    "
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
            {item.degree}
          </h3>

          <p className="mt-2 font-medium text-violet-600 dark:text-violet-400">
            {item.institution}
          </p>
        </div>

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
          {item.period}
        </span>
      </div>

      <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
        {item.description}
      </p>
    </div>
  )
}