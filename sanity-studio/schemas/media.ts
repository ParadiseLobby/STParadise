import { defineType, defineField } from 'sanity'

export const mediaSchema = defineType({
  name: 'media',
  title: 'Media',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'exhibit_id',
      title: 'Exhibit ID',
      type: 'string',
      description: 'e.g. EX-001A — links this file to a specific case exhibit',
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      options: {
        accept: 'image/*,video/*',
      },
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
    }),
    defineField({
      name: 'case_ref',
      title: 'Case Reference',
      type: 'reference',
      to: [{ type: 'case' }],
    }),
  ],

  preview: {
    select: { title: 'title', subtitle: 'exhibit_id' },
  },
})
