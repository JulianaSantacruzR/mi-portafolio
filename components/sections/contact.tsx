"use client"

import { useState } from "react"

import toast from "react-hot-toast"

interface Props {
  dictionary?: any
}

export default function Contact({
  dictionary,
}: Props) {
  const [loading, setLoading] =
    useState(false)

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault()

    const form = e.currentTarget

    setLoading(true)

    const formData = new FormData(form)

    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      message:
        formData.get("message"),
    }

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(body),
        }
      )

      const data =
        await response.json()

      if (response.ok) {
        toast.success(
          "Message sent successfully"
        )

        form.reset()

        console.log(
          "EMAIL RESPONSE:",
          data
        )
      } else {
        toast.error(
          data.error ||
            "Something went wrong"
        )

        console.error(
          "EMAIL FAILED:",
          data
        )
      }
    } catch (error) {
      console.error(
        "CONTACT ERROR:",
        error
      )

      toast.error(
        "Something went wrong"
      )
    }

    setLoading(false)
  }

  return (
    <section
      id="contact"
      className="section-spacing"
    >
      <div className="container-width max-w-3xl">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            {dictionary?.contact
              ?.badge ?? "Contact"}
          </p>

          <h2 className="mt-4 text-5xl font-black leading-tight">
            {dictionary?.contact
              ?.title ??
              "Let’s Build Something Amazing"}
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-card rounded-3xl p-8"
        >
          <div className="grid gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="rounded-2xl border border-border bg-background/60 px-5 py-4 outline-none transition focus:border-primary"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="rounded-2xl border border-border bg-background/60 px-5 py-4 outline-none transition focus:border-primary"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              className="rounded-2xl border border-border bg-background/60 px-5 py-4 outline-none transition focus:border-primary"
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? "Sending..."
                : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}