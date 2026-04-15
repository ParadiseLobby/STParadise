import React from 'react'
import NavClient from './NavClient'
import L2SystemLayer from './L2SystemLayer'
import MachineFooter from './MachineFooter'
import PageTransition from './PageTransition'
import { getSettings } from '@/lib/settings'

interface DocumentFrameProps {
  children: React.ReactNode
  systemCode?: string
  pageRef?: string
}

export default async function DocumentFrame({
  children,
  systemCode = 'DOC-INDEX',
  pageRef = 'PL-DOC',
}: DocumentFrameProps) {
  const settings = await getSettings()

  return (
    <div
      className="doc-frame"
      style={{
        minHeight: '100vh',
        background: 'var(--color-bg)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* ── System bar ── */}
      <div
        className="system-bar"
        style={{
          borderBottom: '1px solid #E0DDD8',
          padding: '5px 16px',
          background: 'var(--color-bg)',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            color: 'var(--color-ink)',
            letterSpacing: '0.06em',
          }}
        >
          <span style={{ color: '#C8C4BC' }}>SYS/</span>
          {settings.siteName}
          <span style={{ color: '#C8C4BC', margin: '0 8px' }}>·</span>
          {systemCode}
          <span style={{ color: '#C8C4BC', margin: '0 8px' }}>·</span>
          REF:{pageRef}
        </span>
        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            color: '#C8C4BC',
            letterSpacing: '0.06em',
          }}
        >
          L2:ACTIVE
        </span>
      </div>

      {/* ── Navigation ── */}
      <NavClient settings={settings} />

      {/* ── Y-axis coordinate markers (left edge) ── */}
      <div
        className="l2-corner"
        style={{
          position: 'fixed',
          left: 0,
          top: '80px',
          bottom: '32px',
          width: 28,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '4px 0',
          pointerEvents: 'none',
          zIndex: 40,
        }}
      >
        {Array.from({ length: 9 }, (_, i) => (
          <span
            key={i}
            className="coord"
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              paddingLeft: 4,
              lineHeight: 1,
              fontFamily: 'var(--mono)',
              fontSize: 9,
              color: '#C8C4BC',
            }}
          >
            {String(i * 100).padStart(4, '0')}
          </span>
        ))}
      </div>

      {/* ── Content ── */}
      <main
        style={{
          flex: 1,
          width: '100%',
          maxWidth: 1320,
          margin: '0 auto',
          padding: '28px 40px 40px 48px',
        }}
      >
        <PageTransition>{children}</PageTransition>
      </main>

      <L2SystemLayer />
      <MachineFooter />
    </div>
  )
}
