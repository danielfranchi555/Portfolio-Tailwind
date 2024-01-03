'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import ecommerce from '../../public/proyect-1-hd.jpg'
import ecommerceDos from '../../public/tienda-proyect.jpg'
import proyectDentist from '../../public/proyect-dentist-hd.jpg'
import flecha from '../../public/flecha-derecha.svg'
import arrow from '../../public/arrow-blue.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Proyects = () => {


  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])



  return (
    <div id='proyectos' className='flex flex-col gap-5 mt-[190px]'>
      <div className='md:flex md:flex-col md:items-center md:justify-center md:gap-5'>
        <h4  data-aos="fade" className='text-[#0B0C0C] font-bold text-3xl '>Portfolio</h4>
        <div className='md:max-w-[550px] text-center'>
          <p  data-aos="fade" className='text-[#87909D] text-[18px] text-start md:text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
        </div>
      </div>
      <div className='flex gap-10 flex-col md:grid md:grid-cols-3 md:gap-5 md:mt-[70px]'>
        <div data-aos="fade" className=' rounded-t-lg shadow-md border'>
          <Image
            src={ecommerce}
            width='auto'
            alt='proyect'
            className='w-full rounded-t-lg'
          />
          <div className='px-5 py-3 flex flex-col gap-2 bg-[#fff] '>
            <span className='text-[#87909D] text-[12px]'>UI-UX DESIGN</span>
            <p className='text-[#0B0C0C] font-semibold text-[18px]'>Product Admin Dashboard</p>
            <p className='text-[#323433] text-[14px]'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
            <div className='border border-[#3154E2] rounded-md px-5 py-3 flex max-w-max gap-4 '>
              <a href="" className='inline-block max-w-max text-[#3154E2] text-[16px] ' >Case Study</a>
              <Image src={arrow} width='auto' className='' />
            </div>

          </div>
        </div>
        <div data-aos="fade" className=' rounded-t-lg shadow-md border'>
          <Image
            src={ecommerceDos}
            width='auto'
            alt='proyect'
            className='w-full rounded-t-lg'
          />
          <div className='px-5 py-3 flex flex-col gap-2 bg-[#fff] '>
            <span className='text-[#87909D] text-[12px]'>UI-UX DESIGN</span>
            <p className='text-[#0B0C0C] font-semibold text-[18px]'>Product Admin Dashboard</p>
            <p className='text-[#323433] text-[14px]'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
            <div className='border border-[#3154E2] rounded-md px-5 py-3 flex max-w-max gap-4 '>
              <a href="" className='inline-block max-w-max text-[#3154E2] text-[16px] ' >Case Study</a>
              <Image src={arrow} width='auto' className='' />
            </div>

          </div>
        </div>
        <div data-aos="fade" className=' rounded-t-lg shadow-md border'>
          <Image
            src={proyectDentist}
            width='auto'
            alt='proyect'
            className='w-full rounded-t-lg'
          />
          <div className='px-5 py-3 flex flex-col gap-2 bg-[#fff] '>
            <span className='text-[#87909D] text-[12px]'>UI-UX DESIGN</span>
            <p className='text-[#0B0C0C] font-semibold text-[18px]'>Product Admin Dashboard</p>
            <p className='text-[#323433] text-[14px]'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</p>
            <div className='border border-[#3154E2] rounded-md px-5 py-3 flex max-w-max gap-4 '>
              <a href="" className='inline-block max-w-max text-[#3154E2] text-[16px] ' >Case Study</a>
              <Image src={arrow} width='auto' className='' />
            </div>

          </div>
        </div>
      </div>
      <div className='flex items-center justify-center mt-[50px]'>
        <a href="" className=' bg-[#3154E2] rounded-md px-5 py-3 flex max-w-max gap-4 '>More Proyects</a> 
      </div>
    </div>
  )
}

export default Proyects
