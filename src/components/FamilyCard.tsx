import type { CSSProperties } from 'react'
import type { CultureFamily, CulturePalette } from '../data/cultures'
import { initials } from '../utils/text'
import ImageWithFallback from './ImageWithFallback'

interface FamilyCardProps {
  family: CultureFamily
  palette: CulturePalette
  pattern: string
}

export default function FamilyCard({ family, palette, pattern }: FamilyCardProps) {
  const patternVars = { '--p-a': palette.pa, '--p-b': palette.pb } as CSSProperties
  const shade = { background: `linear-gradient(160deg, ${palette.primary}40, transparent 65%)` }
  const bottomShade = { background: 'linear-gradient(180deg, transparent 60%, rgba(20, 16, 12, 0.5))' }

  return (
    <article className="family-card">
      <div className="family-card__media">
        {family.image ? (
          <ImageWithFallback
            src={family.image}
            alt={`${family.name} imagery`}
            monogram={initials(family.name)}
            pattern={pattern}
            colors={[palette.pa, palette.pb]}
            className="imgbox--fill"
          />
        ) : (
          <>
            <div className={`family-card__pattern ${pattern}`} style={patternVars} />
            <div className="family-card__shade" style={shade} />
            <div className="family-card__monogram">{initials(family.name)}</div>
          </>
        )}
        {family.image && <div className="family-card__shade" style={bottomShade} />}
      </div>
      <div className="family-card__body">
        <h3 className="family-card__name">{family.name}</h3>
        <p className="family-card__tagline" style={{ color: palette.primary }}>
          {family.tagline}
        </p>
        <p className="family-card__desc">{family.description}</p>
      </div>
    </article>
  )
}
