import { useState, useEffect, useCallback } from "react";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { useTheme } from "./hooks/useTheme";
import { Github, Linkedin, Mail, Menu, X, FileText, Sun, Moon } from "lucide-react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import EasterEgg from "./components/EasterEgg";
import Game from "./components/Game";

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

const GITHUB_URL = "https://github.com/BaldeGIII";
const LINKEDIN_URL = "https://www.linkedin.com/in/baldemar-guajardo-454132228/";
const EMAIL_URL = "mailto:Baldemarguajardo20@gmail.com";

const scrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [gameOpen, setGameOpen] = useState(false);
  const activeSection = useScrollSpy(['home', 'about', 'experience', 'projects'], { offset: 150 });
  const { theme, toggleTheme } = useTheme();

  const openGame = useCallback(() => setGameOpen(true), []);
  const closeGame = useCallback(() => setGameOpen(false), []);

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
    scrollToId(id);
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-white text-slate-700 dark:bg-slate-950 dark:text-slate-300 font-sans min-h-screen lg:flex">
      <EasterEgg onTrigger={openGame} />
      <Game open={gameOpen} onClose={closeGame} theme={theme} />
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold text-slate-900 dark:text-slate-100">
            BG<span className="text-blue-500">III</span>
          </a>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-blue-400 transition-colors"
              aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-blue-400 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <nav
          className={`absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all duration-300 ${
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
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
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
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href={EMAIL_URL} className="text-slate-500 hover:text-blue-400 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Desktop Sidebar - Fixed Left */}
      <aside className="hidden lg:flex lg:flex-col lg:justify-between lg:fixed lg:left-0 lg:top-0 lg:bottom-0 lg:w-[320px] lg:px-12 lg:py-16 lg:overflow-y-auto">
        {/* Top: Wordmark + Theme Toggle */}
        <div className="flex items-center justify-between">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-xl font-bold text-slate-900 dark:text-slate-100">
            BG<span className="text-blue-500">III</span>
          </a>
          <button
            onClick={toggleTheme}
            className="shrink-0 p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
            aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Middle: Navigation */}
        <nav className="space-y-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="group flex items-center gap-4 py-3 transition-all duration-200"
            >
              <span className={`h-px transition-all duration-200 ${
                activeSection === item.id
                  ? 'w-12 bg-slate-900 dark:bg-slate-100'
                  : 'w-6 bg-slate-300 dark:bg-slate-600 group-hover:w-12 group-hover:bg-slate-600 dark:group-hover:bg-slate-300'
              }`} />
              <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                activeSection === item.id
                  ? 'text-slate-900 dark:text-slate-100'
                  : 'text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300'
              }`}>
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Bottom: Resume + Socials */}
        <div className="flex flex-col gap-4">
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
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={EMAIL_URL}
              className="text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content - Scrollable Right */}
      <main className="lg:ml-[320px] lg:flex-1 px-6 md:px-12 lg:px-24 pt-24 lg:pt-20 pb-20">
        <section id="home" className="min-h-screen lg:min-h-[calc(100vh-10rem)] flex flex-col justify-center py-0 scroll-mt-20">
          <Home />
        </section>

        <section id="about" className="py-16 lg:py-24 scroll-mt-20">
          <About />
        </section>

        <section id="experience" className="py-16 lg:py-24 scroll-mt-20">
          <Experience />
        </section>

        <section id="projects" className="py-16 lg:py-24 scroll-mt-20">
          <Projects />
        </section>

        {/* Footer */}
        <footer className="pt-12 pb-8 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-500 dark:text-slate-600">
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
