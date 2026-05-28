type CtaBannerProps = {
  eyebrow?: string
  text: string
  buttonLabel: string
}

export function CtaBanner({ eyebrow, text, buttonLabel }: CtaBannerProps) {
  return (
    <section
      className="border-t border-b border-primary/20 py-8 sm:py-10"
      style={{ background: "linear-gradient(135deg, rgba(149, 87, 194, 0.22) 0%, rgba(226, 76, 159, 0.18) 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-1 text-lg text-foreground sm:text-xl" dangerouslySetInnerHTML={{ __html: text }} />
        {eyebrow && <p className="mb-4 text-sm text-muted-foreground">{eyebrow}</p>}
        {!eyebrow && <div className="mb-4" />}
        <a
          href="#contatti"
          className="inline-block rounded-sm px-8 py-3 font-semibold text-primary-foreground shadow-sm shadow-primary/20 transition-opacity hover:opacity-90"
          style={{ background: "var(--template-brand-gradient)" }}
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  )
}
