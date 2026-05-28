import {
  Calendar,
  CalendarRange,
  Crown,
  Flame,
  Heart,
  Star,
  Tag,
  Ticket,
  Users,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react"

export type NavLink = {
  href: string
  label: string
}

export type Course = {
  title: string
  age: string
  description: string
  image: string
  Icon: LucideIcon
}

export type CourseCategory = {
  label: string
  courses: Course[]
}

export type ScheduleDay = {
  day: string
  classes: {
    time: string
    name: string
  }[]
}

export type TeamMember = {
  photo: string
  name: string
  role: string
  bio: string
}

export const brand = {
  name: "Lovely Dance Beauty & Fitness",
  shortName: "Lovely Dance",
  tagline: "Danza, fitness e benessere nel cuore del Vomero.",
  logo: "",
  phone: "+39 370 118 6065",
  phoneHref: "tel:+393701186065",
  whatsappHref: "https://wa.me/393701186065",
  email: "egyptinturin@gmail.com",
  emailHref: "mailto:egyptinturin@gmail.com",
  instagramHref: "https://www.instagram.com/vox_mundi_napoli/",
  facebookHref: "https://www.facebook.com/lovelydancebeautyfitnessvomero",
  mapsHref: "https://maps.google.com/?q=Vomero+Napoli",
  primaryLocation: "Vomero",
  secondaryLocation: "Napoli",
  cityLine: "Napoli (NA)",
  hours:
    "Mercoledì: 10:00-23:00\n" +
    "Giovedì: 10:00-23:00\n" +
    "Venerdì: 10:00-23:00\n" +
    "Sabato: 10:00-23:00\n" +
    "Domenica: 9:00-17:00\n" +
    "Lunedì: 10:00-23:00\n" +
    "Martedì: 10:00-23:00",
  copyright: "© 2026 Lovely Dance Beauty & Fitness",
}

export const navLinks: NavLink[] = [
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#corsi", label: "Corsi" },
  { href: "#orari", label: "Orari" },
  { href: "#prezzi", label: "Prezzi" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contatti", label: "Contatti" },
]

export const stats = [
  { number: "10+", label: "DISCIPLINE" },
  { number: "Kids", label: "BAMBINI E ADULTI" },
  { number: "3", label: "DANZA, FITNESS E BENESSERE" },
  { number: "Vomero", label: "NAPOLI" },
]

export const courseCategories: CourseCategory[] = [
  {
    label: "Dance",
    courses: [
      {
        title: "Danza del Ventre",
        age: "Adulti",
        description: "Movimenti sinuosi e raffinati per esaltare femminilita, grazia e presenza scenica.",
        image: "/additional/danca-del-ventre-belly-dance.jpg",
        Icon: Zap,
      },
      {
        title: "Tribal Fusion",
        age: "Tutti i livelli",
        description: "Stile magnetico e contemporaneo che unisce tecnica, mistero e forza espressiva.",
        image: "/additional/tribal-fusion-belly-dance.jpg",
        Icon: Flame,
      },
      {
        title: "Danze del Sud",
        age: "Tutti i livelli",
        description: "Ritmi caldi e gesti eleganti ispirati alle tradizioni piu intense del Mediterraneo.",
        image: "/additional/danca-del-sud-belly-dance.jpg",
        Icon: Crown,
      },
    ],
  },
  {
    label: "Fitness & Wellness",
    courses: [
      {
        title: "Bollywood Dance",
        age: "Tutti i livelli",
        description: "Coreografie luminose e femminili tra ritmo, gestualita elegante e colori d'Oriente.",
        image: "/additional/bollywood-belly-dance.jpg",
        Icon: Wind,
      },
      {
        title: "Flamenco Arabo",
        age: "Adulti",
        description: "Passione andalusa e suggestioni orientali in una danza intensa, fiera e sensuale.",
        image: "/additional/flamenco-arabo-belly-dance.jpg",
        Icon: Heart,
      },
      {
        title: "Pole Dance",
        age: "Tutti i livelli",
        description: "Tecnica, controllo e sensualita raffinata per scolpire il corpo con eleganza.",
        image: "/additional/pole-dance-belly-dance.jpg",
        Icon: Star,
      },
    ],
  },
]

export const featuredGalleryPhotos = [
  { src: "/additional/nostri-mom-2.jpg", alt: "Lovely Dance momento in sala" },
  { src: "/additional/nostri-mom-3.jpg", alt: "Lovely Dance gruppo" },
  { src: "/additional/nostri-mom-4.jpg", alt: "Lovely Dance lezione" },
  { src: "/additional/nostri-mom-5.jpg", alt: "Lovely Dance momento in sala" },
  { src: "/additional/nostri-mom-6.jpg", alt: "Lovely Dance gruppo" },
  { src: "/additional/nostri-momenti-1.jpg", alt: "Lovely Dance lezione" },
]

export const allGalleryPhotos = [
  "/group_outside_.jpg", "/inside_school_children_lesson.jpg", "/male_female_duo.jpg",
  "/outside_event_students.jpg", "/solo_female_air_dance.jpg", "/student_green_dress.jpg",
  "/air_dance_student.jpg", "/collage_children_group.jpg", "/group_male_female_stuends_stage.jpg",
  "/IMG_8356.JPG.webp", "/IMG_8357.JPG.webp", "/IMG_8359.JPG.webp", "/IMG_8360.JPG.webp",
  "/IMG_8363.JPG.webp", "/IMG_8364.JPG.webp", "/IMG_8367.JPG.webp", "/IMG_8368.JPG.webp",
  "/IMG_8369.JPG.webp", "/IMG_8370.JPG.webp", "/IMG_8371.JPG.webp", "/IMG_8373.JPG.webp",
  "/IMG_8377.JPG.webp", "/IMG_8378.JPG.webp", "/IMG_8379.JPG.webp", "/IMG_8380.JPG.webp",
  "/IMG_8382.JPG.webp", "/IMG_8383.JPG.webp", "/IMG_8385.JPG.webp", "/IMG_8387.JPG.webp",
  "/IMG_8390.JPG.webp", "/IMG_8396.JPG.webp", "/IMG_8402.JPG.webp", "/IMG_8413.webp",
  "/additional/saggio-ateneo-agropoli-1.webp", "/additional/saggio-ateneo-agropoli-2.webp",
  "/additional/performance-ateneo-agropoli.webp", "/additional/spettacolo-fine-anno-ateneo-1.webp",
  "/additional/spettacolo-fine-anno-ateneo-3.webp", "/additional/spettacolo-fine-anno-ateneo.webp",
  "/additional/danza-femminile-sedia-agropoli.webp", "/additional/female-perform-sitting-chair.webp",
  "/additional/female-solo.webp", "/additional/females-group-perform.webp",
  "/additional/females-perform-stage.webp", "/additional/females-performs3.webp",
  "/additional/group-performance-4.webp", "/additional/group-performance-all-black.webp",
  "/additional/groupd-perform-1.webp", "/additional/kid-perform-solo.webp",
  "/additional/kid-solo-performance.webp", "/additional/kids-group-performance.webp",
  "/additional/kids-performance.webp", "/additional/kids-performance1.webp",
  "/additional/m-f-performa1.webp", "/additional/male-dancer.webp",
  "/additional/male-fdemale-performance4.webp", "/additional/male-female-ballet-1.webp",
  "/additional/coppia-balletto-ateneo-agropoli.webp",
  "/additional/coppia-balletto-ateneo-agropoli-3.webp",
  "/additional/duo-danza-ateneo-agropoli.webp", "/additional/gruppo-misto-performance-ateneo.webp",
  "/additional/coppia-performance-ateneo-cilento.webp",
  "/additional/coppia-danza-moderna-agropoli.webp",
  "/additional/coppia-danza-moderna-agropoli-1.webp",
  "/additional/coppia-danza-moderna-agropoli-2.webp",
  "/additional/coppia-danza-moderna-agropoli-4.webp",
  "/additional/coppia-performance-palcoscenico-1.webp",
  "/additional/coppia-performance-palcoscenico-2.webp",
  "/additional/coppia-performance-palcoscenico-3.webp",
  "/additional/coppia-danza-ateneo.webp", "/additional/gruppo-misto-danza-ateneo-3.webp",
  "/additional/danzatore-performance-agropoli-2.webp",
  "/additional/danzatore-solo-ateneo-agropoli.webp",
  "/additional/danzatore-solo-palcoscenico-agropoli.webp",
  "/additional/danzatore-solo-palcoscenico-agropoli-1.webp",
  "/additional/duo-misto-performance-ateneo.webp",
  "/additional/uomo-danza-performance-agropoli.webp",
  "/additional/performance-danza-ateneo-agropoli.webp",
  "/additional/due-ragazze-palcoscenico-ateneo.webp",
  "/additional/donna-danza-performance-agropoli-3.webp",
  "/additional/donna-danza-rosso-ateneo-agropoli.webp",
  "/additional/donne-performance-ateneo-agropoli-2.webp",
]

export const salaArmoniaSchedule: ScheduleDay[] = [
  {
    day: "LUNEDÌ",
    classes: [
      { time: "10:00-11:00", name: "Social Dance" },
      { time: "11:00-12:00", name: "Postural Pilates" },
      { time: "14:00-15:00", name: "Danza del Ventre Principianti" },
      { time: "17:00-18:00", name: "Danza del Ventre Intermedio" },
      { time: "19:00-20:00", name: "Fit Pilates" },
      { time: "20:30-21:30", name: "Tribal Fusion" },
      { time: "21:30-22:30", name: "Danza del Ventre Avanzato" },
      { time: "22:30-23:30", name: "Folklore Arabo" },
    ],
  },
  {
    day: "MARTEDÌ",
    classes: [
      { time: "12:00-13:00", name: "Yoga" },
      { time: "14:00-15:00", name: "Ginnastica Posturale" },
      { time: "17:00-18:00", name: "Danza del Ventre Principianti" },
      { time: "18:00-19:00", name: "Hip Hop Kids" },
      { time: "19:30-20:30", name: "Zumba" },
      { time: "20:30-21:30", name: "Bollywood Dance" },
      { time: "21:30-22:30", name: "Danza del Ventre Intermedio" },
      { time: "22:30-23:30", name: "Danza del Ventre Avanzato" },
    ],
  },
  {
    day: "MERCOLEDÌ",
    classes: [
      { time: "11:30-12:30", name: "Danza Classica Amatoriale" },
      { time: "14:00-15:00", name: "Aerobica" },
      { time: "16:00-17:00", name: "Danza del Ventre Principianti" },
      { time: "18:00-19:00", name: "Tribal Fusion" },
      { time: "19:00-20:00", name: "Fit Pilates" },
      { time: "20:30-21:30", name: "Flamenco Arabo" },
      { time: "21:30-22:30", name: "Danza del Ventre Intermedio / Avanzato" },
    ],
  },
  {
    day: "GIOVEDÌ",
    classes: [
      { time: "10:00-11:00", name: "Postural Pilates" },
      { time: "11:00-12:00", name: "Social Dance" },
      { time: "14:00-15:00", name: "Ginnastica Posturale" },
      { time: "17:00-18:00", name: "Danza del Ventre Principianti" },
      { time: "18:30-19:30", name: "Tribal Fusion" },
      { time: "19:30-20:30", name: "Danza del Ventre Intermedio" },
      { time: "20:30-21:30", name: "Danza del Ventre Avanzato" },
      { time: "21:30-22:30", name: "Folklore Arabo" },
      { time: "22:30-23:30", name: "Danza del Ventre Avanzato" },
    ],
  },
  {
    day: "VENERDÌ",
    classes: [
      { time: "14:00-15:00", name: "Aerobica" },
      { time: "18:00-19:00", name: "Yoga" },
      { time: "19:00-20:00", name: "Danza del Ventre Principianti" },
      { time: "20:00-21:00", name: "Bollywood Dance" },
      { time: "21:00-22:00", name: "Danza del Ventre Intermedio" },
      { time: "22:00-23:00", name: "Tribal Fusion" },
    ],
  },
  {
    day: "SABATO",
    classes: [
      { time: "11:00-12:00", name: "Yoga" },
      { time: "15:30-16:30", name: "Make-up Fashion" },
      { time: "17:00-18:00", name: "Danze Polinesiane" },
    ],
  },
  {
    day: "DOMENICA",
    classes: [{ time: "10:00-12:30", name: "Meditazione Zen" }],
  },
]

export const salaRitmoSchedule = salaArmoniaSchedule

export const scheduleBookingServices = [
  "Lezioni individuali con Personal Trainer",
  "Lezioni private settore danza e fitness",
  "Nutrizionista in sede",
]

export const scheduleContactInfo = {
  address: "Traversa Privata Sanseverino 15/A — Vomero, Napoli",
  phone: "Tel. 331 4913070 / 349 8737169",
}

export const pricingCards = [
  { Icon: Ticket, title: "Lezione Singola", description: "Ideale per provare un corso prima di iscriverti. Nessun impegno, massima flessibilità." },
  { Icon: Calendar, title: "Abbonamento Mensile", description: "La soluzione più flessibile per chi vuole ballare con regolarità ogni mese." },
  { Icon: CalendarRange, title: "Abbonamento Semestrale", description: "Sei mesi di lezioni con un risparmio rispetto all'abbonamento mensile." },
  { Icon: Crown, title: "Abbonamento Annuale", description: "La scelta di chi vuole dare continuità al proprio percorso artistico. Massimo risparmio." },
]

export const pricingHighlights = [
  { Icon: Tag, title: "Tariffe Differenziate", description: "I costi variano in base al corso scelto e all'età dell'allievo. Contattaci per ricevere il preventivo personalizzato." },
  { Icon: Users, title: "Sconti Famiglia", description: "Sono previste riduzioni speciali per fratelli e/o sorelle e per mamme e figlie che si iscrivono insieme." },
]
