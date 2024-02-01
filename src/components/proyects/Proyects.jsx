'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { data } from './data'
import { Federant } from 'next/font/google'
import Fade from '../fade/Fade'
import Link from 'next/link'
import { MdArrowOutward } from "react-icons/md";
import FadeRight from '../fade/FadeRight'
import FadeLeft from '../fade/FadeLeft'

const Proyects = () => {

  const [more, setMore] = useState(false)
  const [mostrarTres, setMostrarTres] = useState(true)

  const toogle = () => {
    console.log('more changed');
    setMostrarTres(!mostrarTres)
  }




  return (
    <div id='proyectos' className='flex flex-col gap-5 border-t py-10'>
      <Fade>
        <h2 className='text-[#fff] lg:text-[66px]'>Mejores Projectos</h2>
      </Fade>
      <p className='subtitle-proyects text-[#C7C7C7] lg:text-[18px] lg:max-w-[600px]'>A continuación, te presento algunos de los proyectos seleccionados que reflejan mi dedicación al desarrollo front-end.</p>
      <div className='flex flex-col gap-[120px] '>
        {data.map((item) => (
          <div key={item.id} className='flex flex-col  px-0 gap-2 md:grid md:grid-cols-2'>
            <FadeRight>
              <article className='bg-[#1A1A1A] rounded-xl lg:w-[600px] '>
                <Image className='p-5  rounded-xl' src={item.image} />
              </article>
            </FadeRight>
              <FadeLeft className='flex flex-col gap-5 justify-center'>
                <p className='title-proyects text-[#fff] text-[24px] lg:text-[32px]'>{item.title}</p>
                <p className='text-[#C7C7C7] text-[16px] lg:text-[18px]'>{item.description}</p>
                <div className='divide-y flex flex-col gap-3 '>
                  <span className='text-[#fff] lg:text-[16px]'>INFORMACION DEL PROYECTO</span>
                  <div className='py-2 flex justify-between'>
                    <span className='text-[#FFF]'>Año</span>
                    <span className='text-[#C7C7C7]' > {item.year}</span>
                  </div>
                  <div className='border-b py-2 flex justify-between'>
                    <span className='text-[#ffff]'>Rol</span>
                    <span className='text-[#C7C7C7]' > {item.role}</span>
                  </div>
                </div>
                <div className='flex text-[#D3E97A] gap-5'>
                  <div className='flex items-center'>
                    <Link target='_blank' href={item.linkWeb}>VER SITIO </Link>
                    <MdArrowOutward />
                  </div>
                  <div className='flex items-center'>
                    <Link target='_blank' href={item.linkGithub}>VER EN GITHUB </Link>
                    <MdArrowOutward />

                  </div>
                </div>
              </FadeLeft>



          </div>
        ))}
      </div>

    </div>
    // <div id='proyectos' className='flex flex-col gap-5 mt-[190px]'>
    //   <div className='md:flex md:flex-col md:items-center md:justify-center md:gap-5'>
    //     <h4 className='text-[#0B0C0C] font-bold text-3xl lg:text-[40px] dark:text-[#fff]'>Portfolio</h4>
    //     <div className='md:max-w-[550px] text-center'>
    //       <p className='text-[#323433] text-[18px] text-start md:text-center dark:text-[#fff]'>Explora mi portfolio para descubrir una muestra de mis proyectos y habilidades en desarrollo</p>
    //     </div>
    //   </div>
    //   <div className='flex gap-10 flex-col md:grid md:grid-cols-3 md:gap-5 md:mt-[70px]'>
    //     {mostrarTres ? data.slice(0, 3).map((item) =>
    //       <Fade key={item.id} className=' rounded-t-lg shadow-md border dark:border-none dark:bg-blue-400'>
    //         <div className='h-[300px]'>
    //           <Image
    //             src={item.image}
    //             width='auto'
    //             height='auto'
    //             alt='proyect'
    //             className='w-full h-full rounded-t-lg object-center'
    //           />
    //         </div>

    //         <div className='card px-5 py-3 flex flex-col gap-2 bg-[#fff] dark:bg-[#010308] '>
    //           <span className='text-[#87909D] text-[12px]'>{item.name}</span>
    //           <p className='text-[#0B0C0C] font-semibold text-[18px] dark:text-white '>{item.title}</p>
    //           <p className='text-[#323433] text-[14px] h-[70px] dark:text-white'>{item.description}</p>
    //           <Link target='_blank' className='transition-transform hover:translate-y-[-2px] shadow-lg hover:shadow-xl max-w-max' href={item.link}>
    //             <div className='border border-[#3154E2] rounded-md px-5 py-3 flex max-w-max  items-center gap-4  cursor-pointer dark:border-white'>
    //               <span className='inline-block max-w-max text-[#3154E2] text-[16px] cursor-pointer  dark:text-white' >Ver sitio</span>
    //               <Image src={item.arrow} width='30' height='0' className='cursor-pointer' />
    //             </div>
    //           </Link>
    //         </div>
    //       </Fade>) : data.map((item) =>
    //         <Fade key={item.id} className=' rounded-t-lg shadow-md border'>
    //           <Image
    //             src={item.image}
    //             width='auto'
    //             height='auto'
    //             alt='proyect'
    //             className='w-full rounded-t-lg'
    //           />
    //           <div className='px-5 py-3 flex flex-col gap-2 bg-[#fff] '>
    //             <span className='text-[#87909D] text-[12px]'>{item.name}</span>
    //             <p className='text-[#0B0C0C] font-semibold text-[18px]'>{item.title}</p>
    //             <p className='text-[#323433] text-[14px]'>{item.description}</p>
    //             <div className='border border-[#3154E2] rounded-md px-5 py-3 flex max-w-max  items-center gap-4 '>
    //               <a href='' target='_blank' className='inline-block max-w-max text-[#3154E2] text-[16px] cursor-pointer ' >Case Study</a>
    //               <Image src={item.arrow} width='30' height='0' className='' />
    //             </div>

    //           </div>
    //         </Fade>)}
    //   </div>

    // </div>
  )
}

export default Proyects
