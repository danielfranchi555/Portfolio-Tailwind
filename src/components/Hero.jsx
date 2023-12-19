'use client'
import Image from 'next/image'
import React from 'react'
import image from '../../public/foto-1-min.png'
import svgOne from '../../public/svg-1.svg'
import svgTwo from '../../public/svg-4.svg'
import svgThree from '../../public/svg-3.svg'
import svgFour from '../../public/svg-firebase-2 1.png'
import { MotionA, MotionDiv, MotionH2, MotionP } from './MotionDiv'


const Hero = () => {

  // const variants = {
  //   hidden:{opacity:0},
  //   visible:{opacity:1}

  // }


  const textVariants = {
    initial:{
     x: -500,
     opacity: 0,
    },
    animate:{
      x:0,
      opacity: 1,
      transition:{
        duration:1,
      }
    }
  }


  return (
    <div className='text-center items-center mt-10    '>
        <div
         variants={textVariants} initial='initial' animate='animate'
        className='flex items-center flex-col md:justify-bettween md:flex-row'>
        <div className='hidden md:block  md:text-left md:w-[60%]  ' >
        <MotionH2 variants={textVariants} initial='initial' animate='animate' className='md:text-5xl sm:text-2xl text-slate-500'>Yo soy <span className='font-bold text-white'>Daniel Franchi</span> </MotionH2>
        <MotionH2 variants={textVariants} initial='initial' animate='animate' className='md:text-5xl sm:text-2xl text-slate-500'> <span className='font-bold text-white'>Front-end </span>Developer</MotionH2>
        <MotionP variants={textVariants} initial='initial' animate='animate' className='my-5'>Soy un desarrollador front-end con un enfoque dedicado en transformar ideas creativas en experiencias digitales asombrosas
        </MotionP>
         <MotionA variants={textVariants} initial='initial' animate='animate' href="" className='bg-[#3154E2] px-5 py-3 md:block md:w-[40%] md:text-center md:rounded-md'>HIRE ME</MotionA>

        </div>  
        <h1 className='text-4xl md:hidden'>Daniel Franchi</h1>
        <a href="" className='bg-[#3154E2] mt-5 w-[250px] py-3 rounded-md md:hidden'>Contactame</a>
        <a href="" className='border mt-5 w-[250px] py-3 rounded-md hover:bg-slate-300 md:hidden'>Descargar CV</a>
        <MotionDiv 
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={
            { delay:1,
              duration: 1 }
          }
        
           className='md:w-[40%]'>
             <Image
        src={image}
        width={300}
        height={100}
        alt='image'
        className='md:w-[100%] md:h-[100%]  '
       />
        </MotionDiv>  
       </div>
       <div className='bg-transparent rounded-md flex justify-center py-3 gap-6 px-10 container max-w-[270px] mx-auto
       md:max-w-[100%]   md:justify-between md:px-0 md:mt-20
       '>
          <Image
          src={svgOne}
          width={4}
          height={70}
          alt='svg'
          className='md:w-[100px] '
          />
           <Image
          src={svgTwo}
          width={70}
          height={90}
          alt='svg'
          className='md:w-[200px]'
          /> <Image
          src={svgThree}
          width={70}
          height={100}
          alt='svg'
          className='md:w-[150px]'
          />
          <Image
          src={svgFour}
          width={70}
          height={100}
          alt='svg'
          className='md:w-[100px]'
          />       
      </div>
      
    </div>
  )
}

export default Hero
