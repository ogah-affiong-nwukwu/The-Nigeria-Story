import { cultures } from '../data/cultures'
import { routes } from '../routes'

const staticTitles: Record<string, string> = {
  [routes.home]: 'Nigerian Cultural Atlas — Explore Nigeria\u2019s Living Mosaic',
  [routes.tribes]: 'Tribes of Nigeria — Nigerian Cultural Atlas',
  [routes.story]: 'The Nigerian Story — Nigerian Cultural Atlas',
}

export function pageTitleFor(pathname: string): string {
  const tribeMatch = pathname.match(/^\/cultures\/([^/]+)$/)
  if (tribeMatch) {
    const culture = cultures.find(candidate => candidate.id === tribeMatch[1])
    return culture ? `${culture.name} — Nigerian Cultural Atlas` : 'Tribe — Nigerian Cultural Atlas'
  }
  return staticTitles[pathname] ?? 'Nigerian Cultural Atlas'
}
