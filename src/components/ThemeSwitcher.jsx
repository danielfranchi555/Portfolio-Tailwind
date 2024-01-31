'use client'
import { useTheme } from 'next-themes'
import { Bssun } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";




const ThemeSwitcher = () => {

    const { theme, setTheme } = useTheme()

    return (
        <>
        </>
        // <div className=' fixed bottom-[40px] right-[20px] hover:bg-blue-600 bg-[#3154E2] max-w-max rounded-full px-1 py-1 '>
        //     {theme === "dark" ?
        //         (<CiLight size={40} cursor='pointer' onClick={() => setTheme("light")}>lightMode</CiLight>) :
        //         (<MdDarkMode size={40} cursor='pointer' onClick={() => setTheme("dark")}>darkmode</MdDarkMode>)}
        // </div>
    )
}

export default ThemeSwitcher
