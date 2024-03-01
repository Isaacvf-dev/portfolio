import React from "react"

const inputLabelData = [
  {type: "text", name: "user_name", placeholder: "Name*"},
  {type: "email", name: "user_email", placeholder: "Email*"},
  {type: "text", name: "subject", placeholder: "Subject*"},  
]

export default function FormData() {
  const inputClass = "block py-2.5 px-2 w-full text-sm text-slate-50 bg-gray-500/15 border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-amber-400 peer resize-none"

  const labelClass = "peer-focus:font-medium absolute text-sm pl-2 peer-focus:pl-0 text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-amber-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"

  return (
    <div className="relative z-0 w-full mb-5 group" data-aos="fade-up">
      {inputLabelData.map(data => (
        <div className="relative z-0 w-full mb-5 group" key={data.name}>
          <input 
            type={data.type} 
            name={data.name} 
            id={data.name} 
            className={inputClass} 
            placeholder=" " 
            required 
          />
          <label htmlFor={data.name} className={labelClass}>
            {data.placeholder}
          </label>
        </div> 
      ))}
      <div className="relative z-0 w-full mb-5 group">
        <textarea 
          name="message" 
          id="message" 
          placeholder="" 
          className={inputClass}
          rows={6}
        >          
        </textarea>
        <label htmlFor="message" className={labelClass}>
            Message*
        </label>
      </div>
      
    </div>
  )
}