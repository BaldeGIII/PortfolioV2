import { useState, useEffect } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Experience from "./components/Experience"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false)
    }

    window.addEventListener("scroll", handleScroll, true)

    return () => {
      window.removeEventListener("scroll", handleScroll, true)
    }
  }, [])

  useEffect(() => {
    const handleScroll = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement
      const targetId = target.getAttribute("href")?.slice(1)
      if (targetId) {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          event.preventDefault()
          targetElement.scrollIntoView({ behavior: "smooth" })
          setMenuOpen(false)
        }
      }
    }

    const navLinks = document.querySelectorAll(".nav-links a")
    navLinks.forEach((link) => {
      link.addEventListener("click", handleScroll as EventListener)
    })
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleScroll as EventListener)
      })
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".nav-links") && !target.closest(".menu-button")) {
        setMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <div className="bg-primary text-accent-foreground">
      <header className="fixed top-0 left-0 w-full bg-primary/90 backdrop-blur-sm z-50 border-b border-accent/10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="font-mono text-primary-foreground">BG</div>
          <button
            className="menu-button md:hidden w-10 h-10 flex items-center justify-center text-accent-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </button>
          <nav className="hidden md:block">
            <div className="flex gap-8">
              <a href="#home" className="text-accent-foreground hover:text-primary-foreground transition-colors">
                Home
              </a>
              <a href="#about" className="text-accent-foreground hover:text-primary-foreground transition-colors">
                About Me
              </a>
              <a href="#experience" className="text-accent-foreground hover:text-primary-foreground transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-accent-foreground hover:text-primary-foreground transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-accent-foreground hover:text-primary-foreground transition-colors">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>
      
      {/* Mobile menu */}
      <nav
        className={`fixed inset-y-0 right-0 w-64 bg-secondary transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="py-2">
          <a href="#home" className="block px-4 py-2 text-primary hover:bg-gray-600 transition-colors">
            Home
          </a>
          <a href="#about" className="block px-4 py-2 text-primary hover:bg-gray-600 transition-colors">
            About Me
          </a>
          <a href="#experience" className="block px-4 py-2 text-primary hover:bg-gray-600 transition-colors">
            Experience
          </a>
          <a href="#projects" className="block px-4 py-2 text-primary hover:bg-gray-600 transition-colors">
            Projects
          </a>
          <a href="#contact" className="block px-4 py-2 text-primary hover:bg-gray-600 transition-colors">
            Contact
          </a>
        </div>
      </nav>

      <main className="pt-16">
        <div id="home" className="content">
          <Home />
        </div>
        <div id="about" className="content min-h-screen">
          <About />
        </div>
        <div id="experience" className="content min-h-screen">
          <Experience />
        </div>
        <div id="projects" className="content">
          <Projects />
        </div>
        <div id="contact" className="content min-h-screen">
          <Contact />
        </div>
      </main>
    </div>
  )
}

export default App

