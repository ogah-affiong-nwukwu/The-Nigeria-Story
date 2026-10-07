import type { CultureTopic } from '../data/cultures'

export default function TopicList({ items }: { items: CultureTopic[] }) {
  if (items.length === 0) {
    return <p className="topic-card__desc">Details coming soon.</p>
  }

  return (
    <div className="topic-grid">
      {items.map(item => (
        <article key={item.name} className="topic-card">
          <div className="topic-card__head">
            <h4 className="topic-card__name">{item.name}</h4>
            {item.tag && <span className="topic-tag">{item.tag}</span>}
          </div>
          <p className="topic-card__desc">{item.description}</p>
        </article>
      ))}
    </div>
  )
}
