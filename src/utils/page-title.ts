import { cultures } from '../data/cultures'
import { routes } from '../routes'

const staticTitles: Record<string, string> = {
  [routes.home]: 'The Nigerian Cultural Atlas — A Living Archive of the Peoples',
  [routes.tribes]: 'The Peoples of Nigeria — The Nigerian Cultural Atlas',
  [routes.story]: 'The Nigerian Story — The Nigerian Cultural Atlas',
}

export function pageTitleFor(pathname: string): string {
  const tribeMatch = pathname.match(/^\/cultures\/([^/]+)$/)
  if (tribeMatch) {
    const culture = cultures.find(candidate => candidate.id === tribeMatch[1])
    return culture ? `${culture.name} — The Nigerian Cultural Atlas` : 'The Peoples — The Nigerian Cultural Atlas'
  }
  return staticTitles[pathname] ?? 'The Nigerian Cultural Atlas'
}
