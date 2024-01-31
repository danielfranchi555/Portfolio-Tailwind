import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Form from "@/components/Form/Form";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Arrow from "@/components/arrow/Arrow";
import Proyects from "@/components/proyects/Proyects";
import Skills from "@/components/skills/Skills";

export default function Home() {
 
  return (
    <main className='w-full bg-[#0A0A0A] '>
          <div className='w-full '>
            <NavBar />
          </div>
          <div className=' mt-0 md:mt-0 w-[90%] md:max-w-screen-xl mx-auto overflow-hidden  md:overflow-hidden lg:overflow-visible '>
            <Hero />
            <Arrow/>
            <Skills/>
            <Proyects />
            <AboutMe />
            <Form/>
            <Footer />
          </div>
        <ThemeSwitcher/>
    </main>
  )
}
