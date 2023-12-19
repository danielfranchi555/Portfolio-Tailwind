import React from 'react'

const Form = () => {
    return (
        <div className=' py-5 mt-20 '>
            <h3 id='contacto' className='text-center text-4xl '>Contactame</h3>
            <div className='max-w-[90%] mx-auto text-center text-sm text-gray-500 py-4'>
                <p className='md:text-md'>Tienes una idea? hablemos y veamos como podemos trabajar juntos para hacerla realidad!</p>
            </div>
            <div className='border h-[100%] rounded-lg w-[90%] md:w-[500px] mx-auto py-5'>
                <form action="" className='flex flex-col w-[90%] mx-auto gap-4'>
                <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='text-sm text-gray-100 '>Name/Surname</label>
                        <input type="text" name="" id="" className='border border-gray-300 shadow-lg rounded-md px-1 py-2 focus:outline-none focus:border-[#3154E2] focus:ring focus:ring-[#3154E2]' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='text-sm text-gray-100 '>Email</label>
                        <input type="text" name="" id="" className='border border-gray-300 shadow-lg rounded-md px-1 py-2 focus:outline-none focus:border-[#3154E2] focus:ring focus:ring-[#3154E2]' />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="mensaje" className='text-sm text-gray-100'>Mensaje</label>
                        <textarea name="" id="" cols="10" className='border rounded-md shadow-lg px-1 border-gray-300 py-2 focus:outline-none focus:border-[#3154E2] focus:ring focus:ring-[#3154E2]' rows="10"></textarea>
                    </div>
                    <div className='w-full flex items-end'>
                        <a href="" type='submit' className='border w-full text-center py-2 rounded-md'>Enviar</a>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default Form
