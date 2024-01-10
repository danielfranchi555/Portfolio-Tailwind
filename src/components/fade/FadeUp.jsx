'use client'


import { fadeIn, fadeLeft, fadeUp } from '@/Utils/MotionTransitions'
import { useAnimation, useInView, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const FadeUp = ({ children, className,index }) => {

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
            <motion.div ref={ref} 
                initial="hidden"
                animate={mainControls}
                exit="hidden"
                variants={index === 0 ? fadeUp() : fadeIn()} // Aplica la animación solo al primer elemento
                className={className}
            >
                {children}
            </motion.div>

        </>


    )
}

export default FadeUp
