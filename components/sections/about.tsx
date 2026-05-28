"use client"

import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"

type AboutSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
  bioOpen: boolean
  setBioOpen: (open: boolean) => void
}

export function AboutSection({ isVisible, setSectionRef, bioOpen, setBioOpen }: AboutSectionProps) {
  return (
    <section
      id="chi-siamo"
      ref={(element) => setSectionRef("chi-siamo", element)}
      className={`bg-card py-20 transition-all duration-700 sm:py-28 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-border bg-secondary">
            <Image
              src="/additional/chi-siamo-belly-dance.jpg"
              alt="Lezione fitness e benessere"
              fill
              className="object-cover"
            />
          </div>

          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-primary uppercase">Chi siamo</p>
            <h2 className="mb-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Uno spazio dove riscoprire femminilità, energia ed espressione attraverso la danza.
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-pretty text-foreground">
              Vox Mundi Napoli nasce come uno spazio dedicato alla danza orientale, al movimento e alla connessione con se stesse. Nel cuore di Napoli,
              lo studio unisce Danza del Ventre, Tribal Fusion, Bollywood Dance, Flamenco Arabo e discipline artistiche in un ambiente elegante,
              accogliente e senza giudizio.
            </p>

            <ul className="mb-6 grid gap-3 font-sans text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "Corsi per principianti e livelli avanzati",
                "Danza orientale, Tribal Fusion e discipline artistiche",
                "Atmosfera femminile, creativa e inclusiva",
                "Percorsi pensati per ogni età e livello",
              ].map((item) => (
                <li key={item} className="rounded-full border border-primary/15 bg-secondary/60 px-4 py-3">
                  <span className="mr-2 text-primary">·</span>
                  {item}
                </li>
              ))}
            </ul>

            <blockquote className="mb-6 border-l-4 border-accent py-2 pl-6">
              <p className="font-serif text-xl text-balance text-foreground italic sm:text-2xl">
                &ldquo;Qui la danza diventa un momento per liberare energia, esprimere la propria femminilità e sentirsi bene nel proprio corpo.&rdquo;
              </p>
            </blockquote>

            <button
              onClick={() => setBioOpen(!bioOpen)}
              className="mb-4 inline-flex cursor-pointer items-center gap-1 border-none bg-transparent p-0 font-sans text-sm text-primary transition-opacity hover:opacity-80"
            >
              {bioOpen ? <>Chiudi <ChevronUp size={14} /></> : <>Scopri l&apos;atmosfera dello studio <ChevronDown size={14} /></>}
            </button>

            <div
              style={{
                maxHeight: bioOpen ? "1200px" : "0",
                opacity: bioOpen ? 1 : 0,
                overflow: "hidden",
                transition: "max-height 0.5s ease, opacity 0.5s ease",
              }}
            >
              {[
                "Lo studio è pensato come un luogo dove staccare dalla routine quotidiana e dedicarsi completamente a sé. Un ambiente caldo e curato dove tecnica, espressione artistica e benessere personale convivono in armonia.",
                "Ogni allieva viene accompagnata nel proprio percorso con attenzione e sensibilità. Che tu stia iniziando da zero, desideri migliorare la tecnica o semplicemente ritrovare sicurezza e libertà nel movimento, l'obiettivo è farti sentire accolta, motivata e libera di esprimerti.",
                "Danza orientale, Tribal Fusion, Bollywood Dance, fitness e attività wellness convivono in una proposta versatile, ideale per chi cerca energia, creatività, femminilità e benessere in un ambiente raffinato ma autentico.",
              ].map((paragraph) => (
                <p key={paragraph} className="mb-4 font-sans text-sm leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
