import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { pageTitleFor } from '../utils/page-title'

export default function RouteSync() {
  const { pathname } = useLocation()
  const firstRender = useRef(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = pageTitleFor(pathname)

    const main = document.getElementById('main-content')
    if (!firstRender.current && main) {
      main.focus()
    }
    firstRender.current = false
  }, [pathname])

  return null
}
