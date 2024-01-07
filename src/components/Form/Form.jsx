"use client"
import { useForm } from 'react-hook-form'
import iconOne from '../../../public/Group9042.svg'
import iconTwo from '../../../public/Group9043.svg'
import iconThree from '../../../public/Group9044.svg'
import iconFour from '../../../public/linkedin.svg'


import Image from 'next/image'
const Form = () => {

    const { register, handleSubmit, reset,
        formState: { errors } } = useForm()
    console.log(errors)

    const submit = handleSubmit(async (data) => {
        console.log(data.nombre)

        const response = await fetch('/api/send/', {
            method: 'POST',
            body: JSON.stringify(data)
        }
        )

        if (response.status === 200) {
            reset()
            alert('formulario validado correctamente')
        } else (
            alert('error')
        )
    })

    return (
        <div className=' py-5 mt-20 w-full md:w-[100%] mx-auto flex flex-col gap-5 lg:flex lg:flex-col lg:gap-20 '>
            <div className='flex flex-col gap-5 lg:flex lg:flex-col lg:items-center lg:gap-5 '>
                <span className='border border-[#3154E2] text-[#3154E2] px-4 rounded-lg inline-block max-w-max '>Contact</span>
                <h3 id='contacto' className=' text-4xl font-semibold text-[#0B0C0C] '>Hablemos sobre tu <span className='text-[#3154E2] font-semibold'>Proyecto</span></h3>
                <p className='md:text-md text-start text-[#323433] text-[16px]'>Creemos algo nuevo, diferente y más significativo, o hagamos que las cosas sean más visuales o conceptuales</p>
            </div>
            <div className=' flex flex-col  gap-10 lg:grid lg:grid-cols-2 ' >
                <div className=' flex flex-col  gap-10 lg:flex lg:flex-col lg:justify-between '>
                        <div className='lg:flex '>
                            <Image
                                src={iconOne}
                                width={30}
                                alt='icon'
                                className='lg:w-[60px]'
                            />
                            <div className='lg:flex lg:flex-col lg:px-2 lg:justify-between'>
                                <p className='text-[#92929D]'>Call me</p>
                                <p className='text-[#11142D]'>+8801613968687</p>
                            </div>
                        </div>
                        <div className='lg:flex '>
                            <Image
                                src={iconTwo}
                                width={30}
                                alt='icon'
                                className='lg:w-[60px]'

                            />
                            <div className='lg:flex lg:flex-col lg:px-2 lg:justify-between'>
                                <p className='text-[#92929D]'>Email</p>
                                <p className='text-[#11142D]'>danielfranchi3@gmail.com</p>
                            </div>
                        </div>
                        <div className='lg:flex '>
                            <Image
                                src={iconThree}
                                width={30}
                                alt='icon'
                                className='lg:w-[60px]'

                            />
                            <div className='lg:flex lg:flex-col lg:px-2 lg:justify-between'>
                                <p className='text-[#92929D]'>Ubicacion</p>
                                <p className='text-[#11142D]'>Cordoba, Argentina</p>
                            </div>
                        </div>
                        <div className='lg:flex '>
                            <Image
                                src={iconFour}
                                width={30}
                                alt='icon'
                                className='lg:w-[60px]'

                            />
                            <div className='lg:flex lg:flex-col lg:px-2 lg:justify-between'>
                                <p className='text-[#92929D]'>Linkedin</p>
                                <p className='text-[#11142D]'>https://www.linkedin.com/in/danielfranchijs/</p>
                            </div>
                        </div>
                </div>

                <div className='h-[100%]  w-[100%]  md:w-[100%]  '>
                    <form action="" onSubmit={submit} className='flex flex-col w-[100%] mx-auto gap-4'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email" className='text-sm text-[#92929D] '>Name/Surname</label>
                            <input
                                type="text"
                                {...register("nombre", {
                                    required: { value: true, message: 'Este campo es requerido', },
                                    minLength: { value: 2, message: 'Debe tener al menos 2 caracteres' },
                                    maxLength: { value: 20, message: 'Debe tener menos de 20 caracteres' }
                                })}
                                className='border text-black border-gray-300 shadow-lg rounded-md px-1 py-2 focus:outline-none focus:border-[#3154E2] focus:ring focus:ring-[#3154E2]' />
                            {errors.nombre && <span className='text-red-400 text-sm'>{errors.nombre.message}</span>}
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email" className='text-sm text-[#92929D] '>Email</label>
                            <input type="text"  {...register("email", {
                                required: { value: true, message: 'Este campo es requerido' },
                                pattern: { value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/, message: 'correo no valido' }
                            })}
                                className='border border-gray-300 shadow-lg rounded-md px-1 py-2 focus:outline-none focus:border-[#3154E2] focus:ring focus:ring-[#3154E2]' />
                            {errors.email && <span className='text-red-400 text-sm'>{errors.email.message}</span>}
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor="mensaje" className='text-sm text-[#92929D]'>Mensaje</label>
                            <textarea cols="5"  {...register("mensaje", {
                                required: { value: true, message: 'Este campo es requerido' }
                            })}
                                className='border rounded-md shadow-lg px-1 border-gray-300 py-2 focus:outline-none focus:border-[#3154E2] focus:ring focus:ring-[#3154E2] ' rows="10"></textarea>
                            {errors.mensaje && <span className='text-red-400 text-sm'>{errors.mensaje.message}</span>}
                        </div>
                        <div className='w-full flex items-end'>
                            <button href="" type='submit' className='border w-full text-center py-2 rounded-md'>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}





export default Form
