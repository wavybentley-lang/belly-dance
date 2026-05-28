type CtaBannerProps = {
  eyebrow?: string
  text: string
  buttonLabel: string
}

export function CtaBanner({ eyebrow, text, buttonLabel }: CtaBannerProps) {
  return (
    <section
      className="border-t border-b border-primary/20 bg-[#1A1A1A] py-8 sm:py-10"
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-1 font-serif text-lg tracking-wide text-[#E8C84A] sm:text-xl" dangerouslySetInnerHTML={{ __html: text }} />
        {eyebrow && <p className="mb-4 text-sm text-muted-foreground">{eyebrow}</p>}
        {!eyebrow && <div className="mb-4" />}
        <a
          href="#contatti"
          className="inline-block rounded-full border-none bg-[#E8430A] px-8 py-3 font-serif font-semibold text-white shadow-sm shadow-primary/20 transition-colors hover:bg-[#c93708]"
        >
          {buttonLabel}
        </a>
      </div>
    </section>
  )
}
