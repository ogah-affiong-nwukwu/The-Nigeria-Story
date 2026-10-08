import { Link } from 'react-router-dom'
import { cultures, swatchColors } from '../data/cultures'
import { routes } from '../routes'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__strip" aria-hidden="true" />
      <div className="footer__grid">
        <div>
          <p className="footer__brand">
            The Nigerian <em>Cultural</em> Atlas
          </p>
          <p className="footer__blurb">
            A living archive of Nigeria&apos;s great peoples — festivals, cloth, rhythms and legends,
            kept and retold for whoever comes after.
          </p>
          <div className="footer__swatches" aria-label="Palette of the atlas">
            {swatchColors.map(color => (
              <span key={color} className="footer__swatch" style={{ background: color }} />
            ))}
          </div>
        </div>
        <nav aria-label="Footer">
          <p className="footer__heading">Wander the archive</p>
          <ul className="footer__links">
            <li>
              <Link to={routes.tribes}>The Peoples</Link>
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
          <p className="footer__heading">About this archive</p>
          <p className="footer__about">
            Nigeria holds more than 250 ethnic groups; these pages open the doors of seventeen of its
            great peoples. The archive is a personal study — a way of learning the country&apos;s many
            tongues, and of keeping their stories under one roof. New entries are always being written.
          </p>
          <p className="footer__credit">
            Compiled by a keeper of stories, with photography from Wikimedia Commons under free
            licences. Nothing here is final — every people deserves more ink than a page can hold.
          </p>
        </div>
      </div>
      <div className="footer__bottom">The Nigerian Cultural Atlas · In cloth, chorus &amp; memory</div>
    </footer>
  )
}
