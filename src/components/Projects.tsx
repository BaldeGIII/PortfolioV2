import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Aqua-Mundi",
    description:
      "An app called Aqua Mundi that informs the user what county in Texas a body of water is located and also informs a user on the endangered species know to inhabit that body of water. This can include detailed information about various species, their conservation status, and the environmental factors affecting their habitat.",
    technologies: ["Python", "JavaScript", "Android Studio"],
    link: "https://github.com/BaldeGIII/Aqua-Mundi",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/react-HzzvMEg21Sf21Kgn31RWCcPzcM0Y5o.svg",
  },
  {
    title: "Chip-8 Emulator",
    description:
      "A Python-based CHIP-8 emulator implementing a complete set of opcodes to emulate the original system architecture. Features include instruction decoding, memory management, and graphics rendering.",
    technologies: ["Python", "Assembly", "Binary", "Tkinter", "Pygame"],
    link: "https://github.com/BaldeGIII/Chip-8Emulator",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/react-HzzvMEg21Sf21Kgn31RWCcPzcM0Y5o.svg",
  },
  {
    title: "BaldeBoy Emulator",
    description:
      "BaldeBoyEmulator is an in-progress Game Boy Emulator, built using React, TypeScript, and Vite for a modern, high-performance web experience. It aims to provide accurate emulation with a clean, customizable UI powered by TailwindCSS. The project focuses on efficient frame execution, ROM loading, and audio processing, making it an ideal emulator for retro gaming enthusiasts.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "JavaScript",
      "CSS",
      "HTML",
    ],
    link: "https://github.com/BaldeGIII/BaldeBoyEmulator",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/react-HzzvMEg21Sf21Kgn31RWCcPzcM0Y5o.svg",
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150; // Characters to show initially
  const shouldTruncate = project.description.length > maxLength;

  const displayText = isExpanded
    ? project.description
    : `${project.description.slice(0, maxLength)}...`;

  return (
    <div
      className="bg-gray-700 p-8 rounded-lg shadow-lg w-full 
                    transition-transform hover:-translate-y-2
                    min-h-[400px] flex flex-col md:grid md:grid-cols-[1fr,600px] gap-12"
    >
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold">{project.title}</h3>
          <div>
            <p className="text-base text-gray-200">
              {displayText}
              {shouldTruncate && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[rgb(100,255,218)] hover:text-[rgb(100,255,218)]/80 ml-2 font-medium"
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              )}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-[rgb(100,255,218)]/10 px-3 py-1 rounded-full text-sm
                             text-[rgb(100,255,218)] font-medium border border-[rgb(100,255,218)]/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <a
            href={project.link}
            className="text-[rgb(100,255,218)] hover:text-[rgb(100,255,218)]/80 transition-colors inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-8 h-8" />
          </a>
        </div>
      </div>

      <div className="relative h-[350px]">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div
      className="w-full p-8 pt-24 pb-24 min-h-screen bg-secondary text-white" // added pb-24
      id="projects"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {" "}
        {/* added space-y-12 */}
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
