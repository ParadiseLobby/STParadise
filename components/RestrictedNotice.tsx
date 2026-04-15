import React from 'react';

interface RestrictedNoticeProps {
  level?: number;
  message?: string;
}

export default function RestrictedNotice({ level, message }: RestrictedNoticeProps) {
  const isSuspended = level !== undefined && level >= 4;
  const headerText = isSuspended ? '[ACCESS SUSPENDED]' : '[RESTRICTED]';

  return (
    <div style={{ width: '100%', border: '1px solid #1A1A1A', background: '#EDEAE4', padding: '14px 16px' }}>
      <div style={{ fontFamily: 'var(--mono)', fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1A1A1A', marginBottom: (message || level !== undefined) ? 6 : 0 }}>
        {headerText}
      </div>
      {level !== undefined && (
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.08em', color: '#2D2D2D', marginBottom: message ? 4 : 0 }}>
          CLR-LEVEL/{level} REQUIRED
        </div>
      )}
      {message && (
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: '#2D2D2D', letterSpacing: '0.03em', lineHeight: 1.6 }}>
          {message}
        </div>
      )}
    </div>
  );
}
