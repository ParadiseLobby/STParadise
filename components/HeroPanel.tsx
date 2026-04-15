'use client';

import React, { useRef, useState } from 'react';

const M: React.CSSProperties = { fontFamily: 'var(--mono)' };

const CORNERS = [
  { key: 'tl', pos: { top: 12, left: 12 }, b: { borderTop: '1px solid #C8C4BC', borderLeft: '1px solid #C8C4BC' } },
  { key: 'tr', pos: { top: 12, right: 12 }, b: { borderTop: '1px solid #C8C4BC', borderRight: '1px solid #C8C4BC' } },
  { key: 'bl', pos: { bottom: 12, left: 12 }, b: { borderBottom: '1px solid #C8C4BC', borderLeft: '1px solid #C8C4BC' } },
  { key: 'br', pos: { bottom: 12, right: 12 }, b: { borderBottom: '1px solid #C8C4BC', borderRight: '1px solid #C8C4BC' } },
] as const;

export default function HeroPanel() {
  const panelRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [hover, setHover] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = panelRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    const rx = ((cy / rect.height) - 0.5) * -20; // inverted: push top toward viewer
    const ry = ((cx / rect.width) - 0.5) * 20;
    setTilt({ rx, ry });
  }

  function handleMouseLeave() {
    setTilt({ rx: 0, ry: 0 });
    setHover(false);
  }

  return (
    <section
      style={{
        // Break out of DocumentFrame main padding (top:28 right:40 left:48)
        margin: '-28px -40px 0 -48px',
        width: 'calc(100% + 88px)',
        height: '60vh',
        minHeight: 480,
        background: 'var(--color-bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid #E0DDD8',
      }}
    >
      {/* Interactive tilt panel */}
      <div
        ref={panelRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          width: 400,
          height: 500,
          border: '1px solid #E0DDD8',
          background: 'var(--color-bg)',
          position: 'relative',
          transform: `perspective(800px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transition: hover ? 'transform 0.12s ease, box-shadow 0.2s ease' : 'transform 0.6s ease, box-shadow 0.4s ease',
          boxShadow: hover ? '0 8px 32px rgba(26,26,26,0.08)' : '0 0 0 rgba(26,26,26,0)',
          willChange: 'transform',
          cursor: 'crosshair',
        }}
      >
        {/* Corner tick marks */}
        {CORNERS.map(({ key, pos, b }) => (
          <div
            key={key}
            style={{ position: 'absolute', width: 10, height: 10, ...pos, ...b }}
          />
        ))}

        {/* Inner frame */}
        <div
          style={{
            position: 'absolute',
            inset: 32,
            border: '1px solid #E0DDD8',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
          }}
        >
          {/* SWAP: replace this SVG with <img> when PNG asset is ready */}
          <svg
            width="180"
            height="200"
            viewBox="0 0 180 200"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'block', flexShrink: 0 }}
          >
            <defs>
              <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#E8E8E8" />
                <stop offset="38%"  stopColor="#9A9A9A" />
                <stop offset="68%"  stopColor="#C4C4C4" />
                <stop offset="100%" stopColor="#7A7A7A" />
              </linearGradient>
              <linearGradient id="sgm" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#C8C8C8" />
                <stop offset="100%" stopColor="#888888" />
              </linearGradient>
            </defs>

            {/* Ghost layer — 2px right, 1px down, glitch offset */}
            <g transform="translate(2,1)" opacity="0.12" style={{ mixBlendMode: 'multiply' }}>
              <path
                d="M 90,10 C 137,10 166,44 166,82 C 166,112 152,132 138,144 L 138,165 L 42,165 L 42,144 C 28,132 14,112 14,82 C 14,44 43,10 90,10 Z"
                fill="url(#sg)"
              />
              <ellipse cx="65" cy="91" rx="21" ry="17" fill="#1A1A1A" />
              <ellipse cx="115" cy="91" rx="21" ry="17" fill="#1A1A1A" />
            </g>

            {/* ── Main skull ── */}

            {/* Cranium */}
            <path
              d="M 90,10 C 137,10 166,44 166,82 C 166,112 152,132 138,144 L 138,165 L 42,165 L 42,144 C 28,132 14,112 14,82 C 14,44 43,10 90,10 Z"
              fill="url(#sg)"
            />

            {/* Left orbital socket */}
            <ellipse cx="65" cy="91" rx="21" ry="17" fill="#1A1A1A" opacity="0.82" />

            {/* Right orbital socket */}
            <ellipse cx="115" cy="91" rx="21" ry="17" fill="#1A1A1A" opacity="0.82" />

            {/* Nasal cavity */}
            <path
              d="M 84,120 C 84,130 87,137 90,137 C 93,137 96,130 96,120 C 96,113 93,110 90,110 C 87,110 84,113 84,120 Z"
              fill="#1A1A1A"
              opacity="0.62"
            />

            {/* Suture lines — sagittal */}
            <path
              d="M 90,10 C 89,28 89,48 89,66"
              stroke="#7A7A7A"
              strokeWidth="0.8"
              fill="none"
              opacity="0.3"
              strokeDasharray="4 3"
            />
            {/* Suture lines — left lambdoid */}
            <path
              d="M 89,66 C 78,63 60,55 40,44"
              stroke="#7A7A7A"
              strokeWidth="0.8"
              fill="none"
              opacity="0.3"
              strokeDasharray="4 3"
            />
            {/* Suture lines — right lambdoid */}
            <path
              d="M 89,66 C 100,63 120,55 140,44"
              stroke="#7A7A7A"
              strokeWidth="0.8"
              fill="none"
              opacity="0.3"
              strokeDasharray="4 3"
            />

            {/* Mandible */}
            <path
              d="M 42,165 Q 42,183 62,187 L 90,190 L 118,187 Q 138,183 138,165 Z"
              fill="url(#sgm)"
            />
          </svg>

          {/* Label below skull */}
          <div style={{ ...M, fontSize: 9, color: '#C8C4BC', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            PL-INTAKE-001
          </div>
        </div>

        {/* Bottom-left ref label */}
        <div
          style={{
            position: 'absolute',
            bottom: 14,
            left: 16,
            ...M,
            fontSize: 9,
            color: '#C8C4BC',
            letterSpacing: '0.1em',
          }}
        >
          PL-INTAKE-001
        </div>

        {/* Top-right coordinate readout */}
        <div
          style={{
            position: 'absolute',
            top: 14,
            right: 16,
            ...M,
            fontSize: 9,
            color: hover ? '#5B6B8A' : '#C8C4BC',
            letterSpacing: '0.06em',
            transition: 'color 0.2s',
          }}
        >
          {hover
            ? `X:${String(Math.round(tilt.ry * 5 + 50)).padStart(3, '0')} Y:${String(Math.round(-tilt.rx * 5 + 50)).padStart(3, '0')}`
            : 'X:--- Y:---'}
        </div>
      </div>
    </section>
  );
}
