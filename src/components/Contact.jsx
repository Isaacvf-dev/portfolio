import React from "react";
import emailjs from '@emailjs/browser';
import FormData from "./FormData";

export default function Contact() {
  const form = React.useRef()
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);

  const backgroundStyle = {
    background: "linear-gradient(rgb(46, 16, 101) 0%, rgba(46, 16, 101, 0.2) 50%, rgb(46, 16, 101) 100%) 0% 0% / cover, url('/assets/contact.svg') center",    
  }
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dwpcf3d', 'template_2c775de', form.current, {
        publicKey: 'zUz0kI_lvrQLsWvSe',
      })
      .then(
        () => {
          setShowSuccessMessage(true);
          e.target.reset()
        },
        (error) => {
          alert('Oops, something went wrong!')
        },
      );      
      
  };

  return (
    <section
      style={backgroundStyle}
      id="contact"
      className="bg-contact-pattern h-svh bg-no-repeat bg-fixed p-12 flex flex-col gap-4 justify-center items-center"
    >
     <h3
      className="font-bold text-amber-400 text-center text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-8"
      data-aos="fade-up"
     >
      REACH OUT
    </h3>
    <form 
      ref={form} 
      className="max-w-[600px] w-full flex flex-col gap-2 group"
      onSubmit={sendEmail}
      
    > 
      <FormData />      
      <button 
        type="submit" 
        className="bg-amber-400 hover:bg-amber-500 shadow-md rounded-md py-1 text-violet-950 text-sm font-medium -mt-8 "
      >
        SEND MESSAGE
      </button>
      {showSuccessMessage && (
        <p className="text-green-500">Thanks for the message!</p>
      )}      
    </form> 

    </section>
  )
}