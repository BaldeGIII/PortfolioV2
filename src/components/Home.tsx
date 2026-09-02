import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Github, Linkedin, Mail, FileText, ArrowDown } from 'lucide-react';
import profilePic from '../assets/67811850.webp';

const GITHUB_URL = "https://github.com/BaldeGIII";
const LINKEDIN_URL = "https://www.linkedin.com/in/baldemar-guajardo-454132228/";
const EMAIL_URL = "mailto:Baldemarguajardo20@gmail.com";

const Home = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="h-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        {/* Text */}
        <div className="flex-1 space-y-6 order-2 lg:order-1">
          <p className="text-sm font-mono text-blue-500 uppercase tracking-widest">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-slate-100 leading-[0.95]">
            Baldemar.
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300">
            Computer Scientist & Electrical Engineer
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg text-base md:text-lg">
            I build AI-powered applications, embedded systems, and full-stack solutions
            that solve real problems.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 bg-blue-400 hover:bg-blue-300 px-5 py-2.5 rounded-lg transition-colors"
            >
              More about me
              <ArrowDown size={16} />
            </a>
            <a
              href="/BaldemarGuajardoResume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-blue-500 hover:text-blue-400 px-5 py-2.5 rounded-lg transition-colors"
            >
              <FileText size={16} />
              Resume
            </a>
            <div className="flex items-center gap-2">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-500 hover:text-blue-400 hover:border-blue-500 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-500 hover:text-blue-400 hover:border-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={EMAIL_URL}
                className="p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-500 hover:text-blue-400 hover:border-blue-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Photo */}
        <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/10 rounded-2xl transform translate-x-3 translate-y-3" />
            <img
              src={profilePic}
              alt="Baldemar Guajardo"
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl object-cover border-2 border-slate-200 dark:border-slate-800 shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
