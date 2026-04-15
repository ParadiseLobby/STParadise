import React from 'react';

interface RedactionBarProps {
  width?: string;
  label?: string;
  className?: string;
}

export default function RedactionBar({ width = '100%', label, className = '' }: RedactionBarProps) {
  return (
    <span className={`inline-flex flex-col gap-[2px] ${className}`} style={{ width }}>
      <span
        style={{ display: 'block', width: '100%', height: 16, backgroundColor: '#1A1A1A' }}
        aria-label={label ?? 'REDACTED'}
      />
      {label && (
        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: '#C8C4BC', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          {label}
        </span>
      )}
    </span>
  );
}
