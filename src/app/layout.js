
import { Inter } from 'next/font/google'
import { Work_Sans } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Proyects from '@/components/Proyects'
import Footer from '@/components/Footer'
import Form from '@/components/Form/Form'
import AboutMe from '@/components/AboutMe'

export const inter = Inter({
   subsets: ['latin'],
   weight: ['200', '400', '300'],
   variable: '-inter-font'
})

export const workSans = Work_Sans({
  weight: ['200', '400', '300'],
  subsets: ['latin'],
  variable: '-workSans-font'
})



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id='body' className="text-[#E3E4E6] ">
        <div className='w-full  '>
          <div className='w-full '>
            <NavBar />
          </div>
          <div className='md:max-w-[80%] mt-20 md:mt-20 w-[100%] mx-auto overflow-hidden  md:overflow-hidden lg:overflow-visible '>
            <Hero className={workSans.className} />
            <Proyects />
            <AboutMe />
            <Form />
            <Footer />
          </div>
          {children}
        </div>

      </body>
    </html>
  )
}
