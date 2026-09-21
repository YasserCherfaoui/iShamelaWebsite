import { useEffect, useState } from 'react'

// TODO(owner): bump fallback on each release
export const FALLBACK_VERSION = 'v1.0.0'

const STORAGE_KEY = 'ishamela:latest-release'
const RELEASES_API =
  'https://api.github.com/repos/YasserCherfaoui/iShamela/releases/latest'

export function useAppVersion(): string {
  const [version, setVersion] = useState(() => {
    try {
      const cached = sessionStorage.getItem(STORAGE_KEY)
      return cached ?? FALLBACK_VERSION
    } catch {
      return FALLBACK_VERSION
    }
  })

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const cached = sessionStorage.getItem(STORAGE_KEY)
        if (cached) {
          if (!cancelled) setVersion(cached)
          return
        }

        const res = await fetch(RELEASES_API)
        if (!res.ok) return

        const data = (await res.json()) as { tag_name?: string }
        const tag = data.tag_name
        if (!tag) return

        sessionStorage.setItem(STORAGE_KEY, tag)
        if (!cancelled) setVersion(tag)
      } catch {
        // Silently fall back to FALLBACK_VERSION
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [])

  return version
}
