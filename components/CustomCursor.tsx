'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const coordRef  = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${x}px, ${y}px)`
      }
      if (coordRef.current) {
        coordRef.current.textContent =
          `X:${String(x).padStart(3, '0')} Y:${String(y).padStart(3, '0')}`
      }
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-100px, -100px)',
      }}
    >
      {/* Horizontal crosshair line */}
      <div
        style={{
          position: 'absolute',
          width: 16,
          height: 1,
          background: 'var(--color-ink)',
          opacity: 0.6,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* Vertical crosshair line */}
      <div
        style={{
          position: 'absolute',
          width: 1,
          height: 16,
          background: 'var(--color-ink)',
          opacity: 0.6,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* Centre circle */}
      <div
        style={{
          position: 'absolute',
          width: 8,
          height: 8,
          border: '1px solid var(--color-ink)',
          borderRadius: '50%',
          opacity: 0.6,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* Live coordinate display */}
      <span
        ref={coordRef}
        style={{
          position: 'absolute',
          left: 12,
          top: 0,
          fontFamily: 'var(--mono)',
          fontSize: 9,
          color: 'var(--color-ink)',
          opacity: 0.6,
          letterSpacing: '0.04em',
          whiteSpace: 'nowrap',
        }}
      >
        X:000 Y:000
      </span>
    </div>
  )
}
