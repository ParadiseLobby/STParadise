import { cache } from 'react'
import { sanityClient } from './sanity'
import { SETTINGS_QUERY } from './sanity-queries'

export interface SiteSettings {
  siteName: string
  logo?: { asset: { _ref: string }; [key: string]: unknown }
  backgroundMode: 'light' | 'dark' | 'mid'
  primaryColor: string
  accentColor: string
  footerNote?: string
}

const DEFAULTS: SiteSettings = {
  siteName: 'PARADISE LOBBY',
  backgroundMode: 'light',
  primaryColor: '#1A1A1A',
  accentColor: '#C8C4BC',
}

export const getSettings = cache(async (): Promise<SiteSettings> => {
  const result = await sanityClient.fetch<Partial<SiteSettings> | null>(
    SETTINGS_QUERY,
    {},
    { next: { revalidate: 60 } },
  )
  if (!result) return DEFAULTS
  return { ...DEFAULTS, ...result }
})
