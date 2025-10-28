'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div
      className="container relative -mt-[4.4rem] grid grid-cols-1 md:grid-cols-2 items-stretch gap-6">
      <div className="mb-8 z-10 relative flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-[36.5rem]">
          {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}

          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex justify-center md:justify-center gap-4 flex-wrap">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink  {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>

      <div className="select-none w-full h-full relative flex items-center justify-center">
        {media && typeof media === 'object' && (
          <div className="relative z-10 rounded-2xl overflow-hidden w-full max-w-[520px]">
            <Media imgClassName="w-full h-full object-contain" priority resource={media} />
          </div>
        )}
      </div>
    </div>
  )
}
