import { getAllCases } from '@/lib/cases';
import DocumentFrame from '@/components/DocumentFrame';
import FieldRow from '@/components/FieldRow';
import RedactionBar from '@/components/RedactionBar';
import ClerkCorrection from '@/components/ClerkCorrection';
import Stamp from '@/components/Stamp';

export const revalidate = 60

export default async function AboutSystemPage() {
  const cases = await getAllCases();
  const count = cases.length;

  return (
    <DocumentFrame systemCode="SYSTEM-NOTE" pageRef="PL-SYS-01">
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 16,
            color: '#1A1A1A',
            letterSpacing: '0.06em',
            fontWeight: 700,
          }}
        >
          ABOUT THIS SYSTEM — INTERNAL NOTE
        </div>
      </div>

      {/* Opening redaction bar */}
      <div style={{ marginBottom: '28px' }}>
        <RedactionBar width="60%" label="SECTION REDACTED — CLASSIFICATION PENDING" />
      </div>

      {/* Field rows */}
      <div
        style={{
          maxWidth: '560px',
          marginBottom: '32px',
          backgroundColor: '#EDEAE4',
          border: '1px solid #E0DDD8',
          padding: '20px',
        }}
      >
        <FieldRow label="SYSTEM" value="PARADISE LOBBY ARCHIVE v2.4" />
        <FieldRow
          label="MAINTAINED BY"
          value={<RedactionBar width="180px" label="FIELD REDACTED" />}
        />
        <FieldRow
          label="JURISDICTION"
          value="CREATIVE RECORD DIVISION — SECTION 4"
        />
        <FieldRow label="STATUS" value="ACTIVE — UNDER CONTINUOUS REVIEW" />
        <FieldRow label="ESTABLISHED" value="2019" />
        <FieldRow
          label="RECORD COUNT"
          value={`${String(count).padStart(3, '0')} INDEXED — ONGOING`}
        />
      </div>

      {/* System note body */}
      <div
        style={{
          maxWidth: '640px',
          marginBottom: '32px',
          borderLeft: '1px solid #E0DDD8',
          paddingLeft: '20px',
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
          This system serves as the administrative processing layer for creative records produced
          under the designation STRANGER THAN PARADISE. Records are classified, routed, and held
          according to departmental protocol. Access to individual case files is subject to
          clearance level requirements. This record does not constitute a disclosure of personal
          information. The system operator cannot be reached through this interface.
        </p>
      </div>

      {/* Closing redaction bar */}
      <div style={{ marginBottom: '28px' }}>
        <RedactionBar width="40%" label="REMAINDER WITHHELD" />
      </div>

      {/* Clerk correction + stamp */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '32px',
          flexWrap: 'wrap',
        }}
      >
        <ClerkCorrection text="system note reviewed — no changes authorized — file as is" />
        <Stamp text="FILED" variant="routed" rotate="right" />
      </div>
    </DocumentFrame>
  );
}
