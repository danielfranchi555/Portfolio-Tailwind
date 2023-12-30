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
    <div className=' w-[100%] mx-auto  grid gap-10 mt-20 md:w-full'>
      <h2 data-aos="zoom-in" id='proyectos' className=' text-center md:text-start text-4xl  lg:w-[290px]  text-slate-500'>Mis <span className='text-bold text-white'>Proyectos </span> </h2>
      <div className=' flex flex-col items-center gap-2 w-[300px] mx-auto md:flex-row md:w-[100%] md:gap-0 ' >
        <div data-aos="fade-right" className={`md:w-[70%] md:h-full `}>
          <Image
            src={ecommerce}
            alt='imagen '
            className='rounded-2xl md:w-[90%] md:h-[100%] '
          />

        </div>

        <section className='md:flex md:items-end md:h-full  '>

          <div data-aos="fade-left"  className=' gap-2 flex flex-col  md:justify-between md:h-[250px]  '>
            <div className=' grid gap-1 md:grid md:gap-5'>
              <h1  className='md:text-sm title'>ECOMMERCE</h1>
              <p  className='md:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci maxime autem doloribus sint provident reprehenderit totam excepturi co</p>
            </div>
            <div className=' md:flex md:flex-col md:gap-5 flex  flex-col gap-4'>
              <span className='span'>website design</span>
              <a href=""  className=' border py-3 w-[160px] rounded-xl px-3  flex justify-between '>VER TRABAJO <Image src={flecha} width={20} height={20} alt='flecha' />  </a>
            </div>
          </div>
        </section>

      </div>
      <div className=' flex flex-col items-center gap-2 w-[300px] mx-auto md:flex-row md:w-[100%] md:gap-5 md:h-[390px' >
        <div data-aos="fade-left" className=' md:w-[70%] md:h-full  md:order-2 '>
          <Image
            src={ecommerceDos}
            alt='imagen '
            className='rounded-2xl md:w-[90%] md:h-[100%] '
          />

        </div>
        <div >
          <section data-aos="fade-right"  className='md:flex md:items-end md:h-full  '>
            <div className=' gap-2 flex flex-col  md:justify-between md:h-[250px]  '>
              <div className=' grid gap-1 md:grid md:gap-5'>
                <h1 className='md:text-sm title'>ECOMMERCE</h1>
                <p className='md:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci maxime autem doloribus sint provident reprehenderit totam excepturi co</p>
              </div>
              <div className=' md:flex md:flex-col flex  flex-col gap-4 md:gap-5'>
                <span className='span'>website design</span>
                <a href="" className=' border py-3 w-[160px] rounded-xl px-3  flex justify-between '>VER TRABAJO <Image src={flecha} width={20} height={20} alt='flecha' />  </a>
              </div>
            </div>
          </section>
        </div>

      </div>
 
      <div className=' flex flex-col items-center gap-2 w-[300px] mx-auto md:flex-row md:w-[100%] md:gap-5 md:h-[390px' >
          <div  className=' md:w-[70%] md:h-full  '>
            <div data-aos="fade-right">
                <Image
              src={proyectDentist}
              alt='imagen '
              className='rounded-2xl md:w-full md:h-[100%] '
            />

            </div>
          
        </div>

        <div data-aos="fade-left"  >
          <section className='md:flex md:items-end md:h-full '>
            <div className=' gap-3 flex flex-col  md:justify-between md:h-[250px]  '>
              <div className=' grid gap-1 md:grid md:gap-5'>
                <h1 className='md:text-sm title'>PAGE DENTIST</h1>
                <p className='md:text-3xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci maxime autem doloribus sint provident reprehenderit totam excepturi co</p>
              </div>
              <div className=' md:flex md:flex-col flex flex-col gap-4 md:gap-5'>
                <span className='span'>website design</span>
                <a href="" className=' border py-3 w-[160px] rounded-xl px-3  flex justify-between '>VER TRABAJO <Image src={flecha} width={20} height={20} alt='flecha' />  </a>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  )
}

export default Proyects
