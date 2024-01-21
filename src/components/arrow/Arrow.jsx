import Image from 'next/image'
import React from 'react'
import flecha from '../../../public/flecha.svg'
import { FaArrowDown } from "react-icons/fa6";

const Arrow = () => {
  return (
    <div className='flex justify-center items-center mt-[50px] md:mt-0 md:flex md:items-center md:justify-center  md:w-[100%] animate-bounce '>
      <FaArrowDown size={30}/>
    </div>
  )
}

export default Arrow
