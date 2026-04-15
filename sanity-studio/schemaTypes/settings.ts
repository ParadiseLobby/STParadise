import { defineType, defineField } from 'sanity'

export const settingsType = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'PARADISE LOBBY',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'backgroundMode',
      title: 'Background Mode',
      type: 'string',
      initialValue: 'light',
      options: {
        list: [
          { title: 'Light (#F5F3EF)', value: 'light' },
          { title: 'Dark (#0A0A0A)',  value: 'dark'  },
          { title: 'Mid (#1C1C1A)',   value: 'mid'   },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'primaryColor',
      title: 'Primary Color',
      type: 'string',
      description: 'Hex code — e.g. #1A1A1A',
      initialValue: '#1A1A1A',
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Color',
      type: 'string',
      description: 'Hex code — e.g. #C8C4BC',
      initialValue: '#C8C4BC',
    }),
    defineField({
      name: 'footerNote',
      title: 'Footer Note',
      type: 'string',
    }),
  ],
  preview: {
    select: { title: 'siteName' },
    prepare({ title }) {
      return { title: title ?? 'Site Settings' }
    },
  },
})
