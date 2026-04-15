import React from 'react';
import Link from 'next/link';
import type { CaseFile } from '@/lib/cases';
import ClerkCorrection from './ClerkCorrection';

interface ArchiveSidebarProps {
  caseFile: CaseFile;
}

const M: React.CSSProperties = { fontFamily: 'var(--mono)' };

const labelStyle: React.CSSProperties = { ...M, fontSize: 10, color: '#C8C4BC', letterSpacing: '0.08em', textTransform: 'uppercase' };
const valueStyle: React.CSSProperties = { ...M, fontSize: 12, color: '#1A1A1A', letterSpacing: '0.02em' };
const sectionHeaderStyle: React.CSSProperties = { ...M, fontSize: 10, color: '#1A1A1A', letterSpacing: '0.12em', textTransform: 'uppercase', borderBottom: '1px solid #E0DDD8', paddingBottom: 4, marginBottom: 12 };

export default function ArchiveSidebar({ caseFile }: ArchiveSidebarProps) {
  return (
    <aside
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '28px',
      }}
    >
      {/* ROUTING INFORMATION */}
      <section>
        <div style={sectionHeaderStyle}>ROUTING INFORMATION</div>

        {/* Chain of custody timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {caseFile.chain_of_custody.map((step, i) => {
            const isLast = i === caseFile.chain_of_custody.length - 1;
            const isCurrent = step === caseFile.routing_state || isLast;

            return (
              <div
                key={i}
                style={{ display: 'flex', gap: '10px', alignItems: 'stretch' }}
              >
                {/* Line + dot */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '14px',
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      border: `1px solid ${isCurrent ? '#1A1A1A' : '#C8C4BC'}`,
                      backgroundColor: isCurrent ? '#1A1A1A' : 'transparent',
                      flexShrink: 0,
                      marginTop: '4px',
                    }}
                  />
                  {!isLast && (
                    <div
                      style={{
                        flex: 1,
                        width: '1px',
                        backgroundColor: '#E0DDD8',
                        minHeight: '16px',
                      }}
                    />
                  )}
                </div>

                {/* Step label */}
                <div
                  style={{
                    ...valueStyle,
                    fontSize: 11,
                    fontWeight: isCurrent ? 500 : 400,
                    color: isCurrent ? '#1A1A1A' : '#C8C4BC',
                    paddingBottom: isLast ? 0 : 10,
                    paddingTop: 2,
                  }}
                >
                  {step}
                </div>
              </div>
            );
          })}
        </div>

        {/* Current routing state */}
        <div style={{ marginTop: 12, padding: '6px 10px', border: '1px solid #E0DDD8', background: '#EDEAE4' }}>
          <div style={labelStyle}>CURRENT STATE</div>
          <div style={{ ...valueStyle, fontWeight: 500, marginTop: 2 }}>{caseFile.routing_state}</div>
        </div>
      </section>

      {/* CASE METADATA */}
      <section>
        <div style={sectionHeaderStyle}>CASE METADATA</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { label: 'INTAKE DATE', val: caseFile.intake_date },
            { label: 'LAST MODIFIED', val: caseFile.last_modified },
            { label: 'DEPARTMENT', val: caseFile.department },
            { label: 'ACCESS LEVEL', val: `L${caseFile.access_level}` },
          ].map(({ label, val }) => (
            <div key={label} style={{ borderBottom: '1px solid #E0DDD8', paddingBottom: 6 }}>
              <div style={labelStyle}>{label}</div>
              <div style={{ ...valueStyle, marginTop: 2 }}>{val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED CASES */}
      {caseFile.related_cases.length > 0 && (
        <section>
          <div style={sectionHeaderStyle}>RELATED CASES</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {caseFile.related_cases.map((ref) => (
              <Link
                key={ref}
                href={`/cases/${ref.toLowerCase().replace(/-/g, '-')}`}
                style={{ fontFamily: 'var(--mono)', fontSize: 11, color: '#1A1A1A', textDecoration: 'none', letterSpacing: '0.04em' }}
              >
                {ref} &rarr;
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CLERK NOTE */}
      {caseFile.clerk_note && (
        <section>
          <div style={sectionHeaderStyle}>CLERK NOTE</div>
          <ClerkCorrection text={caseFile.clerk_note} />
        </section>
      )}
    </aside>
  );
}
