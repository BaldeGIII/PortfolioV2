import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Github, Linkedin, Mail, FileText, ArrowDown } from 'lucide-react';
import profilePic from '../assets/67811850.webp';
import artworkEye from '../assets/artwork-eye.jpg';

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
      <div className="relative h-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        {/* Eye study backdrop — spans the full hero, extends past it */}
        <div
          className="duotone !absolute -inset-x-4 -inset-y-10 md:-inset-y-20 opacity-15 pointer-events-none"
          aria-hidden="true"
        >
          <img src={artworkEye} alt="" loading="lazy" />
        </div>

        {/* Text */}
        <div className="relative flex-1 space-y-6 order-2 lg:order-1">
          <p className="text-xs font-mono uppercase tracking-widest text-hermes-ink/60">
            Hello, I'm
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-display text-hermes-ink leading-[0.95]">
            Baldemar.
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-hermes-ink/80">
            Computer Scientist & Electrical Engineer
          </h2>
          <p className="text-hermes-ink/70 leading-relaxed max-w-lg text-base md:text-lg">
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
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-medium bg-hermes-ink text-hermes-bg px-5 py-3 transition-opacity hover:opacity-80"
            >
              More about me
              <ArrowDown size={16} />
            </a>
            <a
              href="/BaldemarGuajardoResume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-medium text-hermes-ink border border-hermes-line px-5 py-3 transition-colors hover:bg-hermes-panel"
            >
              <FileText size={16} />
              Resume
            </a>
            <div className="flex items-center gap-2">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="p-3 border border-hermes-line text-hermes-ink/70 hover:text-hermes-ink hover:bg-hermes-panel transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="p-3 border border-hermes-line text-hermes-ink/70 hover:text-hermes-ink hover:bg-hermes-panel transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={EMAIL_URL}
                className="p-3 border border-hermes-line text-hermes-ink/70 hover:text-hermes-ink hover:bg-hermes-panel transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Photo */}
        <div className="relative flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="duotone relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border border-hermes-line">
            <img
              src={profilePic}
              alt="Baldemar Guajardo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
