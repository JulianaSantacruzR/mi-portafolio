import ExperienceCard from "@/components/cards/experience-card"
import { Dictionary } from "@/types/dictionary"

interface Props {
  dictionary: Dictionary
}

export default function Experience({
  dictionary,
}: Props) {
  return (
    <section
      id="experience"
      className="px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            {dictionary.experience.badge}
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900 dark:text-white">
            {dictionary.experience.title}
          </h2>
        </div>

        {/* CARDS */}
        <div className="space-y-8">
          {dictionary.experience.jobs.map((experience) => (
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