'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import ecommerce from '../../public/proyect-1-hd.jpg'
import ecommerceDos from '../../public/tienda-proyect.jpg'
import proyectDentist from '../../public/proyect-dentist-hd.jpg'
import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Proyects = () => {


useEffect(()=>{
  Aos.init({duration:2000})
},[])



  return (
    <div className=' w-[100%] mx-auto  grid gap-10 mt-20 md:w-full'>
      <h2 data-aos = "zoom-in" id='proyectos' className=' text-center md:text-start text-4xl  lg:w-[290px]  text-slate-500'>Mis <span className='text-bold text-white'>Proyectos </span> </h2>
      <div className=' flex flex-col items-center gap-2 w-[300px] mx-auto md:flex-row md:w-[100%] md:gap-0 ' >
        <div data-aos = "fade-right" className={`md:w-[70%] md:h-full `}>
            <Image
              src={ecommerce}
              width={300}
              height={300}
              alt='imagen '
              className='rounded-2xl md:w-[90%] md:h-[100%] '
            />

        </div>

        <section className='md:flex md:items-end md:h-full  '>

          <div data-aos = "fade-left" className=' gap-2 flex flex-col  md:justify-between md:h-[250px]  '>
            <div className=' grid gap-1 md:grid md:gap-5'>
              <h1 className='md:text-3xl'>Ecommerce</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci maxime autem doloribus sint provident reprehenderit totam excepturi co</p>
            </div>
            <div className=' md:flex md:flex-col md:gap-5 flex  flex-col gap-4'>
              <span>website design</span>
              <a href="" className=' border py-3 w-[120px] rounded-md px-3 block  '>ver trabajo</a>
            </div>
          </div>
        </section>

      </div>
      <div className=' flex flex-col items-center gap-2 w-[300px] mx-auto md:flex-row md:w-[100%] md:gap-5 md:h-[390px' >
        <div data-aos = "fade-left" className=' md:w-[70%] md:h-full  md:order-2 '>
            <Image
              src={ecommerceDos}
              width={300}
              height={300}
              alt='imagen '
              className='rounded-2xl md:w-[90%] md:h-[100%] '
            />

        </div>

        <section className='md:flex md:items-end md:h-full  '>

          <div data-aos = "fade-right" className=' gap-2 flex flex-col  md:justify-between md:h-[250px]  '>
            <div className=' grid gap-1 md:grid md:gap-5'>
              <h1 className='md:text-3xl'>Ecommerce</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci maxime autem doloribus sint provident reprehenderit totam excepturi co</p>
            </div>
            <div className=' md:flex md:flex-col flex  flex-col gap-4 md:gap-5'>
              <span>website design</span>
              <a href="" className=' border py-3 w-[120px] rounded-md px-3 block  '>ver trabajo</a>
            </div>
          </div>
        </section>
      </div>
      <div className=' flex flex-col items-center gap-2 w-[300px] mx-auto md:flex-row md:w-[100%] md:gap-5 md:h-[390px' >
        <div data-aos = "fade-right" className=' md:w-[70%] md:h-full  '>
            <Image
              src={proyectDentist}
              width={300}
              height={300}
              alt='imagen '
              className='rounded-2xl md:w-full md:h-[100%] '
            />

        </div>

        <section className='md:flex md:items-end md:h-full  '>

          <div data-aos = "fade-left" className=' gap-3 flex flex-col  md:justify-between md:h-[250px]  '>
            <div className=' grid gap-1 md:grid md:gap-5'>
              <h1 className='md:text-3xl'>Page Dentist</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci maxime autem doloribus sint provident reprehenderit totam excepturi co</p>
            </div>
            <div className=' md:flex md:flex-col flex flex-col gap-4 md:gap-5'>
              <span>website design</span>
              <a href="" className=' border py-3 w-[120px] rounded-md px-3 block   '>ver trabajo</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Proyects
