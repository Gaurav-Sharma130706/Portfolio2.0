import React from 'react'
import { useTheme } from '../../contexts/theme.js'
import githubLogo from '../../assets/2993771_github_social media_icon.svg'
import linkedinLogo from '../../assets/5296501_linkedin_network_linkedin logo_icon.svg'



function Navbar() {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <>
      <div className="flex w-full justify-between items-center flex-wrap py-4.5 px-6.25">

        {/* Left */}
        <div className="flex items-center gap-6.25">

          <div className="text-(--primaryColor) flex items-center">
            <span className="material-symbols-outlined text-[40px]! ">Person</span>
          </div>

          <div className="flex items-center text-(--primaryColor)">
            <span className="material-symbols-outlined text-[40px]! ">arrow_back_ios</span>
            <span className="font-bold text-[30px] -ml-2 text-(--secondaryColor)">Gaurav</span>
            <span className="material-symbols-outlined text-[40px]!">arrow_forward_ios</span>
          </div>

          <button
            onClick={toggleTheme}
            className="bg-transparent border-2 border-(--borderColor) rounded-[50px] px-4 py-2 flex items-center gap-2 text-(--textColor) text-[14px] font-medium transition-all duration-300 hover:border-(--primaryColor) hover:-translate-y-0.5 group hover:cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:rotate-180">
              {darkMode ? 'light_mode' : 'dark_mode'}
            </span>
            <span>{darkMode ? 'Light' : 'Dark'}</span>
          </button>
        </div>

        {/* Right */}
        <div className="flex items-center gap-7.5">

          <div className="flex gap-6.25 items-center">
            <a href="" className="text-(--textColor) no-underline text-[16px] font-medium transition-all duration-300 hover:text-(--primaryColor) hover:-translate-y-0.5 relative group">
              Contact Me
              <span className="absolute -bottom-1.25 left-0 w-0 h-0.5 bg-(--primaryColor) transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="" className="text-(--textColor) no-underline text-[16px] font-medium transition-all duration-300 hover:text-(--primaryColor) hover:-translate-y-0.5 relative group">
              Resume
              <span className="absolute -bottom-1.25 left-0 w-0 h-0.5 bg-(--primaryColor) transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          <div className="flex gap-3.75 items-center">
            <a href="https://github.com/Gaurav-Sharma130706" target="_blank" className="transition-transform duration-300 hover:scale-110">
              <img src={githubLogo} alt="Github" className="h-5" />
            </a>
            <a href="https://www.linkedin.com/in/gaurav-sharma-0a6a65323/" target="_blank" className="transition-transform duration-300 hover:scale-110">
              <img src={linkedinLogo} alt="LinkedIn" className="h-5" />
            </a>
          </div>

        </div>
      </div>

      <div className="w-full h-0.5 bg-(--borderColor)" />


    </>
  )
}

export default Navbar