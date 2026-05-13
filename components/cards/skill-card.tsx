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
      hover:shadow-xl

      dark:border-zinc-700
      dark:bg-[#1a2232]
      dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)]
      dark:hover:bg-[#212c40]
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

            dark:border-zinc-600
            dark:bg-[#2a3548]
            dark:text-zinc-200

            dark:hover:border-violet-500/40
            dark:hover:bg-[#323f55]
          "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}