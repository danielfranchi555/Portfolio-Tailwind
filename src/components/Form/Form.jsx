"use client"
import { useForm } from "react-hook-form"
import linkedin from '../../../public/linkedin-icon.svg'
import github from '../../../public/github-icon.svg'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { userSchema } from './Validations'
import { zodResolver } from "@hookform/resolvers/zod"
import { ImCheckboxChecked } from "react-icons/im";
import { ClipLoader } from "react-spinners"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"





const Form = () => {

    const form = useRef();
    const { toast } = useToast()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(userSchema),
    })

    const [enviando, setEnviando] = useState(false)
    const [enviado, setEnviado] = useState(false)


    const submit = (data) => {
        setEnviando(true)
        emailjs.sendForm('service_ehzn3rl', 'template_nuhaq17', form.current, 'PzpG3CtC2nyY_tksV')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
                setEnviando(false);
                setEnviado(true)
                toast({
                    title: "Formulario enviado correctamente",
                    description: "Friday, February 10, 2023 at 5:57 PM",
                })
            })
            .catch((error) => {
                console.log(error.text);
            })

        console.log(data)
    }


    return (
        <div id="contacto" className='  mt-20 w-full md:w-[100%] mx-auto flex flex-col gap-5 lg:flex lg:flex-col lg:gap-20 border-t py-20'>
            <div className=' flex flex-col  gap-10 lg:grid lg:grid-cols-2 ' >
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-[#ffff] lg:text-[66px]'>¡Déjame ayudarte a alcanzar tus metas!</h3>
                        <Link href={'mailto:danielfranchi3@gmail.com'} ><p className='text-[#FFFF]'>Email: danielfranchi3@gmail.com</p> </Link>
                    </div>

                    <div className='flex items-center gap-5'>
                        <Link target="_blank" href={'https://www.linkedin.com/in/danielfranchijs/'}><Image src={linkedin} /></Link>
                        <Link target="_blank" href={'https://github.com/danielfranchi555'}><Image src={github} /></Link>
                    </div>
                </div>

                <div className='h-[100%]  w-[100%]  md:w-[100%]  '>
                    <form ref={form} onSubmit={handleSubmit(submit)} className='flex flex-col'>
                        <label className='text-white py-4'>Nombre</label>
                        <input disabled={enviado} id='name' className='rounded-md px-3 py-2  bg-[#1A1A1A] text-white' type="text" name="user_name" {...register("name")} />
                        {errors.name?.message && <p className="text-red-400">{errors.name?.message}</p>}
                        <label className='text-white py-4'>Email</label>
                        <input disabled={enviado} id='email' className='rounded-md px-3 py-2 bg-[#1A1A1A] text-white' type="email" name="user_email" {...register("email")} />
                        {errors.email?.message && <p className="text-red-400">{errors.email?.message}</p>}
                        <label className='text-white py-4 '>Mensaje</label>
                        <textarea disabled={enviado} id='message' className='mb-5 px-2 flex justify-start items-start w-full h-32 bg-[#1A1A1A] text-white' name="message" {...register("message")} />

                        <div className=" flex justify-center items-center  gap-5 ">
                            {enviado ?
                                <div className="flex flex-col justify-center items-center gap-1 ">
                                    <ImCheckboxChecked size={20} className="text-green-500" />
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="text-green-400">Formulario Enviado!</p>
                                        <p className="text-green-400">Dentro de 24hs me contactare contigo</p>
                                    </div>

                                </div>
                                :
                                <button className='rounded-md flex items-center justify-center  bg-[#D3E97A] w-full py-3 cursor-pointer' type="submit">
                                    {enviando ?
                                        <div>
                                            <ClipLoader color="#000" size={30} />
                                            <p>Enviando...</p>
                                        </div>
                                        :
                                        <p>Enviar</p>}

                                    {/* <input className='rounded-md  py-3 cursor-pointer' type="submit" value={`${enviando ? 'Enviando...' : 'Enviar'}`} /> */}
                                </button>
                            }
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}





export default Form
