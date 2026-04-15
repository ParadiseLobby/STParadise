import { defineType, defineField, defineArrayMember } from 'sanity'

export const caseType = defineType({
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
      title: 'Slug',
      type: 'slug',
      options: { source: 'case_number', maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
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
          'IDENTITY / VISUAL SYSTEMS',
          'PRINT / CAMPAIGN MATERIAL',
          'EDITORIAL / PUBLICATION',
          'MOTION / TIME-BASED MEDIA',
          'APPAREL / MATERIAL GOODS',
          'DIGITAL / INTERACTIVE',
          'PHOTOGRAPHY / IMAGE',
          'UNCLASSIFIED / PENDING',
        ],
        layout: 'radio',
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
        ],
        layout: 'radio',
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
          'ROUTED',
          'MANUAL REVIEW REQUIRED',
          'ACCESS SUSPENDED',
          'ON HOLD',
          'PENDING',
          'CLEARED',
        ],
      },
    }),
    defineField({
      name: 'access_level',
      title: 'Access Level',
      type: 'number',
      description: '1 = Open  ·  2 = Restricted  ·  3 = Confidential  ·  4 = Suspended',
      initialValue: 2,
      options: {
        list: [
          { title: 'L1 — Open',                   value: 1 },
          { title: 'L2 — Restricted',             value: 2 },
          { title: 'L3 — Confidential',           value: 3 },
          { title: 'L4 — Suspended (Full Block)', value: 4 },
        ],
        layout: 'radio',
      },
      validation: (R) => R.required().min(1).max(4).integer(),
    }),

    // ── Metadata ────────────────────────────────────────────────────
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (R) => R.required().min(2000).max(2099).integer(),
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
      type: 'string',
      description: 'ISO format: YYYY-MM-DD',
      validation: (R) => R.required().regex(/^\d{4}-\d{2}-\d{2}$/, { name: 'date', invert: false }),
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
                layout: 'radio',
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
                layout: 'radio',
              },
              validation: (R) => R.required(),
            }),
            defineField({
              name: 'media',
              title: 'Media (Image or File)',
              type: 'object',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: { hotspot: true },
                  fields: [
                    defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
                  ],
                }),
                defineField({
                  name: 'file',
                  title: 'File (video / document)',
                  type: 'file',
                  options: { accept: 'video/*,application/pdf' },
                }),
              ],
            }),
          ],
          preview: {
            select: { title: 'id', subtitle: 'label', media: 'media.image' },
          },
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title:    'case_number',
      subtitle: 'title',
      status:   'status',
    },
    prepare({ title, subtitle, status }) {
      return {
        title:    title ?? 'Untitled',
        subtitle: `${status ?? ''} · ${subtitle ?? ''}`,
      }
    },
  },
})
