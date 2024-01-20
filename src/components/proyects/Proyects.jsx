'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { data } from './data'
import { Federant } from 'next/font/google'
import Fade from '../fade/Fade'
import Link from 'next/link'
const Proyects = () => {

  const [more, setMore] = useState(false)
  const [mostrarTres, setMostrarTres] = useState(true)

  const toogle = () => {
    console.log('more changed');
    setMostrarTres(!mostrarTres)
  }




  return (
    <div id='proyectos' className='flex flex-col gap-5 mt-[190px]'>
      <div className='md:flex md:flex-col md:items-center md:justify-center md:gap-5'>
        <h4 className='text-[#0B0C0C] font-bold text-3xl lg:text-[40px] dark:text-[#fff]'>Portfolio</h4>
        <div className='md:max-w-[550px] text-center'>
          <p className='text-[#323433] text-[18px] text-start md:text-center dark:text-[#fff]'>Explora mi portfolio para descubrir una muestra de mis proyectos y habilidades en desarrollo</p>
        </div>
      </div>
      <div className='flex gap-10 flex-col md:grid md:grid-cols-3 md:gap-5 md:mt-[70px]'>
        {mostrarTres ? data.slice(0, 3).map((item) =>
          <Fade key={item.id} className=' rounded-t-lg shadow-md border dark:border-none dark:bg-blue-400'>
            <div className='h-[300px]'>
              <Image
                src={item.image}
                width='auto'
                height='auto'
                alt='proyect'
                className='w-full h-full rounded-t-lg object-center'
              />
            </div>

            <div className='px-5 py-3 flex flex-col gap-2 bg-[#fff] '>
              <span className='text-[#87909D] text-[12px]'>{item.name}</span>
              <p className='text-[#0B0C0C] font-semibold text-[18px]'>{item.title}</p>
              <p className='text-[#323433] text-[14px]'>{item.description}</p>
              <Link target='_blank' href={item.link}>
                <div className='border border-[#3154E2] rounded-md px-5 py-3 flex max-w-max  items-center gap-4 '>
                  <span className='inline-block max-w-max text-[#3154E2] text-[16px] ' >Case Study</span>
                  <Image src={item.arrow} width='30' height='0' className='' />
                </div>
              </Link>
            </div>
          </Fade>) : data.map((item) =>
            <Fade key={item.id} className=' rounded-t-lg shadow-md border'>
              <Image
                src={item.image}
                width='auto'
                height='auto'
                alt='proyect'
                className='w-full rounded-t-lg'
              />
              <div className='px-5 py-3 flex flex-col gap-2 bg-[#fff] '>
                <span className='text-[#87909D] text-[12px]'>{item.name}</span>
                <p className='text-[#0B0C0C] font-semibold text-[18px]'>{item.title}</p>
                <p className='text-[#323433] text-[14px]'>{item.description}</p>
                <div className='border border-[#3154E2] rounded-md px-5 py-3 flex max-w-max  items-center gap-4 '>
                  <a href='' target='_blank' className='inline-block max-w-max text-[#3154E2] text-[16px] ' >Case Study</a>
                  <Image src={item.arrow} width='30' height='0' className='' />
                </div>

              </div>
            </Fade>)}
      </div>
      <div className='flex items-center justify-center mt-[50px]'>
        <button button className=' bg-[#3154E2] rounded-md px-5 py-3 flex max-w-max gap-4 text-[#fff] ' onClick={toogle}>{mostrarTres ? <span>More Proyects</span> : <span>Close</span>}</button>
      </div>
    </div>
  )
}

export default Proyects
