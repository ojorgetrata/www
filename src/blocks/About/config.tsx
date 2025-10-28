import type { Block, Field } from 'payload'

import {
    FixedToolbarFeature,
    HeadingFeature,
    InlineToolbarFeature,
    lexicalEditor,
} from '@payloadcms/richtext-lexical'

// About block: shows a media asset and rich text side-by-side
const aboutFields: Field[] = [
    {
        name: 'media',
        type: 'upload',
        relationTo: 'media',
    },
    {
        name: 'richText',
        type: 'richText',
        label: false,
        editor: lexicalEditor({
            features: ({ rootFeatures }) => {
                return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3'] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                ]
            },
        }),
    },
    {
        name: 'mediaPosition',
        type: 'select',
        defaultValue: 'left',
        options: [
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' },
        ],
        admin: {
            description: 'Position of the media relative to the text on wide screens',
        },
    },
]

export const About: Block = {
    slug: 'about',
    interfaceName: 'AboutBlock',
    fields: aboutFields,
}

export default About
