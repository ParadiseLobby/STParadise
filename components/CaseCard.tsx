'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import type { CaseFile } from '@/lib/cases';

const STATUS_ABBR: Record<string, string> = {
  'PENDING REVIEW':         'PND',
  'ON HOLD':                'HLD',
  'ACCESS SUSPENDED':       'SUS',
  'MANUAL REVIEW REQUIRED': 'MNL',
  'ROUTED':                 'RTD',
};

const M: React.CSSProperties = { fontFamily: 'var(--mono)' };

interface CaseCardProps {
  caseFile: CaseFile;
  index?: number;
}

export default function CaseCard({ caseFile, index = 0 }: CaseCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt]   = useState({ rx: 0, ry: 0 });
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hover, setHover]  = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    const rx = ((cy / rect.height) - 0.5) * -8;  // max ±8deg
    const ry = ((cx / rect.width)  - 0.5) *  8;
    setTilt({ rx, ry });
    setCoords({ x: Math.round(cx), y: Math.round(cy) });
  }

  function handleMouseLeave() {
    setTilt({ rx: 0, ry: 0 });
    setHover(false);
  }

  const suspended = caseFile.status === 'ACCESS SUSPENDED';
  const activeProcessing = caseFile.status === 'PENDING REVIEW' || caseFile.status === 'MANUAL REVIEW REQUIRED';
  const abbr = STATUS_ABBR[caseFile.status] ?? 'UNK';

  return (
    <div
      className="seq-in"
      style={{
        animationDelay: `${index * 20}ms`,
        background: '#F5F3EF',
        borderTop: activeProcessing ? '1px solid #5B6B8A' : undefined,
      }}
    >
      <Link href={`/cases/${caseFile.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={handleMouseLeave}
          style={{
            background: hover ? '#EDEAE4' : '#F5F3EF',
            padding: '20px',
            cursor: 'pointer',
            position: 'relative',
            transition: 'background 0.1s',
            transform: hover
              ? `perspective(600px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`
              : 'perspective(600px) rotateX(0deg) rotateY(0deg)',
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
        >
          {/* Coordinate ID — top-left */}
          <div style={{ ...M, fontSize: 9, color: '#C8C4BC', marginBottom: 14, letterSpacing: '0.06em' }}>
            [{String(index + 1).padStart(2, '0')}]&nbsp;&nbsp;{caseFile.case_number}
            {hover && (
              <span style={{ marginLeft: 12, animation: 'coord-appear 0.1s ease both' }}>
                X:{String(coords.x).padStart(3, '0')}&nbsp;Y:{String(coords.y).padStart(3, '0')}
              </span>
            )}
          </div>

          {/* Classification */}
          <div style={{ ...M, fontSize: 10, color: '#C8C4BC', letterSpacing: '0.1em', marginBottom: 10, textTransform: 'uppercase' }}>
            {caseFile.classification}
          </div>

          {/* Title */}
          <div
            style={{
              ...M,
              fontSize: 13,
              color: suspended ? '#C8C4BC' : '#1A1A1A',
              fontWeight: 500,
              lineHeight: 1.4,
              marginBottom: 16,
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              letterSpacing: '0.02em',
            }}
          >
            {suspended ? '[ ACCESS SUSPENDED ]' : caseFile.title}
          </div>

          {/* Metadata row */}
          <div style={{ borderTop: '1px solid #E0DDD8', paddingTop: 12, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {[
              { k: 'YR',   v: String(caseFile.year) },
              { k: 'LVL',  v: String(caseFile.access_level) },
              { k: 'STAT', v: abbr },
            ].map(({ k, v }) => (
              <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ ...M, fontSize: 9,  color: '#C8C4BC', letterSpacing: '0.08em' }}>{k}</span>
                <span style={{ ...M, fontSize: 11, color: '#1A1A1A', letterSpacing: '0.04em' }}>{v}</span>
              </div>
            ))}
            <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'flex-end' }}>
              <span style={{ ...M, fontSize: 9,  color: '#C8C4BC', letterSpacing: '0.08em' }}>ROUTE</span>
              <span style={{ ...M, fontSize: 11, color: '#1A1A1A', letterSpacing: '0.04em' }}>
                {caseFile.routing_state.split(' ')[0]}
              </span>
            </div>
          </div>

          {/* ACCESS SUSPENDED diagonal watermark */}
          {suspended && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
                overflow: 'hidden',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 32,
                  color: '#1A1A1A',
                  opacity: 0.06,
                  transform: 'rotate(-20deg)',
                  whiteSpace: 'nowrap',
                  userSelect: 'none',
                }}
              >
                ACCESS SUSPENDED
              </span>
            </div>
          )}

          {/* Corner tick marks — visible on hover only */}
          {hover && ['topLeft','topRight','btmLeft','btmRight'].map((pos) => {
            const s: React.CSSProperties = { position: 'absolute', width: 8, height: 8 };
            if (pos === 'topLeft')  Object.assign(s, { top: 8, left: 8, borderTop: '1px solid #C8C4BC', borderLeft: '1px solid #C8C4BC' });
            if (pos === 'topRight') Object.assign(s, { top: 8, right: 8, borderTop: '1px solid #C8C4BC', borderRight: '1px solid #C8C4BC' });
            if (pos === 'btmLeft')  Object.assign(s, { bottom: 8, left: 8, borderBottom: '1px solid #C8C4BC', borderLeft: '1px solid #C8C4BC' });
            if (pos === 'btmRight') Object.assign(s, { bottom: 8, right: 8, borderBottom: '1px solid #C8C4BC', borderRight: '1px solid #C8C4BC' });
            return <div key={pos} style={s} />;
          })}
        </div>
      </Link>
    </div>
  );
}
