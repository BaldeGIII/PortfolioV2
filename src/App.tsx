import { useState, useEffect } from "react";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { Github, Linkedin, Mail, Menu, X, FileText } from "lucide-react";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['about', 'experience', 'projects', 'contact'], { offset: 150 });

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, [mobileMenuOpen]);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-slate-950 text-slate-300 font-sans min-h-screen lg:flex">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="flex items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold text-slate-100">
            BG<span className="text-blue-500">III</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-blue-400 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        <nav
          className={`absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 transition-all duration-300 ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="px-6 py-4 border-t border-slate-800 flex flex-col gap-3">
            <a
              href="/BaldemarGuajardoResume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 bg-blue-400 hover:bg-blue-300 px-4 py-2 rounded-lg transition-colors w-fit"
            >
              <FileText size={16} />
              Resume
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/BaldeGIII" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/baldemar-guajardo-454132228/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:Baldemarguajardo20@gmail.com" className="text-slate-500 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Desktop Sidebar - Fixed Left */}
      <aside className="hidden lg:flex lg:flex-col lg:justify-between lg:fixed lg:left-0 lg:top-0 lg:bottom-0 lg:w-[420px] lg:px-16 lg:py-20 lg:overflow-y-auto">
        <div>
          {/* Header Info */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-100 mb-3">
              Baldemar Guajardo
            </h1>
            <h2 className="text-lg font-medium text-slate-300 mb-4">
              Computer Scientist & Electrical Engineer
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              I build AI-powered applications, embedded systems, and full-stack solutions that solve real problems.
            </p>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`group flex items-center gap-4 py-3 transition-all duration-200 ${
                  activeSection === item.id ? '' : ''
                }`}
              >
                <span className={`h-px transition-all duration-200 ${
                  activeSection === item.id 
                    ? 'w-16 bg-slate-100' 
                    : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-300'
                }`} />
                <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  activeSection === item.id 
                    ? 'text-slate-100' 
                    : 'text-slate-500 group-hover:text-slate-300'
                }`}>
                  {item.label}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-4 mt-12">
          <a 
            href="/BaldemarGuajardoResume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 bg-blue-400 hover:bg-blue-300 px-4 py-2.5 rounded-lg transition-colors w-fit"
          >
            <FileText size={18} />
            Resume
          </a>
          <div className="flex items-center gap-5">
            <a 
              href="https://github.com/BaldeGIII" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-500 hover:text-slate-100 transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a 
              href="https://www.linkedin.com/in/baldemar-guajardo-454132228/" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-500 hover:text-slate-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="mailto:Baldemarguajardo20@gmail.com"
              className="text-slate-500 hover:text-slate-100 transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content - Scrollable Right */}
      <main className="lg:ml-[420px] lg:flex-1 px-6 md:px-12 lg:px-24 pt-24 lg:pt-20 pb-20">
        <section id="about" className="min-h-screen lg:min-h-0 py-16 lg:py-24 scroll-mt-20">
          <About />
        </section>
        
        <section id="experience" className="py-16 lg:py-24 scroll-mt-20">
          <Experience />
        </section>
        
        <section id="projects" className="py-16 lg:py-24 scroll-mt-20">
          <Projects />
        </section>
        
        <section id="contact" className="py-16 lg:py-24 scroll-mt-20">
          <Contact />
        </section>

        {/* Footer */}
        <footer className="pt-12 pb-8 border-t border-slate-800 text-sm text-slate-600">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© 2026 Baldemar Guajardo</p>
            <p className="flex items-center gap-1">
              Built with React + <span className="text-blue-500">TailwindCSS</span>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
