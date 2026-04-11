import Container from "./components/Container/Container"
import Navbar from "./components/Navbar/Navbar"
import { useContext, useState, useEffect } from "react"
import { ThemeContext,ThemeProvider } from "./contexts/theme"


function App() {
  const [darkMode, setDarkMode]= useState(true)

  const toggleTheme = () => {
  setDarkMode(prev => {
    const newMode = !prev
    if (newMode) {
      document.documentElement.classList.add('light')
    } else {
      document.documentElement.classList.remove('light')
    }
    return newMode
  })
  }


  useEffect(() => {
  document.documentElement.classList.add('light')
}, [])


  

  return (
    <>
    <ThemeProvider value={{darkMode, toggleTheme}}>
      <div>
      <Container>
        <Navbar/>
      </Container>
      </div>
    </ThemeProvider>
   
    </>
  )
}

export default App
