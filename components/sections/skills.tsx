// skills.tsx

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
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Skills
        </p>

        <h2 className="mt-4 text-5xl font-black text-zinc-900 dark:text-white">
          Technical Skills
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
              rounded-3xl
              border
              border-[#dbe2ea]
              bg-[#edf2f7]
              p-8
              shadow-[0_8px_30px_rgba(15,23,42,0.05)]
              transition
              duration-300
              hover:-translate-y-1
              hover:bg-[#e6edf5]
              dark:border-zinc-800
              dark:bg-[#11131a]
              dark:hover:bg-[#191d27]
            "
            >
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                {category.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="
                    rounded-xl
                    border
                    border-[#d6dde8]
                    bg-[#ffffff]
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-zinc-700
                    shadow-sm
                    dark:border-zinc-700
                    dark:bg-zinc-800/60
                    dark:text-zinc-300
                  "
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}