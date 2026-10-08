import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import { cultures, marqueeWords, stats } from '../data/cultures'
import { routes } from '../routes'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import StatCard from '../components/StatCard'
import CultureChip from '../components/CultureChip'
import HeroSlideshow from '../components/HeroSlideshow'

const marqueeLine = `${marqueeWords.join(' • ')} • `

export default function HomePage() {
  return (
    <main>
      <section className="hero hero--media">
        <HeroSlideshow />
        <div className="hero__content">
          <p className="hero__eyebrow animate-rise">Naija · A Living Heritage Atlas</p>
          <h1 className="hero__title animate-rise" style={{ '--d': '120ms' } as CSSProperties}>
            Nigerian
            <br />
            <span className="hero__accent">Cultural Atlas</span>
          </h1>
          <p className="hero__sub animate-rise" style={{ '--d': '240ms' } as CSSProperties}>
            More than 250 peoples share the name Nigeria. This atlas walks through the festivals, cloth,
            rhythms and icons of seventeen of its largest cultures — one page at a time.
          </p>
          <div className="hero__actions animate-rise" style={{ '--d': '360ms' } as CSSProperties}>
            <Link to={routes.tribes} className="btn btn-primary">
              Enter the Atlas
              <span className="btn__arrow">→</span>
            </Link>
            <Link to={routes.story} className="btn btn-ghost">
              Read the Nigerian Story
            </Link>
            <a href="#glimpse" className="btn btn-ghost">
              Quick Glimpse ↓
            </a>
          </div>
        </div>
        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            <span className="marquee__item">{marqueeLine}</span>
            <span className="marquee__item">{marqueeLine}</span>
          </div>
        </div>
      </section>

      <section id="glimpse" className="stats-section">
        <Reveal>
          <SectionHeading
            eyebrow="At a glance"
            title="A Nation of Firsts"
            description="Nigeria's scale and depth are almost impossible to condense — but these numbers begin to sketch the picture."
          />
        </Reveal>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 90} className="fill">
              <StatCard stat={stat} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="voices-section">
        <Reveal>
          <SectionHeading
            eyebrow="The directory"
            title="Voices of the Atlas"
            description="Seventeen of Nigeria's great peoples open their doors — each with its own cloth, rhythm and legends."
          />
        </Reveal>
        <div className="voices-grid">
          {cultures.map((culture, index) => (
            <Reveal key={culture.id} delay={index * 60}>
              <CultureChip culture={culture} secondary={`${culture.region} · ${culture.keyTradition}`} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="cta-wrap">
        <Reveal>
          <div className="cta-band">
            <div className="cta-band__inner">
              <p className="cta-band__eyebrow">The mosaic awaits</p>
              <h2 className="cta-band__title">Enter a world of durbar thunder, talking drums and lion-cloth kings.</h2>
              <p className="cta-band__desc">
                Begin the journey through Nigeria&apos;s living heritage — one culture, one legend, one
                festival at a time.
              </p>
              <div className="cta-band__actions">
                <Link to={routes.tribes} className="btn btn-gold btn--lg">
                  Explore the Tribes →
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
