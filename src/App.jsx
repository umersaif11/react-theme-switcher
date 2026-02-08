
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'

function App() {
  const [themeMode, setThemeMode] = useState
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    let htmlClass = document.querySelector("html").classList
    htmlClass.remove("light", "dark")
    htmlClass.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      
<div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            
        </div>

        <div className="w-full max-w-sm mx-auto">
            
        </div>
    </div>
</div>

    </ThemeProvider>
  )
}

export default App
