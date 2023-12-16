import React from 'react'
import Image from 'next/image'
import ecommerce from '../../public/proyect-1-hd.jpg'
const Proyects = () => {
  return (
    <div className=' w-[90%] mx-auto  grid gap-10 mt-40  md:w-full'>
      <h2 className=' text-center md:text-start text-4xl  text-slate-500'>Mis <span className='text-bold text-white'>Proyectos </span> </h2>
      <div className='flex flex-col items-center gap-2 w-[300px] mx-auto md:flex-row md:w-[100%] md:gap-10 md:h-[390px]  ' >
        <div className=' md:w-[70%] md:h-full  '>
          <Image
            src={ecommerce}
            width={300}
            height={300}
            alt='imagen '
            className='rounded-2xl md:w-full md:h-full '
          />
        </div>

        <section className='md:flex md:items-end md:h-full  '>

          <div className=' gap-2 flex flex-col  md:justify-between md:h-[250px]  '>
            <div className=' grid gap-1 md:grid md:gap-5'>
              <h1 className='md:text-3xl'>Ecommerce</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci maxime autem doloribus sint provident reprehenderit totam excepturi co</p>
            </div>
            <div className=' md:flex md:flex-col md:gap-5'>
              <span>website design</span>
              <a href="" className=' border py-3 w-[40%] rounded-md px-3 block  '>ver trabajo</a>
            </div>
          </div>
        </section>

      </div>
      <div className='flex flex-col items-center gap-2 w-[300px] mx-auto md:flex-row md:w-[100%] md:gap-10 md:h-[390px]  ' >
        <div className=' md:w-[70%] md:h-full md:order-2 '>
          <Image
            src={ecommerce}
            width={300}
            height={300}
            alt='imagen '
            className='rounded-2xl md:w-full md:h-full '
          />
        </div>

        <section className='md:flex md:items-end md:h-full  '>

          <div className=' gap-2 flex flex-col  md:justify-between md:h-[250px]  '>
            <div className=' grid gap-1 md:grid md:gap-5'>
              <h1 className='md:text-3xl'>Ecommerce</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci maxime autem doloribus sint provident reprehenderit totam excepturi co</p>
            </div>
            <div className=' md:flex md:flex-col md:gap-5'>
              <span>website design</span>
              <a href="" className=' border py-3 w-[40%] rounded-md px-3 block  '>ver trabajo</a>
            </div>
          </div>
        </section>

      </div>
      <div className='flex flex-col items-center gap-2 w-[300px] mx-auto md:flex-row md:w-[100%] md:gap-10 md:h-[390px]  ' >
        <div className=' md:w-[70%] md:h-full  '>
          <Image
            src={ecommerce}
            width={300}
            height={300}
            alt='imagen '
            className='rounded-2xl md:w-full md:h-full '
          />
        </div>

        <section className='md:flex md:items-end md:h-full  '>

          <div className=' gap-2 flex flex-col  md:justify-between md:h-[250px]  '>
            <div className=' grid gap-1 md:grid md:gap-5'>
              <h1 className='md:text-3xl'>Ecommerce</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci maxime autem doloribus sint provident reprehenderit totam excepturi co</p>
            </div>
            <div className=' md:flex md:flex-col md:gap-5'>
              <span>website design</span>
              <a href="" className=' border py-3 w-[40%] rounded-md px-3 block  '>ver trabajo</a>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Proyects
