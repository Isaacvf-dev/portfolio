import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from "react-scroll";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textH1Y = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
  const textH2Y = useTransform(scrollYProgress, [0, 1], ["0%", "600%"])

  const backgroundStyle = {
    background: "linear-gradient(rgba(46, 16, 101, 0.1) 0%, rgba(46, 16, 101, 0.2) 50%, rgb(46, 16, 101) 100%)",    
  };

  return (
    <header
    ref={ref}
      style={backgroundStyle} 
      className="h-svh p-12 flex flex-col justify-center items-center text-slate-50 text-center relative"
    >
      <motion.img
        style={{ y: backgroundY }} 
        src="/assets/hero.svg" 
        loading="eager" 
        className="absolute w-full h-full top-0 -z-30 object-cover" 
      />
      <img src="/assets/image-bottom.png" loading="eager" className="absolute w-full h-full top-0 -z-10 object-cover" />
      <motion.div style={{ y: textH1Y }} className="relative -z-20 -mt-36 md:-mt-42 lg:-mt-48">               
        <h1
          data-aos="fade-right" 
          data-aos-delay="500"           
          className="text-6xl md:text-7xl lg:text-8xl font-['Lora'] [text-shadow:_0.08em_0.08em_0px_rgb(4_30_96_/_45%)]"
        >
          Hi, I'm Isaac
        </h1>        
        <h2 
          data-aos="fade-right"
          data-aos-delay="800"
          className="text-2xl md:text-3xl lg:text-4xl [text-shadow:_0.08em_0.08em_0px_rgb(4_30_96_/_45%)] mt-2 font-bold text-amber-400"
        >
          Front-End Developer
        </h2>
      </motion.div>
      <Link        
        to='about'
        spy={true} 
        smooth={true} 
        offset={0} 
        duration={500} 
        className="absolute bottom-5 motion-safe:animate-bounce text-amber-400 hover:animate-none cursor-pointer z-30" 
        
      >        
        <div className="p-1 rounded-full bg-transparent border-1 border-amber-400 transition duration-300 ease-in-out hover:bg-amber-400/5">
          <MdKeyboardDoubleArrowDown size={32} />
        </div>        
      </Link>
    </header>
  )
}