import React from 'react'

import { cn } from '@/utilities/ui'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

import type { AboutBlock as AboutBlockProps } from '@/payload-types'

type Props = {
    className?: string
} & AboutBlockProps

// Simple About block component: shows media and rich text side-by-side
export const AboutBlock: React.FC<Props> = (props) => {
    const { media, richText, mediaPosition = 'left', className } = props

    const isRight = mediaPosition === 'right'

    return (
        <div className={cn('container my-16', className)}>
            <div
                className={cn('flex flex-col md:flex-row items-center gap-8', {
                    'md:flex-row-reverse': isRight,
                })}
            >
                {media && (
                    <div className="w-full md:w-1/2">
                        <Media
                            resource={media}
                            imgClassName="rounded-[0.8rem] w-full h-[32rem] object-cover"
                        />
                    </div>
                )}

                {richText && (
                    <div className={cn('w-full md:w-1/2')}>
                        <RichText data={richText} enableGutter={false} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default AboutBlock



