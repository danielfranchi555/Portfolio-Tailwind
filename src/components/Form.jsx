import React from 'react'

const Form = () => {
    return (
        <div className='bg-red-200 py-5'>
            <h3 className='text-center'>Contactame</h3>
            <div className='bg-orange-600 h-[400px] max-w-[90%] mx-auto py-5'>
                <form action="" className='flex flex-col'>
                    <label htmlFor="email">email</label>
                    <input type="text" name="" placeholder='email' id="" />
                    <label htmlFor="mensaje">mensaje</label>
                    <input type="text" name="" placeholder='mensaje' id="" />

                </form>
            </div>

        </div>
    )
}

export default Form
