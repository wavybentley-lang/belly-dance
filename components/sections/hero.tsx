import { ChevronRight, MessageCircle } from "lucide-react"

import { stats } from "@/lib/site-config"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <canvas id="bokehCanvas" className="pointer-events-none absolute inset-0 z-[1] h-full w-full" />


      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse at 60% 40%, #1A1200 0%, #111111 70%)",
        }}
      />

      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 18% 76%, rgba(212,168,83,0.08) 0%, transparent 30%), radial-gradient(circle at 88% 18%, rgba(192,57,43,0.1) 0%, transparent 34%)",
        }}
      />

      <div className="relative z-10 ml-0 max-w-7xl px-4 pt-32 pb-24 text-left sm:px-6 sm:pt-36 sm:pb-28 lg:mx-auto lg:w-1/2 lg:px-8 lg:py-0">
        <h1 className="animate-fade-in-up mb-6 text-left font-serif text-5xl leading-[0.96] font-bold text-balance text-[#E8C84A] italic sm:text-6xl md:text-7xl lg:text-8xl">
          Movimento,
          <br />
          <span className="text-primary">femminilità,</span>
          <br />
          espressione
        </h1>
        <p className="animate-fade-in-up animate-delay-200 mb-10 max-w-none text-lg leading-relaxed font-light text-pretty text-muted-foreground sm:text-xl lg:max-w-xl lg:text-2xl">
          Un luogo dedicato alla Danza del Ventre e alle discipline artistiche dove sentirti libera, sicura e connessa con te stessa.
        </p>
        <div className="animate-fade-in-up animate-delay-300 flex flex-col justify-start gap-4 sm:flex-row">
          <a
            href="#corsi"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E8430A] px-8 py-4 text-lg font-semibold text-white shadow-sm shadow-primary/25 transition-colors hover:bg-[#c93708]"
          >
            Scopri i corsi
            <ChevronRight size={20} />
          </a>
          <a
            href="https://wa.me/393498737169"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#E8C84A] bg-card/70 px-8 py-4 text-lg font-semibold text-[#E8C84A] shadow-sm transition-all hover:bg-[#E8C84A]/10"
          >
            <span className="inline-flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              Scrivici su WhatsApp
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-foreground/50 pt-2">
          <div className="h-2 w-1 rounded-full bg-foreground/70" />
        </div>
      </div>
    </section>
  )
}

export function StatsStrip() {
  return (
    <section
      className="border-y border-primary/20 py-10 sm:py-14"
      style={{ background: "linear-gradient(135deg, rgba(212,168,83,0.12) 0%, rgba(192,57,43,0.08) 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 text-center sm:gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-full border border-primary/20 bg-card/85 px-4 py-5 shadow-sm shadow-primary/10">
              <div className="mb-1 font-serif text-3xl font-semibold text-[#E8C84A] sm:text-4xl">{stat.number}</div>
              <div className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
