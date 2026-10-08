import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import type { Culture } from '../data/cultures'
import { routes } from '../routes'

interface CultureCardProps {
  culture: Culture
  index?: number
}

export default function CultureCard({ culture, index }: CultureCardProps) {
  const swatchVars = { '--c-primary': culture.palette.primary } as CSSProperties

  return (
    <Link to={routes.tribe(culture.id)} className="culture-row" style={swatchVars}>
      <span className="culture-row__index">{index != null ? String(index).padStart(2, '0') : '·'}</span>
      <span className="culture-row__swatch" aria-hidden="true" />
      <span className="culture-row__body">
        <span className="culture-row__name">{culture.name}</span>
        <span className="culture-row__meta">
          <strong>{culture.region}</strong> · {culture.keyTradition}
        </span>
      </span>
      {culture.image && (
        <span className="culture-row__thumb" aria-hidden="true">
          <img src={culture.image} alt="" loading="lazy" />
        </span>
      )}
      <span className="culture-row__go">Enter →</span>
    </Link>
  )
}
