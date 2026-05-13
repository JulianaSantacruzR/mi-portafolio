import CredentialCard from "../cards/achievements-card"
import { Dictionary } from "@/types/dictionary"

interface Props {
  dictionary: Dictionary
}

export default function Achievements({
  dictionary,
}: Props) {
  return (
    <section
      id="achievements"
      className="scroll-mt-32 px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            {dictionary.credentials.badge}
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900 dark:text-white">
            {dictionary.credentials.title}
          </h2>
        </div>

        {/* GRID */}
        <div className="grid gap-8 lg:grid-cols-2">

          <CredentialCard
            title={dictionary.credentials.labels.certifications}
            items={dictionary.credentials.certifications}
          />

          <CredentialCard
            title={dictionary.credentials.labels.recognitions}
            items={dictionary.credentials.recognitions}
          />

        </div>

      </div>
    </section>
  )
}