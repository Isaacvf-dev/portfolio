import React from "react";

const stackData = [
  {
    name: 'HTML',
    icon: 'DiHtml5',
  },
  {
    name: 'CSS',
    icon: 'DiCss3',
  },
  {
    name: 'JavaScript',
    icon: 'DiJavascript',
  },
  {
    name: 'React',
    icon: 'DiReact',
  },
  {
    name: 'Vue',
    icon: 'DiReact',
  },
  {
    name: 'Tailwind CSS',
    icon: 'SiTailwindcss',
  },  
  {
    name: 'Figma',
    icon: 'SiFigma',
  },
  {
    name: 'GitHub',
    icon: 'DiGithubAlt',
  },
  {
    name: 'npm',
    icon: 'DiNpm',
  },
  {
    name: 'VSCode',
    icon: 'DiVisualstudio',
  },

  {
    name: 'Netlify',
    icon: 'SiNetlify',
  },
]

export default function Tech() {

  return (
    <section
      id="Tech"
      className="bg-tech-pattern h-svh bg-cover bg-no-repeat bg-center bg-fixed p-12 flex flex-col justify-center items-center text-slate-50 text-center"
    >
     <h3
      className="font-bold text-amber-400 text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-8"
      data-aos="fade-up"
     >
      Tech I use
    </h3> 

    </section>
  )
}