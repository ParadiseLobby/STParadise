import React from 'react';
import RedactionBar from './RedactionBar';

interface FieldRowProps {
  label: string;
  value: string | React.ReactNode;
  redacted?: boolean;
  className?: string;
}

export default function FieldRow({ label, value, redacted = false, className = '' }: FieldRowProps) {
  return (
    <div
      className={className}
      style={{ borderBottom: '1px solid #E0DDD8', padding: '6px 0', display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: '#C8C4BC', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        {label}
      </span>
      {redacted ? (
        <RedactionBar width="100%" label="FIELD REDACTED" />
      ) : (
        <span style={{ fontFamily: 'var(--mono)', fontSize: 13, color: '#1A1A1A', letterSpacing: '0.01em' }}>
          {value}
        </span>
      )}
    </div>
  );
}
