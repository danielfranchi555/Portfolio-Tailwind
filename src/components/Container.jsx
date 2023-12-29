'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef,useEffect } from 'react'


const Container = ({children}) => {

const controls = useAnimation();

const ref = useRef(null)
const inView = useInView(ref, { once: true })
const mainControls = useAnimation()

useEffect(() => {
  if (inView) {
    mainControls.start("visible")
  }
}, [inView])

  return (
    <motion.div ref={ref} variants={{ hidden: { opacity: 0, x: 90 }, visible: { opacity: 1, x: 0 } }} initial='hidden' animate={mainControls} transition={{ duration: 0.5, delay: 0.5 }}  className=''>
      {children}
    </motion.div>
  )
}

export default Container
