"use client"

import { ChevronRight, Menu, X } from "lucide-react"
import { useRef } from "react"

import { type NavLink } from "@/lib/site-config"

type NavigationProps = {
  navLinks: NavLink[]
  activeSection: string | null
  isScrolled: boolean
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

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
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${mobileMenuOpen ? "z-[9500]" : "z-50"} ${
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
              className="rounded-full bg-[#E8430A] px-5 py-3 text-sm font-bold text-white shadow-sm shadow-primary/25 transition-all hover:scale-105 hover:bg-[#c93708] active:scale-95"
            >
              Iscriviti Ora
            </a>
          </div>

          <button
            className="z-[9520] rounded-full border border-primary/35 bg-[#12060E]/95 p-2 text-[#F5EDD8] shadow-lg shadow-black/40 backdrop-blur-md lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[9500] flex min-h-[100dvh] w-screen items-center justify-center bg-[rgba(8,3,6,0.98)] px-4 py-20 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileMenuOpen(false)}
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
        <div
          className={`w-[calc(100%-32px)] max-w-[420px] rounded-[1.35rem] border border-primary/25 bg-[#12060E]/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.55)] transition-all duration-300 sm:p-7 ${
            mobileMenuOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-5 border-b border-primary/15 pb-5 text-center">
            <p className="text-[9px] font-medium tracking-[0.32em] text-[#F5EDD8]/65 uppercase">FLORA DE CARO PRESENTA</p>
            <p
              className="mt-1 font-serif text-[2.35rem] leading-[0.9] font-semibold tracking-wide text-[#F5EDD8]"
              style={{ textShadow: "0 0 22px rgba(212,168,83,0.22)" }}
            >
              Vox Mundi
            </p>
            <p className="mt-2 text-[9px] font-semibold tracking-[0.28em] text-primary/85 uppercase">ASD SCUOLA DI DANZA NAPOLI</p>
          </div>
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex min-h-14 items-center justify-between rounded-xl border border-primary/20 bg-[#1A0B10]/90 px-4 py-3.5 text-base font-semibold tracking-wide text-[#F5EDD8] shadow-sm shadow-black/20 transition-all hover:border-primary/55 hover:bg-[#241014] active:scale-[0.99]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.label}</span>
                <ChevronRight size={17} className="text-primary/70 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            ))}
            <a
              href="#contatti"
              className="mt-5 rounded-full bg-primary px-6 py-4 text-center text-lg font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:bg-[#A93226] active:scale-95"
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
