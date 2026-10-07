import { Link, useParams } from 'react-router-dom'
import type { CSSProperties } from 'react'
import { cultures } from '../data/cultures'
import { routes } from '../routes'
import type { TabItem } from '../components/Tabs'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ImageWithFallback from '../components/ImageWithFallback'
import Tabs from '../components/Tabs'
import TopicList from '../components/TopicList'
import FigureCard from '../components/FigureCard'
import FamilyCard from '../components/FamilyCard'
import CultureChip from '../components/CultureChip'

export default function CultureDetailPage() {
  const { cultureId } = useParams<{ cultureId: string }>()
  const culture = cultures.find(candidate => candidate.id === cultureId)

  if (!culture) {
    return (
      <main className="notfound">
        <div className="notfound__bg hero-bg" aria-hidden="true" />
        <div className="notfound__inner">
          <p className="notfound__title">We couldn&apos;t find that culture.</p>
          <p className="notfound__text">
            The mosaic is vast — but this path leads nowhere. Try the directory instead.
          </p>
          <div className="notfound__actions">
            <Link to={routes.tribes} className="btn btn-solid">
              Browse cultures
            </Link>
            <Link to={routes.home} className="btn btn-outline">
              Home
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const { palette } = culture
  const themeVars = {
    '--c-primary': palette.primary,
    '--c-secondary': palette.secondary,
    '--p-a': palette.pa,
    '--p-b': palette.pb,
  } as CSSProperties

  const tabs: TabItem[] = culture.sections.map(section => ({
    id: section.id,
    label: section.label,
    content: <TopicList items={section.items} />,
  }))

  const facts = [
    { label: 'Region', value: culture.region },
    { label: 'Language', value: culture.language },
    { label: 'Key Tradition', value: culture.keyTradition },
  ]

  const others = cultures.filter(candidate => candidate.id !== culture.id).slice(0, 2)

  return (
    <main style={themeVars}>
      <section className="detail-hero">
        <div className="detail-hero__media">
          <ImageWithFallback
            src={culture.image}
            alt={`${culture.name} cultural imagery`}
            monogram={culture.monogram}
            pattern={culture.pattern}
            colors={[palette.pa, palette.pb]}
            className="imgbox--fill"
          />
        </div>
        <div className="detail-hero__shade" />
        <div className={`detail-hero__pattern ${culture.pattern}`} style={themeVars} />
        <div className="detail-hero__content">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to={routes.home}>Home</Link>
            <span aria-hidden="true">/</span>
            <Link to={routes.tribes}>Tribes</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{culture.name}</span>
          </nav>
          <p className="detail-hero__eyebrow">
            {culture.people} · {culture.language}
          </p>
          <h1 className="detail-hero__title">{culture.name}</h1>
          <p className="detail-hero__tagline">{culture.tagline}</p>
        </div>
      </section>
      <div
        className="detail-hero__strip"
        style={{ background: `linear-gradient(90deg, ${palette.primary}, ${palette.secondary}, ${palette.primary})` }}
      />

      <div className="detail-body">
        <Reveal>
          <div className="facts-row">
            <div className="facts">
              {facts.map(fact => (
                <div key={fact.label} className="fact-card">
                  <p className="fact-card__label">{fact.label}</p>
                  <p className="fact-card__value">{fact.value}</p>
                </div>
              ))}
            </div>
            <Link to={routes.tribes} className="btn btn-outline btn--sm btn-back">
              ← All tribes
            </Link>
          </div>
        </Reveal>

        <Reveal>
          <p className="detail-teaser">{culture.teaser}</p>
        </Reveal>

        <Reveal className="detail-section">
          <SectionHeading
            eyebrow="Deep-dive"
            title="Traditions, Style & Rhythm"
            description={`Tap through the tabs to explore ${culture.name} festivals, textiles, music and craft.`}
          />
        </Reveal>
        <Reveal>
          <Tabs tabs={tabs} label={`${culture.name} topics`} />
        </Reveal>

        <Reveal className="detail-section detail-section--figures">
          <SectionHeading
            eyebrow="Legends & icons"
            title={`Major Figures of the ${culture.name}`}
            description="Rulers, warriors, writers and pioneers who shaped this heritage."
          />
        </Reveal>
        <div className="figures-grid">
          {culture.figures.map((figure, index) => (
            <Reveal key={figure.name} delay={(index % 3) * 80} className="fill">
              <FigureCard figure={figure} palette={palette} pattern={culture.pattern} />
            </Reveal>
          ))}
        </div>

        <Reveal className="detail-section detail-section--figures">
          <SectionHeading
            eyebrow="Legacy & lineage"
            title={`Prominent Families of the ${culture.name}`}
            description="Historic dynasties, royal houses and legacy families that shaped this heritage."
          />
        </Reveal>
        <div className="families-grid">
          {culture.families.map((family, index) => (
            <Reveal key={family.name} delay={(index % 3) * 80} className="fill">
              <FamilyCard family={family} palette={palette} pattern={culture.pattern} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="continue-box">
            <h2 className="continue-box__title">Continue the journey</h2>
            <p className="continue-box__sub">Two more worlds of the atlas await.</p>
            <div className="continue-grid">
              {others.map(other => (
                <CultureChip key={other.id} culture={other} />
              ))}
            </div>
            <div className="continue-actions">
              <Link to={routes.tribes} className="btn btn-solid">
                ← All tribes
              </Link>
              <Link to={routes.home} className="btn btn-outline">
                Back to home
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
