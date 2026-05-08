interface Props {
  title: string
  items: string[]
}

export default function SkillCard({
  title,
  items,
}: Props) {
  return (
    <div className="glass-card rounded-3xl p-8 transition duration-300 hover:-translate-y-2 hover:border-primary/30">
      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <div className="mt-6 flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}