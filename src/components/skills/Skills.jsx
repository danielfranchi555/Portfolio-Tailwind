import Image from 'next/image'
import { data } from './data'
import FadeUp from '../fade/FadeUp'
import FadeRight from '../fade/FadeRight'
import FadeLeft from '../fade/FadeLeft'

const Skills = () => {
  

    return (
<>

</>
        // <div>
        //    <h2>Featured Projects</h2>
        //    <p>Here are some of the selected projects that showcase my passion for front-end development.</p>
        //    {data.map((item)=>(
        //     <div className='bg-[#484848]'>
        //          <Image />
        //     </div>
        //    ))}
        // </div>
        // <div className='w-[100%]  mt-[188px] md:grid md:grid-cols-2  md:gap-5 md:py-0  lg:h-[300px]  '>
        //     <FadeRight data-aos="fade-right" className=' dark:border-[#3154E2]   py-5 flex flex-col gap-2 md:gap-3 md:flex md:justify-around lg:justify-between md:py-0  lg:flex '>
        //         <span className='border-[#3154E2] px-3 py-2 border rounded-xl inline-block text-[#3154E2]' style={{ width: 'fit-content' }}>Mi skills</span>
        //         <div>
        //             <h2 className='text-[#0B0C0C] dark:text-[#fff] text-3xl md:text-2xl lg:text-4xl font-bold lg:flex lg:flex-col '>
        //                 Porque contratarme en tu
        //                 <span className=''> proximo <span className='text-[#3154E2]'>Proyecto?</span>  </span>
        //             </h2>
        //         </div>
        //         <div>
        //             <p className='text-[#323433] md:text-[15px] dark:text-[#fff]'>Soy un desarrollador web con experiencia y habilidades sólidas. Transformo ideas en sitios eficientes, seguros y atractivos. Impulsa tu proyecto al siguiente nivel con mi enfoque impactante</p>
        //         </div>
        //         <a href="" className='dark:text-[#fff] text-[#fff] px-5 py-3 bg-[#3154E2] rounded-xl inline-block max-w-max'>Hire me</a>
        //     </FadeRight>

        //     <div className='flex flex-col  md:flex md:flex-col gap-5 md:gap-3  lg:flex lg:flex-row'>
        //         <div className='flex flex-col gap-5  md:justify-between '>
        //             {data.slice(0, 2).map((item,index) => (
        //                 <FadeUp
        //                 index = {index}
        //                 key={index} className=' py-3 px-5 md:px-2 md:py-1 lg:py-3 border rounded-md shadow-md dark:border-[#3154E2]  '
        //                 >
        //                     <Image src={item.image} width='auto' height='auto' />
        //                     <span className='text-[#000] font-semibold lg:text-[20px] dark:text-[#fff]'>{item.title}</span>
        //                     <p className='text-[#323433] text-[14px] font-normal dark:text-[#fff]'>{item.description}</p>
        //                 </FadeUp>
        //             ))}
        //         </div>
        //         <div className='md:items-center md:flex md:justify-center'>
        //             {data.slice(-1).map((item,index) => (
        //                 <FadeLeft key={index} className=' py-3 px-5 md:px-2 md:py-1 lg:py-3 border rounded-md shadow-md dark:border-[#3154E2]  '>
        //                     <Image src={item.image} width='auto' height='auto' />
        //                     <span className='text-[#000]  font-semibold md:text-[14px] lg:text-[20px] dark:text-[#fff]'>{item.title}</span>
        //                     <p className='text-[#323433] text-[14px] font-normal dark:text-[#fff]'>{item.description}</p>
        //                 </FadeLeft>
        //             ))}
        //         </div>
        //     </div>
        // </div>
    )
}

export default Skills
