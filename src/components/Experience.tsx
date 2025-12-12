import { useState } from "react";
// Import your logos - adjust paths as necessary
import mvecLogo from "../assets/MVECLogo.png";
import utrgvLogo from "../assets/UTRGVLogo.png";
import vsrLogo from "../assets/vsrLogo.jpeg";
import team10Poster from "../assets/Team 10 Poster.pdf";
import trackFieldProject from "../assets/Group1_Track_and_Field_Data_Project.pdf";

interface ExperienceItem {
  id: string;
  image: string; // Path to the company/organization logo
  title: string;
  company: string;
  duration: string;
  location: string;
  programName?: string;
  responsibilities: string[];
  documentUrl?: string;
}

const experiencesData: ExperienceItem[] = [
  {
    id: "vsr",
    image: vsrLogo,
    title: "Full Stack Developer Intern",
    company: "Valley Steel Recycling",
    duration: "July 2025 – September 2025",
    location: "McAllen, TX (Hybrid)",
    responsibilities: [
      "Developed and deployed a full-stack, cross-platform vehicle inspection app using React Native and Node.js, hosted on Render to digitize the entire reporting and approval workflow.",
      "Implemented a secure, role-based user authentication system with Clerk, enabling workers to submit detailed inspection forms with image uploads managed by Cloudinary.",
      "Architected a scalable backend API utilizing a serverless Neon (Postgres) database for data integrity and Upstash (Redis) for high-performance caching and real-time updates.",
    ],
  },
  {
    id: "utrgv",
    image: utrgvLogo,
    title: "Deep Learning Researcher",
    company: "The University of Texas Rio Grande Valley",
    duration: "January 2025 – May 2025",
    location: "Edinburg, TX",
    responsibilities: [
      "Implemented and evaluated the MILLION algorithm (Meta-Reinforcement Learning using Language Instructions) across multiple simulation environments, demonstrating accelerated learning curves compared to baseline models.",
      "Developed language-conditioned reinforcement learning models for CartPole, LunarLander, and CarRacing environments, achieving faster training convergence and more stable reward patterns.",
      "Modified base reinforcement learning architectures with language instruction encoding modules using GloVe word embeddings, enabling agents to interpret natural language commands for more efficient task learning.",
      "Created visualization tools to demonstrate performance improvements, showing that language-guided models achieved higher peak performance and more consistent high-reward behavior in complex control tasks.",
    ],
    documentUrl: team10Poster,
  },
  {
    id: "utrgv-2",
    image: utrgvLogo,
    title: "Data Science Research Assistant",
    company: "The University of Texas Rio Grande Valley",
    duration: "January 2025 – May 2025",
    location: "Edinburg, TX",
    responsibilities: [
      "Analyzed performance data across multiple track and field events to identify optimal athlete event selection strategies, revealing natural specialization patterns that maximize team point contributions.",
      "Developed statistical models demonstrating that sprint events (100M, 200M) have tighter performance distributions, where marginal improvements yield significant competitive advantages.",
      "Created comprehensive event correlation matrices showing strong relationships within event categories (0.71-0.81) correlation), providing coaches with data-driven insights for strategic athlete development.",
      "Presented findings that revealed relays and jumps as the highest point-generating events, enabling more efficient resource allocation and training focus for maximizing team scoring potential.",
    ],
    documentUrl: trackFieldProject,
  },
  {
    id: "mvec",
    image: mvecLogo, // Use imported logo
    title: "IT Summer Programmer Intern",
    company: "Magic Valley Electric Cooperative",
    duration: "May 2024 - August 2024",
    location: "Mercedes, TX",
    programName: "Apprentice Lineman Program",
    responsibilities: [
      "Led the development of a fully digital Apprentice Lineman program, transforming a paper-based system into an interactive platform, enhancing access and engagement for over 100 apprentices and reducing onboarding time by 35%.",
      "Collaborated with IT, HR, and training teams to build and integrate requirements, testing, and administration portals on Power Apps and SharePoint, boosting program tracking and operational efficiency by 30%, enabling streamlined access for staff and apprentices.",
      "Conducted targeted research to identify process improvements, implementing changes that increased program interactivity by 25% and optimized workflows, resulting in faster, more efficient processes for users and administrators.",
      "Managed the digital rollout of the training program, achieving a user-friendly experience aligned with the Cooperative's mission; improvements led to projected cost savings of 20% due to reduced manual processes and enhanced digital adoption.",
    ],
    // documentUrl: "/Apprentice_Lineman_Program_Overview.pdf",
  },

  // Add more experience items here if needed, following the same structure
];

const Experience = () => {
  const [activeDocument, setActiveDocument] = useState<string | null>(null);

  const ExperienceItem = ({ exp }: { exp: ExperienceItem }) => (
    <div className="group mb-12 md:grid md:grid-cols-4 md:gap-6">
      <header className="md:col-span-1 mb-2 md:mb-0">
        <span className="text-xs font-mono text-slate-500 mt-1.5 uppercase tracking-wide group-hover:text-blue-400 transition-colors">
          {exp.duration}
        </span>
      </header>
      <div className="md:col-span-3">
        <h3 className="text-lg font-medium text-slate-100 group-hover:text-blue-400 transition-colors">
          {exp.title} <span className="text-slate-600">·</span> {exp.company}
        </h3>
        <p className="text-sm text-slate-500 mt-1">📍 {exp.location}</p>
        <ul className="mt-4 space-y-2">
          {exp.responsibilities.map((responsibility, i) => (
            <li
              key={i}
              className="text-slate-400 text-base leading-relaxed flex items-start"
            >
              <span className="mr-3 mt-1.5 w-1 h-1 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
        {exp.documentUrl && (
          <button
            onClick={() =>
              setActiveDocument(
                activeDocument === exp.documentUrl
                  ? null
                  : exp.documentUrl ?? null
              )
            }
            className="mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors underline decoration-dotted"
          >
            {activeDocument === exp.documentUrl ? "Hide" : "View"} Details
          </button>
        )}
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-24 md:py-32 -mt-16 pt-32">
      <h2 className="text-base font-mono text-blue-500 uppercase tracking-widest mb-8 md:mb-12 border-b border-slate-800 pb-4">
        Experience
      </h2>
      {experiencesData.map((exp) => (
        <ExperienceItem key={exp.id} exp={exp} />
      ))}

      {activeDocument && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-[60] p-4">
          <div className="bg-slate-900 p-4 rounded-lg shadow-xl w-full max-w-4xl h-full max-h-[90vh] flex flex-col border border-slate-800">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-semibold text-slate-100">
                Document Viewer
              </h4>
              <button
                onClick={() => setActiveDocument(null)}
                className="text-slate-400 hover:text-red-400 text-2xl transition-colors"
              >
                &times;
              </button>
            </div>
            <iframe
              src={activeDocument}
              title="Experience Document"
              className="w-full h-full border-none rounded"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
