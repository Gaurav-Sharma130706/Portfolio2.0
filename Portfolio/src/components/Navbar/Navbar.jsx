import React from 'react'
import {useTheme} from '../../contexts/theme.js'
import githubLogo from '../../assets/2993771_github_social media_icon.svg'
import linkedinLogo from '../../assets/5296501_linkedin_network_linkedin logo_icon.svg'


function Navbar() {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <>
      <div className="flex w-full justify-between items-center flex-wrap py-[15px] px-[25px]">
        
        {/* Left */}
        <div className="flex items-center gap-[25px]">
          
          <div className="text-[var(--primaryColor)] flex items-center">
            <span className="material-symbols-outlined !text-[40px] ">Person</span>
          </div>

          <div className="flex items-center text-[var(--primaryColor)]">
            <span className="material-symbols-outlined !text-[40px] ">arrow_back_ios</span>
            <span className="font-bold text-[30px] ml-[-8px] text-[var(--secondaryColor)]">Gaurav</span>
            <span className="material-symbols-outlined !text-[40px]">arrow_forward_ios</span>
          </div>

          <button
            onClick={toggleTheme}
            className="bg-transparent border-2 border-[var(--borderColor)] rounded-[50px] px-[16px] py-[8px] flex items-center gap-[8px] text-[var(--textColor)] text-[14px] font-medium transition-all duration-300 hover:border-[var(--primaryColor)] hover:-translate-y-[2px] group hover:cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:rotate-180">
              {darkMode ? 'light_mode' : 'dark_mode'}
            </span>
            <span>{darkMode ? 'Light' : 'Dark'}</span>
          </button>
        </div>

        {/* Right */}
        <div className="flex items-center gap-[30px]">
          
          <div className="flex gap-[25px] items-center">
            <a href="" className="text-[var(--textColor)] no-underline text-[16px] font-medium transition-all duration-300 hover:text-[var(--primaryColor)] hover:-translate-y-[2px] relative group">
              Contact Me
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-[var(--primaryColor)] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="" className="text-[var(--textColor)] no-underline text-[16px] font-medium transition-all duration-300 hover:text-[var(--primaryColor)] hover:-translate-y-[2px] relative group">
              Resume
              <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-[var(--primaryColor)] transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

         <div className="flex gap-[15px] items-center">
  <a href="https://github.com/Gaurav-Sharma130706" target="_blank" className="transition-transform duration-300 hover:scale-110">
    <img src={githubLogo} alt="Github" className="h-[20px]" />
  </a>
  <a href="https://www.linkedin.com/in/gaurav-sharma-0a6a65323/" target="_blank" className="transition-transform duration-300 hover:scale-110">
    <img src={linkedinLogo} alt="LinkedIn" className="h-[20px]" />
  </a>
</div>

        </div>
      </div>

      
    </>
  )
}

export default Navbar