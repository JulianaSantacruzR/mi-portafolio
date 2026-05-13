interface Props {
  title: string
  items: string[]
}

export default function CredentialCard({
  title,
  items,
}: Props) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-zinc-200
      bg-[#f3f4f6]
      p-10
      shadow-[0_10px_30px_rgba(15,23,42,0.06)]
      transition-all
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
      <div
        className="
          inline-flex
          rounded-full
          border
          border-violet-200
          bg-violet-50
          px-5
          py-2
          text-sm
          font-semibold
          text-violet-700

          dark:border-violet-500/20
          dark:bg-violet-900/30
          dark:text-violet-200
        "
      >
        {title}
      </div>

      {/* CONTENT */}
      <div className="mt-8 space-y-4">

        {items.map((item) => (
          <div
            key={item}
            className="
              flex
              gap-3
              rounded-2xl
              border
              border-zinc-200
              bg-white
              p-5

              dark:border-zinc-600
              dark:bg-[#2a3548]
            "
          >
            <span className="mt-2 h-2 w-2 rounded-full bg-violet-500" />

            <p className="leading-loose text-slate-700 dark:text-zinc-200">
              {item}
            </p>
          </div>
        ))}

      </div>
    </div>
  )
}