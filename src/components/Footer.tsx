import { Link } from 'react-router-dom'
import { cultures, swatchColors } from '../data/cultures'
import { routes } from '../routes'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__strip" style={{ background: '#c95b2a' }} />
      <div className="footer__grid">
        <div>
          <p className="footer__brand">
            Nigerian <span className="brand__accent">Cultural</span> Atlas
          </p>
          <p className="footer__blurb">
            A living atlas of Nigeria&apos;s major cultures — festivals, textiles, music and icons, curated
            for discovery and celebration.
          </p>
          <div className="footer__swatches" aria-label="Palette of the atlas">
            {swatchColors.map(color => (
              <span key={color} className="footer__swatch" style={{ background: color }} />
            ))}
          </div>
        </div>
        <nav aria-label="Footer">
          <p className="footer__heading">Explore the atlas</p>
          <ul className="footer__links">
            <li>
              <Link to={routes.tribes}>All tribes</Link>
            </li>
            <li>
              <Link to={routes.story}>The Nigerian Story</Link>
            </li>
            {cultures.slice(0, 6).map(culture => (
              <li key={culture.id}>
                <Link to={routes.tribe(culture.id)}>{culture.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="footer__heading">About this project</p>
          <p className="footer__about">
            Built as a celebration of heritage. Nigeria is home to over 250 ethnic groups; this atlas
            features seventeen of its major peoples and their legends — with more worlds to come.
          </p>
          <p className="footer__credit">
            Made by a Nigerian culture enthusiast as a personal study — a way to learn the country&apos;s
            many peoples, and to keep their stories in one place. Photography via Wikimedia Commons,
            shared under free licences.
          </p>
        </div>
      </div>
      <div className="footer__bottom">Nigerian Cultural Atlas · Exploring the diversity of Nigeria</div>
    </footer>
  )
}
