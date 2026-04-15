import DocumentFrame from '@/components/DocumentFrame'
import RestrictedNotice from '@/components/RestrictedNotice'
import AccessForm from '@/components/AccessForm'

export const revalidate = 60

export default function AccessPage() {
  return (
    <DocumentFrame systemCode="CLEARANCE-REQUEST" pageRef="PL-ACCESS-01">
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
          CLEARANCE REQUEST — FORM CR-7
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
          SUBMIT REQUEST FOR ACCESS TO RESTRICTED RECORDS. PROCESSING TIME: INDETERMINATE. ALL
          REQUESTS ARE LOGGED.
        </div>
      </div>

      {/* Restricted notice */}
      <div style={{ marginBottom: '32px' }}>
        <RestrictedNotice message="UNAUTHORIZED ACCESS ATTEMPTS ARE RECORDED AND REPORTED. SUBMIT ONLY IF AUTHORIZED TO REQUEST CLEARANCE." />
      </div>

      <AccessForm />
    </DocumentFrame>
  )
}
