// education.tsx

import EducationCard from "../cards/education-card"

const education = [
  {
    degree:
      "Master's Degree in Data Science",

    institution: "CEUPE",

    period: "2024 — 2025",

    description:
      "Focused on Machine Learning, Data Analytics, AI systems and scalable data-driven solutions.",
  },

  {
    degree:
      "Systems Engineering",

    institution: "University Name",

    period: "2019 — 2023",

    description:
      "Strong foundation in software engineering, databases, systems architecture and programming.",
  },
]

export default function Education() {
  return (
    <section
      id="education"
      className="px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Education
          </p>

          <h2 className="mt-4 text-5xl font-black text-zinc-900 dark:text-white">
            Academic Background
          </h2>
        </div>

        {/* EDUCATION GRID */}
        <div className="grid gap-8">
          {education.map((item) => (
            <EducationCard
              key={item.degree}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  )
}