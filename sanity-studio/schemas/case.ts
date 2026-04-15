import { defineType, defineField, defineArrayMember } from 'sanity'

export const caseSchema = defineType({
  name: 'case',
  title: 'Case File',
  type: 'document',

  fields: [
    // ── Identification ──────────────────────────────────────────────
    defineField({
      name: 'case_number',
      title: 'Case Number',
      type: 'string',
      description: 'e.g. STP-001-ID',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'Used in /cases/[slug]. Generate from case_number.',
      options: { source: 'case_number', maxLength: 64 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'title',
      title: 'Case Title',
      type: 'string',
      validation: (R) => R.required(),
    }),

    // ── Classification ──────────────────────────────────────────────
    defineField({
      name: 'classification',
      title: 'Classification',
      type: 'string',
      options: {
        list: [
          { title: 'Identity / Visual Systems',   value: 'IDENTITY / VISUAL SYSTEMS' },
          { title: 'Print / Campaign Material',   value: 'PRINT / CAMPAIGN MATERIAL' },
          { title: 'Editorial / Publication',     value: 'EDITORIAL / PUBLICATION' },
          { title: 'Motion / Time-Based Media',   value: 'MOTION / TIME-BASED MEDIA' },
          { title: 'Apparel / Material Goods',    value: 'APPAREL / MATERIAL GOODS' },
          { title: 'Unclassified / Pending',      value: 'UNCLASSIFIED / PENDING' },
          { title: 'Digital / Interactive',       value: 'DIGITAL / INTERACTIVE' },
          { title: 'Photography / Image',         value: 'PHOTOGRAPHY / IMAGE' },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'PENDING REVIEW',
      options: {
        list: [
          { title: 'Pending Review',         value: 'PENDING REVIEW' },
          { title: 'On Hold',                value: 'ON HOLD' },
          { title: 'Access Suspended',       value: 'ACCESS SUSPENDED' },
          { title: 'Manual Review Required', value: 'MANUAL REVIEW REQUIRED' },
          { title: 'Routed',                 value: 'ROUTED' },
          { title: 'Approved',               value: 'APPROVED' },
          { title: 'Archived',               value: 'ARCHIVED' },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'routing_state',
      title: 'Routing State',
      type: 'string',
      initialValue: 'ROUTED',
      options: {
        list: [
          { title: 'Routed',                 value: 'ROUTED' },
          { title: 'Manual Review Required', value: 'MANUAL REVIEW REQUIRED' },
          { title: 'Access Suspended',       value: 'ACCESS SUSPENDED' },
          { title: 'On Hold',                value: 'ON HOLD' },
          { title: 'Pending',                value: 'PENDING' },
          { title: 'Cleared',                value: 'CLEARED' },
        ],
      },
    }),
    defineField({
      name: 'access_level',
      title: 'Access Level',
      type: 'number',
      initialValue: 2,
      description: '1 = Open, 2 = Restricted, 3 = Confidential, 4 = Suspended',
      options: {
        list: [
          { title: 'L1 — Open',                   value: 1 },
          { title: 'L2 — Restricted',             value: 2 },
          { title: 'L3 — Confidential',           value: 3 },
          { title: 'L4 — Suspended (Full Block)', value: 4 },
        ],
      },
      validation: (R) => R.required().min(1).max(4),
    }),

    // ── Metadata ────────────────────────────────────────────────────
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (R) => R.required().min(2000).max(2099),
    }),
    defineField({
      name: 'medium',
      title: 'Medium',
      type: 'string',
      description: 'e.g. Brand Identity, Print, Type',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      description: 'e.g. CLASSIFICATION UNIT — SECTION 4',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'intake_date',
      title: 'Intake Date',
      type: 'date',
      options: { dateFormat: 'YYYY-MM-DD' },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'last_modified',
      title: 'Last Modified',
      type: 'date',
      options: { dateFormat: 'YYYY-MM-DD' },
    }),

    // ── Content ─────────────────────────────────────────────────────
    defineField({
      name: 'summary_redacted',
      title: 'Case Summary',
      type: 'text',
      rows: 6,
      description: 'Procedural summary. Keep tone cold and factual.',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'clerk_note',
      title: 'Clerk Note',
      type: 'string',
      description: 'Internal annotation. Lowercase, procedural.',
    }),

    // ── Chain of custody ────────────────────────────────────────────
    defineField({
      name: 'chain_of_custody',
      title: 'Chain of Custody',
      type: 'array',
      description: 'Ordered routing stages — INTAKE → CLASSIFICATION → HOLD',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'stage',
          fields: [
            defineField({ name: 'stage', title: 'Stage', type: 'string', validation: (R) => R.required() }),
          ],
          preview: { select: { title: 'stage' } },
        }),
      ],
    }),

    // ── Exhibits ────────────────────────────────────────────────────
    defineField({
      name: 'exhibits',
      title: 'Exhibits',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'exhibit',
          title: 'Exhibit',
          fields: [
            defineField({
              name: 'id',
              title: 'Exhibit ID',
              type: 'string',
              description: 'e.g. EX-001A',
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'e.g. SPECIMEN SHEET — PRIMARY MARK',
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Image',    value: 'image' },
                  { title: 'Video',    value: 'video' },
                  { title: 'Document', value: 'document' },
                ],
              },
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'access',
              title: 'Access',
              type: 'string',
              initialValue: 'open',
              options: {
                list: [
                  { title: 'Open',       value: 'open' },
                  { title: 'Restricted', value: 'restricted' },
                  { title: 'Suspended',  value: 'suspended' },
                ],
              },
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'image',
              title: 'Image File',
              type: 'image',
              options: { hotspot: true },
              fields: [
                defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
                defineField({ name: 'caption', title: 'Caption', type: 'string' }),
              ],
            }),
            defineField({
              name: 'video',
              title: 'Video File',
              type: 'file',
              options: { accept: 'video/*' },
            }),
          ],
          preview: {
            select: { title: 'id', subtitle: 'label', media: 'image' },
          },
        }),
      ],
    }),

    // ── Relations ───────────────────────────────────────────────────
    defineField({
      name: 'related_cases',
      title: 'Related Cases',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'case' }],
        }),
      ],
    }),
  ],

  // Admin UI presentation
  preview: {
    select: {
      title:    'case_number',
      subtitle: 'title',
      status:   'status',
    },
    prepare({ title, subtitle, status }) {
      return {
        title:    title ?? 'Untitled Case',
        subtitle: `${status ?? '—'} · ${subtitle ?? ''}`,
      }
    },
  },

  // Field ordering in the studio form
  groups: [
    { name: 'identification', title: 'Identification', default: true },
    { name: 'classification', title: 'Classification' },
    { name: 'content',        title: 'Content' },
    { name: 'exhibits',       title: 'Exhibits' },
    { name: 'routing',        title: 'Routing' },
  ],
})
