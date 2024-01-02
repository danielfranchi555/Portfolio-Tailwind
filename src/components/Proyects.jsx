'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import ecommerce from '../../public/proyect-1-hd.jpg'
import ecommerceDos from '../../public/tienda-proyect.jpg'
import proyectDentist from '../../public/proyect-dentist-hd.jpg'
import flecha from '../../public/flecha-derecha.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Proyects = () => {


  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])



  return (
    <div id='proyectos' className=' w-[100%] mx-auto flex flex-col gap-5 md:grid mt-20 md:w-full'>
      <h2 data-aos="zoom-in"  className=' text-center md:text-start text-3xl md:text-[40px]  lg:w-[290px]  text-slate-500'>Mis <span className='text-bold text-white'>Proyectos </span> </h2>
      <div className=' flex flex-col gap-5 md:flex md:flex-col md:gap-10'>
        <div className=' flex flex-col items-center gap-2 w-[300px] mx-auto md:flex-row md:w-[100%] md:gap-5 md:h-[390px md:mt-[100px] ' >
          <div data-aos="fade-right" className=' md:w-[40%] md:h-full  md:order-1 '>
            <Image
              src={ecommerce}
              alt='imagen '
              className='rounded-2xl md:min-w-[100%] md:h-[100%] '
            />

          </div>
          <div className='md:w-[60%] md:order-2 h-full' >
            <section data-aos="fade-left" className='md:flex md:items-end md:h-full  '>
              <div className=' gap-2 flex flex-col  md:justify-between md:h-[250px]  '>
                <div className=' grid gap-1 md:grid md:gap-5'>
                  <h1 className='md:text-[16px] text-[#E3E4E6] font-semibold tracking-[0.64px] leading-[24px]'>ECOMMERCE </h1>
                  <p className='md:text-1xl lg:text-[32px] font-ligth lg:leading-[48px] '>Ecommerce usando como base de datos Firebase y utilizando React Vite y Chakra UI Para los estilos</p>
                </div>
                <div className=' md:flex md:flex-col flex  flex-col gap-4 md:gap-5'>
                  <span className='span md:text-[18px] font-light md:leading-[27px]'>website design</span>
                  <a href="" className=' border py-3 w-[160px] text-sm rounded-xl px-3 md:px-2 md:py-2 md:text-sm lg:px-3 lg:py-3 lg:text-1xl flex justify-between  '>VER TRABAJO <Image src={flecha} width={20} height={20} alt='flecha' />  </a>
                </div>
              </div>
            </section>
          </div>

        </div>
        <div className=' flex flex-col items-center gap-2 w-[300px] mx-auto md:flex-row md:w-[100%] md:gap-5  ' >
          <div data-aos="fade-left" className=' md:w-[40%] md:h-full  md:order-2 '>
            <Image
              src={ecommerceDos}
              alt='imagen '
              className='rounded-2xl md:w-[100%] md:h-[100%] '
            />

          </div>
          <div className='md:w-[60%]  h-full' >
            <div data-aos="fade-right" className='md:flex md:items-end md:h-full '>
              <div className=' gap-2 flex flex-col  md:justify-between md:h-[250px]  '>
                <div className=' grid gap-1 md:grid md:gap-5'>
                  <h1 className='md:text-[16px] text-[#E3E4E6] font-semibold tracking-[0.64px] leading-[24px]'>ECOMMERCE</h1>
                  <p className='md:text-md lg:text-[32px]'>Ecommerce usando como base de datos Firebase y utilizando React Vite y Chakra UI Para los estilos
                  </p>
                </div>
                <div className=' md:flex md:flex-col flex  flex-col gap-4 md:gap-5 md:h-auto '>
                  <span className='span md:text-[18px] font-light md:leading-[27px]'>website design</span>
                  <a href="" className=' border py-3 w-[160px] rounded-xl px-3 md:px-2 md:py-2 md:text-sm lg:px-3 lg:py-3 lg:text-1xl lg:bg-[#3154E2] flex justify-between '>VER TRABAJO <Image src={flecha} width={20} height={20} alt='flecha' />  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className=' flex flex-col items-center gap-2 w-[300px] mx-auto md:flex-row md:w-[100%] md:gap-5 ' >
          <div data-aos="fade-right" className=' md:w-[40%] md:h-full  md:order-1 '>
            <Image
              src={proyectDentist}
              alt='imagen '
              className='rounded-2xl md:w-[100%] md:h-[100%] '
            />

          </div>
          <div className='md:w-[60%] md:order-2  h-full' >
            <section data-aos="fade-left" className='md:flex md:items-end md:h-full  '>
              <div className=' gap-2 flex flex-col  md:justify-between md:h-[250px]  '>
                <div className=' grid gap-1 md:grid md:gap-5'>
                  <h1 className='md:text-[16px] text-[#E3E4E6] font-semibold tracking-[0.64px] leading-[24px]'>PAGE DENTIST</h1>
                  <p className='md:text-md lg:text-[32px]'>Ecommerce usando como base de datos Firebase y utilizando React Vite y Chakra UI Para los estilos</p>
                </div>
                <div className=' md:flex md:flex-col flex  flex-col gap-4 md:gap-5'>
                  <span className='span md:text-[18px] font-light md:leading-[27px]'>website design</span>
                  <a href="" className=' border py-3 w-[160px] rounded-xl px-3 md:px-2 md:py-2 md:text-sm lg:px-3 lg:py-3 lg:text-1xl  flex justify-between '>VER TRABAJO <Image src={flecha} width={20} height={20} alt='flecha' />  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <span className='text-center md:text-start  w-full mt-5 text-2xl'>Mas Proyectos</span>

    </div>
  )
}

export default Proyects
