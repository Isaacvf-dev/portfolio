import React from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = React.useRef()

  const backgroundStyle = {
    background: "linear-gradient(rgb(46, 16, 101) 0%, rgba(46, 16, 101, 0.2) 50%, rgb(46, 16, 101) 100%) 0% 0% / cover, url('/src/assets/contact.svg') center",    
  }

  
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dwpcf3d', 'template_2c775de', form.current, {
        publicKey: 'zUz0kI_lvrQLsWvSe',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      
      e.target.reset()
  };

  return (
    <section
      style={backgroundStyle}
      id="contact"
      className="bg-contact-pattern h-svh bg-no-repeat bg-fixed p-12 flex flex-col justify-center items-center  text-center"
    >
     <h3
      className="font-bold text-amber-400 text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-8"
      data-aos="fade-up"
     >
      REACH OUT
    </h3>
    <form 
      ref={form} 
      className="max-w-[600px] w-full flex flex-col gap-2"
      onSubmit={sendEmail}
    >      
      <input className="w-full" type="text" placeholder="Full name" name="user_name" required />
      <input className="w-full" type="email" placeholder="Email" name="user_email" required/>
      <input className="w-full" type="text" placeholder="Subject" name="subject" required/>
      <textarea className="w-full" name="message" rows={5}></textarea>
      <button type="submit" className="bg-amber-400 shadow-md rounded-md py-1 text-violet-950 text-sm">
        SEND MESSAGE
      </button>      
    </form> 

    </section>
  )
}