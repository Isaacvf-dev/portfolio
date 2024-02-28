import React from "react";

export default function About() {
  return (
    <section 
      className="bg-blue-900 flex flex-col  md:flex-row items-center justify-center p-4 md:p-8 lg:p-12 md:gap-16 min-h-svh"
    >
      <div className="w-[300px] h-[300px] rounded-full overflow-hidden">
        <img src='/src/assets/hero.svg' alt="Myself"  className="h-full object-cover  "/>
      </div>
      <div className="text-center md:text-left max-w-xl">
        <h3 className="font-bold text-amber-400">
          Excited to meet you!
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptatum doloribus rerum excepturi sint non veniam voluptatibus delectus sequi maxime animi quasi quo, consequuntur libero, impedit laudantium vitae ad quisquam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptatum doloribus rerum excepturi sint non veniam voluptatibus delectus sequi maxime animi quasi quo, consequuntur libero, impedit laudantium vitae ad quisquam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptatum doloribus rerum excepturi sint non veniam voluptatibus delectus sequi maxime animi quasi quo, consequuntur libero, impedit laudantium vitae ad quisquam.</p>
      </div>
      

    </section>
  )
}