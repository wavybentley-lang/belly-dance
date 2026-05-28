"use client"

import Image from "next/image"
import { X } from "lucide-react"

import { featuredGalleryPhotos } from "@/lib/site-config"

type GallerySectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
  enlargedPhoto: string | null
  setEnlargedPhoto: (photo: string | null) => void
}

export function GallerySection({ isVisible, setSectionRef, enlargedPhoto, setEnlargedPhoto }: GallerySectionProps) {
  return (
    <>
      <section
        id="gallery"
        ref={(element) => setSectionRef("gallery", element)}
        className={`pt-20 pb-20 transition-all duration-700 sm:pt-28 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 px-4 text-left lg:px-0 lg:text-center">
            <h2 className="mb-4 text-left font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-center">I Nostri Momenti</h2>
            <p className="max-w-none text-lg text-pretty text-foreground lg:mx-auto lg:max-w-2xl">
              Istantanee di passione, dedizione e gioia
            </p>
          </div>

          <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 sm:gap-4">
            {featuredGalleryPhotos.map((image) => (
              <button
                key={image.src}
                onClick={() => setEnlargedPhoto(image.src)}
                className="group relative aspect-square cursor-zoom-in overflow-hidden rounded-sm"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/0" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {enlargedPhoto && (
        <div className="fixed inset-0 z-[10500] flex items-center justify-center bg-black/[0.95]" onClick={() => setEnlargedPhoto(null)}>
          <button
            onClick={() => setEnlargedPhoto(null)}
            className="fixed top-6 right-6 z-[10510] text-3xl font-light text-foreground transition-opacity hover:opacity-70"
            aria-label="Close photo"
          >
            <X size={32} />
          </button>
          <div className="relative h-[90vh] w-[90vw]">
            <Image src={enlargedPhoto} alt="Enlarged photo" fill className="object-contain" sizes="90vw" />
          </div>
        </div>
      )}
    </>
  )
}
