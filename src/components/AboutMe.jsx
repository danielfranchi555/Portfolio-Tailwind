'use client'
import fotoUno from '../../public/aboutMe-1.png'
import fotoDos from '../../public/aboutMe-2.png'
import fotoTres from '../../public/aboutMe-3.png'
import Image from 'next/image'
import FadeLeft from './fade/FadeLeft'
import FadeRight from './fade/FadeRight'
import FadeUp from './fade/FadeUp'

const AboutMe = () => {

  
    return (
        <div className=' w-[300px] mx-auto flex flex-col items-center  justify-center gap-5  mt-20 md:w-full md:flex lg:grid lg:grid-cols-2 md:mt-40  '>
            <FadeRight className=' text-center flex flex-col gap-4 md:items-start'>
                <h3 className='text-3xl md:text-4xl lg:text-[40px] font-bold text-[#0B0C0C] dark:text-[#fff]'>ACERCA DE MI</h3>
                <p  className='text-1xl md:text-1xl md:text-start text-[#323433] dark:text-[#fff] text-[18px]'>
                    Soy Daniel Franchi, un estudiante de 23 años en la tecnicatura de desarrollo de software. Mi curiosidad tecnológica se combina con mi pasión por viajar, los videojuegos y la música. En mi búsqueda de soluciones innovadoras, busco fusionar habilidades técnicas con creatividad. ¡Gracias por visitar mi portafolio y ser parte de mi viaje de crecimiento y aprendizaje
                </p>
            </FadeRight>
            <section className='flex flex-col gap-2 md:grid md:grid-cols-2 md:py-5 md:gap-2'>
                <FadeUp  className='flex justify-center gap-2  md:flex md:justify-center md: items-center ' >
                    <Image
                        src={fotoUno}
                        alt='image'
                        className='w-[150px] md:w-[200px] md:h-[50%] shadow-md'
                    />
                </FadeUp>
                <div  className='flex gap-2 md:flex md:flex-col'>
                    <FadeLeft  className='w-[150px] md:w-[200px] md:h-[50%]'>
                        <Image
                            src={fotoDos}
                            widht={20}
                            alt='image'
                            className='w-[150px] md:w-[200px] md:h-[100%] shadow-md'
                        />
                    </FadeLeft>
                    <FadeLeft >
                        <Image
                            src={fotoTres}
                            alt='image'
                            className='w-[150px] md:w-[200px] md:h-[100%] shadow-md'

                        />
                    </FadeLeft>

                </div>

            </section>
        </div>
    )
}

export default AboutMe
