// skill-card.tsx

interface Props {
  title: string
  items: string[]
}

export default function SkillCard({
  title,
  items,
}: Props) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-slate-200
      bg-[#f8fafc]
      p-8
      shadow-[0_8px_30px_rgba(15,23,42,0.05)]
      backdrop-blur-xl
      transition
      duration-300
      hover:-translate-y-2
      hover:bg-[#f1f5f9]
      hover:shadow-xl

      dark:border-zinc-800
      dark:bg-[#11131a]
      dark:hover:bg-[#191d27]
    "
    >
      {/* TITLE */}
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
        {title}
      </h3>

      {/* SKILLS */}
      <div className="mt-6 flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            py-2
            text-sm
            font-medium
            text-slate-700
            shadow-sm
            transition
            hover:border-violet-300
            hover:bg-violet-50
            hover:text-violet-700

            dark:border-zinc-700
            dark:bg-zinc-800/70
            dark:text-zinc-300
            dark:hover:border-violet-500/40
            dark:hover:bg-zinc-700
          "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}