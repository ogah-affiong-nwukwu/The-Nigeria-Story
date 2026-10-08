import { Link, NavLink } from 'react-router-dom'
import { routes } from '../routes'
import ThemeToggle from './ThemeToggle'

const links = [
  { to: routes.home, label: 'Home' },
  { to: routes.tribes, label: 'The Peoples' },
  { to: routes.story, label: 'The Story' },
]

function BrandMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect x="4" y="4" width="40" height="40" fill="#a63f1a" />
      <rect x="12" y="12" width="24" height="24" fill="none" stroke="#c09636" strokeWidth="2.5" transform="rotate(45 24 24)" />
      <circle cx="24" cy="24" r="5.5" fill="none" stroke="#f6ecda" strokeWidth="2" />
      <circle cx="24" cy="24" r="1.8" fill="#f6ecda" />
    </svg>
  )
}

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__accent" aria-hidden="true" />
      <nav className="navbar__inner" aria-label="Main navigation">
        <Link to={routes.home} className="brand" aria-label="The Nigerian Cultural Atlas — back to home">
          <BrandMark className="brand__mark" />
          <span className="brand__wordmark">
            <span className="brand__title">
              The Nigerian <em>Cultural</em> Atlas
            </span>
            <span className="brand__sub">A living archive · 250+ peoples</span>
          </span>
        </Link>
        <div className="navbar__links">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === routes.home}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {({ isActive }) => <span aria-current={isActive ? 'page' : undefined}>{link.label}</span>}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
