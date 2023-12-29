'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import image from '../../public/foto-1-min.png'
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

  const ref = useRef(null)
  const inView = useInView(ref,{once:true})
  const mainControls = useAnimation()

  useEffect(()=>{
  if(inView){
    mainControls.start("visible")
  }
  },[inView])
  
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  


  return (
    <div  className='text-center items-center mt-10    '>

        <div  className='flex items-center flex-col md:justify-bettween md:flex-row'>
        <div data-aos = "fade-right"  className='hidden md:block  md:text-left md:w-[60%]  ' >
        <h2  className='md:text-5xl sm:text-2xl text-slate-500'>Yo soy <span className='font-bold text-white'>Daniel Franchi</span> </h2>
        <h2  className='md:text-5xl sm:text-2xl text-slate-500'> <span className='font-bold text-white'>Front-end </span>Developer</h2>
        <p  className='my-5'>Soy un desarrollador front-end con un enfoque dedicado en transformar ideas creativas en experiencias digitales asombrosas
        </p>
         <a  href="" className='bg-[#3154E2] px-5 py-3 md:block md:w-[40%] md:text-center md:rounded-md'>HIRE ME</a>

        </div>  
        <h1 className='text-4xl md:hidden'>Daniel Franchi</h1>
        <a href="" className='bg-[#3154E2] mt-5 w-[250px] py-3 rounded-md md:hidden'>Contactame</a>
        <a href="" className='border mt-5 w-[250px] py-3 rounded-md hover:bg-slate-300 md:hidden'>Descargar CV</a>
        <div  data-aos = "fade-left" 
           className='md:w-[40%]'>
             <Image
        src={image}
        width={300}
        height={100}
        alt='image'
        className='md:w-[100%] md:h-[100%]  '
       />
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
       <div data-aos = "fade-up"  ref={ref} variants={{hidden:{opacity:0,y:75},visible:{opacity:1, y:0}}} initial='hidden' animate={mainControls} transition={{duration:0.5,delay:0.5}}  className='bg-transparent  lg:py-5 rounded-md flex justify-center py-3 gap-6 px-10 container max-w-[270px] mx-auto
       md:max-w-[100%]   md:justify-between md:px-0 md:mt-10
       '>
          <Image
          src={svgOne}
          width={40}
          height={70}
          alt='svg'
          className='md:w-[150px] '
          />
           <Image
          src={svgTwo}
          width={70}
          height={90}
          alt='svg'
          className='md:w-[250px]'
          /> <Image
          src={svgThree}
          width={70}
          height={100}
          alt='svg'
          className='md:w-[200px]'
          />
          <Image
          src={svgFour}
          width={70}
          height={100}
          alt='svg'
          className='md:w-[150px]'
          />       
      </div>

      
    </div>
  )
}

export default Hero
