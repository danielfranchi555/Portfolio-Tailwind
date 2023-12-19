import React from 'react'
import icon1 from '../../public/iconOne.svg'
import icon2 from '../../public/iconTwo.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='mt-20  flex flex-col justify-center gap-5 items-center '>
      <h4 className='text-4xl'>Get in touch</h4>
      <p className='text-gray-500'>Para que podamos hablar más sobre...</p>
      <div className='flex py-5 gap-10 justify-center items-center'>
            <Image
      src={icon1}
      width={25}
      height={100}
      />
           <Image
      src={icon2}
      width={25}
      height={100}
      />
      </div>
      
   
    </footer>
  )
}

export default Footer
