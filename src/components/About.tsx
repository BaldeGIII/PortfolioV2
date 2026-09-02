import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import profilePic from '../assets/67811850.webp';

const GITHUB_URL = "https://github.com/BaldeGIII";
const LINKEDIN_URL = "https://www.linkedin.com/in/baldemar-guajardo-454132228/";
const EMAIL_URL = "mailto:Baldemarguajardo20@gmail.com";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const focusAreas = [
    {
      title: "AI & Machine Learning",
      description:
        "Training language-conditioned reinforcement learning agents and building AI-powered applications with PyTorch, TensorFlow, and modern LLM APIs.",
    },
    {
      title: "Full-Stack Development",
      description:
        "Shipping cross-platform apps and web tools end-to-end — from React frontends and Supabase backends to field-ready mobile workflows.",
    },
    {
      title: "Embedded Systems & Hardware",
      description:
        "Designing offline-capable tools and hardware-aware systems, from microcontroller prototypes to VLSI coursework with Cadence and Quartus.",
    },
  ];

  const skills = [
    {
      title: "AI / ML",
      skills: ["PyTorch", "TensorFlow", "NumPy", "Scikit-learn", "OpenAI API", "Meta-RL", "GloVe", "WandB"],
    },
    {
      title: "Languages",
      skills: ["Python", "C/C++", "Rust", "JavaScript / TypeScript", "SQL", "Assembly (x86)"],
    },
    {
      title: "Hardware / Systems",
      skills: ["VLSI Design", "Microcontrollers (Arduino)", "Quartus II", "Cadence", "Keil"],
    },
    {
      title: "Tools",
      skills: ["Linux (Ubuntu)", "Git / GitHub", "Docker", "Power Apps", "VS Code"],
    },
  ];

  const education = [
    {
      degree: "Master of Science in Electrical Engineering",
      school: "The University of Texas Rio Grande Valley",
      date: "Expected May 2027",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "The University of Texas Rio Grande Valley",
      date: "2025",
      note: "Minor in Electrical Engineering",
    },
    {
      degree: "Associate of Science in Engineering",
      school: "South Texas College",
      date: "2023",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="space-y-16">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
          About Me<span className="text-blue-500">.</span>
        </h2>

        {/* Bio */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img
            src={profilePic}
            alt="Baldemar Guajardo"
            className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover border-2 border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all duration-300 shrink-0"
          />
          <div className="max-w-3xl space-y-5">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg">
              Hey! I'm <span className="text-slate-900 dark:text-slate-100 font-medium">Baldemar Guajardo</span>,
              a computer scientist and electrical engineer based in Penitas, Texas. I work where machine learning,
              full-stack software, and embedded systems overlap.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              At UTRGV I researched language-conditioned reinforcement learning with the MILLION algorithm,
              training agents to follow natural-language instructions in CartPole, LunarLander, and CarRacing environments.
              At Magic Valley Electric Cooperative I shipped production tools in the field, including an offline-capable
              desktop app with SQLCipher and a digitized Apprentice Lineman program that cut onboarding time for over 100 apprentices.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              I enjoy projects that cross boundaries — whether that's a Chip-8 emulator in Python, a React Native
              inspection app for a recycling plant, or a multi-agent racing environment trained with PPO.
            </p>
          </div>
        </div>

        {/* Focus Areas */}
        <div>
          <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
            Focus Areas
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-lg p-5 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <h4 className="text-sm font-medium text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                  {area.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((category) => (
              <div
                key={category.title}
                className="bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-lg p-4 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 group"
              >
                <h4 className="text-sm font-medium text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                  {category.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors">
                  {category.skills.join(" • ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
            Education
          </h3>
          <div className="space-y-4">
            {education.map((item) => (
              <div
                key={item.degree}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 pb-4 border-b border-slate-200 dark:border-slate-800 last:border-0 last:pb-0 group"
              >
                <div>
                  <h4 className="text-base font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-400 transition-colors">
                    {item.degree}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.school}
                    {item.note && (
                      <span className="text-slate-500"> — {item.note}</span>
                    )}
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-500 whitespace-nowrap">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <a
            href="/BaldemarGuajardoResume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FileText size={16} />
            Resume
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-400 transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-400 transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href={EMAIL_URL}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-400 transition-colors"
          >
            <Mail size={16} />
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
