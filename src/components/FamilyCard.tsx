import { useState } from 'react'
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
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = Boolean(family.image) && !imageFailed

  if (!showImage) {
    return (
      <article className="family-card family-card--text">
        <h3 className="family-card__name">{family.name}</h3>
        <p className="family-card__tagline" style={{ color: palette.primary }}>
          {family.tagline}
        </p>
        <p className="family-card__desc">{family.description}</p>
      </article>
    )
  }

  const bottomShade = { background: 'rgba(20, 16, 12, 0.35)' } as CSSProperties

  return (
    <article className="family-card">
      <div className="family-card__media">
        <ImageWithFallback
          src={family.image}
          alt={`${family.name} imagery`}
          monogram={initials(family.name)}
          pattern={pattern}
          colors={[palette.pa, palette.pb]}
          onFail={() => setImageFailed(true)}
          className="imgbox--fill"
        />
        <div className="family-card__shade" style={bottomShade} />
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
