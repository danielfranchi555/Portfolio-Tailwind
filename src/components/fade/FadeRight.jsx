'use client'


import { fadeLeft } from '@/Utils/MotionTransitions'
import { useAnimation, useInView, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const FadeRight = ({ children, className }) => {

    const ref = useRef(null)
    const isinView = useInView(ref, { once: false })
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isinView) {
            mainControls.start("visible")
            slideControls.start("visible")
        }

    }, [isinView])


    return (
        <>
            <motion.div ref={ref} variants={fadeLeft()}
                initial="hidden"
                animate={mainControls}
                exit="hidden"
                className={className}
            >
                {children}
            </motion.div>

        </>


    )
}

export default FadeRight
