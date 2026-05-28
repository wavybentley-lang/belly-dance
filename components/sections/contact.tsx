"use client"

import { ChevronDown, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { type Dispatch, type ReactNode, type SetStateAction, useState } from "react"

import { brand } from "@/lib/site-config"

const courseOptions = [
  "Danza del Ventre (Belly Dance)",
  "Tribal Fusion",
  "Bollywood Dance",
  "Flamenco Arabo",
  "Pole Dance",
  "Danze Polinesiane",
]

type ContactSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
  formSubmitted: boolean
  setFormSubmitted: (submitted: boolean) => void
  formErrors: { [key: string]: boolean }
  setFormErrors: Dispatch<SetStateAction<{ [key: string]: boolean }>>
  formNetworkError: boolean
  setFormNetworkError: (error: boolean) => void
}

export function ContactSection({
  isVisible,
  setSectionRef,
  formSubmitted,
  setFormSubmitted,
  formErrors,
  setFormErrors,
  formNetworkError,
  setFormNetworkError,
}: ContactSectionProps) {
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState("")

  return (
    <section
      id="contatti"
      ref={(element) => setSectionRef("contatti", element)}
      className={`relative z-10 border-t border-border py-24 transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 px-4 text-left lg:px-0 lg:text-center">
          <h2 className="mb-4 text-left font-serif text-4xl font-bold text-foreground sm:text-5xl md:text-6xl lg:text-center">
            Vuoi provare un <span className="text-primary">corso</span>?
          </h2>
          <p className="max-w-none text-lg text-pretty text-foreground lg:mx-auto lg:max-w-2xl">
            Scrivici e ti aiutiamo a scegliere il percorso piu adatto a te. Ti rispondiamo con orari, disponibilita e prossimi passi per iniziare.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {formSubmitted ? (
            <div className="py-8 text-center">
              <p className="font-sans text-lg text-primary">Grazie! Il tuo messaggio è stato inviato. Ti risponderemo al più presto.</p>
              <button onClick={() => setFormSubmitted(false)} className="mt-4 cursor-pointer font-sans text-sm text-muted-foreground underline">
                Invia un altro messaggio
              </button>
            </div>
          ) : (
            <form
              className="space-y-6"
              action="https://formspree.io/f/mqengdqy"
              method="POST"
              onSubmit={async (event) => {
                event.preventDefault()
                const form = event.currentTarget
                const nome = (form.elements.namedItem("nome") as HTMLInputElement).value.trim()
                const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim()
                const telefono = (form.elements.namedItem("telefono") as HTMLInputElement).value.trim()
                const corso = (form.elements.namedItem("corso") as HTMLInputElement).value
                const errors: { [key: string]: boolean } = {}
                if (!nome) errors.nome = true
                if (!email) errors.email = true
                if (!telefono) errors.telefono = true
                if (!corso) errors.corso = true
                if (Object.keys(errors).length > 0) {
                  setFormErrors(errors)
                  return
                }
                setFormErrors({})
                setFormNetworkError(false)
                const data = new FormData(form)
                try {
                  const response = await fetch("https://formspree.io/f/mqengdqy", {
                    method: "POST",
                    body: data,
                    headers: { Accept: "application/json" },
                  })
                  if (!response.ok) throw new Error("network")
                  setFormSubmitted(true)
                  form.reset()
                  setSelectedCourse("")
                } catch {
                  setFormNetworkError(true)
                }
              }}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <TextInput id="name" name="nome" label="Nome" placeholder="Il tuo nome" hasError={formErrors.nome} setFormErrors={setFormErrors} />
                <TextInput id="email" name="email" label="Email" placeholder="La tua email" type="email" hasError={formErrors.email} setFormErrors={setFormErrors} />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <TextInput id="phone" name="telefono" label="Telefono" placeholder="Il tuo numero" type="tel" hasError={formErrors.telefono} setFormErrors={setFormErrors} />
                <div>
                  <label htmlFor="course" className="mb-2 block text-[12px] font-medium tracking-wider text-muted-foreground uppercase">
                    Corso di Interesse
                  </label>
                  <div
                    className="relative"
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setCourseDropdownOpen(false)
                    }}
                  >
                    <input type="hidden" name="corso" value={selectedCourse} />
                    <button
                      id="course"
                      type="button"
                      className="flex w-full items-center justify-between rounded-sm bg-[#080306] px-4 py-3 text-left text-[#F5EBDD] shadow-sm shadow-black/20 transition-colors hover:border-primary/60 focus:border-primary focus:outline-none"
                      style={{ border: `1px solid ${formErrors.corso ? "var(--template-error)" : "rgba(212, 166, 79, 0.35)"}` }}
                      onClick={() => {
                        setCourseDropdownOpen((open) => !open)
                        setFormErrors((previous) => ({ ...previous, corso: false }))
                      }}
                      aria-haspopup="listbox"
                      aria-expanded={courseDropdownOpen}
                    >
                      <span className={selectedCourse ? "text-[#F5EBDD]" : "text-[#F5EBDD]/55"}>{selectedCourse || "Seleziona un corso"}</span>
                      <ChevronDown
                        size={16}
                        className={`ml-3 shrink-0 text-primary/75 transition-transform ${courseDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {courseDropdownOpen && (
                      <div
                        className="absolute right-0 left-0 z-30 mt-2 overflow-hidden rounded-sm border border-primary/35 bg-[#080306] shadow-2xl shadow-black/50"
                        role="listbox"
                      >
                        {courseOptions.map((course) => (
                          <button
                            key={course}
                            type="button"
                            className="block w-full border-b border-primary/18 px-4 py-3 text-left text-sm font-medium text-[#F5EBDD] transition-colors last:border-b-0 hover:bg-primary/15 focus:bg-primary/15 focus:outline-none"
                            onClick={() => {
                              setSelectedCourse(course)
                              setCourseDropdownOpen(false)
                              setFormErrors((previous) => ({ ...previous, corso: false }))
                            }}
                            role="option"
                            aria-selected={selectedCourse === course}
                          >
                            {course}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-[12px] font-medium tracking-wider text-muted-foreground uppercase">
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="messaggio"
                  rows={4}
                  className="w-full resize-none rounded-sm border border-border bg-card px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  placeholder="Raccontaci di te..."
                />
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer rounded-full bg-primary py-4 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-[#A93226] hover:shadow-primary/35 active:translate-y-0 active:scale-[0.99]"
              >
                Invia Messaggio
              </button>
              <a
                href={brand.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-[#25D366] bg-[#25D366] py-4 text-lg font-bold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:-translate-y-0.5 hover:bg-[#1DB954] hover:shadow-[#25D366]/35 active:translate-y-0 active:scale-[0.99]"
              >
                <MessageCircle size={20} />
                Scrivici su WhatsApp
              </a>
              {formNetworkError && <p className="mt-3 font-sans text-sm text-[var(--template-error)]">Si è verificato un errore. Riprova o scrivici direttamente.</p>}
            </form>
          )}

          <div className="space-y-8">
            <div>
              <h3 className="mb-6 font-serif text-2xl font-bold text-foreground">Contatti</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4" id="sedi">
                  <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <div className="mb-2 font-semibold text-foreground">Indirizzo</div>
                    <div className="text-foreground">Via Duomo, 61, 80138 Napoli NA</div>
                  </div>
                </div>
                <ContactLink href={brand.phoneHref} icon={<Phone className="mt-1 h-6 w-6 flex-shrink-0 text-primary transition-transform group-hover:scale-110" />} label="Telefono" value={brand.phone} />
                <ContactLink href={brand.emailHref} icon={<Mail className="mt-1 h-6 w-6 flex-shrink-0 text-primary transition-transform group-hover:scale-110" />} label="Email" value={brand.email} />
                <ContactLink href={brand.whatsappHref} icon={<MessageCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary transition-transform group-hover:scale-110" />} label="WhatsApp" value="Risposta rapida per prove e informazioni" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="mb-6 font-serif text-2xl font-bold text-foreground">Dove Siamo</h3>
          <div className="aspect-video w-full overflow-hidden rounded-sm border border-border md:aspect-[21/9]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.795304986813!2d14.255486576444232!3d40.854417728884094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b086a33b490fb%3A0x5a4f4834be660804!2sBelly%20Dance%20Napoli%20Vox%20Mundi%20Rhythms%20of%20the%20World!5e0!3m2!1sen!2sit!4v1779961300438!5m2!1sen!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function TextInput({
  id,
  name,
  label,
  placeholder,
  hasError,
  setFormErrors,
  type = "text",
}: {
  id: string
  name: string
  label: string
  placeholder: string
  hasError?: boolean
  setFormErrors: Dispatch<SetStateAction<{ [key: string]: boolean }>>
  type?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[12px] font-medium tracking-wider text-muted-foreground uppercase">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="w-full rounded-sm bg-card px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        style={{ border: `1px solid ${hasError ? "var(--template-error)" : "var(--border)"}` }}
        onFocus={() => setFormErrors((previous) => ({ ...previous, [name]: false }))}
        placeholder={placeholder}
      />
    </div>
  )
}

function ContactLink({ href, icon, label, value }: { href: string; icon: ReactNode; label: string; value: string }) {
  return (
    <a href={href} className="group flex cursor-pointer items-start gap-4">
      {icon}
      <div>
        <div className="font-semibold text-foreground transition-colors group-hover:text-primary">{label}</div>
        <div className="text-foreground transition-colors group-hover:text-primary">{value}</div>
      </div>
    </a>
  )
}
