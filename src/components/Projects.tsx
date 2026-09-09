import { useState, useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiChevronDown, FiPlay } from "react-icons/fi";
import Chipy8 from "../assets/Chip8-Emulator.webp";
import AquaMundi from "../assets/AquaMundi.webp";
import The70 from "../assets/70GBEmu.webp";
import Balvis from "../assets/balvis.webp";
import ValleySteelApp from "../assets/ValleySteelApp.webp";
import SparkSensei from "../assets/SparkSensei.webp";
import artworkSword from "../assets/artwork-sword.jpg";

const projects = [
  {
    title: "Spark Sensei",
    category: "Mobile Development",
    description:
      "Developed a cross-platform mobile/web app using React Native and Expo with AI-powered tutoring via the Anthropic Claude API. Implemented tiered subscription system (Free/Premium/Pro) backed by Supabase Postgres with Row-Level Security. Built Supabase Edge Functions (Deno) for server-side AI inference, usage tracking, and per-tier rate limiting. Features native PDF analysis, image upload, multi-conversation cloud sync, and markdown rendering with code highlighting.",
    technologies: ["React Native", "Expo", "Supabase", "Claude API", "Deno"],
    link: "https://sparksensei.app",
    image: SparkSensei,
    completion: 100,
    isMobile: false,
    isWebsite: true,
  },
  {
    title: "Multi-Agent Autonomous Racing (Senior Project)",
    category: "Machine Learning",
    description:
      "Engineered a competitive multi-agent racing environment using MetaDrive, utilizing Proximal Policy Optimization (PPO) to train agents from scratch for optimal trajectory and speed. Integrated Weights & Biases (WandB) to monitor training sessions and designed a custom reward function with 'Ghost Mode' for stable parallel training.",
    technologies: ["Python", "MetaDrive", "PPO", "WandB"],
    link: "https://github.com/Joshua-Handy/ApexAI",
    image: "https://img.youtube.com/vi/iqPV1rrlNxo/maxresdefault.jpg",
    videoUrl: "https://youtu.be/iqPV1rrlNxo",
    completion: 100,
    isMobile: false,
  },
  {
    title: "Valley Steel Recycling - Vehicle Inspection App",
    category: "Mobile Development",
    description:
      "Developed a full-stack mobile application for Valley Steel Recycling to streamline vehicle inspection workflows. Features include bilingual support (EN/ES), admin dashboard with real-time analytics, user management system, comprehensive defect tracking with signature capture, and detailed inspection history.",
    technologies: ["React Native", "Expo Go", "JavaScript", "Render", "Neon DB"],
    link: "https://github.com/H5Moreno/ValleySteelRecycleAPP",
    image: ValleySteelApp,
    completion: 100,
    isMobile: false,
  },
  {
    title: "Chip-8 Emulator",
    category: "Systems Programming",
    description:
      "Built a high-fidelity Chip-8 emulator featuring accurate opcode execution and cycle timing. Integrated a Tkinter UI for seamless ROM loading and program navigation.",
    technologies: ["Python", "Assembly", "Binary", "Tkinter", "Pygame"],
    link: "https://github.com/BaldeGIII/Chip-8Emulator",
    image: Chipy8,
    completion: 100,
    isMobile: false,
  },
  {
    title: "Aqua-Mundi",
    category: "Full-Stack Development",
    description:
      "Developed a full-stack app for the NASA Space Apps Challenge to map endangered species in Texas. Increased local biodiversity awareness through interactive visualizations.",
    technologies: ["Python", "JavaScript", "Android Studio"],
    link: "https://github.com/BaldeGIII/Aqua-Mundi",
    image: AquaMundi,
    completion: 100,
    isMobile: false,
  },
  {
    title: "BaldeBoy Emulator",
    category: "Systems Programming",
    description:
      "In-progress Game Boy Emulator built with React, TypeScript, and Vite for a modern, high-performance web experience. Focuses on efficient frame execution, ROM loading, and audio processing.",
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS"],
    link: "https://github.com/BaldeGIII/BaldeBoyEmulator",
    image: The70,
    completion: 95,
    isMobile: false,
  },
  {
    title: "BALVIS",
    category: "AI / Web Development",
    description:
      "Architected an AI-powered productivity assistant leveraging OpenAI's API for advanced conversational capabilities. Engineered features for on-demand content summarization and educational video search.",
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "OpenAI API"],
    link: "https://github.com/BaldeGIII/BALVIS",
    image: Balvis,
    completion: 80,
    isMobile: false,
  },
];

const getYouTubeEmbedUrl = (url: string) => {
  const videoId = url.split('youtu.be/')[1]?.split('?')[0] || url.split('v=')[1]?.split('&')[0];
  return `https://www.youtube.com/embed/${videoId}`;
};

const ProjectItem = ({
  project,
  index,
  isExpanded,
  onToggle
}: {
  project: (typeof projects)[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(itemRef, { threshold: 0.2 });

  return (
    <div
      ref={itemRef}
      className={`group border-t border-hermes-line first:border-0 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Clickable Header */}
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-start md:items-center justify-between gap-4 text-left hover:bg-hermes-panel transition-colors px-2 -mx-2"
      >
        <div className="flex-1">
          <span className="text-xs font-mono text-hermes-ink/50 uppercase tracking-wide">
            {project.category}
          </span>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2 mt-1">
            <h3 className="text-xl font-medium font-display text-hermes-ink group-hover:opacity-70 transition-opacity flex items-center gap-2">
              {project.title}
              {project.completion < 100 && (
                <span className="text-xs font-mono text-hermes-ink/60 border border-hermes-line px-2 py-0.5">
                  {project.completion}%
                </span>
              )}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="text-xs font-mono text-hermes-ink/70 border border-hermes-line px-2 py-0.5"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="text-xs font-mono text-hermes-ink/50">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>
          <p className="text-hermes-ink/60 text-sm line-clamp-1 md:line-clamp-none md:max-w-2xl">
            {project.description.split('.')[0]}.
          </p>
        </div>
        <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border border-hermes-line transition-all duration-300 ${
          isExpanded ? 'bg-hermes-ink border-hermes-ink rotate-180' : 'bg-transparent group-hover:border-hermes-ink'
        }`}>
          <FiChevronDown className={`w-4 h-4 ${isExpanded ? 'text-hermes-bg' : 'text-hermes-ink'}`} />
        </div>
      </button>

      {/* Expandable Content */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isExpanded ? 'max-h-[800px] opacity-100 pb-8' : 'max-h-0 opacity-0'
      }`}>
        <div className="relative">
          <div
            className="duotone !absolute inset-0 opacity-25 pointer-events-none"
            aria-hidden="true"
          >
            <img src={artworkSword} alt="" loading="lazy" style={{ objectPosition: 'center 65%' }} />
          </div>
          <div className="relative grid md:grid-cols-2 gap-6 pt-2">
          {/* Image/Video */}
          <div className="relative overflow-hidden border border-hermes-line bg-hermes-panel">
            {project.videoUrl ? (
              <div className="aspect-video">
                <iframe
                  src={getYouTubeEmbedUrl(project.videoUrl)}
                  title={project.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="aspect-video duotone">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
              </div>
            )}
            {project.videoUrl && (
              <div className="absolute top-3 left-3 flex items-center gap-1.5 text-xs font-mono uppercase tracking-wide text-hermes-bg bg-hermes-ink px-2 py-1">
                <FiPlay className="w-3 h-3" />
                Video Demo
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-hermes-ink/70 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={`${tech}-${i}`}
                    className="text-xs font-mono text-hermes-ink/70 border border-hermes-line px-2.5 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-medium bg-hermes-ink text-hermes-bg px-4 py-2.5 transition-opacity hover:opacity-80 w-fit"
            >
              {project.isWebsite ? <FiExternalLink className="w-4 h-4" /> : <FaGithub className="w-4 h-4" />}
              {project.isWebsite ? "Visit Website" : "View on GitHub"}
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const completedProjects = projects.filter((p) => p.completion === 100);
  const inProgressProjects = projects.filter((p) => p.completion < 100);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className={`py-24 md:py-32 -mt-16 pt-32 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className={`mb-8 md:mb-12 border-b border-hermes-line pb-4 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}>
        <p className="text-xs font-mono uppercase tracking-widest text-hermes-ink/60">
          #3 Selected Projects
        </p>
        <p className="text-sm font-mono text-hermes-ink/60 mt-2">
          A mix of full-stack apps, AI tools, and low-level systems projects built end-to-end.
        </p>
      </div>

      <div className="space-y-0">
        {completedProjects.map((project, index) => (
          <ProjectItem
            key={index}
            project={project}
            index={index}
            isExpanded={expandedIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>

      {inProgressProjects.length > 0 && (
        <>
          <h3 className="text-xs font-mono uppercase tracking-widest text-hermes-ink/60 mt-16 mb-6 border-b border-hermes-line pb-4">
            In Progress
          </h3>
          <div className="space-y-0">
            {inProgressProjects.map((project, index) => {
              const globalIndex = completedProjects.length + index;
              return (
                <ProjectItem
                  key={index}
                  project={project}
                  index={globalIndex}
                  isExpanded={expandedIndex === globalIndex}
                  onToggle={() => handleToggle(globalIndex)}
                />
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default Projects;
