import { useMemo, useState } from 'react'
import { cultures, zones } from '../data/cultures'
import type { Culture } from '../data/cultures'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CultureCard from '../components/CultureCard'

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ɓ/g, 'b')
    .replace(/ɗ/g, 'd')
    .replace(/ƙ/g, 'k')
    .replace(/ɛ/g, 'e')
    .trim()
}

function editDistance(a: string, b: string): number {
  const row = Array.from({ length: b.length + 1 }, (_, index) => index)
  for (let i = 1; i <= a.length; i++) {
    let previous = row[0]
    row[0] = i
    for (let j = 1; j <= b.length; j++) {
      const temp = row[j]
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + (a[i - 1] === b[j - 1] ? 0 : 1))
      previous = temp
    }
  }
  return row[b.length]
}

function similarityScore(culture: Culture, query: string): number {
  const targets = [culture.name, ...culture.aliases].map(normalize)
  let best = 0
  for (const target of targets) {
    if (target === query) return 100
    if (target.startsWith(query)) best = Math.max(best, 60)
    else if (target.includes(query)) best = Math.max(best, 40)
    else if (query.length >= 3 && editDistance(query, target) <= 2) best = Math.max(best, 25)
  }
  return best
}

export default function CulturesPage() {
  const [query, setQuery] = useState('')
  const [zone, setZone] = useState('')
  const normalizedQuery = normalize(query)

  const filtered = useMemo(() => {
    return cultures.filter(culture => {
      if (zone && culture.zone !== zone) return false
      if (!normalizedQuery) return true
      const haystack = [
        culture.name,
        culture.people,
        culture.language,
        culture.region,
        culture.zone,
        ...culture.aliases,
      ]
        .map(normalize)
        .join(' ')
      return haystack.includes(normalizedQuery)
    })
  }, [normalizedQuery, zone])

  const suggestions = useMemo(() => {
    if (!normalizedQuery || filtered.length > 0) return []
    return cultures
      .map(culture => ({ culture, score: similarityScore(culture, normalizedQuery) }))
      .filter(entry => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(entry => entry.culture)
  }, [normalizedQuery, filtered])

  return (
    <main className="page">
      <div className="page__inner">
        <Reveal>
          <SectionHeading
            eyebrow="The directory"
            title="Tribes of Nigeria"
            description="Seventeen of Nigeria's great peoples open their doors — festivals, textiles, rhythms and legends. Search a name, or wander the regions."
          />
        </Reveal>

        <Reveal className="directory-tools">
          <div className="search-bar">
            <svg
              className="search-bar__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search tribes — e.g. Hausa, Edo, Ibibio, Kanuri…"
              aria-label="Search tribes"
              className="search-bar__input"
            />
            {query && (
              <button
                type="button"
                className="search-bar__clear"
                aria-label="Clear search"
                onClick={() => setQuery('')}
              >
                ×
              </button>
            )}
          </div>
          <div className="zone-chips" role="group" aria-label="Filter by region">
            {zones.map(name => (
              <button
                key={name}
                type="button"
                className={`filter-chip${zone === name ? ' active' : ''}`}
                aria-pressed={zone === name}
                onClick={() => setZone(current => (current === name ? '' : name))}
              >
                {name}
              </button>
            ))}
          </div>
          <p className="search-meta" aria-live="polite">
            Showing <strong>{filtered.length}</strong> of {cultures.length} tribes
            {zone ? ` in the ${zone}` : ''}
            {query ? ` matching “${query}”` : ''}
          </p>
        </Reveal>

        {filtered.length > 0 ? (
          <div className="cultures-grid">
            {filtered.map((culture, index) => (
              <Reveal key={culture.id} delay={(index % 3) * 90} className="fill">
                <CultureCard culture={culture} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="search-empty">
            <p className="search-empty__title">No tribe found for “{query}”.</p>
            <p className="search-empty__desc">
              The atlas is still growing — and some peoples live under wider names. Try one of these, or
              explore a region:
            </p>
            {suggestions.length > 0 && (
              <div className="search-empty__suggest">
                {suggestions.map(culture => (
                  <button
                    key={culture.id}
                    type="button"
                    className="filter-chip"
                    onClick={() => {
                      setQuery(culture.name)
                      setZone('')
                    }}
                  >
                    {culture.name} →
                  </button>
                ))}
              </div>
            )}
            <div className="search-empty__zones">
              <p className="search-empty__zones-title">Explore a region instead:</p>
              <div className="zone-chips" style={{ justifyContent: 'center' }}>
                {zones.map(name => (
                  <button
                    key={name}
                    type="button"
                    className={`filter-chip${zone === name ? ' active' : ''}`}
                    onClick={() => {
                      setQuery('')
                      setZone(current => (current === name ? '' : name))
                    }}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <Reveal>
          <div className="page-note">
            <p>
              Nigeria is home to <strong>250+ ethnic groups</strong> — this atlas celebrates seventeen of
              its major peoples, and it keeps growing. More worlds are on the way.
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
