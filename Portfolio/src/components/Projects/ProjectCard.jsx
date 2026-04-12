import { projects } from '../../data/project'

function ProjectCard({ project }) {
  return (
    <div className="bg-[var(--cardBackground)] border-2 border-[var(--borderColor)] rounded-[20px] p-4 transition-all duration-300 hover:-translate-y-1 mb-10! mx-5!">

      <h3 className="text-[var(--primaryColor)] text-[20px]  font-bold">{project.title}</h3>
      <p className="text-[14px] leading-normal ">{project.description}</p>

      {/* Tech stack tags */}
      <div className="flex gap-2 flex-wrap mb-4">
        {project.techStack.map(tech => (
          <span key={tech} className="text-(--primaryColor) text-[14px] px-[10px] py-[3px] rounded-[50px] border-2 border-(--primaryColor) transition-all duration-300 hover:bg-[var(--primaryColor)] hover:text-white hover:-translate-y-0.5  mb-5!">
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-[10px]">
        <a href={project.liveUrl} target="_blank"
          className="flex-1 text-center py-[8px] bg-[var(--primaryColor)] text-white rounded-lg text-[13px] font-medium no-underline transition-all duration-300 hover:opacity-80 hover:-translate-y-0.5">
          Try It Out
        </a>
        <a href={project.githubUrl} target="_blank"
          className="flex-1 text-center py-[8px] border-2 border-[var(--borderColor)] rounded-lg text-[13px] no-underline text-[var(--textColor)] transition-all duration-300 hover:border-[var(--primaryColor)] hover:text-[var(--primaryColor)] hover:-translate-y-0.5">
          GitHub
        </a>
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