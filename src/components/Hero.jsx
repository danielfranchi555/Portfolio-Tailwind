import Image from 'next/image'
import React from 'react'
import image from '../../public/foto.png'
import svgOne from '../../public/svg-1.svg'
import svgTwo from '../../public/svg-4.svg'
import svgThree from '../../public/svg-3.svg'
import svgFour from '../../public/svg-firebase-2 1.png'


const Hero = () => {
  return (
    <section className='text-center items-center mt-5    '>
       <div className='flex items-center flex-col md:justify-bettween md:flex-row'>
               <div className='hidden md:block  md:text-left md:w-[60%]  ' >
         <h2 className='md:text-5xl sm:text-2xl text-slate-500'>Yo soy <span className='font-bold text-white'>Daniel Franchi</span> </h2>
        <h2 className='md:text-5xl sm:text-2xl text-slate-500'> <span className='font-bold text-white'>Front-end </span>Developer</h2>
        <p className='my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
           Laborum vero ea porro libero officiis, culpa cupiditate, rem deserunt qui quidem dignissimos dolor quasi nulla nobis nostrum distinctio cum tempore quibusdam.
        </p>
         <a href="" className='bg-[#3154E2] px-5 py-3 md:block md:w-[40%] md:text-center md:rounded-md'>HIRE ME</a>

        </div>  
        <h1 className='text-4xl md:hidden'>Daniel Franchi</h1>
        <a href="" className='bg-[#3154E2] mt-5 w-[250px] py-3 rounded-md md:hidden'>Contactame</a>
        <a href="" className='border mt-5 w-[250px] py-3 rounded-md hover:bg-slate-300 md:hidden'>Descargar CV</a>
        <div className='md:w-[40%]'>
             <Image
        src={image}
        width={300}
        height={100}
        alt='image'
        className='md:w-[100%] md:h-[100%]  '
       />
        </div>  
       </div>
       <div className='bg-transparent  rounded-md flex justify-center py-3 gap-6 px-10 container max-w-[270px] mx-auto
       md:max-w-[100%]   md:justify-between md:px-0
       '>
          <Image
          src={svgOne}
          width={40}
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
     
      
    </section>
  )
}

export default Hero
