import { Link } from 'react-router-dom'
import type { Culture } from '../data/cultures'
import { routes } from '../routes'

interface CultureChipProps {
  culture: Culture
  secondary?: string
}

export default function CultureChip({ culture, secondary }: CultureChipProps) {
  return (
    <Link to={routes.tribe(culture.id)} className="culture-chip">
      <span
        className="culture-chip__swatch"
        style={{ background: `linear-gradient(135deg, ${culture.palette.primary}, ${culture.palette.secondary})` }}
      />
      <span className="culture-chip__body">
        <span className="culture-chip__name">{culture.name}</span>
        <span className="culture-chip__meta">{secondary ?? culture.region}</span>
      </span>
      <span className="culture-chip__arrow">→</span>
    </Link>
  )
}
