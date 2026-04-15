'use client'

import React from 'react'

interface NavBracketsProps {
  active: boolean
}

const COLOR = '#5B6B8A'
const TRANSITION = 'opacity 0.12s ease, transform 0.12s ease'

export default function NavBrackets({ active }: NavBracketsProps) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
      }}
    >
      {/* TOP-LEFT — full L */}
      {/* horizontal */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: 12, height: 1,
          background: COLOR,
          transition: TRANSITION,
          opacity: active ? 1 : 0,
          transform: active ? 'translate(0,0)' : 'translate(5px,5px)',
          boxShadow: active ? '0 0 4px rgba(91,107,138,0.6)' : 'none',
        }}
      />
      {/* vertical */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: 1, height: 12,
          background: COLOR,
          transition: TRANSITION,
          opacity: active ? 1 : 0,
          transform: active ? 'translate(0,0)' : 'translate(5px,5px)',
          boxShadow: active ? '0 0 4px rgba(91,107,138,0.6)' : 'none',
        }}
      />

      {/* BOTTOM-RIGHT — full L mirrored */}
      {/* horizontal */}
      <div
        style={{
          position: 'absolute',
          bottom: 0, right: 0,
          width: 12, height: 1,
          background: COLOR,
          transition: TRANSITION,
          opacity: active ? 1 : 0,
          transform: active ? 'translate(0,0)' : 'translate(-5px,-5px)',
          boxShadow: active ? '0 0 4px rgba(91,107,138,0.6)' : 'none',
        }}
      />
      {/* vertical */}
      <div
        style={{
          position: 'absolute',
          bottom: 0, right: 0,
          width: 1, height: 12,
          background: COLOR,
          transition: TRANSITION,
          opacity: active ? 1 : 0,
          transform: active ? 'translate(0,0)' : 'translate(-5px,-5px)',
          boxShadow: active ? '0 0 4px rgba(91,107,138,0.6)' : 'none',
        }}
      />

      {/* TOP-RIGHT — clipped, horizontal only */}
      <div
        style={{
          position: 'absolute',
          top: 0, right: 0,
          width: 6, height: 1,
          background: COLOR,
          opacity: active ? 0.55 : 0,
          transition: TRANSITION,
        }}
      />

      {/* BOTTOM-LEFT — clipped, vertical only */}
      <div
        style={{
          position: 'absolute',
          bottom: 0, left: 0,
          width: 1, height: 6,
          background: COLOR,
          opacity: active ? 0.55 : 0,
          transition: TRANSITION,
        }}
      />
    </div>
  )
}
