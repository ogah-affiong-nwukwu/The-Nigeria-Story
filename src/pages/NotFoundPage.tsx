import { Link } from 'react-router-dom'
import { routes } from '../routes'

export default function NotFoundPage() {
  return (
    <main className="notfound">
      <div className="notfound__inner">
        <p className="notfound__code">404</p>
        <h1 className="notfound__title">Lost in the savannah</h1>
        <p className="notfound__text">
          This trail isn&apos;t on the atlas. Return to the mosaic and pick a path worth walking.
        </p>
        <div className="notfound__actions">
          <Link to={routes.home} className="btn btn-solid">
            Back home
          </Link>
          <Link to={routes.tribes} className="btn btn-outline">
            Browse tribes
          </Link>
        </div>
      </div>
    </main>
  )
}
