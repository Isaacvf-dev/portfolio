import React from "react";

export default function About() {
  return (
    <section
      id="About" 
      className="bg-violet-950 flex flex-col  lg:flex-row items-center justify-center p-4 md:p-8 lg:p-12 md:gap-16 min-h-svh"
    >
      <div className="w-[300px] h-[300px] rounded-full overflow-hidden">
        <img src='/src/assets/hero.svg' alt="Myself"  className="h-full object-cover  "/>
      </div>
      <div className="text-center lg:text-left max-w-xl">
        <h3 className="font-bold text-amber-400 text-3xl md:text-5xl mb-4 md:mb-8">
          NICE TO MEET YOU!
        </h3>
        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptatum doloribus rerum excepturi sint non veniam voluptatibus delectus sequi maxime animi quasi quo, consequuntur libero, impedit laudantium vitae ad quisquam.</p>
        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptatum doloribus rerum excepturi sint non veniam voluptatibus delectus sequi maxime animi quasi quo, consequuntur libero, impedit laudantium vitae ad quisquam.</p>
        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptatum doloribus rerum excepturi sint non veniam voluptatibus delectus sequi maxime animi quasi quo, consequuntur libero, impedit laudantium vitae ad quisquam.</p>
      </div>
      

    </section>
  )
}