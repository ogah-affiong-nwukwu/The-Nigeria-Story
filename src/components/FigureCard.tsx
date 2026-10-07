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
  const patternVars = { '--p-a': palette.pa, '--p-b': palette.pb } as CSSProperties
  const shade = { background: `linear-gradient(160deg, ${palette.primary}40, transparent 65%)` }
  const bottomShade = { background: 'linear-gradient(180deg, transparent 55%, rgba(20, 16, 12, 0.55))' }

  return (
    <article className="figure-card">
      <div className="figure-card__media">
        {figure.image ? (
          <ImageWithFallback
            src={figure.image}
            alt={`Portrait of ${figure.name}`}
            monogram={initials(figure.name)}
            pattern={pattern}
            colors={[palette.pa, palette.pb]}
            className="imgbox--fill"
          />
        ) : (
          <>
            <div className={`figure-card__pattern ${pattern}`} style={patternVars} />
            <div className="figure-card__shade" style={shade} />
            <div className="figure-card__monogram">{initials(figure.name)}</div>
          </>
        )}
        {figure.image && <div className="figure-card__shade" style={bottomShade} />}
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
