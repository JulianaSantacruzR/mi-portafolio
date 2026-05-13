"use client"

import { useState } from "react"
import toast from "react-hot-toast"
import { Dictionary } from "@/types/dictionary"

interface Props {
  dictionary: Dictionary
}

export default function Contact({ dictionary }: Props) {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    setLoading(true)

    const formData = new FormData(form)

    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success(dictionary.contact.messages.success)
        form.reset()
      } else {
        toast.error(data.error || dictionary.contact.messages.error)
      }
    } catch {
      toast.error(dictionary.contact.messages.requestError)
    }

    setLoading(false)
  }

  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-3xl">

        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            {dictionary.contact.badge}
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900 dark:text-white">
            {dictionary.contact.title}
          </h2>

          {dictionary.contact.description && (
            <p className="mt-6 text-zinc-500 dark:text-zinc-400">
              {dictionary.contact.description}
            </p>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-zinc-200 bg-[#f3f4f6] p-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)] dark:border-zinc-700 dark:bg-[#1a2232]"
        >

          <div className="grid gap-6">

            <input
              type="text"
              name="name"
              placeholder={dictionary.contact.form.name}
              className="rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-slate-800 dark:border-zinc-700 dark:bg-[#212c40] dark:text-white"
              required
            />

            <input
              type="email"
              name="email"
              placeholder={dictionary.contact.form.email}
              className="rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-slate-800 dark:border-zinc-700 dark:bg-[#212c40] dark:text-white"
              required
            />

            <textarea
              name="message"
              rows={6}
              placeholder={dictionary.contact.form.message}
              className="rounded-2xl border border-zinc-200 bg-white px-5 py-4 text-slate-800 dark:border-zinc-700 dark:bg-[#212c40] dark:text-white"
              required
            />

            <button
              disabled={loading}
              className="rounded-full bg-[#0f172a] px-8 py-4 font-semibold text-white transition hover:scale-[1.02] dark:bg-zinc-100 dark:text-black"
            >
              {loading
                ? dictionary.contact.form.sending
                : dictionary.contact.form.submit}
            </button>

          </div>

        </form>
      </div>
    </section>
  )
}