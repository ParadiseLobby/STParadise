'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import type { CaseFile } from '@/lib/cases';

interface RegistryTableProps {
  cases: CaseFile[];
}

type SortKey = 'case_number' | 'classification' | 'status' | 'year' | 'access_level' | 'routing_state';
type SortDir = 'asc' | 'desc';

const statusColors: Record<string, string> = {
  'PENDING REVIEW':         '#2D2D2D',
  'ON HOLD':                '#1A1A1A',
  'ACCESS SUSPENDED':       '#1A1A1A',
  'MANUAL REVIEW REQUIRED': '#1A1A1A',
  ROUTED:                   '#C8C4BC',
};

const M: React.CSSProperties = { fontFamily: 'var(--mono)' };

const columns: { key: SortKey | '__idx'; label: string }[] = [
  { key: '__idx',        label: '#' },
  { key: 'case_number',  label: 'CASE NO.' },
  { key: 'classification', label: 'CLASSIFICATION' },
  { key: 'status',       label: 'STATUS' },
  { key: 'year',         label: 'YEAR' },
  { key: 'access_level', label: 'LVL' },
  { key: 'routing_state', label: 'ROUTING' },
];

export default function RegistryTable({ cases }: RegistryTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('case_number');
  const [sortDir, setSortDir] = useState<SortDir>('asc');

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  }

  const sorted = [...cases].sort((a, b) => {
    const av = a[sortKey];
    const bv = b[sortKey];
    const cmp =
      typeof av === 'number' && typeof bv === 'number'
        ? av - bv
        : String(av).localeCompare(String(bv));
    return sortDir === 'asc' ? cmp : -cmp;
  });

  const thStyle: React.CSSProperties = {
    ...M,
    fontSize: 10,
    color: '#C8C4BC',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    padding: '8px 12px',
    textAlign: 'left',
    cursor: 'pointer',
    userSelect: 'none',
    background: '#EDEAE4',
    borderBottom: '1px solid #E0DDD8',
    whiteSpace: 'nowrap',
    fontWeight: 400,
  };

  const tdBase: React.CSSProperties = {
    ...M,
    fontSize: 12,
    color: '#1A1A1A',
    padding: '8px 12px',
    letterSpacing: '0.02em',
    verticalAlign: 'middle',
    borderBottom: '1px solid #E0DDD8',
  };

  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
        }}
      >
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                style={thStyle}
                onClick={() => col.key !== '__idx' && handleSort(col.key as SortKey)}
              >
                {col.label}
                {col.key !== '__idx' && sortKey === col.key && (
                  <span style={{ marginLeft: 4, opacity: 0.5 }}>
                    {sortDir === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((c, i) => {
            const rowBg = i % 2 === 0 ? '#F5F3EF' : '#FAFAF8';
            return (
              <tr
                key={c.slug}
                style={{ background: rowBg, cursor: 'pointer' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLTableRowElement).style.background = '#EDEAE4'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLTableRowElement).style.background = rowBg; }}
              >
                <td style={{ ...tdBase, color: '#C8C4BC', fontSize: 10 }}>{String(i + 1).padStart(2, '0')}</td>
                <td style={tdBase}>
                  <Link href={`/cases/${c.slug}`} style={{ ...M, color: '#1A1A1A', textDecoration: 'none', fontSize: 12 }}>
                    {c.case_number}
                  </Link>
                </td>
                <td style={{ ...tdBase, fontSize: 11, color: '#2D2D2D' }}>{c.classification}</td>
                <td style={tdBase}>
                  <span style={{ ...M, fontSize: 10, letterSpacing: '0.06em', color: statusColors[c.status] ?? '#1A1A1A', border: `1px solid ${statusColors[c.status] ?? '#E0DDD8'}`, padding: '1px 6px', whiteSpace: 'nowrap' }}>
                    {c.status}
                  </span>
                </td>
                <td style={{ ...tdBase, fontSize: 11 }}>{c.year}</td>
                <td style={{ ...tdBase, fontSize: 11, textAlign: 'center', letterSpacing: '0.04em' }}>L{c.access_level}</td>
                <td style={{ ...tdBase, fontSize: 11, color: '#2D2D2D' }}>{c.routing_state}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
