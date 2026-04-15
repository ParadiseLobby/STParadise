import { getAllCases } from '@/lib/cases';
import DocumentFrame from '@/components/DocumentFrame';
import CaseCard from '@/components/CaseCard';
import OcrString from '@/components/OcrString';

export const revalidate = 60

export default async function CasesPage() {
  const cases = await getAllCases();
  const count = cases.length;

  const statusCounts = cases.reduce<Record<string, number>>((acc, c) => {
    acc[c.status] = (acc[c.status] ?? 0) + 1;
    return acc;
  }, {});

  const statusBar = Object.entries(statusCounts)
    .map(([status, n]) => `${status}: ${n}`)
    .join(' // ');

  return (
    <DocumentFrame systemCode="CASE-ARCHIVE" pageRef="PL-CASES-01">
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 16,
            color: '#1A1A1A',
            letterSpacing: '0.06em',
            fontWeight: 700,
            marginBottom: '8px',
          }}
        >
          CASE FILE ARCHIVE — ALL RECORDS
        </div>
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 10,
            color: '#C8C4BC',
            letterSpacing: '0.08em',
          }}
        >
          {'TOTAL RECORDS: ' + String(count).padStart(3, '0') + ' // CLASSIFICATION ONGOING // SOME EXHIBITS RESTRICTED'}
        </div>
      </div>

      {/* Filter/status bar */}
      <div
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 10,
          color: '#C8C4BC',
          letterSpacing: '0.06em',
          marginBottom: '12px',
          textTransform: 'uppercase',
        }}
      >
        {statusBar}
      </div>

      <div style={{ borderTop: '1px solid #E0DDD8', marginBottom: '28px' }} />

      {/* Cases grid */}
      <div
        className="grid-cases"
        style={{ marginBottom: '40px' }}
      >
        {cases.map((c) => (
          <CaseCard key={c.slug} caseFile={c} />
        ))}
      </div>

      {/* End of records notice */}
      <div
        style={{
          borderTop: '1px solid #E0DDD8',
          paddingTop: '16px',
        }}
      >
        <OcrString
          text={`END OF RETRIEVABLE RECORDS // ${String(count).padStart(3, '0')} FILES // ACCESS TO ADDITIONAL RECORDS REQUIRES LEVEL 4 CLEARANCE`}
          style={{
            fontSize: 10,
            color: '#C8C4BC',
            letterSpacing: '0.06em',
          }}
        />
      </div>
    </DocumentFrame>
  );
}
