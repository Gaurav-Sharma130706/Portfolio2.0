import React from 'react'
import {skills} from "../../data/skills.js"

function Skills() {
  return (
    <div className="bg-(--cardBackground) rounded-[20px] border-2 border-(--borderColor) pb-0.75 w-[95%]">
      <h1>Skills</h1>
      <div className="flex gap-2.5 flex-wrap m-[24px_10px]">
        {skills.map(skill => (
          <img key={skill.name} src={skill.iconUrl} alt={skill.name} className="h-12.5" />
        ))}
      </div>
    </div>
  )
}

export default Skills