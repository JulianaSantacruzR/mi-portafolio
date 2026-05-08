interface Props {
  badge: string

  title: string
}

export default function SectionTitle({
  badge,
  title,
}: Props) {
  return (
    <div className="mb-16 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-primary">
        {badge}
      </p>

      <h2 className="mt-4 text-5xl font-black">
        {title}
      </h2>
    </div>
  )
}