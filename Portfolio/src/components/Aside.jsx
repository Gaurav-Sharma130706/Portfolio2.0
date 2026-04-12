import React from 'react'
import profileImage from '../assets/IMG_3330.webp'

function Aside() {
  return (
    <div className="w-full flex flex-col items-center bg-(--cardBackground) rounded-[20px] pb-0.75 border-2 border-(--borderColor) transition-all duration-300 sticky top-5">
      
      <img 
        src={profileImage} 
        alt="Profile Image" 
        className="w-[58%] my-5! mx-5! rounded-[10px]"
      />

      <h2 className="text-(--primaryColor) mt-2.5 font-bold text-2xl">Gaurav Sharma</h2>

      <p className=" text-[16px]! text-center mx-1.25! mt-1.25!">
        Web Development | MERN | Programing in C++ | Exploring Full-Stack Development
      </p>

      <div className="w-full h-0.5 bg-(--borderColor) transition-colors duration-300" />

      <p className="text-[14px]! text-center mx-0.5! my-0.5! ">Information Technology (I.T.)</p>
      <p className="text-[14px]! text-center mx-0.5! my-0.5! ">Indian Institute of Information Technology, Una</p>

    </div>
  )
}

export default Aside