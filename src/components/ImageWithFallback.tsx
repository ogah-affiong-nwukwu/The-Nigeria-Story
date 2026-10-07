import { useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

interface ImageWithFallbackProps {
  src?: string
  alt: string
  className?: string
  monogram?: string
  pattern?: string
  colors?: [string, string]
  onFail?: () => void
  overlay?: ReactNode
}

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  monogram = '',
  pattern,
  colors = ['#c95b2a', '#d19e26'],
  onFail,
  overlay,
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(() => !src)
  const patternVars = { '--p-a': colors[0], '--p-b': colors[1] } as CSSProperties

  return (
    <div className={`imgbox ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => {
            setFailed(true)
            onFail?.()
          }}
        />
      ) : (
        <div className="imgbox__fallback" style={{ background: colors[0] }}>
          {pattern && <div className={`imgbox__pattern ${pattern}`} style={patternVars} />}
          <span className="imgbox__monogram">{monogram}</span>
        </div>
      )}
      {overlay}
    </div>
  )
}
