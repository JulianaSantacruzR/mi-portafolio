interface EducationItem {
  degree: string
  institution: string
  period: string
  description?: string
}

interface Props {
  item: EducationItem
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

      dark:border-zinc-700
      dark:bg-[#1a2232]
      dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)]
      dark:hover:bg-[#212c40]
    "
    >
      {/* TOP */}
      <div className="flex flex-wrap items-start justify-between gap-4">

        <div>
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
            {item.degree}
          </h3>

          <p className="mt-2 font-medium text-violet-600 dark:text-violet-300">
            {item.institution}
          </p>
        </div>

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

          dark:border-zinc-600
          dark:bg-[#2a3548]
          dark:text-zinc-200
        "
        >
          {item.period}
        </span>
      </div>

      <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-300">
        {item.description}
      </p>
    </div>
  )
}