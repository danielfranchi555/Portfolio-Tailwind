'use client'
import React, { useEffect } from 'react'
import iconOne from '../../public/pulse-outline.svg'
import iconTwo from '../../public/school-outline.svg'
import iconThree from '../../public/diamond-outline.svg'
import Image from 'next/image'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='w-full md:grid md:grid-cols-2  md:py-0  lg:h-[300px] lg:mt-[188px] '>
            <div data-aos="fade-right" className=' py-5 flex flex-col gap-2 md:gap-0 md:flex md:justify-around lg:justify-between md:py-0  lg:flex '>
                    <span className='border-[#3154E2] px-3 py-2 border rounded-xl inline-block text-[#3154E2]' style={{ width: 'fit-content' }}>Mi skills</span>
                    <h2 className='text-[#0B0C0C] text-3xl lg:text-[40px] font-bold lg:flex lg:flex-col lg:gap-2'>
                        Why Hire Me For Your Next{' '}
                        <span className='text-[#3154E2]'> Project? </span>
                    </h2>
                <p className='text-[#323433]'>I’m specialist in UI/UX Designe. My passion is designing & solving problems through user experience and research.</p>
                <a href="" className=' px-5 py-3 bg-[#3154E2] rounded-xl inline-block' style={{ width: 'fit-content' }}>Hire me</a>
            </div>

            <div className='flex flex-col gap-4 md:flex md:flex-row  '>
                <div className='flex flex-col gap-5 md:flex  lg:justify-between  '>
                    <div data-aos="fade-down" className='border rounded-md shadow-lg px-3 py-2 md:px-3 md:py-2'>
                        <Image
                            src={iconOne}
                            widht={20}
                        />
                        <h3 className='font-semibold text-[20px] text-[#000]'>Visual Design</h3>
                        <p className='text-[#323433]'>Create user interface design with unique & modern ideas</p>
                    </div>
                    <div data-aos="fade-up" className='border rounded-md shadow-lg px-3 py-2 md:px-3 md:py-2'>
                        <Image
                            src={iconTwo}
                            widht={20}
                        />
                        <h3 className='font-semibold text-[20px] text-[#000]'>UX Research</h3>
                        <p className='text-[#323433]'>Create user interface design with unique & modern ideas</p>
                    </div>
                </div>
                <div className='md:flex md:justify-center md:items-center md:px-3 md:py-2 '>
                    <div data-aos="fade-left" className=' border rounded-md shadow-lg px-3 py-2 md:px-3 md:py-2'>
                        <Image
                            src={iconThree}
                            widht={20}
                        />
                        <h3 className='font-semibold text-[20px] text-[#000]'>Design Prototype</h3>
                        <p className='text-[#323433]'>Create user interface design with unique & modern ideas</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Skills
