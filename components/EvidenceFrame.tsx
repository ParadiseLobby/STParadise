import React from 'react';
import type { Exhibit } from '@/lib/cases';
import { urlFor } from '@/lib/sanity';
import RedactionBar from './RedactionBar';
import RestrictedNotice from './RestrictedNotice';

interface EvidenceFrameProps {
  exhibit: Exhibit;
  caseNumber: string;
}

const M: React.CSSProperties = { fontFamily: 'var(--mono)' };

export default function EvidenceFrame({ exhibit, caseNumber }: EvidenceFrameProps) {
  return (
    <div style={{ border: '1px solid #E0DDD8', background: '#F5F3EF', display: 'flex', flexDirection: 'column' }}>
      {/* Header bar */}
      <div style={{ background: '#EDEAE4', borderBottom: '1px solid #E0DDD8', padding: '5px 12px', display: 'flex', gap: 12, alignItems: 'baseline' }}>
        <span style={{ ...M, fontSize: 10, color: '#1A1A1A', letterSpacing: '0.08em' }}>{exhibit.id}</span>
        <span style={{ ...M, fontSize: 11, color: '#2D2D2D', letterSpacing: '0.04em' }}>{exhibit.label}</span>
        <span style={{ ...M, fontSize: 10, color: '#C8C4BC', letterSpacing: '0.04em', marginLeft: 'auto' }}>REF/{caseNumber}</span>
      </div>

      {/* Exhibit body */}
      <div style={{ padding: 16, flex: 1 }}>
        {exhibit.access === 'open' && (
          exhibit.mediaImage
            ? <img src={urlFor(exhibit.mediaImage).url()} alt={exhibit.label} style={{ width: '100%', display: 'block' }} />
            : <div style={{ background: '#E0DDD8', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 180, color: '#C8C4BC', ...M, fontSize: 11, letterSpacing: '0.1em', textAlign: 'center', padding: 20 }}>
                [{exhibit.id}] EXHIBIT AVAILABLE — PLACEHOLDER
              </div>
        )}
        {exhibit.access === 'restricted' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <RedactionBar width="100%" label={exhibit.label} />
            <div style={{ ...M, fontSize: 10, color: '#C8C4BC', letterSpacing: '0.06em' }}>ACCESS RESTRICTED — AUTHORIZATION REQUIRED</div>
          </div>
        )}
        {exhibit.access === 'suspended' && (
          <RestrictedNotice level={4} message={`Exhibit ${exhibit.id} suspended. CLR-L4 required.`} />
        )}
      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid #E0DDD8', padding: '4px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ ...M, fontSize: 10, color: '#C8C4BC', letterSpacing: '0.08em', textTransform: 'uppercase', border: '1px solid #E0DDD8', padding: '1px 5px' }}>{exhibit.type}</span>
        <span style={{ ...M, fontSize: 10, color: '#C8C4BC', letterSpacing: '0.04em' }}>{exhibit.access.toUpperCase()}</span>
      </div>
    </div>
  );
}
