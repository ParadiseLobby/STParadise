import React from 'react';

interface OcrStringProps {
  text: string;
  className?: string;
  flicker?: boolean;
  style?: React.CSSProperties;
}

export default function OcrString({ text, className = '', flicker = false, style }: OcrStringProps) {
  return (
    <span
      className={`${flicker ? 'ocr-flicker' : ''} ${className}`}
      style={{ fontFamily: 'var(--mono)', ...style }}
    >
      {text}{flicker && <span style={{ animation: 'ocr-flicker 1.2s step-end infinite' }}>_</span>}
    </span>
  );
}
