import React from "react";
import { projectsData } from "./ProjectsData";
import { stacksData } from "./StacksData";

export default function Projects() {
  const findStack = (tagName) => {
    return stacksData.find(stack => stack.name === tagName);
  }

  const projects = projectsData.map(project => {
    const projectStacks = project.tags.map(tag => findStack(tag)).filter(Boolean)

    return (
      <div 
        className="max-w-[300px] bg-violet-900 border border-violet-900 rounded-lg shadow flex flex-col text-slate-50"
        data-aos="fade-up"
        key={project.id}
      >
        <a href={project.live} target="_blank">
          <img src={project.image} className="rounded-t-lg w-full h-[180px] object-cover" title="Live preview"/>
        </a>
        <div className="p-5">
          <a href={project.live} target="_blank">
            <h5 className="mb-2 text-2xl font-bold tracking-tight" title="Live preview">
              {project.title}
            </h5>
          </a>
          <p className="mb-4 font-normal text-sm">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 text-amber-400">
            {projectStacks.map(stack => (
              <stack.icon size={16} key={stack.icon} title={stack.name}/>
            ))}
          </div>          
        </div>
        
        <div className="px-4 pb-4 mt-auto">
            <a 
              href={project.code}
              target="_blank" 
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View code
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        
      </div>
    )
  })
  return (
    <section
      id="projects"
      className="bg-violet-950 flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 md:gap-16 min-h-svh"
    >
     <h3
      className="font-bold text-amber-400 text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-8"
      data-aos="fade-up"
     >
      Projects I built
    </h3>

    <div className="flex flex-wrap gap-4 lg:gap-12 justify-center max-w-5xl p-6 md:p-0">
      {projects}  
    </div> 

    </section>
  )
}