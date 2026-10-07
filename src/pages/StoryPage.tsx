import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import { anthems, foundingFathers, historyEras } from '../data/story'
import { routes } from '../routes'
import type { TabItem } from '../components/Tabs'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import FigureCard from '../components/FigureCard'
import Tabs from '../components/Tabs'

const foundersPalette = {
  primary: '#c95b2a',
  secondary: '#d19e26',
  pa: 'rgba(201,91,42,0.16)',
  pb: 'rgba(209,158,38,0.15)',
}

const anthemTabs: TabItem[] = anthems.map(anthem => ({
  id: anthem.title,
  label: (
    <>
      <span className="anthem-tab__title">{anthem.title}</span>
      <span className="anthem-tab__badge">{anthem.title.includes('Hail') ? 'Current' : 'Former'}</span>
    </>
  ),
  content: (
    <article className="anthem-card">
      <div className="anthem-card__head">
        <div>
          <h3 className="anthem-card__title">{anthem.title}</h3>
          <p className="anthem-card__meta">{anthem.byline}</p>
        </div>
        <span className="anthem-card__years">{anthem.years}</span>
      </div>
      <p className="anthem-card__history">{anthem.history}</p>
      <div className="anthem-card__verses">{anthem.verses}</div>
    </article>
  ),
}))

export default function StoryPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-bg" />
        <div className="pat-checker" style={{ position: 'absolute', inset: 0, opacity: 0.05 }} />
        <div className="hero__content">
          <p className="hero__eyebrow animate-rise">The Nigerian Story</p>
          <h1 className="hero__title animate-rise" style={{ '--d': '120ms' } as CSSProperties}>
            From Nok to a{' '}
            <span className="shimmer-text" style={{ '--terr-grad': '#c95b2a' } as CSSProperties}>
              Nation
            </span>
          </h1>
          <p className="hero__sub animate-rise" style={{ '--d': '240ms' } as CSSProperties}>
            Thirteen chapters of empires and iron, five founding fathers, and the songs that bind a
            country of 250 peoples.
          </p>
        </div>
      </section>

      <section className="story-section">
        <Reveal>
          <SectionHeading
            eyebrow="A journey through time"
            title="Brief History of Nigeria"
            description="From the Nok terracottas to the Fourth Republic — the long walk of a nation."
          />
        </Reveal>
        <div className="timeline">
          {historyEras.map((era, index) => (
            <Reveal key={era.era} delay={(index % 4) * 60}>
              <article className="era-card">
                <span className="era-card__era">{era.era}</span>
                <h3 className="era-card__title">{era.title}</h3>
                <p className="era-card__desc">{era.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="story-section">
        <Reveal>
          <SectionHeading
            eyebrow="Architects of freedom"
            title="The Founding Fathers"
            description="The five titans who carried Nigeria to independence in 1960."
          />
        </Reveal>
        <div className="figures-grid">
          {foundingFathers.map((father, index) => (
            <Reveal key={father.name} delay={(index % 3) * 80} className="fill">
              <FigureCard figure={father} palette={foundersPalette} pattern="pat-north" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="story-section">
        <Reveal>
          <SectionHeading
            eyebrow="Voices of the nation"
            title="The National Anthems"
            description="Two songs, one heartbeat — switch between the anthem of today and the anthem of two generations."
          />
        </Reveal>
        <Reveal>
          <Tabs tabs={anthemTabs} className="anthem-tabs" label="National anthems" />
        </Reveal>
      </section>

      <section className="cta-wrap">
        <Reveal>
          <div className="cta-band">
            <div className="cta-band__pat pat-north" style={{ opacity: 0.15 }} />
            <div className="cta-band__inner">
              <p className="cta-band__eyebrow">The atlas awaits</p>
              <h2 className="cta-band__title">Seventeen worlds, one living mosaic.</h2>
              <p className="cta-band__desc">
                Walk into the festivals, textiles and legends of Nigeria&apos;s great peoples.
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
