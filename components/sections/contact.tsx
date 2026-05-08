export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Let's Work Together
        </h2>

        <p className="mt-6 text-muted-foreground">
          ¿Tienes una oportunidad laboral, proyecto o colaboración?
          Estoy abierta a nuevas oportunidades relacionadas con datos,
          inteligencia artificial y desarrollo.
        </p>

        <form className="mt-10 space-y-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-2xl border border-border bg-background px-5 py-4 outline-none"
          />

          <input
            type="email"
            placeholder="julianasantarestrepo@gmail.com"
            className="w-full rounded-2xl border border-border bg-background px-5 py-4 outline-none"
          />

          <textarea
            placeholder="Message"
            rows={5}
            className="w-full rounded-2xl border border-border bg-background px-5 py-4 outline-none"
          />

          <button className="w-full rounded-2xl bg-primary px-6 py-4 font-medium text-primary-foreground">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}