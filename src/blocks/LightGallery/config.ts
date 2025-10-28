import type { Block, Field } from 'payload'

const columnFields: Field[] = [
  {
    name: 'media',
    type: 'upload',
    relationTo: 'media',
  },
]

export const Gallery: Block = {
  slug: 'gallery',
  interfaceName: 'GalleryBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      admin: {
        description: 'Global title for the gallery',
      },
    },
    {
      name: 'columns',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: columnFields,
    },
  ],
}
