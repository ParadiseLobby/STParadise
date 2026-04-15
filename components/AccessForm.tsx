'use client'

import React, { useState } from 'react'

const inputStyle: React.CSSProperties = {
  width: '100%',
  border: '1px solid #E0DDD8',
  backgroundColor: '#F5F3EF',
  fontFamily: 'var(--mono)',
  fontSize: 13,
  color: '#1A1A1A',
  padding: '10px 12px',
  outline: 'none',
  display: 'block',
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--mono)',
  fontSize: 10,
  color: '#C8C4BC',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  display: 'block',
  marginBottom: '6px',
}

const fieldStyle: React.CSSProperties = {
  marginBottom: '20px',
}

export default function AccessForm() {
  const [submitted, setSubmitted] = useState(false)
  const [refNumber, setRefNumber] = useState('')
  const [focused, setFocused] = useState<string | null>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const ref = Math.floor(Math.random() * 900000 + 100000).toString()
    setRefNumber(ref)
    setSubmitted(true)
  }

  function focusStyle(field: string): React.CSSProperties {
    return { ...inputStyle, borderColor: focused === field ? '#1A1A1A' : '#E0DDD8' }
  }

  if (submitted) {
    return (
      <div style={{ border: '1px solid #E0DDD8', backgroundColor: '#EDEAE4', padding: '32px' }}>
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 13,
            color: '#1A1A1A',
            letterSpacing: '0.08em',
            lineHeight: 1.8,
          }}
        >
          REQUEST LOGGED
          <br />
          REF: {refNumber}
          <br />
          PROCESSING TIME: INDETERMINATE
        </div>
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 10,
            color: '#C8C4BC',
            letterSpacing: '0.06em',
            marginTop: '16px',
          }}
        >
          NO CONFIRMATION WILL BE SENT UNTIL REVIEW IS COMPLETE. DO NOT RESUBMIT.
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '640px' }}>
      <div style={fieldStyle}>
        <label style={labelStyle} htmlFor="requestor">
          REQUESTOR IDENTIFICATION
          <span style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 9, color: '#C8C4BC', letterSpacing: '0.06em', marginTop: '2px', textTransform: 'none' }}>
            FULL NAME OR ENTITY IDENTIFIER
          </span>
        </label>
        <input id="requestor" type="text" name="requestor" required style={focusStyle('requestor')} onFocus={() => setFocused('requestor')} onBlur={() => setFocused(null)} />
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle} htmlFor="contact">
          CONTACT CHANNEL
          <span style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 9, color: '#C8C4BC', letterSpacing: '0.06em', marginTop: '2px', textTransform: 'none' }}>
            SECURE COMMUNICATION ADDRESS
          </span>
        </label>
        <input id="contact" type="email" name="contact" required style={focusStyle('contact')} onFocus={() => setFocused('contact')} onBlur={() => setFocused(null)} />
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle} htmlFor="caseref">
          CASE REFERENCE
          <span style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 9, color: '#C8C4BC', letterSpacing: '0.06em', marginTop: '2px', textTransform: 'none' }}>
            CASE NUMBER(S) REQUESTED — LEAVE BLANK FOR GENERAL INQUIRY
          </span>
        </label>
        <input id="caseref" type="text" name="caseref" style={focusStyle('caseref')} onFocus={() => setFocused('caseref')} onBlur={() => setFocused(null)} />
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle} htmlFor="purpose">
          PURPOSE OF REQUEST
          <span style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 9, color: '#C8C4BC', letterSpacing: '0.06em', marginTop: '2px', textTransform: 'none' }}>
            STATED PURPOSE — MIN. 50 CHARACTERS
          </span>
        </label>
        <textarea id="purpose" name="purpose" required minLength={50} rows={5} style={{ ...focusStyle('purpose'), resize: 'vertical' }} onFocus={() => setFocused('purpose')} onBlur={() => setFocused(null)} />
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle} htmlFor="clearance">
          CLEARANCE DOCUMENTATION
          <span style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 9, color: '#C8C4BC', letterSpacing: '0.06em', marginTop: '2px', textTransform: 'none' }}>
            EXISTING CLEARANCE CODE IF APPLICABLE
          </span>
        </label>
        <input id="clearance" type="text" name="clearance" style={focusStyle('clearance')} onFocus={() => setFocused('clearance')} onBlur={() => setFocused(null)} />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <button
          type="submit"
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#1A1A1A',
            backgroundColor: '#EDEAE4',
            border: '1px solid #1A1A1A',
            padding: '12px 24px',
            cursor: 'pointer',
            display: 'inline-block',
            transition: 'background-color 0.15s',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#E0DDD8' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#EDEAE4' }}
        >
          SUBMIT CLEARANCE REQUEST — FORM CR-7
        </button>
      </div>

      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: '#C8C4BC', letterSpacing: '0.06em', lineHeight: 1.6 }}>
        REQUESTS ARE PROCESSED IN THE ORDER RECEIVED. NO CONFIRMATION IS SENT UNTIL REVIEW IS COMPLETE.
      </div>
    </form>
  )
}
