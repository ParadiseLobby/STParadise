'use client';

import React, { useEffect, useState } from 'react';

const M: React.CSSProperties = { fontFamily: 'var(--mono)' };

export default function MachineFooter() {
  const [ts, setTs] = useState('--');

  useEffect(() => {
    const update = () => setTs(new Date().toISOString().slice(0, 19).replace('T', ' '));
    update();
    const iv = setInterval(update, 1000);
    return () => clearInterval(iv);
  }, []);

  return (
    <footer style={{
      background: '#F5F3EF',
      borderTop: '1px solid #E0DDD8',
      padding: '6px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexShrink: 0,
      gap: 16,
    }}>
      <span style={{ ...M, fontSize: 10, color: '#C8C4BC', letterSpacing: '0.06em' }}>
        ARCHIVE-SYS · REF:PL-2024 · UNIT:04
      </span>
      <span style={{ ...M, fontSize: 10, color: '#A8A49E', letterSpacing: '0.1em' }}>
        PARADISE LOBBY · CREATIVE RECORD DIVISION · STRANGER THAN PARADISE
      </span>
      <span style={{ ...M, fontSize: 10, color: '#C8C4BC', letterSpacing: '0.04em' }}>
        {ts}
      </span>
      <span style={{ ...M, fontSize: 10, color: '#C8C4BC', letterSpacing: '0.06em' }}>
        L2:ACTIVE · REC:OPEN
      </span>
    </footer>
  );
}
