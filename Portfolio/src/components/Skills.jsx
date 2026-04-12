import React from 'react'
import {skills} from "../data/skills"

function Skills() {
  return (
    <div className="bg-(--cardBackground) rounded-[20px] border-2 border-(--borderColor) p-0.75! w-[95%]">
      <h1 className='font-bold'>Skills</h1>
      <div className="flex gap-2.5 flex-wrap m-[24px_10px] px-2! py-8!">
        {skills.map(skill => (
          <img key={skill.name} src={skill.iconUrl} alt={skill.name} className="h-15" />
        ))}
      </div>
    </div>
  )
}

export default Skills