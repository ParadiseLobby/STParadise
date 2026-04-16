import React from 'react';
import Link from 'next/link';
import { getAllCases } from '@/lib/cases';
import { urlFor } from '@/lib/sanity';
import DocumentFrame from '@/components/DocumentFrame';
import CaseCard from '@/components/CaseCard';
import HeroPanel from '@/components/HeroPanel';

export const revalidate = 60;

export default async function HomePage() {
  const allCases = await getAllCases();
  const count = allCases.length;
  const pendingCount = allCases.filter((c) =>
    ['PENDING REVIEW', 'MANUAL REVIEW REQUIRED', 'ON HOLD'].includes(c.status)
  ).length;
  const routedCount = allCases.filter((c) => c.routing_state?.trim()).length;
  const withheldCount = allCases.filter(
    (c) =>
      c.status === 'ACCESS SUSPENDED' ||
      c.exhibits?.some((exhibit) => exhibit.access !== 'open')
  ).length;

  const sorted = [...allCases].sort((a, b) => {
    const aTime = a.intake_date ? new Date(a.intake_date).getTime() : 0;
    const bTime = b.intake_date ? new Date(b.intake_date).getTime() : 0;
    return bTime - aTime;
  });

  const featured = sorted[0] ?? null;
  const gridCases = sorted.slice(1, 4);

  const featuredImage =
    featured?.exhibits?.[0]?.mediaImage
      ? urlFor(featured.exhibits[0].mediaImage).width(560).url()
      : null;

  const M: React.CSSProperties = { fontFamily: 'var(--mono)' };
  const operativeLine = featured
    ? `${featured.case_number} / ${featured.status}`
    : 'RECORD LOCKED / NO ACTIVE INTAKE';
  const lastIntake = featured?.intake_date ?? 'RECORD LOCKED';
  const accessState = withheldCount > 0 ? 'PARTIAL WITHHOLD' : 'ACCESSIBLE';
  const withheldLog = [
    featured?.case_number ? `${featured.case_number} / FIELD 03 / WITHHELD` : 'FIELD 03 / WITHHELD',
    featured?.routing_state
      ? `${featured.routing_state} / FIELD 07 / LOCKED`
      : 'FIELD 07 / ROOT REF WITHHELD',
    featured?.status ? `${featured.status} / FIELD 11 / REDACTED` : 'FIELD 11 / REDACTED',
  ];

  return (
    <DocumentFrame systemCode="INTAKE-INDEX" pageRef="PL-ROOT-01">

      <HeroPanel />

      <section className="intake-ledger">
        <div className="intake-ledger-head">
          <div className="intake-ledger-intro">
            <span className="intake-ledger-kicker">INTAKE STATUS</span>
            <span className="intake-ledger-line">{operativeLine}</span>
          </div>
          <div className="intake-ledger-meta">
            <div className="intake-ledger-meta-item">
              <span className="intake-ledger-meta-label">LAST INTAKE</span>
              <span className="intake-ledger-meta-value">{lastIntake}</span>
            </div>
            <div className="intake-ledger-meta-item">
              <span className="intake-ledger-meta-label">ROOT REF</span>
              <span className="intake-ledger-meta-value">PL-ROOT-01</span>
            </div>
            <div className="intake-ledger-meta-item">
              <span className="intake-ledger-meta-label">CLEARANCE REQUEST</span>
              <span className="intake-ledger-meta-value">OPEN</span>
            </div>
            <div className="intake-ledger-meta-item">
              <span className="intake-ledger-meta-label">ACCESS STATE</span>
              <span className="intake-ledger-meta-value">{accessState}</span>
            </div>
          </div>
        </div>

        <div className="intake-ledger-grid">
          {[
            { label: 'ARCHIVE', value: count },
            { label: 'PENDING', value: pendingCount },
            { label: 'ROUTED', value: routedCount },
            { label: 'WITHHELD', value: withheldCount },
          ].map(({ label, value }) => (
            <div key={label} className="intake-ledger-cell">
              <span className="intake-ledger-cell-value">{String(value).padStart(2, '0')}</span>
              <span className="intake-ledger-cell-label">{label}</span>
            </div>
          ))}
        </div>

        <div className="intake-ledger-friction">
          <div className="intake-ledger-friction-head">
            <span className="intake-ledger-kicker">WITHHELD INTAKE LOG</span>
            <span className="intake-ledger-friction-state">RECORD LOCKED</span>
          </div>
          <div className="intake-ledger-friction-log">
            {withheldLog.map((entry) => (
              <div key={entry} className="intake-ledger-friction-entry">
                {entry}
              </div>
            ))}
          </div>
        </div>
      </section>


      {featured && (
        <div style={{ marginBottom: '40px' }}>
          <div style={{ ...M, fontSize: 10, color: '#1A1A1A', letterSpacing: '0.14em', textTransform: 'uppercase', borderBottom: '1px solid #1A1A1A', paddingBottom: '6px', marginBottom: '16px' }}>
            EVIDENCE RECORD / LATEST INTAKE
          </div>
          <Link href={`/cases/${featured.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{ display: 'flex', border: '1px solid #E0DDD8', background: '#F5F3EF' }} className="featured-card">
              <div style={{ width: 280, flexShrink: 0, background: '#E0DDD8', overflow: 'hidden', minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {featuredImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={featuredImage} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                ) : (
                  <span style={{ ...M, fontSize: 10, color: '#A8A49E', letterSpacing: '0.1em', textAlign: 'center', padding: 20 }}>EXHIBIT WITHHELD</span>
                )}
              </div>
              <div style={{ flex: 1, padding: '24px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
                <div style={{ ...M, fontSize: 9, color: '#C8C4BC', letterSpacing: '0.12em' }}>{featured.case_number}</div>
                <div style={{ ...M, fontSize: 15, color: '#1A1A1A', fontWeight: 500, letterSpacing: '0.03em', lineHeight: 1.4 }}>{featured.title}</div>
                <div style={{ ...M, fontSize: 9, color: '#7A766F', letterSpacing: '0.08em', textTransform: 'uppercase', borderTop: '1px solid #E0DDD8', paddingTop: 8 }}>
                  {featured.status} / {featured.routing_state ?? 'ROUTING WITHHELD'} / {lastIntake}
                </div>
                <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', borderTop: '1px solid #E0DDD8', paddingTop: 14, marginTop: 4 }}>
                  {[{ k: 'CLASSIFICATION', v: featured.classification }, { k: 'STATUS', v: featured.status }, { k: 'YEAR', v: String(featured.year) }].map(({ k, v }) => (
                    <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <span style={{ ...M, fontSize: 9, color: '#C8C4BC', letterSpacing: '0.08em' }}>{k}</span>
                      <span style={{ ...M, fontSize: 11, color: '#1A1A1A', letterSpacing: '0.04em' }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {gridCases.length > 0 && (
        <div style={{ marginBottom: '40px' }}>
          <div style={{ ...M, fontSize: 10, color: '#1A1A1A', letterSpacing: '0.14em', textTransform: 'uppercase', borderBottom: '1px solid #1A1A1A', paddingBottom: '6px', marginBottom: '16px' }}>
            ACTIVE CASE FILES
          </div>
          <div className="grid-cases">
            {gridCases.map((c, i) => (
              <CaseCard key={c.slug} caseFile={c} index={i} />
            ))}
          </div>
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #E0DDD8', paddingTop: '20px', flexWrap: 'wrap', gap: 16 }}>
        <Link href="/cases" style={{ ...M, fontSize: 11, color: '#1A1A1A', letterSpacing: '0.1em', textDecoration: 'none' }} className="action-link">ACCESS ARCHIVE →</Link>
        <Link href="/access" style={{ ...M, fontSize: 11, color: '#1A1A1A', letterSpacing: '0.1em', textDecoration: 'none' }} className="action-link">SUBMIT CLEARANCE REQUEST →</Link>
      </div>

    </DocumentFrame>
  );
}
