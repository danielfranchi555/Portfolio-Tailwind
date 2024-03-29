'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import foto from '../../public/foto-cv-3.png'
import FadeLeft from './fade/FadeLeft'
import FadeRight from './fade/FadeRight'
import Fade from './fade/Fade'
import Link from 'next/link'
import github from '../../public/github-icon.svg'
import linkedin from '../../public/linkedin-icon.svg'
import { Fa0 } from 'react-icons/fa6'



const Hero = () => {


  return (
    <>
      <div className='flex flex-col gap-5 md:flex md:flex-row  py-[64px] md:py-0 md:mb-20  lg:h-[600px]  md:justify-between   md:gap-0  '>
        <article className='flex flex-col gap-4  md:flex md:justify-center'>
          <FadeRight>
            <h1 className='text-[#ffff] text-4xl md:text-5xl lg:text-7xl'>hola, mi nombre es Daniel Franchi.</h1>
          </FadeRight>
          <FadeRight>
            <p className='text-[#C7C7C7] md:text-1xl  lg:text-[18px] max-w-[500px] '>Ofrezco soluciones personalizadas que impulsan el crecimiento y el éxito de tu negocio, me esfuerzo por superar tus expectativas y alcanzar resultados excepcionales juntos</p>
          </FadeRight>
          <FadeRight>
            <div className='flex items-center gap-3'>
              <Link href='#contacto'><button className='bg-[#D3E97A] py-3 px-4 rounded-xl'>Contact me</button> </Link>
              <Link target="_blank" href={'https://www.linkedin.com/in/danielfranchijs/'}><Image src={github} /> </Link>
              <Link target="_blank" href={'https://github.com/danielfranchi555'}><Image src={linkedin} /> </Link>
            </div>
          </FadeRight>
        </article>
        <article className='  md:flex'>
          <FadeLeft className='md:w-[500px]'>
            <Image src={foto} width='auto' height='auto' className='rounded-xl w-full h-full object-cover ' />
          </FadeLeft>
        </article>
      </div>

    </>
  )
}

export default Hero
