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
      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
        {title}
      </h3>

      <div className="mt-6 flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
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
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}