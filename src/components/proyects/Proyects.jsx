'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import 'aos/dist/aos.css'
import { data } from './data'
import Aos from 'aos'
const Proyects = () => {

  const [more, setMore] = useState(false)
  const [mostrarTres, setMostrarTres] = useState(true)

  const toogle = () => {
    console.log('more changed');
    setMostrarTres(!mostrarTres)
  }

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])


  return (
    <div id='proyectos' className='flex flex-col gap-5 mt-[190px]'>
      <div className='md:flex md:flex-col md:items-center md:justify-center md:gap-5'>
        <h4 data-aos="fade" className='text-[#0B0C0C] font-bold text-3xl lg:text-[40px]'>Portfolio</h4>
        <div className='md:max-w-[550px] text-center'>
          <p data-aos="fade" className='text-[#323433] text-[18px] text-start md:text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
        </div>
      </div>
      <div className='flex gap-10 flex-col md:grid md:grid-cols-3 md:gap-5 md:mt-[70px]'>
        {mostrarTres ? data.slice(0, 3).map((item) => 
        <div key={item.id} data-aos="fade" className=' rounded-t-lg shadow-md border'>
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
        </div>) : data.map((item) =>
         <div data-aos="fade" className=' rounded-t-lg shadow-md border'>
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
        </div>)}
      </div>
      <div className='flex items-center justify-center mt-[50px]'>
        <button button className=' bg-[#3154E2] rounded-md px-5 py-3 flex max-w-max gap-4 ' onClick={toogle}>{mostrarTres ? <span>More Proyects</span> : <span>Close</span>}</button>
      </div>
    </div>
  )
}

export default Proyects
