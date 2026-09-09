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
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-hermes-ink/60 mb-3">
            #1 About
          </p>
          <h2 className="text-5xl md:text-6xl font-bold font-display text-hermes-ink">
            About Me<span className="opacity-40">.</span>
          </h2>
        </div>

        {/* Bio */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="duotone w-32 h-32 md:w-40 md:h-40 shrink-0 border border-hermes-line">
            <img
              src={profilePic}
              alt="Baldemar Guajardo"
            />
          </div>
          <div className="max-w-3xl space-y-5">
            <p className="text-hermes-ink/90 leading-relaxed text-base md:text-lg">
              Hey! I'm <span className="font-medium text-hermes-ink">Baldemar Guajardo</span>,
              a computer scientist and electrical engineer based in Penitas, Texas. I work where machine learning,
              full-stack software, and embedded systems overlap.
            </p>
            <p className="text-hermes-ink/70 leading-relaxed text-base">
              At UTRGV I researched language-conditioned reinforcement learning with the MILLION algorithm,
              training agents to follow natural-language instructions in CartPole, LunarLander, and CarRacing environments.
              At Magic Valley Electric Cooperative I shipped production tools in the field, including an offline-capable
              desktop app with SQLCipher and a digitized Apprentice Lineman program that cut onboarding time for over 100 apprentices.
            </p>
            <p className="text-hermes-ink/70 leading-relaxed text-base">
              I enjoy projects that cross boundaries — whether that's a Chip-8 emulator in Python, a React Native
              inspection app for a recycling plant, or a multi-agent racing environment trained with PPO.
            </p>
          </div>
        </div>

        {/* Focus Areas */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-hermes-ink/60 mb-6">
            #1.1 Focus Areas
          </h3>
          <div className="grid md:grid-cols-3 gap-px bg-hermes-line border border-hermes-line">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="bg-hermes-bg p-6 group"
              >
                <h4 className="text-base font-medium font-display text-hermes-ink mb-3">
                  {area.title}
                </h4>
                <p className="text-sm font-mono text-hermes-ink/60 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-hermes-ink/60 mb-6">
            #1.2 Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-px bg-hermes-line border border-hermes-line">
            {skills.map((category) => (
              <div
                key={category.title}
                className="bg-hermes-bg p-5 group"
              >
                <h4 className="text-xs font-mono uppercase tracking-widest text-hermes-ink mb-3">
                  {category.title}
                </h4>
                <p className="text-sm font-mono text-hermes-ink/60 leading-relaxed">
                  {category.skills.join(" • ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-hermes-ink/60 mb-6">
            #1.3 Education
          </h3>
          <div className="border-t border-hermes-line">
            {education.map((item) => (
              <div
                key={item.degree}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 py-4 border-b border-hermes-line group"
              >
                <div>
                  <h4 className="text-base font-medium font-display text-hermes-ink">
                    {item.degree}
                  </h4>
                  <p className="text-sm font-mono text-hermes-ink/60">
                    {item.school}
                    {item.note && (
                      <span className="opacity-70"> — {item.note}</span>
                    )}
                  </p>
                </div>
                <span className="text-xs font-mono text-hermes-ink/50 whitespace-nowrap">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-hermes-line">
          <a
            href="/BaldemarGuajardoResume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-medium text-hermes-ink hover:opacity-60 transition-opacity"
          >
            <FileText size={16} />
            Resume
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-hermes-ink/60 hover:text-hermes-ink transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-hermes-ink/60 hover:text-hermes-ink transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href={EMAIL_URL}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-hermes-ink/60 hover:text-hermes-ink transition-colors"
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
