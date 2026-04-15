import { getAllCases } from '@/lib/cases';
import DocumentFrame from '@/components/DocumentFrame';
import RegistryTable from '@/components/RegistryTable';

export const revalidate = 60

export default async function RegistryPage() {
  const cases = await getAllCases();
  const suspendedCount = cases.filter((c) => c.status === 'ACCESS SUSPENDED').length;

  return (
    <DocumentFrame systemCode="CLASSIFICATION-INDEX" pageRef="PL-REG-01">
      {/* Header */}
      <div style={{ marginBottom: '20px' }}>
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 16,
            color: '#1A1A1A',
            letterSpacing: '0.06em',
            fontWeight: 700,
            marginBottom: '10px',
          }}
        >
          CLASSIFICATION INDEX — SORTABLE REGISTRY
        </div>
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 10,
            color: '#C8C4BC',
            letterSpacing: '0.06em',
            lineHeight: 1.6,
          }}
        >
          RECORDS LISTED BELOW ARE SUBJECT TO ACCESS RESTRICTIONS. CLASSIFICATION STATUS IS
          PROVISIONAL.
        </div>
      </div>

      <div style={{ borderTop: '1px solid #E0DDD8', marginBottom: '24px' }} />

      {/* Sortable table */}
      <div style={{ marginBottom: '32px' }}>
        <RegistryTable cases={cases} />
      </div>

      {/* Footer note */}
      <div
        style={{
          borderTop: '1px solid #E0DDD8',
          paddingTop: '14px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 10,
            color: '#C8C4BC',
            letterSpacing: '0.06em',
          }}
        >
          * RECORDS MARKED ACCESS SUSPENDED ARE WITHHELD FROM PUBLIC INDEX.{' '}
          {suspendedCount} ADDITIONAL RECORD{suspendedCount !== 1 ? 'S' : ''} NOT SHOWN.
        </div>
      </div>
    </DocumentFrame>
  );
}
