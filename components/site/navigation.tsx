"use client"

import { Menu, X } from "lucide-react"
import { useRef } from "react"

import { type NavLink } from "@/lib/site-config"

type NavigationProps = {
  navLinks: NavLink[]
  activeSection: string | null
  isScrolled: boolean
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

const mobileNavGroups: NavLink[][] = [
  [
    { href: "#chi-siamo", label: "Chi Siamo" },
    { href: "#corsi", label: "Corsi" },
  ],
  [
    { href: "#orari", label: "Orari" },
    { href: "#prezzi", label: "Prezzi" },
    { href: "#gallery", label: "Gallery" },
  ],
  [{ href: "#contatti", label: "Contatti" }],
]

export function Navigation({
  navLinks,
  activeSection,
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
}: NavigationProps) {
  const touchStartXRef = useRef<number | null>(null)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[var(--template-accent-subtle)] bg-[var(--template-nav-bg)] shadow-sm shadow-primary/10 backdrop-blur-md"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between py-4 sm:h-28 lg:h-28">
          <a href="#" className="z-[60] flex max-w-[230px] flex-col items-start gap-1.5 leading-none sm:max-w-[280px]">
            <span className="text-[9px] font-medium tracking-[0.32em] text-[#F5EDD8]/65 uppercase sm:text-[10px]">
              FLORA DE CARO PRESENTA
            </span>
            <span
              className="font-serif text-[2rem] leading-[0.9] font-semibold tracking-wide text-[#F5EDD8] sm:text-[2.65rem]"
              style={{ textShadow: "0 0 22px rgba(212,168,83,0.22)" }}
            >
              Vox Mundi
            </span>
            <div className="mt-1 flex flex-col gap-0.5 border-l border-primary/35 pl-3">
              <span className="text-[9px] font-semibold tracking-[0.36em] text-primary/90 uppercase sm:text-[10px]">ASD</span>
              <span className="text-[9px] font-medium tracking-[0.22em] text-[#F5EDD8]/72 uppercase sm:text-[10px]">SCUOLA DI DANZA NAPOLI</span>
            </div>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#contatti"
              className="rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-sm shadow-primary/25 transition-all hover:scale-105 hover:bg-[#E24C9F] active:scale-95"
            >
              Iscriviti Ora
            </a>
          </div>

          <button
            className="z-[60] rounded-full border border-border bg-card/80 p-2 text-foreground shadow-sm lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[50] bg-[#2B2B2B]/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 bottom-0 z-[55] w-[300px] border-l border-[var(--template-accent-subtle)] bg-card transition-transform duration-300 ease-out shadow-2xl shadow-primary/10 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onTouchStart={(event) => {
          touchStartXRef.current = event.touches[0].clientX
        }}
        onTouchEnd={(event) => {
          if (touchStartXRef.current !== null) {
            const delta = event.changedTouches[0].clientX - touchStartXRef.current
            if (delta > 60) setMobileMenuOpen(false)
            touchStartXRef.current = null
          }
        }}
      >
        <div className="flex h-full flex-col px-8 pt-20 pb-10">
          <div className="mx-auto mb-6 h-1 w-10 rounded-full bg-border" />
          <div className="flex flex-col gap-2">
            {mobileNavGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="flex flex-col gap-2">
                {groupIndex > 0 && <div className="my-3 border-t border-border" />}
                {group.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block rounded-sm border border-primary/10 bg-secondary px-4 py-4 text-xl font-semibold text-foreground transition-colors hover:border-primary/30 hover:bg-primary/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
            <a
              href="#contatti"
              className="mt-6 rounded-full bg-primary px-6 py-4 text-center text-lg font-bold text-primary-foreground shadow-sm shadow-primary/20 transition-transform active:scale-95"
              onClick={() => setMobileMenuOpen(false)}
            >
              Iscriviti Ora
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
