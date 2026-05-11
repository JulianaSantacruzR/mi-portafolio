// experience.tsx

import ExperienceCard from "@/components/cards/experience-card"

const experiences = [
  {
    role: "Data Analyst",
    company: "Company Name",
    period: "2023 — 2024",
    description:
      "Worked on data analysis, dashboards, SQL queries and business intelligence solutions.",

    technologies: [
      "SQL",
      "Power BI",
      "Python",
      "Tableau",
    ],
  },

  {
    role: "Systems Engineer",
    company: "Company Name",
    period: "2022 — 2023",
    description:
      "Developed analytical solutions and automation workflows using Python and cloud tools.",

    technologies: [
      "Python",
      "Docker",
      "Cloud",
      "Automation",
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Experience
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900 dark:text-white">
            Professional Experience
          </h2>
        </div>

        {/* CARDS */}
        <div className="space-y-8">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.role}
              item={experience}
            />
          ))}
        </div>
      </div>
    </section>
  )
}