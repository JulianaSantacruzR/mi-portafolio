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
  }

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

        <h2 className="mt-4 text-5xl font-black">
          Technical Skills
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8"
            >
              <h3 className="text-2xl font-bold">
                {category.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-xl border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
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