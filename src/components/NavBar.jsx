"use client"
import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/Utils/MotionTransitions';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.nav variants={fadeIn('top',0.1)} initial="hidden" animate="show" exit="hidden" id="nav" className='nav'>
      <a href="" className='text-[#E3E4E6]'>DFranchi</a>

      <input type="checkbox" id='menu' className='peer hidden' checked={isMenuOpen} onChange={toggleMenu} />
      <label className='bg-close-menu w-10 bg-cover bg-center h-10 cursor-pointer z-50 transition-all md:hidden' htmlFor="menu"></label>

      <div className={`bg-gradient-to-b from-white/50 to-black/50 fixed inset-0 translate-x-full ${isMenuOpen ? 'peer-checked:translate-x-0' : ''} transition-transform md:static md:translate-x-0 md:bg-none`}>
        <ul className="bg-[#010208] p-12 mt-24 font-bold grid gap-6 inset-x-0 text-center w-[90%] mx-auto shadow-lg rounded-md h-max md:bg-transparent md:w-max md:p-0 md:grid-flow-col md:mt-0 md:shadow-none">
          <li><a href="#" className="item cursor-pointer" onClick={closeMenu}>Inicio</a></li>
          <li><a href="#proyectos" className="item cursor-pointer" onClick={closeMenu}>Proyectos</a></li>
          <li><a href="#contacto" className="item cursor-pointer" onClick={closeMenu}>Contacto</a></li>
          <li><a href="#" className="item cursor-pointer" onClick={closeMenu}>Acerca de mi</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};



export default NavBar
