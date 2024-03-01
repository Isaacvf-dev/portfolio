import React from "react";
import {SiLinkedin, SiGithub, SiGmail  } from "react-icons/si";


export default function Footer() {
  const socials = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/isaac-vieira-francelino/',
      icon: SiLinkedin,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Isaacvf-dev',
      icon: SiGithub,
    },
    {
      name: 'Email',
      url: 'mailto:isaacvf.dev@gmail.com',
      icon: SiGmail,
    },
  ]
  return (
    <footer className="text-slate-50 text-center bg-violet-900 m-auto">
      <div className="m-auto flex flex-col md:flex-row items-center gap-4 justify-around py-6 px-4 max-w-[600px]">
        <p>Designed and coded with <span className="text-amber-400">♥</span> by Isaac Vieira</p>
        <div className=" flex gap-4">
          {socials.map( socialButton => (
            <a 
              key={socialButton.name}
              href={socialButton.url}
              target="_blank"
            >
              <socialButton.icon size={18}/>
            </a>
            
          ) )}
        </div>
      </div>

    </footer>
  )
}