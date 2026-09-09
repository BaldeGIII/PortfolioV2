import { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [gameOpen, setGameOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const activeSection = location.pathname.replace(/^\//, '') || 'home';

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

  return (
    <div className="bg-hermes-bg text-hermes-ink font-sans min-h-screen lg:flex transition-colors duration-300">
      <EasterEgg onTrigger={openGame} />
      <Game open={gameOpen} onClose={closeGame} theme={theme} />
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-hermes-bg/90 backdrop-blur-md border-b border-hermes-line">
        <div className="flex items-center justify-between px-6 py-4">
          <Link to="/home" className="text-xl font-bold font-display text-hermes-ink">
            BG<span className="opacity-60">III</span>
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 border border-hermes-line text-hermes-ink hover:opacity-60 transition-opacity"
              aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-hermes-line text-hermes-ink hover:opacity-60 transition-opacity"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <nav
          className={`absolute top-full left-0 right-0 bg-hermes-bg border-b border-hermes-line transition-all duration-300 max-h-[70vh] overflow-y-auto ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={`/${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-mono uppercase tracking-widest transition-colors ${
                  activeSection === item.id
                    ? 'text-hermes-ink font-bold'
                    : 'text-hermes-ink/60 hover:text-hermes-ink'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="px-6 py-4 border-t border-hermes-line flex flex-col gap-3">
            <a
              href="/BaldemarGuajardoResume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-medium bg-hermes-ink text-hermes-bg px-4 py-2.5 transition-opacity hover:opacity-80 w-fit"
            >
              <FileText size={16} />
              Resume
            </a>
            <div className="flex gap-4">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-hermes-ink/60 hover:text-hermes-ink transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-hermes-ink/60 hover:text-hermes-ink transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href={EMAIL_URL} className="text-hermes-ink/60 hover:text-hermes-ink transition-colors" aria-label="Email">
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
          <Link to="/home" className="text-3xl font-bold font-display text-hermes-ink">
            BG<span className="opacity-60">III</span>
          </Link>
          <button
            onClick={toggleTheme}
            className="shrink-0 p-2 border border-hermes-line text-hermes-ink hover:opacity-60 transition-opacity"
            aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Middle: Navigation */}
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={`/${item.id}`}
              className="group flex items-center gap-4 py-3 transition-all duration-200"
            >
              <span className={`h-px transition-all duration-200 ${
                activeSection === item.id
                  ? 'w-12 bg-hermes-ink'
                  : 'w-6 bg-hermes-ink/30 group-hover:w-12 group-hover:bg-hermes-ink/70'
              }`} />
              <span className={`text-xs font-mono font-bold uppercase tracking-widest transition-colors ${
                activeSection === item.id
                  ? 'text-hermes-ink'
                  : 'text-hermes-ink/50 group-hover:text-hermes-ink'
              }`}>
                # {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Bottom: Resume + Socials */}
        <div className="flex flex-col gap-4">
          <a
            href="/BaldemarGuajardoResume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-medium bg-hermes-ink text-hermes-bg px-4 py-2.5 transition-opacity hover:opacity-80 w-fit"
          >
            <FileText size={18} />
            Resume
          </a>
          <div className="flex items-center gap-5">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="text-hermes-ink/50 hover:text-hermes-ink transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="text-hermes-ink/50 hover:text-hermes-ink transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={EMAIL_URL}
              className="text-hermes-ink/50 hover:text-hermes-ink transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content - Routed Pages */}
      <main className="lg:ml-[320px] lg:flex-1 px-6 md:px-12 lg:px-24 pt-24 lg:pt-20 pb-20">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route
            path="/home"
            element={
              <div className="min-h-[calc(100vh-11rem)] flex flex-col justify-center">
                <Home />
              </div>
            }
          />
          <Route path="/about" element={<div className="py-8 lg:py-16"><About /></div>} />
          <Route path="/experience" element={<div className="py-8 lg:py-16"><Experience /></div>} />
          <Route path="/projects" element={<div className="py-8 lg:py-16"><Projects /></div>} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>

        {/* Footer */}
        <footer className="pt-12 pb-8 border-t border-hermes-line text-xs font-mono uppercase tracking-widest text-hermes-ink/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© 2026 Baldemar Guajardo</p>
            <p>
              Built with React + TailwindCSS
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  );
}
