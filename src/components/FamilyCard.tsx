import { useState } from 'react'
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

  const body = (
    <div className="family-card__body">
      <h3 className="family-card__name">{family.name}</h3>
      <p className="family-card__tagline" style={{ color: palette.primary }}>
        {family.tagline}
      </p>
      <p className="family-card__desc">{family.description}</p>
    </div>
  )

  if (!showImage) {
    return <article className="family-card family-card--text">{body}</article>
  }

  return (
    <article className="family-card">
      {body}
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
      </div>
    </article>
  )
}
