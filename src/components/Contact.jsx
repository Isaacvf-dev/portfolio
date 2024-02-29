import React from "react";


export default function Contact() {
  const backgroundStyle = {
    background: "linear-gradient(rgb(46, 16, 101) 0%, rgba(46, 16, 101, 0.2) 50%, rgb(46, 16, 101) 100%) 0% 0% / cover, url('/src/assets/contact.svg') center",    
  };
  return (
    <section
      style={backgroundStyle}
      id="Contact"
      className="bg-contact-pattern h-svh bg-no-repeat bg-fixed p-12 flex flex-col justify-center items-center text-slate-50 text-center"
    >
     <h3
      className="font-bold text-amber-400 text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-8"
      data-aos="fade-up"
     >
      REACH OUT
    </h3> 

    </section>
  )
}