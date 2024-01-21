"use client"
import { useEffect, useState } from 'react';
import MotionTransition from './motionTransition/MotionTransition';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => {
    setIsMenuOpen(!isMenuOpen)
    console.log(isMenuOpen);
  }

  const UlMobile = () => {
    return (
      <ul className='px-9 flex flex-col gap-5 md:hidden'>
        <Link href='#inicio' className='text-[20px]cursor-pointer'>Inicio</Link>
        <Link href='#proyectos' className='text-[20px]cursor-pointer'>Proyectos</Link>
        <Link href='#contacto' className='text-[20px]cursor-pointer'>Contacto</Link>
        <Link href='#about' className='text-[20px]cursor-pointer'>Acerca de mi</Link>
      </ul>
    )
  }



  return (
    <>
      {/* <div className={nav ? "fixed w-full top-0 z-50 bg-slate-500  " : " fixed w-full top-0 z-50 bg-transparent"}> */}
      <MotionTransition>
        <nav className='flex px-4 py-5 w-[90%] mx-auto'>
          <div className='flex items-center w-full justify-between'>
            <span className='text-3xl font-bold'>Daniel<span className='text-[#3154E2]'>Franchi</span></span>
            <ul className='md:flex gap-5 hidden'>
              <Link href='#inicio' className='text-1xl cursor-pointer'>Inicio</Link>
              <Link href='#proyectos' className='text-1xl cursor-pointer'>Proyectos</Link>
              <Link href='#contacto' className='text-1xl cursor-pointer'>Contacto</Link>
              <Link href='#about' className='text-1xl cursor-pointer'>Acerca de mi</Link>
            </ul>
          </div>

          <GiHamburgerMenu size={40} onClick={toggle} className='md:hidden' />
        </nav>
        {
          isMenuOpen ? <UlMobile /> : ''
        }
      </MotionTransition>

    </>

  );
};



export default NavBar
