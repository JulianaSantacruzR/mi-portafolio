// skills.tsx

import SkillCard from "@/components/cards/skill-card"

const skillCategories = [
  {
    title: "Data Science",

    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "Machine Learning",
      "XGBoost",
    ],
  },

  {
    title: "Data Analytics",

    skills: [
      "SQL",
      "Power BI",
      "Excel",
      "Tableau",
      "EDA",
      "Data Visualization",
    ],
  },

  {
    title: "Cloud & Tools",

    skills: [
      "Docker",
      "Git",
      "GitHub",
      "Vercel",
      "Jupyter",
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-600 dark:text-zinc-400">
            Skills
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900 dark:text-white">
            Technical Skills
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              items={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  )
}