import React from "react"
import Hero from "./components/Hero"
import AOS from "aos"
import "aos/dist/aos.css"
import About from "./components/About"

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    })
    AOS.refresh()
  }, [])  

  return (
    <>
      <Hero />
      <main>
        <About />
      </main>
      
    </>
  )
}

export default App
