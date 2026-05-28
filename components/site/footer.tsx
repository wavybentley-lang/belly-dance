import { Clock, Facebook, Instagram, Mail, Map as MapIcon, Phone } from "lucide-react"
import { type ReactNode } from "react"

import { brand, type NavLink } from "@/lib/site-config"

export function Footer({ navLinks }: { navLinks: NavLink[] }) {
  const footerPhone = "+39 370 118 6065"
  const footerPhoneHref = "tel:+393701186065"
  const footerEmail = "egyptinturin@gmail.com"
  const footerEmailHref = "mailto:egyptinturin@gmail.com"
  const footerHours =
    "Lunedi: 11:00-21:00\n" +
    "Martedi: 11:00-21:00\n" +
    "Mercoledi: 11:00-21:00\n" +
    "Giovedi: 11:00-21:00\n" +
    "Venerdi: 11:00-21:00\n" +
    "Sabato: 11:00-21:00\n" +
    "Domenica: Chiuso"

  return (
    <footer className="border-t border-primary/20 bg-card pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="mb-6 flex max-w-[280px] flex-col items-center gap-1.5 leading-none md:items-start">
              <span className="text-[10px] font-medium tracking-[0.32em] text-[#F5EDD8]/65 uppercase">
                FLORA DE CARO PRESENTA
              </span>
              <span
                className="font-serif text-[2.35rem] leading-[0.9] font-semibold tracking-wide text-[#F5EDD8]"
                style={{ textShadow: "0 0 22px rgba(212,168,83,0.22)" }}
              >
                Vox Mundi
              </span>
              <div className="mt-1 flex flex-col gap-0.5 border-l border-primary/35 pl-3">
                <span className="text-[10px] font-semibold tracking-[0.36em] text-primary/90 uppercase">ASD</span>
                <span className="text-[10px] font-medium tracking-[0.22em] text-[#F5EDD8]/72 uppercase">SCUOLA DI DANZA NAPOLI</span>
              </div>
            </a>
            <p className="mt-4 max-w-[280px] text-center text-sm leading-relaxed text-muted-foreground md:text-left">{brand.tagline}</p>
            <div className="mt-6 flex gap-5">
              <a href={brand.instagramHref} aria-label="Instagram" className="flex flex-col items-center gap-1 text-muted-foreground transition-colors duration-200 hover:text-primary">
                <Instagram size={24} />
                <span className="font-sans text-xs text-muted-foreground">Instagram</span>
              </a>
              <a href={brand.facebookHref} aria-label="Facebook" className="flex flex-col items-center gap-1 text-muted-foreground transition-colors duration-200 hover:text-primary">
                <Facebook size={24} />
                <span className="font-sans text-xs text-muted-foreground">Facebook</span>
              </a>
            </div>
          </div>

          <FooterColumn title="Link Rapidi">
            <ul className="space-y-3 text-center md:text-left">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="inline-block text-sm text-muted-foreground transition-all duration-200 hover:translate-x-0.5 hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Contatti">
            <ul>
              <FooterContact icon={<Phone size={14} />} href={footerPhoneHref} text={footerPhone} />
              <FooterContact icon={<Mail size={14} />} href={footerEmailHref} text={footerEmail} />
              <li className="mb-3">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">Orari in aggiornamento</span>
                </div>
                <span className="mt-2 block whitespace-pre-line text-sm text-muted-foreground">{footerHours}</span>
              </li>
            </ul>
          </FooterColumn>

          <FooterColumn title="Dove Siamo">
            <p className="mb-3 text-center text-sm leading-relaxed text-muted-foreground md:text-left">
              {brand.primaryLocation}, {brand.secondaryLocation}
              <br />
              {brand.cityLine}
            </p>
            <a
              href={brand.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              <MapIcon size={14} />
              Vedi su Google Maps
            </a>
          </FooterColumn>
        </div>

        <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">{brand.copyright}</div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h4 className="mb-6 text-sm font-semibold tracking-wider text-foreground uppercase">{title}</h4>
      {children}
    </div>
  )
}

function FooterContact({ icon, href, text }: { icon: ReactNode; href: string; text: string }) {
  return (
    <li className="mb-3 flex items-center gap-2">
      <span className="shrink-0 text-primary">{icon}</span>
      <a href={href} className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary">
        {text}
      </a>
    </li>
  )
}
