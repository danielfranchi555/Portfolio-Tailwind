"use client"
import { useForm } from 'react-hook-form'
const Form = () => {

    const { register, handleSubmit,reset,
    formState: { errors } } = useForm()
    console.log(errors)

    const submit  =  handleSubmit  ( async (data) => {
        console.log(data.nombre)

        const response = await fetch('/api/send/',{ 
            method: 'POST',
            body: JSON.stringify(data)}
            )

            if (response.status === 200 ){
                reset()
                alert('formulario validado correctamente')
            }else(
                alert('error')
            )
    })

    return (
        <div className=' py-5 mt-20 w-full md:w-[60%] mx-auto  '>
            <h3 id='contacto' className='text-center text-4xl '>Contactame</h3>
            <div className='max-w-[90%] mx-auto text-center text-sm text-gray-400 py-4'>
                <p className='md:text-md'>Tienes una idea? hablemos y veamos como podemos trabajar juntos para hacerla realidad!</p>
            </div>
            <div className='border  h-[100%] rounded-lg w-[100%] px-5 md:w-[90%] mx-auto py-5'>
                <form action="" onSubmit={submit} className='flex flex-col w-[100%] mx-auto gap-4'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='text-sm text-gray-100 '>Name/Surname</label>
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
                        <label htmlFor="email" className='text-sm text-gray-100 '>Email</label>
                        <input type="text"  {...register("email", {
                            required: { value: true, message: 'Este campo es requerido' },
                            pattern: { value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/, message: 'correo no valido' }
                        })}
                            className='border border-gray-300 shadow-lg rounded-md px-1 py-2 focus:outline-none focus:border-[#3154E2] focus:ring focus:ring-[#3154E2]' />
                        {errors.email && <span className='text-red-400 text-sm'>{errors.email.message}</span>}
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="mensaje" className='text-sm text-gray-100'>Mensaje</label>
                        <textarea cols="10"  {...register("mensaje", {
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
    )
}





export default Form
