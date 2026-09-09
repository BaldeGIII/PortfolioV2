import { useState, useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const team10Poster = "/documents/Team-10-Poster.pdf";
const trackFieldProject = "/documents/Track-and-Field-Data-Project.pdf";

interface ExperienceItem {
  id: string;
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
    id: "mvec-2026",
    title: "IT Operations Intern",
    company: "Magic Valley Electric Cooperative",
    duration: "June 2026 – August 2026",
    location: "Mercedes, TX",
    programName: "IT Operations Division",
    responsibilities: [
      "Engineered a secure, offline-capable desktop application to replace a legacy, unencrypted Microsoft Access database, integrating SQLCipher encryption and automating a manual update process that previously took over 4 hours, ensuring the tool remains functional during storm outages when internet access is unavailable.",
      "Built a cross-platform automation tool that normalizes and reconciles hardware inventory data across siloed systems (Rapid7, SentinelOne, Active Directory, ManageEngine), replacing hours of manual spreadsheet cross-referencing with a single automated report covering 300+ assets and flagging stale or unaccounted-for equipment.",
      "Co-developed NEXUS, a unified command dashboard integrating 5 separate cybersecurity and IT platforms into one real-time view via API integration and system orchestration, giving the IT department instant oversight of assets, inventory, and vulnerabilities in a single pane of glass.",
      "Completed a two-month capstone on-schedule and presented technical outcomes and live demos to IT Operations leadership and mentors.",
    ],
  },
  {
    id: "vsr",
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

const ExperienceEntry = ({
  exp,
  index,
  activeDocument,
  onToggleDocument,
}: {
  exp: ExperienceItem;
  index: number;
  activeDocument: string | null;
  onToggleDocument: (url: string) => void;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(itemRef, { threshold: 0.2 });

  return (
    <div
      ref={itemRef}
      className={`group mb-12 md:grid md:grid-cols-4 md:gap-6 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <header className="md:col-span-1 mb-2 md:mb-0">
        <span className="text-xs font-mono text-hermes-ink/50 mt-1.5 uppercase tracking-wide group-hover:text-hermes-ink transition-colors">
          {exp.duration}
        </span>
      </header>
      <div className="md:col-span-3">
        <h3 className="text-xl font-medium font-display text-hermes-ink group-hover:opacity-70 transition-opacity">
          {exp.title} <span className="text-hermes-ink/40">·</span> {exp.company}
        </h3>
        <p className="text-xs font-mono uppercase tracking-wide text-hermes-ink/50 mt-1">{exp.location}</p>
        <ul className="mt-4 space-y-2">
          {exp.responsibilities.map((responsibility, i) => (
            <li
              key={i}
              className="text-hermes-ink/70 text-base leading-relaxed flex items-start"
            >
              <span className="mr-3 mt-2 w-1.5 h-1.5 bg-hermes-ink shrink-0"></span>
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
        {exp.documentUrl && (
          <button
            onClick={() => onToggleDocument(exp.documentUrl!)}
            className="mt-4 text-xs font-mono uppercase tracking-widest text-hermes-ink underline decoration-dotted hover:opacity-60 transition-opacity inline-flex items-center gap-1"
          >
            {activeDocument === exp.documentUrl ? "Hide" : "View"} Details
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  const [activeDocument, setActiveDocument] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const handleToggleDocument = (url: string) => {
    setActiveDocument(activeDocument === url ? null : url);
  };

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className={`mb-8 md:mb-12 border-b border-hermes-line pb-4 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}>
        <p className="text-xs font-mono uppercase tracking-widest text-hermes-ink/60">
          #2 Experience
        </p>
        <p className="text-sm font-mono text-hermes-ink/60 mt-2">
          Roles where I've shipped production software and driven measurable results.
        </p>
      </div>
      {experiencesData.map((exp, index) => (
        <ExperienceEntry
          key={exp.id}
          exp={exp}
          index={index}
          activeDocument={activeDocument}
          onToggleDocument={handleToggleDocument}
        />
      ))}

      {activeDocument && (
        <div
          className={`fixed inset-0 bg-black/75 flex items-center justify-center z-[60] p-4 ${
            isClosing ? 'animate-fade-out' : 'animate-fade-in'
          }`}
          onClick={() => {
            setIsClosing(true);
            setTimeout(() => {
              setActiveDocument(null);
              setIsClosing(false);
            }, 200);
          }}
        >
          <div
            className={`bg-hermes-bg p-4 w-full max-w-4xl h-full max-h-[90vh] flex flex-col border border-hermes-line ${
              isClosing ? 'animate-modal-exit' : 'animate-modal-enter'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-mono uppercase tracking-widest font-medium text-hermes-ink">
                Document Viewer
              </h4>
              <button
                onClick={() => {
                  setIsClosing(true);
                  setTimeout(() => {
                    setActiveDocument(null);
                    setIsClosing(false);
                  }, 200);
                }}
                className="text-hermes-ink/60 hover:opacity-60 text-2xl transition-opacity"
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
    </div>
  );
};

export default Experience;
