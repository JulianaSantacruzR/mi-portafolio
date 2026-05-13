import { Dictionary } from "@/types/dictionary"

interface Props {
  dictionary: Dictionary
}

export default function About({ dictionary }: Props) {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">

        {/* LEFT */}
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            {dictionary.about.badge}
          </p>

          <h2 className="mt-4 text-5xl font-black leading-tight text-slate-900 dark:text-white">
            {dictionary.about.title}
          </h2>
        </div>

        {/* RIGHT */}
        <div
          className="
            rounded-3xl
            border
            border-zinc-200
            bg-[#f3f4f6]
            p-10
            shadow-[0_10px_30px_rgba(15,23,42,0.06)]
            transition

            dark:border-zinc-700
            dark:bg-[#1a2232]
            dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06)]

            dark:hover:bg-[#212c40]
          "
        >
          <p className="whitespace-pre-line text-lg leading-loose text-justify text-slate-700 dark:text-zinc-200">
            {dictionary.about.description}
          </p>
        </div>

      </div>
    </section>
  )
}