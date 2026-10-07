import { useState } from 'react'
import type { CSSProperties } from 'react'
import type { CultureFigure, CulturePalette } from '../data/cultures'
import { initials } from '../utils/text'
import ImageWithFallback from './ImageWithFallback'

interface FigureCardProps {
  figure: CultureFigure
  palette: CulturePalette
  pattern: string
}

export default function FigureCard({ figure, palette, pattern }: FigureCardProps) {
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = Boolean(figure.image) && !imageFailed

  if (!showImage) {
    return (
      <article className="figure-card figure-card--text">
        <div className="figure-card__text-head">
          <h3 className="figure-card__name">{figure.name}</h3>
          <span className="figure-card__era-inline">{figure.era}</span>
        </div>
        <p className="figure-card__title" style={{ color: palette.primary }}>
          {figure.title}
        </p>
        <p className="figure-card__summary">{figure.summary}</p>
        <div className="figure-card__significance">
          <p className="figure-card__significance-label">Significance</p>
          <p className="figure-card__significance-text">{figure.significance}</p>
        </div>
      </article>
    )
  }

  const bottomShade = { background: 'rgba(20, 16, 12, 0.35)' } as CSSProperties

  return (
    <article className="figure-card">
      <div className="figure-card__media">
        <ImageWithFallback
          src={figure.image}
          alt={`Portrait of ${figure.name}`}
          monogram={initials(figure.name)}
          pattern={pattern}
          colors={[palette.pa, palette.pb]}
          onFail={() => setImageFailed(true)}
          className="imgbox--fill"
        />
        <div className="figure-card__shade" style={bottomShade} />
        <span className="figure-card__era">{figure.era}</span>
      </div>
      <div className="figure-card__body">
        <div>
          <h3 className="figure-card__name">{figure.name}</h3>
          <p className="figure-card__title" style={{ color: palette.primary }}>
            {figure.title}
          </p>
        </div>
        <p className="figure-card__summary">{figure.summary}</p>
        <div className="figure-card__significance">
          <p className="figure-card__significance-label">Significance</p>
          <p className="figure-card__significance-text">{figure.significance}</p>
        </div>
      </div>
    </article>
  )
}
