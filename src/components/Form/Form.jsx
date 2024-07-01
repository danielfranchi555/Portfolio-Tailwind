"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userSchema } from "./Validations";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { ImCheckboxChecked } from "react-icons/im";

const Form = () => {
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const submit = async (info) => {
    setEnviando(true);
    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(info),
        headers: { "Content-type": "application/json" },
      });

      const data = await resp.json();

      if (resp.ok) {
        console.log(data);
        reset();
        setEnviado(true);
        setEnviando(false);
      }
    } catch (error) {
      console.log({ message: error });
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col">
      <label className="text-white py-4">Nombre</label>
      <input
        disabled={enviado}
        id="name"
        className="rounded-md px-3 py-2  bg-[#1A1A1A] text-white"
        type="text"
        name="user_name"
        {...register("name")}
      />
      {errors.name?.message && (
        <p className="text-[13px] text-red-400">{errors.name?.message}</p>
      )}
      <label className="text-white py-4">Email</label>
      <input
        disabled={enviado}
        id="email"
        className="rounded-md px-3 py-2 bg-[#1A1A1A] text-white"
        type="email"
        name="user_email"
        {...register("email")}
      />
      {errors.email?.message && (
        <p className="text-[13px] text-red-400">{errors.email?.message}</p>
      )}
      <label className="text-white py-4 ">Mensaje</label>
      <textarea
        disabled={enviado}
        id="message"
        className="mb-5 px-2 flex justify-start items-start w-full h-32 bg-[#1A1A1A] text-white"
        name="message"
        {...register("message")}
      />

      <div className=" flex justify-center items-center  gap-5 ">
        {enviado ? (
          <div className="flex flex-col justify-center items-center gap-1 ">
            <ImCheckboxChecked size={20} className="text-green-500" />
            <div className="flex flex-col justify-center items-center">
              <p className="text-green-400">Formulario Enviado!</p>
              <p className="text-green-400">
                Dentro de 24hs me contactare contigo
              </p>
            </div>
          </div>
        ) : (
          <button
            className="rounded-md flex items-center justify-center  bg-[#D3E97A] w-full py-3 cursor-pointer"
            type="submit"
          >
            <input
              className="rounded-md  py-3 cursor-pointer text-black"
              type="submit"
              value={`${enviando ? "Enviando..." : "Enviar"}`}
            />
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
