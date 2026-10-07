export interface CulturePalette {
  primary: string
  secondary: string
  pa: string
  pb: string
}

export interface CultureTopic {
  name: string
  tag?: string
  description: string
}

export interface CultureFigure {
  name: string
  title: string
  era: string
  image?: string
  summary: string
  significance: string
}

export interface CultureFamily {
  name: string
  tagline: string
  description: string
  image?: string
}

export interface CultureSection {
  id: string
  label: string
  items: CultureTopic[]
}

export interface Culture {
  id: string
  name: string
  people: string
  region: string
  states: string
  language: string
  zone: string
  aliases: string[]
  tagline: string
  teaser: string
  keyTradition: string
  monogram: string
  pattern: 'pat-oke' | 'pat-isi' | 'pat-north' | 'pat-wave' | 'pat-angbian' | 'pat-checker'
  palette: CulturePalette
  image: string
  sections: CultureSection[]
  figures: CultureFigure[]
  families: CultureFamily[]
}

export interface Stat {
  value: string
  label: string
  description: string
  accent: string
}

export interface HistoryEra {
  era: string
  title: string
  description: string
}

export interface Anthem {
  title: string
  byline: string
  years: string
  history: string
  verses: string
}
