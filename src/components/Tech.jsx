import React from "react";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiVuedotjs , SiTailwindcss, SiFigma, SiGit, SiNpm, SiVisualstudiocode, SiNetlify } from "react-icons/si";


const stackData = [
  {
    name: 'HTML',
    icon: SiHtml5,
  },
  {
    name: 'CSS',
    icon: SiCss3,
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
  },
  {
    name: 'React',
    icon: SiReact,
  },
  {
    name: 'Vue',
    icon: SiVuedotjs,
  },
  {
    name: 'Tailwindcss',
    icon: SiTailwindcss,
  },  
  {
    name: 'Figma',
    icon: SiFigma,
  },
  {
    name: 'Git',
    icon: SiGit,
  },
  {
    name: 'npm',
    icon: SiNpm,
  },
  {
    name: 'VSCode',
    icon: SiVisualstudiocode,
  },
  {
    name: 'Netlify',
    icon: SiNetlify,
  },
];

export default function Tech() {
  const backgroundStyle = {
    background: "linear-gradient(rgb(46, 16, 101) 0%, rgba(46, 16, 101, 0.2) 50%, rgb(46, 16, 101) 100%) 0% 0% / cover, url('/src/assets/tech.svg')",    
  };
  return (
    <section
      id="Tech"
      style={backgroundStyle}
      className="min-h-svh bg-cover bg-no-repeat bg-center bg-fixed p-4 md:p-8 lg:p-12 flex flex-col justify-center items-center text-slate-50 text-center"
    >
      <div>
        <h3
          className="font-bold text-amber-400 text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-8"
          data-aos="fade-up"
        >
          Tech I use
        </h3> 
    
      </div> 
      <div className="flex flex-wrap gap-4 lg:gap-12 justify-center py-8 px-4 max-w-5xl">
        {stackData.map(stack => (
          <div 
            key={stack.name}
            className="flex flex-col items-center justify-center p-4 bg-violet-500 rounded-xl min-w-24"
            data-aos="fade-up"
          >
            <stack.icon size={32}/>
            <span className="mt-2 lg:mt-3">{stack.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}