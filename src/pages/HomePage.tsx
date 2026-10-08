import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import { cultures, marqueeWords, stats } from '../data/cultures'
import { routes } from '../routes'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import StatCard from '../components/StatCard'
import CultureCard from '../components/CultureCard'
import HeroSlideshow from '../components/HeroSlideshow'
import ImageWithFallback from '../components/ImageWithFallback'

const marqueeLine = `${marqueeWords.join('  ') + '  '}`

const featured = cultures[0]

export default function HomePage() {
  return (
    <main>
      <section className="hero hero--media">
        <HeroSlideshow />
        <div className="hero__content">
          <p className="hero__eyebrow animate-rise">Vol. I · The Peoples of Nigeria</p>
          <h1 className="hero__title animate-rise" style={{ '--d': '120ms' } as CSSProperties}>
            Seventeen worlds,
            <br />
            <em className="hero__accent">one loud nation.</em>
          </h1>
          <p className="hero__stand animate-rise" style={{ '--d': '240ms' } as CSSProperties}>
            Behind the single name stands a country of <strong>250+ peoples</strong>. This archive opens
            the doors of seventeen of them — their festivals, cloth, rhythms and legends, kept and
            retold, one page at a time.
          </p>
          <div className="hero__actions animate-rise" style={{ '--d': '360ms' } as CSSProperties}>
            <Link to={routes.tribes} className="btn btn-primary">
              Enter the archive
              <span className="btn__arrow">→</span>
            </Link>
            <Link to={routes.story} className="btn btn-ghost">
              Read the Nigerian Story
            </Link>
          </div>
        </div>
        <p className="hero__aside" aria-hidden="true">
          Durbar thunder · Indigo pits · Talking drums
        </p>
        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            <span className="marquee__item">{marqueeLine}</span>
            <span className="marquee__item">{marqueeLine}</span>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <Reveal>
          <SectionHeading
            eyebrow="The ledger"
            title="First, the numbers"
            description="Before the stories, the sheer scale of the place — a country that refuses to be summarised."
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

      <section className="index-section">
        <Reveal>
          <div className="index-head">
            <SectionHeading
              eyebrow="The index of peoples"
              title="Seventeen doors into the nation"
              description="Every entry opens on a world — its festivals, its textiles, its rhythms, its legends."
            />
            <Link to={routes.tribes} className="index-more">
              Browse the full index
            </Link>
          </div>
        </Reveal>
        <div className="index-list">
          {cultures.slice(0, 8).map((culture, index) => (
            <Reveal key={culture.id} delay={index * 60}>
              <CultureCard culture={culture} index={index + 1} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="feature-section">
        <Reveal>
          <article className="feature-spread">
            <div className="feature-media">
              <ImageWithFallback
                src={featured.image}
                alt={`${featured.name} cultural imagery`}
                monogram={featured.monogram}
                pattern={featured.pattern}
                colors={[featured.palette.pa, featured.palette.pb]}
                className="imgbox--fill"
              />
              <p className="feature-media__label">{featured.people} · {featured.region}</p>
            </div>
            <div className="feature-body">
              <p className="section-heading__eyebrow">From the archive</p>
              <h2 className="feature-title">{featured.name}</h2>
              <blockquote className="feature-quote">“{featured.tagline}”</blockquote>
              <p className="feature-text">{featured.teaser}</p>
              <div className="feature-actions">
                <Link to={routes.tribe(featured.id)} className="btn btn-primary">
                  Open the entry
                  <span className="btn__arrow">→</span>
                </Link>
              </div>
            </div>
          </article>
        </Reveal>
      </section>

      <section className="cta-wrap">
        <Reveal>
          <div className="cta-band">
            <div className="cta-band__inner">
              <p className="cta-band__eyebrow">The archive is yours to wander</p>
              <h2 className="cta-band__title">
                A world of durbar thunder, talking drums and <em>lion-cloth kings.</em>
              </h2>
              <p className="cta-band__desc">
                Begin at any door — a people, a festival, a legend. The archive is built to be wandered,
                and it grows with every visit.
              </p>
              <div className="cta-band__actions">
                <Link to={routes.tribes} className="btn btn-gold btn--lg">
                  Explore the peoples →
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
