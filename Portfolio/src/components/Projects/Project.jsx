import React from 'react'
import {projects} from '../../data/project.js'
import ProjectCard from './ProjectCard'


function Project() {
  return (
    
    <div className="bg-(--cardBackground) rounded-[20px] border-2 border-(--borderColor) p-0.75! w-[95%]">
        <h1 className='font-bold mb-5!'>Projects</h1>
        {projects.map((project)=>(
            <ProjectCard key={project.id} project={project}/>
        ))}
    </div>
  )
}

export default Project