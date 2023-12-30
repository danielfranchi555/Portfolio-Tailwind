'use client'
import  { useEffect } from 'react'
import fotoUno from '../../public/aboutMe-1.png'
import fotoDos from '../../public/aboutMe-2.png'
import fotoTres from '../../public/aboutMe-3.png'
import Image from 'next/image'
import Aos from 'aos'
import 'aos/dist/aos.css'

const AboutMe = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div className=' w-[300px] mx-auto flex flex-col items-center  justify-center gap-5  mt-20 md:w-full lg:grid lg:grid-cols-2 md:mt-40 '>
            <section className=' text-center flex flex-col gap-4 md:items-start'>
                <h3 className='text-3xl md:text-4xl'>ACERCA DE MI</h3>
                <p data-aos="fade" className='text-1xl md:text-2xl md:text-start'>I am a UI/UX designer who is passionate
                    about creating beautiful and joyful digital experiences. Besides design, I love music, games and travelling.
                </p>
            </section>
            <section className='flex flex-col gap-2 md:grid md:grid-cols-2 md:py-5 md:gap-2'>
                <div data-aos="fade-right" className='flex justify-center gap-2  md:flex md:justify-center md: items-center ' >
                    <Image
                        src={fotoUno}
                        alt='image'
                        className='w-[150px] md:w-[200px] md:h-[50%]'
                    />
                </div>
                <div data-aos="fade-down" className='flex gap-2 md:flex md:flex-col'>
                    <div data-aos="fade-down" className='w-[150px] md:w-[200px] md:h-[50%]'>
                            <Image
                        src={fotoDos}
                        widht={20}
                        alt='image'
                        className='w-[150px] md:w-[200px] md:h-[100%]'
                    />
                    </div>
                <div data-aos="fade-up">
                     <Image
                        src={fotoTres}
                        alt='image'
                        className='w-[150px] md:w-[200px] md:h-[100%]'
                        
                    />
                </div>
                   
                </div>

            </section>
        </div>
    )
}

export default AboutMe
