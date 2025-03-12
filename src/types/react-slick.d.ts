// src/types/react-slick.d.ts
declare module 'react-slick' {
    import { Component, ReactNode } from 'react'

    interface Settings {
        dots?: boolean
        infinite?: boolean
        speed?: number
        slidesToShow?: number
        slidesToScroll?: number
        autoplay?: boolean
        autoplaySpeed?: number
        arrows?: boolean
        pauseOnHover?: boolean
        nextArrow?: ReactNode // Custom Next Arrow
        prevArrow?: ReactNode // Custom Previous Arrow
        centerMode?: boolean
        centerPadding?: string
        initialSlide?: number
        responsive?: Array<{ breakpoint: number; settings: Partial<Settings> }>
    }

    export default class Slider extends Component<Settings> {}
}
