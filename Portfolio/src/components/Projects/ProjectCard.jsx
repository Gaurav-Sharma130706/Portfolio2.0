import { projects } from '../../data/project'

function ProjectCard({ project }) {
  return (
    <div className="p-4 border-b border-[var(--borderColor)] last:border-b-0 ">
      
      <h3 className="text-[var(--primaryColor)] text-[30px] font-bold mb-2">{project.title}</h3>
      <p className="text-[14px] leading-normal mb-3">{project.description}</p>

      <div className="flex gap-2 flex-wrap pb-4 pl-3">
          {project.techStack.map(tech => (
              <span key={tech} className="text-[12px] px-[10px] py-[3px] rounded-[50px] border-2" 
                    style={{ color: 'var(--tagText)', borderColor: 'var(--tagBorder)' }}>
                      {tech}
              </span>
          ))}
      </div>

      <div className="flex gap-[10px]">
        <a href={project.liveUrl} target="_blank" className="flex-1 text-center py-[8px] border-2 border-[var(--borderColor)] rounded-lg text-[13px] no-underline text-[var(--textColor)] transition-all duration-300 hover:border-[var(--primaryColor)] hover:text-[var(--primaryColor)] hover:-translate-y-0.5">Try It Out</a>
        <a href={project.githubUrl} target="_blank" className="flex-1 text-center py-[8px] border-2 border-[var(--borderColor)] rounded-lg text-[13px] no-underline text-[var(--textColor)] transition-all duration-300 hover:border-[var(--primaryColor)] hover:text-[var(--primaryColor)] hover:-translate-y-0.5">GitHub</a>
      </div>

    </div>
  )
}

function Projects() {
  return (
    <div className="bg-[var(--cardBackground)] rounded-[20px] pb-3 border-2 border-[var(--borderColor)] transition-all duration-300">
      <h1>Projects</h1>
      <div className="grid grid-cols-2 gap-4 m-4">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectCard