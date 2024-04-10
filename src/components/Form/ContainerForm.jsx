import linkedin from "../../../public/linkedin-icon.svg";
import github from "../../../public/github-icon.svg";
import Image from "next/image";
import Link from "next/link";
import Form from "./Form";

const ContainerForm = () => {

  return (
    <div
      id="contacto"
      className="  mt-20 w-full md:w-[100%] mx-auto flex flex-col gap-5 lg:flex lg:flex-col lg:gap-20 border-t py-20"
    >
      <div className=" flex flex-col  gap-10 lg:grid lg:grid-cols-2 ">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-[#ffff] lg:text-[66px]">
            Listo para colaborar en proyectos innovadores. ¡Hablemos!</h3>
            <Link href={"mailto:danielfranchi3@gmail.com"}>
              <p className="text-[#FFFF]">Email: danielfranchi3@gmail.com</p>{" "}
            </Link>
          </div>

          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/danielfranchijs/"}
            >
              <Image src={linkedin} className="hover:scale-105 transition duration-200 ease-in-out"  />
            </Link>
            <Link target="_blank" href={"https://github.com/danielfranchi555"}>
              <Image src={github}  className="hover:scale-105 transition duration-200 ease-in-out" />
            </Link>
          </div>
        </div>

        <div className="h-[100%]  w-[100%]  md:w-[100%]  ">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContainerForm;
