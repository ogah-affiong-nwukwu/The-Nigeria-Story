import { useEffect, useState } from 'react'
import { cultures as bundledCultures } from './cultures'
import { getSupabase } from './supabase'
import type { Culture } from './types'

const CULTURES_TABLE = import.meta.env.VITE_SUPABASE_TABLE ?? 'cultures'

function isCultureLike(row: unknown): row is Culture {
  if (!row || typeof row !== 'object') return false
  const candidate = row as Partial<Culture>
  return typeof candidate.id === 'string' && typeof candidate.name === 'string'
}

function normalizeRows(rows: unknown[]): Culture[] {
  return rows.filter(isCultureLike).map(row => ({
    ...row,
    aliases: Array.isArray(row.aliases) ? row.aliases : [],
    sections: Array.isArray(row.sections) ? row.sections : [],
    figures: Array.isArray(row.figures) ? row.figures : [],
    families: Array.isArray(row.families) ? row.families : [],
  }))
}

export function useCultures(): { cultures: Culture[]; loading: boolean } {
  const [cultures, setCultures] = useState<Culture[]>(bundledCultures)
  const [loading, setLoading] = useState(() => Boolean(getSupabase()))

  useEffect(() => {
    const supabase = getSupabase()
    if (!supabase) return
    let cancelled = false

    supabase
      .from(CULTURES_TABLE)
      .select('*')
      .then(({ data, error }) => {
        if (cancelled) return
        if (!error && Array.isArray(data)) {
          const live = normalizeRows(data as unknown[])
          if (live.length > 0) setCultures(live)
        }
        setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { cultures, loading }
}
