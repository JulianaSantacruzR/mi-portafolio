// about.tsx

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            About
          </p>

          <h2 className="mt-4 text-5xl font-black leading-tight">
            Passionate about
            <br />
            AI & Data.
          </h2>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white/70 p-10 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/40">
          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            Systems Engineer with experience in
            Data Analytics, Machine Learning and
            AI-powered applications.

            <br />
            <br />

            Focused on building intelligent and
            scalable solutions using Python,
            SQL, cloud technologies and modern
            data science workflows.

            <br />
            <br />

            Interested in Artificial Intelligence,
            cybersecurity research and predictive
            analytics.
          </p>
        </div>
      </div>
    </section>
  )
}