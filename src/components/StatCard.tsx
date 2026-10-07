import type { Stat } from '../data/cultures'

export default function StatCard({ stat }: { stat: Stat }) {
  return (
    <article className="stat-card">
      <div className="stat-card__bar" style={{ background: `linear-gradient(90deg, ${stat.accent}, transparent)` }} />
      <p className="stat-card__value" style={{ color: stat.accent }}>
        {stat.value}
      </p>
      <h3 className="stat-card__label">{stat.label}</h3>
      <p className="stat-card__desc">{stat.description}</p>
    </article>
  )
}
