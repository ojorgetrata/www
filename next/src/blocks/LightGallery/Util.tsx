import React, {
    ComponentPropsWithRef,
    useCallback,
    useEffect,
    useState
} from 'react'
import { EmblaCarouselType } from 'embla-carousel'

type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean
    nextBtnDisabled: boolean
    onPrevButtonClick: () => void
    onNextButtonClick: () => void
}

export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    }
}

type PropType = ComponentPropsWithRef<'button'>

export const PrevButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props

    return (
        <button type="button" className="embla__button embla__button--prev pointer-events-auto text-white bg-black hover:bg-black/90 focus:ring-4 focus:outline-none focus:ring-black/30 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-white dark:text-black dark:hover:bg-white/90 dark:focus:ring-black disabled:opacity-40"
            {...restProps}>

            <svg className="w-4 h-4 text-white dark:text-black rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
            {children}
            <span className="sr-only">Icon description</span>
        </button>
    )
}

export const NextButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props

    return (
        <button type="button" className="embla__button embla__button--next pointer-events-auto text-white bg-black hover:bg-black/90 focus:ring-4 focus:outline-none focus:ring-black/30 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-white dark:text-black dark:hover:bg-white/90 dark:focus:ring-black disabled:opacity-40 disabled:cursor-not-allowed"
            {...restProps}>

            <svg className="w-4 h-4 text-white dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
            {children}
            <span className="sr-only">Icon description</span>
        </button>
    )
}
