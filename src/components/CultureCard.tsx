import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import type { Culture } from '../data/cultures'
import { routes } from '../routes'
import ImageWithFallback from './ImageWithFallback'

export default function CultureCard({ culture }: { culture: Culture }) {
  const patternVars = { '--p-a': culture.palette.pa, '--p-b': culture.palette.pb } as CSSProperties

  return (
    <Link to={routes.tribe(culture.id)} className="culture-card">
      <div className="culture-card__media">
        <ImageWithFallback
          src={culture.image}
          alt={`${culture.name} cultural imagery`}
          monogram={culture.monogram}
          pattern={culture.pattern}
          colors={[culture.palette.pa, culture.palette.pb]}
          className="imgbox--fill"
        />
        <div className={`culture-card__pattern ${culture.pattern}`} style={patternVars} />
        <span className="culture-card__region">{culture.region}</span>
      </div>
      <div className="culture-card__body">
        <h3 className="culture-card__title">{culture.name}</h3>
        <p className="culture-card__teaser">{culture.teaser}</p>
        <div className="culture-card__foot">
          <span className="culture-card__key">{culture.keyTradition}</span>
          <span className="culture-card__go">Explore →</span>
        </div>
      </div>
    </Link>
  )
}
