import EducationCard from "../cards/education-card"
import { Dictionary } from "@/types/dictionary"

interface Props {
  dictionary: Dictionary
}

export default function Education({
  dictionary,
}: Props) {
  return (
    <section
      id="education"
      className="px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            {dictionary.education.badge}
          </p>

          <h2 className="mt-4 text-5xl font-black text-zinc-900 dark:text-white">
            {dictionary.education.title}
          </h2>
        </div>

        {/* EDUCATION GRID */}
        <div className="grid gap-8">
          {dictionary.education.items.map((item) => (
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