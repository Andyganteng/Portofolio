import { createContext, useContext, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'
import './App.css'

export const ThemeContext = createContext()
export const useTheme = () => useContext(ThemeContext)

function App() {
    const [isDark, setIsDark] = useState(() => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDark)
    }, [isDark])

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            <div className="min-h-screen">
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
                <MusicPlayer />
            </div>
        </ThemeContext.Provider>
    )
}

export default App
