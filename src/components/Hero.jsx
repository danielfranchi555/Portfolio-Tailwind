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

import FadeLeft from './fade/FadeLeft'
import FadeRight from './fade/FadeRight'


const Hero = () => {


  return (
    <header className='  hero text-center items-center mt-10 lg:mt-[180px] '>
      <div className='flex items-center flex-col md:justify-bettween md:flex-row '>
        <FadeRight  className='hidden  md:flex md:flex-col md:gap-5 md:text-left md:w-[50%] lg:w-[60%] lg:flex lg:flex-col lg:gap-5 ' >
          <div>
            <span className=' border-[1px] border-[#3154E2] rounded-xl text-[20px] text-[#3154E2] px-4 dark:text-white'>Welcome</span>
          </div>
          <div className='lg:max-w-[700px]  lg:py-2 lg:gap-5 lg:flex  lg:flex-col' >
            <h1 className='md:text-3xl lg:text-[50px] leading-[60px] font-semibold dark:text-[#fff]  text-[#2B2B2B]'>Experiencia en <span className='text-[#3154E2] font-bold'>Desarrollo</span></h1>
            <h2 className='md:text-3xl lg:text-[50px] leading-[60px] font-semibold dark:text-[#fff] text-[#2B2B2B]'> <span className='text-[#3154E2] font-bold'> Web </span>Developer</h2>
          </div>
          <div className='md:max-w-[250px] lg:max-w-[510px]'>
            <p id='parrafo' className=' md:text-xs lg:text-[16px] text-[#323433] md:text-[16px] dark:text-[#fff] lg:leading-[24px]'>Soy un desarrollador front-end con un enfoque dedicado en transformar ideas creativas en experiencias digitales asombrosas
            </p>
          </div>
          <a href="" className='bg-[#3154E2] px-5 py-3 md:block max-w-max inline-block md:px-2 md:py-2 md:text-center md:rounded-lg lg:px-3 lg:py-3 text-[#fff]'>Contactame</a>

        </FadeRight>
        <h1 className='text-4xl text-[#3154E2] md:hidden'>Daniel Franchi</h1>
        <a href="" className='bg-[#3154E2] mt-5 w-[250px] py-3 rounded-md md:hidden '>Contactame</a>
        <a href="" className='border mt-5 w-[250px] py-3 text-[#000] rounded-md hover:bg-slate-300 md:hidden'>Descargar CV</a>
        <FadeLeft 
          className='md:w-[50%] lg:w-[40%] flex '>
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
        </FadeLeft>
      </div>
      <div className='flex items-center justify-center  mt-10'>
        <Image
          src={flecha}
          width={40}
          height={30}
          alt='icon'
        />
      </div>
    </header>
  )
}

export default Hero
