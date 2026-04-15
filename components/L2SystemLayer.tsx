'use client';

import React, { useEffect, useState } from 'react';

const STATUS = ['PROCESSING', 'INDEXING', 'ROUTING', 'STANDBY', 'QUEUED'];

function hex(n: number) {
  return Array.from({ length: n }, () => Math.floor(Math.random() * 16).toString(16).toUpperCase()).join('');
}

const C: React.CSSProperties = {
  fontFamily: 'var(--mono)',
  fontSize: 9,
  color: '#C8C4BC',
  letterSpacing: '0.06em',
  lineHeight: 1.7,
};

export default function L2SystemLayer() {
  const [mounted, setMounted] = useState(false);
  const [session] = useState(() => hex(8));
  const [node]    = useState(() => hex(4));
  const [si,   setSi]   = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const iv = setInterval(() => {
      setSi((p) => (p + 1) % STATUS.length);
      setTick((p) => p + 1);
    }, 3000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 50 }}>

      {/* Top-left: instrument readout */}
      <div className="l2-corner" style={{ position: 'absolute', top: 80, left: 32, ...C }}>
        <div style={{ color: '#1A1A1A', fontSize: 9 }}>L2:ACTIVE</div>
        <div>SES/{mounted ? session : '--------'}</div>
        <div>NOD/{mounted ? node : '----'}</div>
        <div>TIC/{String(tick).padStart(4, '0')}</div>
      </div>

      {/* Top-right: status */}
      <div className="l2-corner" style={{ position: 'absolute', top: 80, right: 32, ...C, textAlign: 'right' }}>
        <div style={{ color: '#1A1A1A', fontSize: 9 }}>{STATUS[si]}</div>
        <div>REC/OPEN</div>
        <div>CLR/L2</div>
      </div>

      {/* X-axis markers — bottom strip */}
      <div className="l2-corner" style={{ position: 'absolute', bottom: 32, left: 48, right: 16, display: 'flex', justifyContent: 'space-between', ...C }}>
        {Array.from({ length: 13 }, (_, i) => (
          <span key={i}>{String(i * 100).padStart(4, '0')}</span>
        ))}
      </div>
    </div>
  );
}
