'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import image from '../../public/foto-1-min.png'
import facebook from '../../public/facebook.svg'
import line from '../../public/line.svg'
import instagram from '../../public/instagram.svg'
import linkedin from '../../public/linkedin.svg'
import foto from '../../public/foto-mia-final.png'
import svgOne from '../../public/svg-1.svg'
import svgTwo from '../../public/svg-4.svg'
import svgThree from '../../public/svg-3.svg'
import svgFour from '../../public/svg-firebase-2 1.png'
import flecha from '../../public/flecha.svg'


import { motion, useAnimation, useInView } from 'framer-motion'
import { MotionA, MotionDiv, MotionH2, MotionP } from './MotionDiv'
import { fadeIn } from '@/Utils/MotionTransitions'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Hero = () => {



  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      }
    }
  }

  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (inView) {
      mainControls.start("visible")
    }
  }, [inView])

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])



  return (
    <header className=' hero text-center items-center mt-10 '>
      <div className='flex items-center flex-col md:justify-bettween md:flex-row '>
        <div data-aos="fade-right" className='hidden  md:flex md:flex-col md:gap-5 md:text-left md:w-[60%] lg:flex lg:flex-col lg:gap-5 ' >
          <div>
            <span className=' border-[1px] border-[#3154E2] rounded-xl text-[20px] text-[#3154E2] px-4'>Welcome</span>
          </div>
          <div className='lg:max-w-[600px]  lg:py-2 lg:gap-5 lg:flex  lg:flex-col' >
            <h1 className='md:text-3xl lg:text-[58px] leading-[60px] font-semibold   text-[#2B2B2B]'>Experiencia en <span className='text-[#3154E2] font-bold'>Diseño</span></h1>
            <h2 className='md:text-3xl lg:text-[58px] leading-[60px] font-semibold text-[#2B2B2B]'> <span className='text-[#3154E2] font-bold'> Creativo </span>Developer</h2>
          </div>
          <div className='md:max-w-[250px] lg:max-w-[510px]'>
            <p id='parrafo' className=' md:text-xs lg:text-[16px] text-[#323433] md:text-[16px] lg:leading-[24px]'>Soy un desarrollador front-end con un enfoque dedicado en transformar ideas creativas en experiencias digitales asombrosas
            </p>
          </div>

          <a href="" className='bg-[#3154E2] px-5 py-3 md:block md:w-[20%] md:px-2 md:py-2 md:text-center md:rounded-lg lg:px-0 lg:py-3'>Contactame</a>

        </div>
        <h1 className='text-4xl text-[#3154E2] md:hidden'>Daniel Franchi</h1>
        <a href="" className='bg-[#3154E2] mt-5 w-[250px] py-3 rounded-md md:hidden'>Contactame</a>
        <a href="" className='border mt-5 w-[250px] py-3 text-[#000] rounded-md hover:bg-slate-300 md:hidden'>Descargar CV</a>
        <div data-aos="fade-left"
          className='md:w-[40%]  flex '>
          <div className='w-[100%]'>
            <Image
              src={foto}
              width={300}
              height={100}
              alt='image'
              className='md:w-[100%] md:h-[100%]   '
            />
          </div>

          <div className=' hidden md:flex md:flex-col items-center justify-center md:gap-6 md:w-[10%] '>
            <span style={{ transform: 'rotate(90deg)' }} className='w-[150px] py-10 text-[16px] text-[#3154E2] leading-[24px]'>follow me on:</span>
            <Image src={line} width={20}
              className='w-[10px] h-[70px]'

            />
            <div className=' flex flex-col gap-5'>
              <Image
                src={facebook}
                width='auto'
                alt='icon'
              />
              <Image
                src={instagram}
                width={20}
                alt='icon'
              />
              <Image
                src={linkedin}
                width={20}
                alt='icon'
              />
            </div>

          </div>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <Image
          src={flecha}
          width={40}
          height={30}
          alt='icon'
        />
      </div>
      {/* <div data-aos="fade-up">
        <div ref={ref} variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }} initial='hidden' animate={mainControls} transition={{ duration: 0.5, delay: 0.5 }} className='bg-transparent  lg:py-5 rounded-md flex justify-center py-3 gap-6 px-10 container max-w-[270px] mx-auto
       md:max-w-[100%]   md:justify-between md:px-0 md:mt-10
       '>
          <Image
            src={svgOne}
            width={40}
            height={70}
            alt='svg'
            className='md:w-[120px] '
          />
          <Image
            src={svgTwo}
            width={70}
            height={90}
            alt='svg'
            className='md:w-[210px]'
          /> <Image
            src={svgThree}
            width={70}
            height={100}
            alt='svg'
            className='md:w-[160px]'
          />
          <Image
            src={svgFour}
            width={70}
            height={100}
            alt='svg'
            className='md:w-[150px]'
          />
        </div>
      </div> */}



    </header>
  )
}

export default Hero
