import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Effect to close menu on any page scroll
  useEffect(() => {
    const handlePageScroll = () => {
      if (menuOpen) {
        // Only close if open
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handlePageScroll, true);

    return () => {
      window.removeEventListener("scroll", handlePageScroll, true);
    };
  }, [menuOpen]); // Add menuOpen: re-evaluate if menuOpen state changes

  // Effect for handling navigation link clicks (smooth scroll)
  useEffect(() => {
    const handleNavClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      // Ensure the clicked element is an anchor and has an href starting with #
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        const targetId = target.getAttribute("href")?.slice(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false); // Close mobile menu on navigation
          }
        }
      }
    };

    // More specific selectors for navigation links in both desktop and mobile menus
    const navLinks = document.querySelectorAll(
      'header nav a[href^="#"], nav[className*="fixed inset-y-0"] a[href^="#"]'
    );
    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavClick as EventListener);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavClick as EventListener);
      });
    };
  }, []); // Empty dependency array is acceptable if nav structure doesn't change dynamically based on props/state

  // Effect for handling clicks outside the mobile menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Check if the click is outside the mobile menu and the menu button
      // The selector for the mobile menu should be specific to its structure
      const mobileMenu = document.querySelector(
        'nav[className*="fixed inset-y-0 right-0"]'
      );

      if (
        menuOpen && // Only act if menu is open
        mobileMenu &&
        !mobileMenu.contains(target) && // Click is outside the mobile menu
        !target.closest(".menu-button") // Click is not on the menu button
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]); // Add menuOpen to dependency array

  return (
    <div className="bg-slate-950 text-slate-300 font-sans">
      <header className="fixed top-4 left-4 md:top-10 md:left-12 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="menu-button text-base md:text-lg font-bold text-slate-100 hover:text-blue-400 transition-colors focus:outline-none"
        >
          BG<span className="text-blue-500">III</span>
        </button>
      </header>

      {/* Desktop menu */}
      <nav
        className={`hidden md:block fixed top-24 left-12 bg-slate-900/95 backdrop-blur-sm rounded-lg border border-slate-800 shadow-xl transform transition-all duration-300 ease-in-out z-40 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        aria-label="Desktop navigation"
      >
        <div className="py-2 flex flex-col min-w-[140px]">
          <a
            href="#home"
            className="block px-6 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 transition-colors text-sm font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-6 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 transition-colors text-sm font-medium"
          >
            About
          </a>
          <a
            href="#experience"
            className="block px-6 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 transition-colors text-sm font-medium"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="block px-6 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 transition-colors text-sm font-medium"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-6 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 transition-colors text-sm font-medium"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      <nav
        className={`fixed top-16 right-4 bg-slate-900/95 backdrop-blur-sm rounded-lg border border-slate-800 shadow-xl transform transition-all duration-300 ease-in-out z-40 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        } md:hidden`}
        aria-label="Mobile navigation"
      >
        <div className="py-2 flex flex-col min-w-[140px]">
          <a
            href="#home"
            className="block px-6 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 transition-colors text-sm font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-6 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 transition-colors text-sm font-medium"
          >
            About
          </a>
          <a
            href="#experience"
            className="block px-6 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 transition-colors text-sm font-medium"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="block px-6 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 transition-colors text-sm font-medium"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-6 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 transition-colors text-sm font-medium"
          >
            Contact
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <div id="home" className="pt-32">
          <Home />
        </div>
        <div id="about" className="py-16 md:py-24">
          <About />
        </div>
        <div id="experience" className="py-16 md:py-24">
          <Experience />
        </div>
        <div id="projects" className="py-16 md:py-24">
          <Projects />
        </div>
        <div id="contact" className="py-16 md:py-24 pb-24">
          <Contact />
        </div>
      </main>

      <footer className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 pt-12 pb-12 border-t border-slate-900 text-sm text-slate-600">
        <div className="flex justify-between items-center">
          <p>© 2025 Baldemar Guajardo</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-blue-500">BALVIS</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
