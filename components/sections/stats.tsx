const stats = [
  {
    number: "3+",
    label: "Years Learning AI & Data",
  },

  {
    number: "10+",
    label: "Certifications",
  },

  {
    number: "15+",
    label: "Data Projects",
  },

  {
    number: "100%",
    label: "Passion for Technology",
  },
]

export default function Stats() {
  return (
    <section className="px-6 py-10">
      <div className="container-width">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="glass-card rounded-3xl p-8 text-center"
            >
              <h3 className="text-5xl font-black gradient-text">
                {item.number}
              </h3>

              <p className="mt-4 text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}