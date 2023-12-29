'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image'
import ecommerce from '../../public/proyect-1-hd.jpg'
import ecommerceDos from '../../public/tienda-proyect.jpg'
import proyectDentist from '../../public/proyect-dentist-hd.jpg'

const Proyects = () => {
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
    <motion.div ref={ref} variants={{ hidden: { opacity: 0, x: 90 }, visible: { opacity: 1, x: 0 } }} initial='hidden' animate={mainControls} transition={{ duration: 0.5, delay: 0.5 }} className=' w-[100%] mx-auto  grid gap-10 mt-20 md:w-full'>
      <h2 initial={{ opacity: 0, y: 20 }} animate={controls} transition={{ duration: 0.2 }} id='proyectos' className=' text-center md:text-start text-4xl  text-slate-500'>Mis <span className='text-bold text-white'>Proyectos </span> </h2>
      <div className=' flex flex-col items-center gap-2 w-[300px] mx-auto md:flex-row md:w-[100%] md:gap-0 ' >
        <div className=' md:w-[70%] md:h-full  '>
          <Image
            src={ecommerce}
            width={300}
            height={300}
            alt='imagen '
            className='rounded-2xl md:w-[90%] md:h-[100%] '
          />
        </div>

        <section className='md:flex md:items-end md:h-full  '>

          <div  className=' gap-2 flex flex-col  md:justify-between md:h-[250px]  '>
            <div className=' grid gap-1 md:grid md:gap-5'>
              <h1 className='md:text-3xl'>Ecommerce</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci maxime autem doloribus sint provident reprehenderit totam excepturi co</p>
            </div>
            <div className=' md:flex md:flex-col md:gap-5 flex  flex-col gap-4'>
              <span>website design</span>
              <a href="" className=' border py-3 w-[120px] rounded-md px-3 block  '>ver trabajo</a>
            </div>
          </div>
        </section>
      </div>
      <div  className=' flex flex-col items-center gap-2 w-[300px] mx-auto md:flex-row md:w-[100%] md:gap-5 md:h-[390px' >
        <div className=' md:w-[70%] md:h-full  md:order-2 '>
          <Image
            src={ecommerceDos}
            width={300}
            height={300}
            alt='imagen '
            className='rounded-2xl md:w-[90%] md:h-[100%] '
          />
        </div>

        <section className='md:flex md:items-end md:h-full  '>

          <div ref={ref} variants={{ hidden: { opacity: 0, x: -90 }, visible: { opacity: 1, x: 0 } }} initial='hidden' animate={mainControls} transition={{ duration: 0.5, delay: 0.5 }} className=' gap-2 flex flex-col  md:justify-between md:h-[250px]  '>
            <div className=' grid gap-1 md:grid md:gap-5'>
              <h1 className='md:text-3xl'>Ecommerce</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci maxime autem doloribus sint provident reprehenderit totam excepturi co</p>
            </div>
            <div className=' md:flex md:flex-col flex  flex-col gap-4 md:gap-5'>
              <span>website design</span>
              <a href="" className=' border py-3 w-[120px] rounded-md px-3 block  '>ver trabajo</a>
            </div>
          </div>
        </section>
      </div>
      <div className=' flex flex-col items-center gap-2 w-[300px] mx-auto md:flex-row md:w-[100%] md:gap-5 md:h-[390px' >
        <div ref={ref} variants={{ hidden: { opacity: 0, x: -90 }, visible: { opacity: 1, x: 0 } }} initial='hidden' animate={mainControls} transition={{ duration: 0.5, delay: 0.5 }} className=' md:w-[70%] md:h-full  '>
          <Image
            src={proyectDentist}
            width={300}
            height={300}
            alt='imagen '
            className='rounded-2xl md:w-full md:h-[100%] '
          />
        </div>

        <section className='md:flex md:items-end md:h-full  '>

          <div  className=' gap-3 flex flex-col  md:justify-between md:h-[250px]  '>
            <div className=' grid gap-1 md:grid md:gap-5'>
              <h1 className='md:text-3xl'>Page Dentist</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci maxime autem doloribus sint provident reprehenderit totam excepturi co</p>
            </div>
            <div className=' md:flex md:flex-col flex flex-col gap-4 md:gap-5'>
              <span>website design</span>
              <a href="" className=' border py-3 w-[120px] rounded-md px-3 block   '>ver trabajo</a>
            </div>
          </div>
        </section>
      </div>

    </motion.div>
  )
}

export default Proyects
