"use client";
import Image from "next/image";
import foto from "../../public/foto-cv-3.png";
import FadeLeft from "./fade/FadeLeft";
import FadeRight from "./fade/FadeRight";
import Fade from "./fade/Fade";
import Link from "next/link";
import github from "../../public/github-icon.svg";
import linkedin from "../../public/linkedin-icon.svg";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col gap-5 md:flex md:flex-row  py-[64px] md:py-0 md:mb-20  lg:h-[600px]  md:justify-between   md:gap-0  ">
        <article className="flex flex-col gap-4  md:flex md:justify-center">
          <FadeRight>
            <h1 className="text-[#ffff] text-4xl md:text-5xl lg:text-7xl">
              hola, mi nombre es Daniel Franchi.
            </h1>
          </FadeRight>
          <FadeRight>
            <p className="text-[#C7C7C7] md:text-1xl  lg:text-[18px] max-w-[500px] ">
              Ofrezco soluciones personalizadas que impulsan el crecimiento y el
              éxito de tu negocio, me esfuerzo por superar tus expectativas y
              alcanzar resultados excepcionales juntos
            </p>
          </FadeRight>
          <FadeRight>
            <div className="flex items-center gap-3">
              <Link href="#contacto">
                <button className="bg-[#D3E97A] py-3 px-4 rounded-xl text-black hover:bg-[#dcff51] hover:scale-105 hover:shadow-md transition duration-200 ease-in-out">
                  Contact me
                </button>{" "}
              </Link>
              <Link
                target="_blank"
                href={"https://github.com/danielfranchi555"}
              >
                <Image
                  src={github}
                  className="hover:scale-105 transition duration-200 ease-in-out"
                />
              </Link>
              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/danielfranchijs/"}
              >
                <Image
                  src={linkedin}
                  className="hover:scale-105 transition duration-200 ease-in-out"
                />{" "}
              </Link>
            </div>
          </FadeRight>
        </article>
        <article className="md:flex">
          <FadeLeft className="md:w-[300px] lg:w-[500px]">
            <Image
              src="https://res.cloudinary.com/dcotr8wpa/image/upload/v1719794411/portfolio/img-portfolio_cplvm4.webp"
              width={600}
              height={600}
              className="rounded-xl w-full h-full object-cover "
            />
          </FadeLeft>
        </article>
      </div>
    </>
  );
};

export default Hero;
