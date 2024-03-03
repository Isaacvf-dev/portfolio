import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from "react-scroll";

export default function Hero() {
  const backgroundStyle = {
    background: "linear-gradient(rgba(46, 16, 101, 0.1) 0%, rgba(46, 16, 101, 0.2) 50%, rgb(46, 16, 101) 100%)",    
  };

  return (
    <header
      style={backgroundStyle} 
      className="h-svh p-12 flex flex-col justify-center items-center text-slate-50 text-center relative"
    >
      <img src="/assets/hero.svg" loading="eager" className="fixed w-full h-full top-0 -z-10 object-cover" />
      <div>               
        <h1 
          data-aos="fade-right" 
          data-aos-delay="500" 
          className="text-7xl md:text-8xl lg:text-9xl font-['Lora'] [text-shadow:_0.08em_0.08em_0px_rgb(4_30_96_/_45%)] "
        >
          Hi, I'm Isaac
        </h1>        
        <h2 
          data-aos="fade-right"
          data-aos-delay="800" 
          className="text-4xl md:text-5xl lg:text-6xl [text-shadow:_0.08em_0.08em_0px_rgb(4_30_96_/_45%)] mt-4 md:mt-8 font-bold text-amber-400"
        >
          Front-End Developer
        </h2>
      </div>
      <Link        
        to='about'
        spy={true} 
        smooth={true} 
        offset={0} 
        duration={500} 
        className="absolute bottom-5 motion-safe:animate-bounce text-amber-400 hover:animate-none cursor-pointer" 
        
      >        
        <div className="p-1 rounded-full bg-transparent border-1 border-amber-400 transition duration-300 ease-in-out hover:bg-amber-400/5">
          <MdKeyboardDoubleArrowDown size={32} />
        </div>        
      </Link>
    </header>
  )
}