const achievements = [
  {
    title:
      "Master Thesis Recognition",

    description:
      "Research focused on cyberattack detection in connected vehicles using AI and CAN Bus datasets.",
  },

  {
    title:
      "International Conferences",

    description:
      "Participation in academic and technology events related to Data Science and AI.",
  },

  {
    title:
      "Research & Innovation",

    description:
      "Development of analytical and machine learning solutions focused on real-world business problems.",
  },
]

export default function Achievements() {
  return (
    <section className="section-spacing">
      <div className="container-width">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Achievements
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Highlights & Recognition
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="glass-card rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-6 leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}