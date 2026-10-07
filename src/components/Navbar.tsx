import { Link, NavLink } from 'react-router-dom'
import { routes } from '../routes'
import ThemeToggle from './ThemeToggle'

const links = [
  { to: routes.home, label: 'Home' },
  { to: routes.tribes, label: 'Tribes' },
  { to: routes.story, label: 'The Story' },
]

function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect x="4" y="4" width="40" height="40" rx="10" fill="#c95b2a" />
      <rect x="14" y="14" width="20" height="20" rx="3" fill="none" stroke="#d19e26" strokeWidth="3" transform="rotate(45 24 24)" />
      <circle cx="24" cy="24" r="5" fill="#faf2e6" />
    </svg>
  )
}

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Main navigation">
        <Link to={routes.home} className="brand" aria-label="Nigerian Cultural Atlas — back to home">
          <LogoMark className="brand__logo" />
          <span className="brand__title">
            Nigerian <span className="brand__accent">Cultural</span> Atlas
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
