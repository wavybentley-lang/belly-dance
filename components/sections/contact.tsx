"use client"

import { ChevronDown, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { type Dispatch, type ReactNode, type SetStateAction } from "react"

import { brand, courseCategories } from "@/lib/site-config"

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
                const corso = (form.elements.namedItem("corso") as HTMLSelectElement).value
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
                  <div className="relative">
                    <select
                      id="course"
                      name="corso"
                      className="w-full appearance-none rounded-sm bg-card px-4 py-3 pr-10 text-foreground transition-colors focus:border-primary focus:outline-none"
                      style={{ border: `1px solid ${formErrors.corso ? "var(--template-error)" : "var(--border)"}` }}
                      onFocus={() => setFormErrors((previous) => ({ ...previous, corso: false }))}
                      defaultValue=""
                    >
                      <option value="" disabled>Seleziona un corso</option>
                      {courseCategories.flatMap((category) =>
                        category.courses.map((course) => (
                          <option key={`${category.label}-${course.title}`} value={course.title}>
                            {course.title}
                          </option>
                        )),
                      )}
                      <option value="altro">Altro</option>
                    </select>
                    <ChevronDown size={16} className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground" />
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
              <button type="submit" className="w-full rounded-sm bg-primary py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                Invia Messaggio
              </button>
              <a
                href={brand.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-sm border border-primary/30 bg-card py-4 text-lg font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
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
