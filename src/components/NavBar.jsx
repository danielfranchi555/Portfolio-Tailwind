import React from 'react'
const NavBar = () => {
  return (
    <nav  id="nav" className='nav'>
       <a href="" className='text-[#E3E4E6]'>DFranchi</a>

        <input type="checkbox" id='menu' className='peer hidden  ' />
        <label className='bg-close-menu w-10 bg-cover bg-center h-10 cursor-pointers z-50 transition-all md:hidden' for="menu"></label>

         <div className='bg-gradient-to-b  from-white/50 to-black/50 fixed inset-0
          translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none'>

           <ul className="  bg-[#010208] p-12 mt-24 font-bold grid gap-6 inset-x-0 text-center w-[90%] mx-auto shadow-lg rounded-md h-max md:bg-transparent md:w-max  md:p-0 md:grid-flow-col md:mt-0 md:shadow-none">
            <li><a href="" className="item cursor-pointer">Inicio</a></li>
            <li><a href="#proyectos" className="item cursor-pointer">Proyectos</a></li>
            <li><a href="#contacto" className="item cursor-pointer">Contacto</a></li>
            <li><a href="" className="item cursor-pointer">Acerca de mi</a></li>
         </ul>

         </div>
     
         
    </nav>
  )
}

export default NavBar
