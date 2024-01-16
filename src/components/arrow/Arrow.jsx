import Image from 'next/image'
import React from 'react'
import flecha from '../../../public/flecha.svg'

const Arrow = () => {
  return (
    <div className='md:flex md:items-center md:justify-center  md:w-[100%] animate-bounce '>
    <Image
      src={flecha}
      width='auto'
      height='auto'
      alt='icon'
      className=''
    />

</div>
  )
}

export default Arrow
