// education.tsx

const education = [
  {
    title:
      "Master's Degree in Data Science",
    institution: "CEUPE",
    period: "2024 — 2025",
  },

  {
    title:
      "Systems Engineering",
    institution: "University Name",
    period: "2019 — 2023",
  },
]

export default function Education() {
  return (
    <section
      id="education"
      className="px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Education
        </p>

        <h2 className="mt-4 text-5xl font-black">
          Academic Background
        </h2>

        <div className="mt-16 grid gap-8">
          {education.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-200 bg-white/70 p-8 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                {item.institution}
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}