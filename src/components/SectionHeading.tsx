interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

export default function SectionHeading({ eyebrow, title, description, className = '' }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${className}`}>
      {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
      <h2 className="section-heading__title">{title}</h2>
      <div className="section-heading__bar" />
      {description && <p className="section-heading__desc">{description}</p>}
    </div>
  )
}
