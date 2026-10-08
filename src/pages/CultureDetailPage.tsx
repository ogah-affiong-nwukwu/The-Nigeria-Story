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
        <div className="notfound__inner">
          <p className="notfound__title">We couldn&apos;t find that people.</p>
          <p className="notfound__text">
            The archive is vast — but this trail leads nowhere. Try the index instead.
          </p>
          <div className="notfound__actions">
            <Link to={routes.tribes} className="btn btn-solid">
              Browse the peoples
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
    { label: 'Key tradition', value: culture.keyTradition },
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
            <Link to={routes.tribes}>The Peoples</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{culture.name}</span>
          </nav>
          <p className="detail-hero__eyebrow">
            {culture.people} · {culture.language}
          </p>
          <h1 className="detail-hero__title">{culture.name}</h1>
          <p className="detail-hero__tagline">“{culture.tagline}”</p>
        </div>
      </section>
      <div className="detail-hero__strip" />

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
            <Link to={routes.tribes} className="btn btn-outline btn--sm">
              <span className="btn__arrow">←</span>
              All peoples
            </Link>
          </div>
        </Reveal>

        <Reveal>
          <p className="detail-teaser dropcap">{culture.teaser}</p>
        </Reveal>

        <Reveal className="detail-section">
          <SectionHeading
            eyebrow="The customs"
            title="Traditions, style & rhythm"
            description={`Turn the pages below — the festivals, cloth, music and craft that keep ${culture.name} memory alive.`}
          />
        </Reveal>
        <Reveal>
          <Tabs tabs={tabs} label={`${culture.name} topics`} />
        </Reveal>

        <Reveal className="detail-section detail-section--figures">
          <SectionHeading
            eyebrow="Keepers of memory"
            title={`The people of the ${culture.name}`}
            description="Rulers, warriors, writers and pioneers — the names this heritage will not let go of."
          />
        </Reveal>
        <div className="figures-grid">
          {culture.figures.map((figure, index) => (
            <Reveal key={figure.name} delay={(index % 2) * 80}>
              <FigureCard figure={figure} palette={palette} pattern={culture.pattern} />
            </Reveal>
          ))}
        </div>

        <Reveal className="detail-section detail-section--figures">
          <SectionHeading
            eyebrow="Houses & dynasties"
            title={`Great families of the ${culture.name}`}
            description="Historic dynasties, royal houses and legacy families — the long lineages that shaped this heritage."
          />
        </Reveal>
        <div className="families-ledger">
          {culture.families.map((family, index) => (
            <Reveal key={family.name} delay={(index % 2) * 80}>
              <FamilyCard family={family} palette={palette} pattern={culture.pattern} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="continue-box">
            <h2 className="continue-box__title">Further along the shelf</h2>
            <p className="continue-box__sub">Two more worlds of the archive await.</p>
            <div className="continue-grid">
              {others.map(other => (
                <CultureChip key={other.id} culture={other} secondary={`${other.region} · ${other.keyTradition}`} />
              ))}
            </div>
            <div className="continue-actions">
              <Link to={routes.tribes} className="btn btn-solid">
                <span className="btn__arrow">←</span>
                All peoples
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
