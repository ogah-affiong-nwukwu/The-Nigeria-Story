import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import { anthems, foundingFathers, historyEras } from '../data/story'
import { routes } from '../routes'
import type { TabItem } from '../components/Tabs'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import FigureCard from '../components/FigureCard'
import Tabs from '../components/Tabs'
import HeritageSlideshow from '../components/HeritageSlideshow'

const foundersPalette = {
  primary: '#232f68',
  secondary: '#8492cf',
  pa: 'rgba(35,47,104,0.16)',
  pb: 'rgba(160,117,31,0.14)',
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
      <section className="hero story-hero story-hero--split">
        <div className="hero__content">
          <div className="story-split">
            <div className="story-split__text">
              <p className="hero__eyebrow animate-rise">The Nigerian Story</p>
              <h1 className="hero__title animate-rise" style={{ '--d': '120ms' } as CSSProperties}>
                From Nok to a <span className="story-hero__accent">nation</span>
              </h1>
              <p className="hero__stand animate-rise" style={{ '--d': '240ms' } as CSSProperties}>
                Thirteen chapters of empires and iron, five founding fathers, and two songs that have
                carried a country of 250+ peoples from the terracottas of the Jos Plateau to the
                republic of today.
              </p>
            </div>
            <HeritageSlideshow />
          </div>
        </div>
      </section>

      <section className="story-section">
        <Reveal>
          <SectionHeading
            eyebrow="A journey through time"
            title="A brief history of Nigeria"
            description="Walk the long road — from the Nok terracottas to the Fourth Republic, chapter by chapter."
          />
        </Reveal>
        <div className="timeline">
          {historyEras.map((era, index) => (
            <Reveal key={era.era} delay={(index % 2) * 80}>
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
            title="The founding fathers"
            description="Five titans who carried Nigeria to the hour of independence — and left their names on the republic."
          />
        </Reveal>
        <div className="founders-grid">
          {foundingFathers.map((father, index) => (
            <Reveal key={father.name} delay={(index % 3) * 90} className="fill">
              <FigureCard figure={father} palette={foundersPalette} pattern="pat-north" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="story-section">
        <Reveal>
          <SectionHeading
            eyebrow="Voices of the nation"
            title="The national anthems"
            description="Two songs, one heartbeat — turn between the anthem of today and the anthem of two generations."
          />
        </Reveal>
        <Reveal>
          <Tabs tabs={anthemTabs} className="anthem-tabs" label="National anthems" />
        </Reveal>
      </section>

      <section className="story-cta-wrap">
        <Reveal>
          <div className="story-cta">
            <p className="story-cta__eyebrow">The archive awaits</p>
            <h2 className="story-cta__title">
              Seventeen worlds, <em>one living mosaic.</em>
            </h2>
            <p className="story-cta__desc">
              The history is the frame — now walk into the festivals, textiles and legends of
              Nigeria&apos;s great peoples themselves.
            </p>
            <Link to={routes.tribes} className="btn story-cta__btn">
              Explore the peoples →
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
