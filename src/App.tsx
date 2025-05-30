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
    <div className="bg-primary text-accent-foreground">
      <header className="fixed top-0 left-0 w-full bg-primary/90 backdrop-blur-sm z-50 border-b border-accent/10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="font-mono text-primary-foreground">BG</div>
          <button
            className="menu-button md:hidden w-10 h-10 flex items-center justify-center text-accent-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu" // Added aria-label for accessibility
            aria-expanded={menuOpen} // Indicate if menu is open or closed
          >
            &#9776;
          </button>
          <nav className="hidden md:block">
            <div className="flex gap-8">
              <a
                href="#home"
                className="text-accent-foreground hover:text-primary-foreground transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-accent-foreground hover:text-primary-foreground transition-colors"
              >
                About Me
              </a>
              <a
                href="#experience"
                className="text-accent-foreground hover:text-primary-foreground transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-accent-foreground hover:text-primary-foreground transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-accent-foreground hover:text-primary-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <nav
        className={`fixed inset-y-0 right-0 w-64 bg-secondary transform transition-transform duration-300 ease-in-out z-40 ${
          // z-40 to be under the header if needed, or z-50/z-60 if over.
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation" // Added aria-label
      >
        <div className="py-2">
          <a
            href="#home"
            className="block px-4 py-2 text-primary hover:bg-gray-600 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-primary hover:bg-gray-600 transition-colors"
          >
            About Me
          </a>
          <a
            href="#experience"
            className="block px-4 py-2 text-primary hover:bg-gray-600 transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="block px-4 py-2 text-primary hover:bg-gray-600 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-primary hover:bg-gray-600 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      <main className="pt-16">
        {" "}
        {/* Added pt-16 to offset fixed header */}
        <div id="home" className="content">
          {" "}
          {/* Consider min-h-screen for Home if it's a full-page section */}
          <Home />
        </div>
        <div id="about" className="content min-h-screen">
          <About />
        </div>
        <div id="experience" className="content min-h-screen">
          <Experience />
        </div>
        <div id="projects" className="content">
          {" "}
          {/* Consider min-h-screen for Projects if needed */}
          <Projects />
        </div>
        <div id="contact" className="content min-h-screen">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
