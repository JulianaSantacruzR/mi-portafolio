// experience.tsx

const experiences = [
  {
    role: "Data Analyst",
    company: "Company Name",
    period: "2023 — 2024",
    description:
      "Worked on data analysis, dashboards, SQL queries and business intelligence solutions.",
  },

  {
    role: "Systems Engineer",
    company: "Company Name",
    period: "2022 — 2023",
    description:
      "Developed analytical solutions and automation workflows using Python and cloud tools.",
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Experience
        </p>

        <h2 className="mt-4 text-5xl font-black">
          Professional Experience
        </h2>

        <div className="mt-16 space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.role}
              className="rounded-3xl border border-zinc-200 bg-white/70 p-8 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold">
                    {experience.role}
                  </h3>

                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    {experience.company}
                  </p>
                </div>

                <div className="text-sm text-zinc-500">
                  {experience.period}
                </div>
              </div>

              <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}