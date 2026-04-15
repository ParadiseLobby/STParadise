'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { urlFor } from '@/lib/sanity'
import type { SiteSettings } from '@/lib/settings'
import NavBrackets from './NavBrackets'

const navLinks = [
  { href: '/',             label: 'INDEX',    code: '00' },
  { href: '/cases',        label: 'CASES',    code: '01' },
  { href: '/registry',     label: 'REGISTRY', code: '02' },
  { href: '/access',       label: 'ACCESS',   code: '03' },
  { href: '/about-system', label: 'SYSTEM',   code: '04' },
]

const M: React.CSSProperties = { fontFamily: 'var(--mono)' }

export default function NavClient({ settings }: { settings: SiteSettings }) {
  const pathname = usePathname()
  const [hoveredHref, setHoveredHref] = useState<string | null>(null)

  return (
    <nav
      className="doc-nav"
      style={{
        borderBottom: '1px solid #E0DDD8',
        background: 'var(--color-bg)',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
      }}
    >
      {/* Logo or site name */}
      <div
        style={{
          padding: '9px 18px',
          borderRight: '1px solid #E0DDD8',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {settings?.logo ? (
          <img
            src={urlFor(settings.logo).width(120).url()}
            alt="Paradise Lobby"
            style={{ height: 28, width: 'auto', display: 'block', objectFit: 'contain' }}
          />
        ) : (
          <span style={{ ...M, fontSize: 11, color: 'var(--color-ink)', letterSpacing: '0.1em' }}>
            {settings.siteName}
          </span>
        )}
      </div>

      {/* Nav links */}
      {navLinks.map((link) => {
        const active = pathname === link.href
        const hovered = hoveredHref === link.href
        const isSystem = link.code === '04'
        const inactiveColor = isSystem ? '#B8B4AE' : '#A8A49E'
        return (
          <Link
            key={link.href}
            href={link.href}
            style={{
              ...M,
              fontSize: 11,
              color: active ? '#1A1A1A' : hovered ? 'var(--color-ink)' : inactiveColor,
              fontWeight: active ? 500 : 400,
              letterSpacing: '0.1em',
              textDecoration: 'none',
              padding: '9px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              position: 'relative',
              overflow: 'visible',
              transition: 'background 0.1s, color 0.1s',
              ...(active
                ? { border: '1px solid #5B6B8A', background: '#EDEAE4' }
                : { borderRight: '1px solid #E0DDD8', background: hovered ? '#EDEAE4' : 'transparent' }),
            }}
            onMouseEnter={() => setHoveredHref(link.href)}
            onMouseLeave={() => setHoveredHref(null)}
          >
            <NavBrackets active={hovered} />
            <span style={{ color: '#C8C4BC', fontSize: 10 }}>{link.code}</span>
            {link.label}
          </Link>
        )
      })}

      {/* Right-aligned status tag */}
      <div
        style={{
          marginLeft: 'auto',
          padding: '9px 16px',
          ...M,
          fontSize: 9,
          color: '#5B6B8A',
          letterSpacing: '0.06em',
          borderLeft: '1px solid #E0DDD8',
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        ROUTE:OPEN&nbsp;&nbsp;·&nbsp;&nbsp;CLR/L2
      </div>
    </nav>
  )
}
