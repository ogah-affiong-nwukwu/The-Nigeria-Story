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
  primary: '#2f5d3f',
  secondary: '#4e7a5c',
  pa: 'rgba(47,93,63,0.18)',
  pb: 'rgba(31,27,22,0.12)',
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
    <main className="story-page">
      <section className="hero story-hero">
        <div className="hero__content">
          <p className="hero__eyebrow animate-rise">The Nigerian Story</p>
          <h1 className="hero__title animate-rise" style={{ '--d': '120ms' } as CSSProperties}>
            From Nok to a <span className="story-hero__accent">Nation</span>
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

      <section className="story-cta-wrap">
        <Reveal>
          <div className="story-cta">
            <p className="story-cta__eyebrow">The atlas awaits</p>
            <h2 className="story-cta__title">Seventeen worlds, one living mosaic.</h2>
            <p className="story-cta__desc">
              Walk into the festivals, textiles and legends of Nigeria&apos;s great peoples.
            </p>
            <Link to={routes.tribes} className="btn story-cta__btn">
              Explore the Tribes →
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
