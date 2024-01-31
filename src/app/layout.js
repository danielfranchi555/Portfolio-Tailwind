
import { Inter,Bebas_Neue,Manrope } from 'next/font/google'
import './globals.css'
import Provider from '@/components/Provider'

export const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '400', '300','500'],
  variable: '-inter-font'
})

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '400', '300'],
  variable: '-manrope-font'
})

export const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: [ '400'],
  variable: '--font-BebasNeue-font'
})


export const metadata = {
  title: 'Daniel Franchi',
  description: 'Developer',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable} ${manrope.variable}`}>
      <body id='body'>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
