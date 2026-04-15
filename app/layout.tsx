import type { Metadata } from 'next'
import type React from 'react'
import './globals.css'
import { getSettings } from '@/lib/settings'
import CustomCursor from '@/components/CustomCursor'
import TransitionWrapper from '@/components/TransitionWrapper'

export const metadata: Metadata = {
  title: 'PARADISE LOBBY ARCHIVE SYSTEM',
  description: 'Administrative processing layer — creative records division',
}

const BG_MAP: Record<string, string> = {
  light: '#F5F3EF',
  dark:  '#0A0A0A',
  mid:   '#1C1C1A',
}

const INK_MAP: Record<string, string> = {
  light: '#1A1A1A',
  dark:  '#F0EEE8',
  mid:   '#F0EEE8',
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const settings = await getSettings()
  const bg  = BG_MAP[settings.backgroundMode]  ?? BG_MAP.light
  const ink = INK_MAP[settings.backgroundMode] ?? INK_MAP.light

  const cssVars = {
    '--color-bg':      bg,
    '--color-ink':     ink,
    '--color-primary': settings.primaryColor,
    '--color-accent':  settings.accentColor,
  } as React.CSSProperties

  return (
    <html lang="en" className="h-full" style={cssVars}>
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        <TransitionWrapper>{children}</TransitionWrapper>
      </body>
    </html>
  )
}
