import React from "react";

export default function About() {
  return (
    <section
      id="About" 
      className="bg-violet-950 flex flex-col  lg:flex-row items-center justify-center p-4 md:p-8 lg:p-12 md:gap-16 min-h-svh"
      
    >
      <div className="w-[300px] h-[300px] rounded-full overflow-hidden">
        <img src='/src/assets/avatar.png' alt="Myself"  className="object-cover  "/>
      </div>
      <div className="text-center lg:text-left max-w-xl">
        <h3 
          className="font-bold text-amber-400 text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-8"
          data-aos="fade-up"
        >
          NICE TO MEET YOU!
        </h3>
        <p 
          className="text-white"
          data-aos="fade-up"
        >
            I'm a developer based in Brazil. My professional background spans agronomy, electrical engineering, administrative processes, and after these career transitions, I've decided to dive into Front-End Development with some cozy VSCode sessions. I am currently aiming to become an excellent developer! Therefore, I'm seeking junior opportunities where I can put my skills to the test and conquer the world, one application at a time.
        </p>
        <br></br>
        <p 
          className="text-white"
          data-aos="fade-up"
        >
            I'm particularly driven by the challenge of problem-solving and making an impact in the tech industry. I'm pretty good at logical thinking and enjoy diving into complex problems, which is why I find coding to be incredibly rewarding. Let's collaborate on building something remarkable and contribute to making the internet a better place through awesome apps!
        </p>
        
        
      </div>
      

    </section>
  )
}