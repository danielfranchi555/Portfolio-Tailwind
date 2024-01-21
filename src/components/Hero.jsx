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
import Link from 'next/link'


const Hero = () => {


  return (
    <header id='inicio' className='text-center flex justify-center    flex-col md:grid md:grid-cols-2 w-full items-center mt-10 lg:mt-[10px] '>
      <h1 className='text-4xl text-[#3154E2] md:hidden'>Daniel Franchi</h1>
      <a href="#contacto" className='bg-[hsl(228,75%,54%)] mt-5 w-[250px] py-3 rounded-md md:hidden '>Contactame</a>
      {/* <a href="" className='border mt-5 w-[250px] py-3 text-[#000] rounded-md hover:bg-slate-300 md:hidden'>Descargar CV</a> */}
      <FadeRight className='hidden  md:flex md:flex-col md:gap-4 md:text-left  lg:flex lg:flex-col lg:gap-5 ' >
        <span className=' max-w-max border-[1px] border-[#3154E2] rounded-xl text-[20px] text-[#3154E2] px-4 dark:text-white'>Bienvenido/a</span>
        <h1 className='md:text-3xl lg:text-5xl   font-semibold lg:text-[58px] '>
          Experiencia en <span className='text-[#3154E2]'>Desarrollo web</span>
        </h1>
        <p className='text-[16px] text-[#323433] dark:text-white font-normal'>Soy Daniel Franchi un Desarrollador Frontend que convierte diseños creativos en experiencias web cautivadoras. Ofrezco soluciones modernas para destacar tu presencia en línea.</p>
        <Link href='#contacto' className='bg-[#3154E2] text-white rounded-md px-5 py-3 max-w-max'>
           Contactame
        </Link>
      </FadeRight>
      <FadeLeft
        className='flex items-end justify-end '>
        <div className='flex items-end '>
          <Image
            src={foto}
            width='auto'
            height='auto'
            alt='image'
            className='w-[300px] md:w-[100%] lg:w-[450px]'
          />
        </div>

        {/* <div className=' hidden md:flex md:flex-col  justify-center md:gap-6  bg-red-500 md:max-w-max items-end '>
          <div>
            <p style={{ transform: 'rotate(90deg)' }} className='w-[150px] py-10 text-[16px] text-[#3154E2] leading-[24px]'>follow me on:</p>
          </div>
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

        </div> */}
      </FadeLeft>
    </header>
  )
}

export default Hero
