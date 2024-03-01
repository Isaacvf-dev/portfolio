import React from "react";
import { List, UserCircle , Robot, EnvelopeSimple, Palette, X  } from "@phosphor-icons/react";
import { Link } from "react-scroll"
export default function Menu() {
  const [isOpen, setIsOpen] = React.useState(false)
  
  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  const actions = [
    {icon: EnvelopeSimple, name:'contact'},    
    {icon: Palette , name: 'projects'},
    {icon: Robot, name: 'tech'},
    {icon: UserCircle, name: 'about'},
  ]

  return (
    <div className="fixed flex z-10 flex-col-reverse bottom-4 right-4" onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}  >
      <button
        onClick={toggleMenu}           
        className={`p-3 bg-violet-500 rounded-full shadow-md text-white focus:outline-none focus:ring focus:ring-violet-300 transition-all duration-300 transform hover:rotate-45 ${isOpen ? "rotate-45" : ""}`}        
      >
        {isOpen ? <X size={24} className="pointer-events-none"/> : <List size={24} className="pointer-events-none"/>}
        
      </button>

      {isOpen && (
        <div className="flex flex-col-reverse gap-2 items-center -mb-6 pb-10">
          {actions.map(action => (
            <Link
              key={action.name}
              to={action.name} 
              spy={true} 
              smooth={true} 
              offset={0} 
              duration={500}
              title={action.name}
              className="text-white p-2 bg-violet-700 opacity-75 hover:bg-violet-500 rounded-full focus:outline-none focus:ring focus:ring-violet-500 animate-slide-in cursor-pointer"              
            >
              <action.icon size={24} />
            </Link>
          ))}
        
          
          
        </div>
      )}
    </div>
  )
}