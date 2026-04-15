import React from 'react';

interface ClerkCorrectionProps {
  text: string;
  className?: string;
}

export default function ClerkCorrection({ text, className = '' }: ClerkCorrectionProps) {
  return (
    <span
      className={className}
      style={{
        fontFamily: 'var(--mono)',
        fontStyle: 'italic',
        fontSize: 11,
        color: '#C8C4BC',
        display: 'inline-block',
        letterSpacing: '0.02em',
        lineHeight: 1.5,
      }}
    >
      &rarr;&nbsp;{text}
    </span>
  );
}
