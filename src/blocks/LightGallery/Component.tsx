'use client'

import { cn } from '@/utilities/ui'
import React, { useCallback } from 'react'
import RichText from '@/components/RichText'
import { Media } from '../../components/Media'
import useEmblaCarousel from 'embla-carousel-react'

import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './Util'

import type { GalleryBlock as GalleryBlockProps } from '@/payload-types'
import { EmblaOptionsType } from 'embla-carousel'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}


export const GalleryBlock: React.FC<GalleryBlockProps> = (props) => {
    const { title, columns } = props

    const [emblaRef, emblaApi] = useEmblaCarousel({})

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <div className="container my-16">

            {title && (
                <h1 className="text-center text-3xl md:text-4xl font-bold mb-10">{title}</h1>
            )}

            <section className="embla relative">
                {/* embla viewport must hide overflow */}
                <div className="embla__viewport overflow-hidden" ref={emblaRef}>
                    {/* embla container should be a horizontal flex container */}
                    <div className="embla__container flex">
                        {columns &&
                            columns.length > 0 &&
                            columns.map((col, index) => {
                                const { media } = col

                                return (

                                    /* each slide should be a flex-none element so slides don't stack */
                                    <div className="embla__slide flex-none w-full" key={index}>
                                        <div className="flex justify-center items-center py-6">
                                            <Media resource={media} imgClassName="mb-6 rounded-[0.8rem] object-cover mx-auto" />
                                        </div>
                                    </div>
                                )
                            }
                            )}


                    </div>

                </div>

                <div className="embla__controls absolute inset-0 flex items-center justify-between pointer-events-none">
                    <div className="embla__buttons flex items-center w-full px-4 justify-between">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                    </div>
                </div>
            </section>

        </div>
    )
}
