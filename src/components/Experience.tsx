import React, { useState } from "react"; // Import React for Fragment
// Import your logos - adjust paths as necessary
import mvecLogo from "../assets/MVECLogo.png";
import utrgvLogo from "../assets/UTRGVLogo.png";

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
    documentUrl: "src/assets/Team 10 Poster.pdf",
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
    documentUrl: "src/assets/Group1_Track_and_Field_Data_Project.pdf",
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

  return (
    <div
      className="w-full p-8 pt-24 pb-24 min-h-screen bg-primary flex flex-col items-center text-white overflow-x-hidden relative" // Using your specified classes, removed justify-center for natural top alignment
      id="experience"
    >
      {/* Wrapper to control max-width of the content area */}
      <div className="w-full max-w-6xl space-y-12">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center">
          Experience
        </h2>
        {experiencesData.map((exp, index) => (
          <React.Fragment key={exp.id}>
            {index > 0 && (
              // This HR is the "border" that appears between experience items.
              // The title "Experience" is rendered before this map, thus above this border.
              <hr className="w-full border-accent/20" />
            )}
            {/* Card container for each experience item */}
            <div className="w-full bg-secondary/20 p-6 rounded-lg shadow-xl font-poppins">
              {" "}
              {/* Card takes full width of max-w-5xl parent */}
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Logo */}
                <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-gray-700/50 p-2 rounded-md flex items-center justify-center">
                  <img
                    src={exp.image}
                    alt={`${exp.company} logo`}
                    className="object-contain w-full h-full rounded-sm"
                  />
                </div>

                {/* Details: Title, Company, Duration, Location, Program Name */}
                <div className="flex-grow">
                  <h2 className="text-xl sm:text-2xl font-bold text-accent-foreground">
                    {exp.title}
                  </h2>
                  <p className="text-md sm:text-lg text-gray-300">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    {exp.duration} | 📍 {exp.location}
                  </p>
                  {exp.programName && (
                    <p className="text-sm text-gray-400">{exp.programName}</p>
                  )}
                </div>
              </div>
              {/* Responsibilities */}
              <ul className="list-disc pl-5 mt-4 space-y-2 md:space-y-4">
                {exp.responsibilities.map((responsibility, i) => (
                  <li
                    key={i}
                    className="text-sm md:text-base leading-relaxed text-gray-300"
                  >
                    {responsibility}
                  </li>
                ))}
              </ul>
              {/* Document Link Button */}
              {exp.documentUrl && (
                <div className="mt-6">
                  <button
                    onClick={() =>
                      setActiveDocument(
                        activeDocument === exp.documentUrl
                          ? null
                          : exp.documentUrl ?? null
                      )
                    }
                    className="px-4 py-2 bg-accent text-primary-foreground rounded hover:bg-accent/90 transition-colors self-start text-sm font-semibold"
                  >
                    {activeDocument === exp.documentUrl ? "Hide" : "View"}{" "}
                    Details
                  </button>
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Modal or section to display the document */}
      {activeDocument && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[60] p-4">
          <div className="bg-white p-4 rounded-lg shadow-xl w-full max-w-4xl h-full max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-semibold text-gray-800">
                Document Viewer
              </h4>
              <button
                onClick={() => setActiveDocument(null)}
                className="text-gray-800 hover:text-red-500 text-2xl"
              >
                &times;
              </button>
            </div>
            <iframe
              src={activeDocument}
              title="Experience Document"
              className="w-full h-full border-none"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
