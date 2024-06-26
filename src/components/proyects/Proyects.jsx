"use client";
import React, { useState } from "react";
import Image from "next/image";
import { data } from "./data";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Transition from "../Transitions/Transition";

const Proyects = () => {
  const [mostrarTres, setMostrarTres] = useState(true);
  const [filter, setFilter] = useState(data);

  const filterProyects = (category) => {
    setFilter(data.filter((prod) => prod.type === category));
  };

  return (
    <div id="proyectos" className="flex flex-col gap-5 border-t py-10 ">
      <div>
        <Transition delay={0.2}>
          <h2 className="text-[#fff] lg:text-[66px]">Mejores Proyectos</h2>
        </Transition>
        <Transition
          delay={0.4}
          className="subtitle-proyects text-[#C7C7C7] lg:text-[18px] lg:max-w-[600px]"
        >
          A continuación, te presento algunos de los proyectos seleccionados que
          reflejan mi dedicación al desarrollo front-end y back-end
        </Transition>
      </div>

      <div className="flex flex-col gap-10 md:mt-10 ">
        <div className="flex items-center gap-4 ">
          <Transition delay={0.6}>
            <button
              onClick={() => filterProyects("Landing")}
              className="border-b px-4 py-2 text-start hover:bg-[#D3E97A]  hover:text-black transition duration-200"
            >
              Landing Pages
            </button>
          </Transition>
          <Transition delay={0.8}>
            <button
              delay={1}
              onClick={() => filterProyects("Aplications web")}
              className="border-b px-4 py-2 text-start hover:bg-[#D3E97A]  hover:text-black transition duration-200"
            >
              Aplications Web
            </button>
          </Transition>
        </div>
        {filter?.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col  px-0 gap-10 md:grid md:grid-cols-2"
          >
            <Transition delay={0.5 + index * 0.1}>
              {" "}
              <article className="bg-[#1A1A1A] rounded-xl lg:w-[600px] ">
                <Image className="p-5  rounded-xl" src={item.image} />
              </article>
            </Transition>
            <Transition delay={0.5 + index * 0.1}>
              <p className="title-proyects text-[#fff] text-[24px] lg:text-[32px]">
                {item.title}
              </p>
              <p className="text-[#C7C7C7] text-[16px] lg:text-[18px]">
                {item.description}
              </p>
              <div className="divide-y flex flex-col gap-3 ">
                <span className="text-[#fff] lg:text-[16px]">
                  INFORMACION DEL PROYECTO
                </span>
                <div className="py-2 flex justify-between">
                  <span className="text-[14px] text-[#FFF]">Año</span>
                  <span className="text-[#C7C7C7]"> {item.year}</span>
                </div>
                <div className="border-b py-2 flex justify-between">
                  <span className="text-[14px] text-[#ffff]">Rol</span>
                  <span className="text-[#C7C7C7]"> {item.role}</span>
                </div>
                <div className="border-b py-2 flex justify-between  md:justify-between  gap-2">
                  <span className="text-[14px] text-[#ffff]  max-w-max">
                    Technologies
                  </span>
                  <div className=" flex justify-end md:flex md:gap-4 w-full md:w-auto gap-2">
                    {item.technologies?.map((item, index) => (
                      <Transition
                        delay={index * 0.1}
                        className="text-[#C7C7C7] md:border rounded-xl flex items-center justify-center md:px-[8px]  text-[10px] md:text-[12px] font-semibold"
                      >
                        {item}
                      </Transition>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex text-[#D3E97A] gap-5">
                <div className="flex items-center hover:scale-105 hover:shadow-md transition duration-200 ease-in-out">
                  <Link target="_blank" href={`${item.linkWeb}`}>
                    VER SITIO{" "}
                  </Link>
                  <MdArrowOutward />
                </div>
                <div className="flex items-center hover:scale-105 hover:shadow-md transition duration-200 ease-in-out">
                  <Link target="_blank" href={`${item.linkGithub}`}>
                    VER EN GITHUB{" "}
                  </Link>
                  <MdArrowOutward />
                </div>
              </div>
            </Transition>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyects;
