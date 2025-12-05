import { FaGithub } from "react-icons/fa";
import Chipy8 from "../assets/Chip8-Emulator.png";
import AquaMundi from "../assets/AquaMundi.png";
import The70 from "../assets/70GBEmu.png";
import Balvis from "../assets/balvis.png";

const projects = [
  {
    title: "Chip-8 Emulator",
    description:
      "Built a high-fidelity Chip-8 emulator featuring accurate opcode execution and cycle timing. Integrated a Tkinter UI for seamless ROM loading and program navigation.",
    technologies: ["Python", "Assembly", "Binary", "Tkinter", "Pygame"],
    link: "https://github.com/BaldeGIII/Chip-8Emulator",
    image: Chipy8,
    completion: 100,
  },
  {
    title: "Aqua-Mundi",
    description:
      "Developed a full-stack app for the NASA Space Apps Challenge to map endangered species in Texas. Increased local biodiversity awareness through interactive visualizations.",
    technologies: ["Python", "JavaScript", "Android Studio"],
    link: "https://github.com/BaldeGIII/Aqua-Mundi",
    image: AquaMundi,
    completion: 100,
  },
  {
    title: "BaldeBoy Emulator",
    description:
      "In-progress Game Boy Emulator built with React, TypeScript, and Vite for a modern, high-performance web experience. Focuses on efficient frame execution, ROM loading, and audio processing.",
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS"],
    link: "https://github.com/BaldeGIII/BaldeBoyEmulator",
    image: The70,
    completion: 70,
  },
  {
    title: "BALVIS",
    description:
      "Architected an AI-powered productivity assistant leveraging OpenAI's API for advanced conversational capabilities. Engineered features for on-demand content summarization and educational video search.",
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "OpenAI API"],
    link: "https://github.com/BaldeGIII/BALVIS",
    image: Balvis,
    completion: 75,
  },
];

const ProjectItem = ({ project }: { project: (typeof projects)[0] }) => (
  <div className="group py-8 border-t border-slate-900 first:border-0 first:pt-0">
    <div className="grid md:grid-cols-[200px,1fr] gap-6 mb-4">
      <div className="relative overflow-hidden rounded border border-slate-800 group-hover:border-blue-500 transition-colors">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover aspect-video"
        />
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
  const completedProjects = projects.filter((p) => p.completion === 100);
  const inProgressProjects = projects.filter((p) => p.completion < 100);

  return (
    <section id="projects" className="py-24 md:py-32 -mt-16 pt-32">
      <h2 className="text-base font-mono text-blue-500 uppercase tracking-widest mb-8 md:mb-12 border-b border-slate-800 pb-4">
        Selected Projects
      </h2>

      {completedProjects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}

      {inProgressProjects.length > 0 && (
        <>
          <h3 className="text-base font-mono text-slate-500 uppercase tracking-widest mt-12 mb-6">
            In Progress
          </h3>
          {inProgressProjects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </>
      )}
    </section>
  );
};

export default Projects;
