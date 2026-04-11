import React from 'react'

function Footer() {
  return (
     <>
      <div className="w-full h-0.5 bg-(--borderColor)" />
      <div className="flex justify-center items-center gap-1.25 py-3">
        <span className="material-symbols-outlined text-[20px]">copyright</span>
        <p className="text-[15px]">{new Date().getFullYear()} Gaurav Sharma</p>
      </div>
    </>
  )
}

export default Footer