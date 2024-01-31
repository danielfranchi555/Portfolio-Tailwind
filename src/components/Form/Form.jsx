"use client"
import { useForm } from "react-hook-form"
import linkedin from '../../../public/linkedin-icon.svg'
import github from '../../../public/github-icon.svg'
import Image from 'next/image'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { AlertDemo } from './Alert'
import { userSchema } from './Validations'
import { zodResolver } from "@hookform/resolvers/zod"


const Form = () => {

    const form = useRef();

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: zodResolver(userSchema),
    })

    const [enviado,setEnviado] = useState(false)

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_ehzn3rl','template_nuhaq17', form.current,'PzpG3CtC2nyY_tksV')
    //         .then((result) => {
    //             console.log(result.text);
    //             form.current.reset()
    //             return (
    //                 <AlertDemo/>
    //             )
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // };

    const submit = (data) => {

        emailjs.sendForm('service_ehzn3rl', 'template_nuhaq17', form.current, 'PzpG3CtC2nyY_tksV')
            .then((result) => {
                console.log(result.text);
                form.current.reset()
                setEnviado(true)
            }, (error) => {
                console.log(error.text);
            });
        console.log(data)
    }


    return (
        <div className='  mt-20 w-full md:w-[100%] mx-auto flex flex-col gap-5 lg:flex lg:flex-col lg:gap-20 border-t py-20'>
            <div className=' flex flex-col  gap-10 lg:grid lg:grid-cols-2 ' >
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-[#ffff] lg:text-[66px]'>Let’s connect</h3>
                        <p className='text-[#FFFF]'>Say hello at danielfranchi3@gmail.com</p>
                        <p className='text-[#FFFF]'>For more info, here is my resume</p>
                    </div>

                    <div className='flex items-center gap-5'>
                        <Image src={linkedin} />
                        <Image src={github} />
                    </div>
                </div>

                <div className='h-[100%]  w-[100%]  md:w-[100%]  '>
                    <form ref={form} onSubmit={handleSubmit(submit)} className='flex flex-col'>
                        <label className='text-white py-4'>Name</label>
                        <input id='name' className='rounded-md px-3 py-2 bg-[#1A1A1A] text-white' type="text" name="user_name" {...register("name")} />
                        {errors.name?.message && <p className="text-red-400">{errors.name?.message}</p>}
                        <label className='text-white py-4'>Email</label>
                        <input id='email' className='rounded-md px-3 py-2 bg-[#1A1A1A] text-white' type="email" name="user_email" {...register("email")} />
                        {errors.email?.message && <p className="text-red-400">{errors.email?.message}</p>}
                        <label className='text-white py-4 '>Message</label>
                        <textarea id='message' className='mb-5 px-2 flex justify-start items-start w-full h-32 bg-[#1A1A1A] text-white' name="message" {...register("message")} />
                        {enviado? <AlertDemo/>: <input className='rounded-md bg-[#D3E97A] py-3 cursor-pointer' type="submit" value="Send" />}
                    </form>
                </div>
            </div>

        </div>
    )
}





export default Form
