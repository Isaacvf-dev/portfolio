import React from "react";


export default function Hero() {
  return (
    <header 
      className="bg-hero-pattern h-svh bg-cover bg-no-repeat bg-center bg-fixed p-12 flex flex-col justify-center items-center text-slate-50 text-center">
      <div className="">
        <h1 className="text-6xl md:text-9xl font-['Lora'] font-bold">
          Hi, I'm Isaac
        </h1>
        <h2 className="text-3xl md:text-6xl">
          Front-End Developer
        </h2>
      </div>
    </header>
  )
}