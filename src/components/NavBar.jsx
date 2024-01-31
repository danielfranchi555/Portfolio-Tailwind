'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Link from 'next/link';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const UlMobile = () => {
    return (
      <motion.ul 
        initial={{ opacity: 0, y: -50 }} // Animación inicial (invisible y desplazada hacia arriba)
        animate={{ opacity: 1, y: 0 }} // Animación al abrir (visible y sin desplazamiento)
        exit={{ opacity: 0, y: -50 }} // Animación al cerrar (invisible y desplazada hacia arriba)
        transition={{ duration: 0.5 }} // Duración de la transición en segundos
        className='px-5 mb-10 flex flex-col gap-5 md:hidden text-[#C7C7C7]'
      >
        <Link href='#inicio' className='text-[20px]cursor-pointer'>Inicio</Link>
        <Link href='#proyectos' className='text-[20px]cursor-pointer'>Proyectos</Link>
        <Link href='#contacto' className='text-[20px]cursor-pointer'>Contacto</Link>
        <Link href='#about' className='text-[20px]cursor-pointer'>Acerca de mi</Link>
      </motion.ul>
    );
  }

  return (
    <>
      <nav className='nav flex px-0 py-5 w-[90%] mx-auto'>
        <div className='flex items-center w-full justify-between'>
          <span className='text-[32px] font-bold text-[#C7C7C7] icon'>Daniel<span className=''>Franchi</span></span>
          <ul className='md:flex gap-5 hidden'>
            <Link href='#inicio' className='text-1xl cursor-pointer text-[#C7C7C7] text-[16px] li'>Inicio</Link>
            <Link href='#proyectos' className='text-1xl cursor-pointer text-[#C7C7C7] text-[16px] li'>Proyectos</Link>
            <Link href='#contacto' className='text-1xl cursor-pointer text-[#C7C7C7] text-[16px] li'>Contacto</Link>
            <Link href='#about' className='text-1xl cursor-pointer text-[#C7C7C7] text-[16px] li'>Acerca de mi</Link>
          </ul>
        </div>
        {isMenuOpen ? <IoClose size={40} onClick={toggle} className='md:hidden text-white' /> : <GiHamburgerMenu size={40} onClick={toggle} className='md:hidden text-white' />}
      </nav>
      {isMenuOpen && <UlMobile />}
    </>
  );
};

export default NavBar;
