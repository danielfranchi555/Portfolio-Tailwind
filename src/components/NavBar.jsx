"use client"
import { useEffect, useState } from 'react';
import MotionTransition from './motionTransition/MotionTransition';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [nav, setNav] = useState(false)

   const pathnName = usePathname()

  const scrollNav = () => {
    if (window.scrollY >= 20) {
      setNav(true)
    } else {
      setNav(false)
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', scrollNav)
    return () => {
      window.addEventListener('scroll', scrollNav)
    }
  })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };



  return (
    <>
      <div className={nav ? "fixed w-full top-0 z-50 bg-[#3154E2] bg-opacity-5  " : " fixed w-full top-0 z-50 bg-transparent"}>
        <MotionTransition id="nav" className=' nav px-5 sm:px-5   md:w-[80%] md:px-0 md:mx-auto' >
          <a href="" className='text-[#3154E2] lg:text-2xl '>DFRANCHI</a>
          <input type="checkbox" id='menu' className='peer hidden' checked={isMenuOpen} onChange={toggleMenu} />
          <label className='bg-close-menu w-10 bg-cover bg-center h-10 cursor-pointer z-50 transition-all md:hidden' htmlFor="menu"></label>
          <div className={`bg-gradient-to-b from-white/50 to-black/50 fixed inset-0 translate-x-full ${isMenuOpen ? 'peer-checked:translate-x-0' : ''} transition-transform md:static md:translate-x-0 md:bg-none`}>
            <ul className="bg-[#fff] p-12 mt-24 text-[#000] grid gap-6 inset-x-0 text-center w-[90%] mx-auto shadow-lg rounded-md h-max md:bg-transparent md:w-max md:p-0 md:grid-flow-col md:mt-0 md:shadow-none">
              <li>
                <Link href='/' className={`${usePathname === '/' ? 'bg-red-500':''}`}>
                  <span className="dark:text-[#fff] item cursor-pointer" onClick={closeMenu}>Inicio</span>
                </Link>
              </li>
              <li>
                <Link href='#proyectos' className={`${usePathname === '#proyectos' ? 'bg-red-500':''}`}>
                  <span className="dark:text-[#fff] item cursor-pointer" onClick={closeMenu}>Proyectos</span>
                </Link>
              </li>
              <li><a href="#contacto" className="dark:text-[#fff] item cursor-pointer" onClick={closeMenu}>Contacto</a></li>
              <li><a href="#" className="dark:text-[#fff] item cursor-pointer" onClick={closeMenu}>Acerca de mi</a></li>
            </ul>
          </div>
        </MotionTransition>
      </div>
    </>

  );
};



export default NavBar
