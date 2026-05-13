import SkillCard from "@/components/cards/skill-card"
import { Dictionary } from "@/types/dictionary"

interface Props {
  dictionary: Dictionary
}

export default function Skills({
  dictionary,
}: Props) {
  return (
    <section
      id="skills"
      className="px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-600 dark:text-zinc-400">
            {dictionary.skills.badge}
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900 dark:text-white">
            {dictionary.skills.title}
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid gap-8 md:grid-cols-2">
          {Object.values(dictionary.skills.categories).map(
            (category) => (
              <SkillCard
                key={category.title}
                title={category.title}
                items={category.items}
              />
            )
          )}
        </div>
      </div>
    </section>
  )
}