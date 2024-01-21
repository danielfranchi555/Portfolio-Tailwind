import React from 'react'
import proyectOne from '../../../public/proyect-1-hd.jpg'
import proyectTwo from '../../../public/page-dentist.png'
import proyectThree from '../../../public/tienda-online.png'
import proyectFour from '../../../public/agency-marketing.png'
import arrow from '../../../public/arrow-blue.svg'
import proyectoFive from '../../../public/flyer-gym.jpg'
import proyectSix from '../../../public/flyer-agency.jpg'


export const data = [
   {
      id: 1,
      image: proyectSix,
      name: 'Landing Page',
      title: 'Agency Marketing',
      description: 'Landing page desarrollada con NextJs, tailwind css para la customizacion y Framer motion para la implemetacion de animaciones',
      arrow: arrow,
      link: "https://agenone-zk4d.vercel.app/"
   },
   {
      id: 2,
      image: proyectoFive,
      name: 'Landing Page',
      title: 'Gym24',
      description: 'Landing Page utilizando Nextjs, tailwind css para los estilos y Shadcn para la creacion de algunos componentes ',
      arrow: arrow,
      link: "https://gym-proyect-lilac.vercel.app/"

   },
   {
      id: 3,
      image: proyectThree,
      name: 'App',
      title: 'Tienda Online',
      description: 'Tienda online utilizando Vite para la creacion del proyecto, ChakraUi para los estilos y Google Sheets como base de datos ',
      arrow: arrow,
      link: "https://agency-marketing-f6z7.vercel.app/"
   },

]

