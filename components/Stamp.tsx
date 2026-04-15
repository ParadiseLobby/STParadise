import React from 'react';

type StampVariant = 'pending' | 'approved' | 'restricted' | 'suspended' | 'routed' | 'manual';
type StampRotate = 'left' | 'right';

interface StampProps {
  text: string;
  variant?: StampVariant;
  rotate?: StampRotate;
  className?: string;
}

const variantColors: Record<StampVariant, { color: string; bg: string }> = {
  pending:    { color: '#2D2D2D', bg: '#EDEAE4' },
  approved:   { color: '#2D2D2D', bg: '#EDEAE4' },
  restricted: { color: '#1A1A1A', bg: '#E0DDD8' },
  suspended:  { color: '#1A1A1A', bg: '#E0DDD8' },
  routed:     { color: '#C8C4BC', bg: '#F5F3EF' },
  manual:     { color: '#1A1A1A', bg: '#E0DDD8' },
};

export default function Stamp({ text, variant = 'pending', className = '' }: StampProps) {
  const { color, bg } = variantColors[variant];

  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        fontFamily: 'var(--mono)',
        letterSpacing: '0.12em',
        fontSize: 10,
        fontWeight: 500,
        textTransform: 'uppercase',
        color,
        background: bg,
        border: `1px solid ${color}`,
        padding: '2px 8px',
        userSelect: 'none',
        whiteSpace: 'nowrap',
      }}
    >
      {text}
    </span>
  );
}
