import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Chipy8 from "../assets/Chip8-Emulator.png";
import AquaMundi from "../assets/AquaMundi.png";
import The70 from "../assets/70GBEmu.png";
import Balvis from "../assets/balvis.png";
import ValleySteelApp from "../assets/ValleySteelApp.png";

const projects = [
  {
    title: "Multi-Agent Autonomous Racing (Senior Project)",
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
    description:
      "In-progress Game Boy Emulator built with React, TypeScript, and Vite for a modern, high-performance web experience. Focuses on efficient frame execution, ROM loading, and audio processing.",
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS"],
    link: "https://github.com/BaldeGIII/BaldeBoyEmulator",
    image: The70,
    completion: 70,
    isMobile: false,
  },
  {
    title: "BALVIS",
    description:
      "Architected an AI-powered productivity assistant leveraging OpenAI's API for advanced conversational capabilities. Engineered features for on-demand content summarization and educational video search.",
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "OpenAI API"],
    link: "https://github.com/BaldeGIII/BALVIS",
    image: Balvis,
    completion: 75,
    isMobile: false,
  },
];

const ProjectItem = ({
  project,
  onImageClick
}: {
  project: (typeof projects)[0];
  onImageClick: (image: string, title: string, videoUrl?: string, isMobile?: boolean) => void;
}) => (
  <div className="group py-8 border-t border-slate-900 first:border-0 first:pt-0">
    <div className="grid md:grid-cols-[200px,1fr] gap-6 mb-4">
      <div
        className="relative overflow-hidden rounded border border-slate-800 group-hover:border-blue-500 transition-colors cursor-pointer bg-slate-900/50 flex items-center justify-center aspect-video"
        onClick={() => onImageClick(project.image, project.title, project.videoUrl, project.isMobile)}
      >
        <img
          src={project.image}
          alt={project.title}
          className={`h-full ${project.isMobile ? "w-auto" : "w-full"} object-contain`}
        />
        {project.videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
            <div className="w-12 h-12 rounded-full bg-blue-500/90 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
          <h3 className="text-xl font-medium text-slate-100 group-hover:text-blue-400 transition-colors flex items-center gap-2">
            {project.title}
            {project.completion < 100 && (
              <span className="text-sm text-slate-500 font-normal">
                ({project.completion}% complete)
              </span>
            )}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
            {project.technologies.map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="text-xs font-mono text-blue-500/80 bg-blue-500/10 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-base text-blue-400 hover:text-blue-300 transition-colors"
        >
          <FaGithub />
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [activeImage, setActiveImage] = useState<{ src: string; title: string; videoUrl?: string; isMobile?: boolean } | null>(null);
  const completedProjects = projects.filter((p) => p.completion === 100);
  const inProgressProjects = projects.filter((p) => p.completion < 100);

  const handleImageClick = (image: string, title: string, videoUrl?: string, isMobile?: boolean) => {
    setActiveImage({ src: image, title, videoUrl, isMobile });
  };

  // Convert YouTube URL to embed format
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('youtu.be/')[1]?.split('?')[0] || url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <section id="projects" className="py-24 md:py-32 -mt-16 pt-32">
      <h2 className="text-base font-mono text-blue-500 uppercase tracking-widest mb-8 md:mb-12 border-b border-slate-800 pb-4">
        Selected Projects
      </h2>

      {completedProjects.map((project, index) => (
        <ProjectItem key={index} project={project} onImageClick={handleImageClick} />
      ))}

      {inProgressProjects.length > 0 && (
        <>
          <h3 className="text-base font-mono text-slate-500 uppercase tracking-widest mt-12 mb-6">
            In Progress
          </h3>
          {inProgressProjects.map((project, index) => (
            <ProjectItem key={index} project={project} onImageClick={handleImageClick} />
          ))}
        </>
      )}

      {activeImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60] p-4"
          onClick={() => setActiveImage(null)}
        >
          <div className={`relative ${activeImage.isMobile ? "max-w-md" : "max-w-6xl"} max-h-[90vh] w-full h-full flex flex-col`}>
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-semibold text-slate-100">
                {activeImage.title}
              </h4>
              <button
                onClick={() => setActiveImage(null)}
                className="text-slate-400 hover:text-red-400 text-3xl transition-colors leading-none"
              >
                &times;
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center">
              {activeImage.videoUrl ? (
                <div
                  className="w-full h-full max-w-5xl max-h-[80vh] aspect-video"
                  onClick={(e) => e.stopPropagation()}
                >
                  <iframe
                    src={getYouTubeEmbedUrl(activeImage.videoUrl)}
                    title={activeImage.title}
                    className="w-full h-full rounded border border-slate-800"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <img
                  src={activeImage.src}
                  alt={activeImage.title}
                  className={`max-w-full max-h-full object-contain rounded border border-slate-800 ${
                    activeImage.isMobile ? "w-full" : ""
                  }`}
                  onClick={(e) => e.stopPropagation()}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
