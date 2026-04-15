import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllCases, getCaseBySlug } from '@/lib/cases';
import type { Exhibit } from '@/lib/cases';
import { urlFor } from '@/lib/sanity';
import DocumentFrame from '@/components/DocumentFrame';
import ArchiveSidebar from '@/components/ArchiveSidebar';
import FieldRow from '@/components/FieldRow';
import Stamp from '@/components/Stamp';
import RestrictedNotice from '@/components/RestrictedNotice';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60

export async function generateStaticParams() {
  const cases = await getAllCases();
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseFile = await getCaseBySlug(slug);
  if (!caseFile) return { title: 'RECORD NOT FOUND' };
  return { title: caseFile.case_number };
}

type StampVariant = 'pending' | 'approved' | 'restricted' | 'suspended' | 'routed' | 'manual';

function statusToVariant(status: string): StampVariant {
  const s = status.toLowerCase();
  if (s.includes('suspend')) return 'suspended';
  if (s.includes('manual')) return 'manual';
  if (s.includes('hold')) return 'restricted';
  if (s.includes('routed')) return 'routed';
  return 'pending';
}

export default async function CaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const caseFile = await getCaseBySlug(slug);

  if (!caseFile) return notFound();

  const variant = statusToVariant(caseFile.status);

  return (
    <DocumentFrame
      systemCode={caseFile.case_number}
      pageRef={`PL-CASE-${caseFile.case_number}`}
    >
      {/* Breadcrumb */}
      <div
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 10,
          color: '#C8C4BC',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '20px',
        }}
      >
        CASE ARCHIVE / {caseFile.classification} / {caseFile.case_number}
      </div>

      {/* Two-column layout */}
      <div className="grid-case-detail">
        {/* Main content */}
        <div>
          {/* Case number */}
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 10,
              color: '#C8C4BC',
              letterSpacing: '0.12em',
              marginBottom: '6px',
            }}
          >
            {caseFile.case_number}
          </div>

          {/* Title */}
          <h1
            className="ink-bleed"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 16,
              color: '#1A1A1A',
              lineHeight: 1.4,
              marginBottom: '16px',
              fontWeight: 700,
              letterSpacing: '0.04em',
            }}
          >
            {caseFile.title}
          </h1>

          {/* Status stamp */}
          <div style={{ marginBottom: '20px' }}>
            <Stamp text={caseFile.status} variant={variant} rotate="left" />
          </div>

          <div style={{ borderTop: '1px solid #E0DDD8', marginBottom: '28px' }} />

          {/* Case summary */}
          <div style={{ marginBottom: '32px' }}>
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 10,
                color: '#1A1A1A',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                borderBottom: '1px solid #1A1A1A',
                paddingBottom: '6px',
                marginBottom: '14px',
              }}
            >
              CASE SUMMARY
            </div>
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 9,
                color: '#A8A49E',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}
            >
              PROCESSED FRAGMENT — REF:{caseFile.case_number}
            </div>
            <div
              style={{
                borderLeft: '2px solid #E0DDD8',
                paddingLeft: '12px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 13,
                  color: '#1A1A1A',
                  lineHeight: 1.7,
                }}
              >
                {caseFile.summary_redacted || 'SUMMARY: [FIELD UNRESOLVED — AWAITING CLASSIFICATION]'}
              </p>
            </div>
          </div>

          {/* Exhibits */}
          <div style={{ marginBottom: '32px' }}>
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 10,
                color: '#1A1A1A',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                borderBottom: '1px solid #1A1A1A',
                paddingBottom: '6px',
                marginBottom: '14px',
              }}
            >
              EXHIBITS — {String(caseFile.exhibits.length).padStart(2, '0')} ON RECORD
            </div>
            {caseFile.exhibits.length > 0 && (
              <div
                style={{
                  border: '1px solid #E0DDD8',
                  boxShadow: '2px 0 0 0 #C8C4BC',
                  overflow: 'hidden',
                }}
              >
                {/* First exhibit — hero */}
                {(() => {
                  const first = caseFile.exhibits[0];
                  const hasImage = first.access === 'open' && first.mediaImage;
                  return (
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        maxHeight: 480,
                        overflow: 'hidden',
                        background: '#E0DDD8',
                      }}
                    >
                      {hasImage ? (
                        <img
                          src={urlFor(first.mediaImage!).url()}
                          alt={first.label}
                          style={{ width: '100%', maxHeight: 480, objectFit: 'cover', display: 'block' }}
                        />
                      ) : (
                        <div
                          style={{
                            background: '#E0DDD8',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 480,
                            fontFamily: 'var(--mono)',
                            fontSize: 10,
                            color: '#A8A49E',
                            letterSpacing: '0.1em',
                            textAlign: 'center',
                            padding: 20,
                          }}
                        >
                          ATTACHMENT UNAVAILABLE // REF WITHHELD
                        </div>
                      )}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          background: 'rgba(0,0,0,0.55)',
                          padding: '3px 8px',
                          fontFamily: 'var(--mono)',
                          fontSize: 9,
                          color: '#FFFFFF',
                          letterSpacing: '0.06em',
                        }}
                      >
                        {first.id} · {first.label}
                      </div>
                    </div>
                  );
                })()}

                {/* Remaining exhibits — horizontal strip */}
                {caseFile.exhibits.length > 1 && (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '1px',
                      background: '#C8C4BC',
                    }}
                  >
                    {caseFile.exhibits.slice(1).map((exhibit: Exhibit) => {
                      const hasImage = exhibit.access === 'open' && exhibit.mediaImage;
                      return (
                        <div
                          key={exhibit.id}
                          style={{
                            position: 'relative',
                            height: 140,
                            flex: 1,
                            overflow: 'hidden',
                            background: '#E0DDD8',
                          }}
                        >
                          {hasImage ? (
                            <img
                              src={urlFor(exhibit.mediaImage!).url()}
                              alt={exhibit.label}
                              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                          ) : (
                            <div
                              style={{
                                background: '#E0DDD8',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%',
                                fontFamily: 'var(--mono)',
                                fontSize: 10,
                                color: '#A8A49E',
                                letterSpacing: '0.1em',
                                textAlign: 'center',
                                padding: 10,
                              }}
                            >
                              ATTACHMENT UNAVAILABLE // REF WITHHELD
                            </div>
                          )}
                          <div
                            style={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              background: 'rgba(0,0,0,0.55)',
                              padding: '2px 6px',
                              fontFamily: 'var(--mono)',
                              fontSize: 9,
                              color: '#FFFFFF',
                              letterSpacing: '0.06em',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              maxWidth: '100%',
                            }}
                          >
                            {exhibit.id} · {exhibit.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Classification data */}
          <div style={{ marginBottom: '32px' }}>
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 10,
                color: '#1A1A1A',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                borderBottom: '1px solid #1A1A1A',
                paddingBottom: '6px',
                marginBottom: '14px',
              }}
            >
              CLASSIFICATION DATA
            </div>
            <FieldRow label="CLASSIFICATION" value={caseFile.classification} />
            <FieldRow label="MEDIUM" value={caseFile.medium} />
            <FieldRow label="YEAR" value={String(caseFile.year)} />
            <FieldRow label="DEPARTMENT" value={caseFile.department} />
            <FieldRow label="ACCESS LEVEL" value={`LEVEL ${caseFile.access_level}`} />
            <FieldRow label="ROUTING STATE" value={caseFile.routing_state} />
          </div>

          {/* Chain of custody — inline horizontal */}
          <div style={{ marginBottom: '32px' }}>
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 10,
                color: '#1A1A1A',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                borderBottom: '1px solid #1A1A1A',
                paddingBottom: '6px',
                marginBottom: '14px',
              }}
            >
              CHAIN OF CUSTODY
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0',
                flexWrap: 'wrap',
                overflowX: 'auto',
              }}
            >
              {caseFile.chain_of_custody.map((step, i) => {
                const isLast = i === caseFile.chain_of_custody.length - 1;
                const isCurrent = step === caseFile.routing_state || isLast;
                return (
                  <div
                    key={i}
                    style={{ display: 'flex', alignItems: 'center', gap: '0' }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: 9,
                        color: isCurrent ? '#1A1A1A' : '#C8C4BC',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        padding: '4px 8px',
                        border: isCurrent ? '1px solid #1A1A1A' : '1px solid #E0DDD8',
                        backgroundColor: isCurrent ? '#EDEAE4' : 'transparent',
                        fontWeight: isCurrent ? 700 : 400,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {step}
                    </div>
                    {!isLast && (
                      <span
                        style={{
                          fontFamily: 'var(--mono)',
                          fontSize: 10,
                          color: '#C8C4BC',
                          padding: '0 4px',
                        }}
                      >
                        →
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Restricted notice if access level >= 4 */}
          {caseFile.access_level >= 4 && (
            <div style={{ marginBottom: '24px' }}>
              <RestrictedNotice
                level={caseFile.access_level}
                message="Full case file access is withheld pending clearance verification. Contact the filing unit with valid authorization."
              />
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div>
          <ArchiveSidebar caseFile={caseFile} />
        </div>
      </div>
    </DocumentFrame>
  );
}
