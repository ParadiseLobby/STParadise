import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

// ── Project credentials ─────────────────────────────────────────────
// projectId is set during `npx sanity login && npx sanity projects create`
// or paste it directly from https://sanity.io/manage
const projectId = 'ybkrrwf5'
const dataset   = 'production'

export default defineConfig({
  name:      'paradise-lobby-archive',
  title:     'PARADISE LOBBY — ARCHIVE SYSTEM',
  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('ARCHIVE SYSTEM')
          .items([
            S.documentTypeListItem('case').title('Case Files'),
            S.divider(),
            S.listItem()
              .title('Site Settings')
              .id('settings')
              .child(
                S.document()
                  .schemaType('settings')
                  .documentId('settings'),
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== 'case' && item.getId() !== 'settings',
            ),
          ]),
    }),
  ],

  schema: { types: schemaTypes },
})
