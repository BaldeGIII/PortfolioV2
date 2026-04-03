import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import profilePic from '../assets/67811850.png';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const coursework = [
    "Deep Learning & Neural Networks",
    "VLSI Design",
    "AI-Powered Applications",
    "Embedded Systems",
    "Data Science",
    "Algorithms & Data Structures",
    "Computer Networks",
    "Probability & Statistics",
    "Linear Algebra",
  ];

  const skills = [
    {
      title: "AI/ML",
      skills: [
        "PyTorch",
        "TensorFlow",
        "NumPy",
        "Scikit-learn",
        "OpenAI API",
        "Meta-RL",
        "GloVe",
        "WandB",
      ],
    },
    {
      title: "Languages",
      skills: [
        "Python",
        "C/C++",
        "Rust",
        "Assembly (x86)",
        "JavaScript",
        "SQL",
      ],
    },
    {
      title: "Hardware/Systems",
      skills: [
        "VLSI Design",
        "Micro-controllers (Arduino)",
        "Quartus II",
        "Cadence",
        "Keil",
      ],
    },
    {
      title: "Tools",
      skills: [
        "Linux (Ubuntu)",
        "Git/GitHub",
        "Docker",
        "Power Apps",
        "VS Code",
      ],
    },
  ];

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img
            src={profilePic}
            alt="Baldemar Guajardo"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-slate-800 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 transition-all duration-300 shrink-0"
          />
          <div className="max-w-3xl">
            <p className="text-slate-300 leading-relaxed text-base mb-4">
              Hello, I'm{" "}
              <span className="text-slate-100 font-medium">Baldemar Guajardo</span>,
              a Computer Science graduate student and software developer based in
              Penitas, Texas.
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              With expertise spanning full-stack development, machine learning, deep learning, and embedded systems, I thrive on transforming complex challenges into innovative, scalable solutions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-medium text-slate-100 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
              Education
            </h3>

            <div className="space-y-6">
              <div className="group hover:-translate-y-1 transition-all duration-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-base font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                    Master of Science in Electrical Engineering
                  </h4>
                  <span className="text-xs font-mono text-slate-500 whitespace-nowrap ml-4">
                    Expected May 2027
                  </span>
                </div>
                <p className="text-sm text-slate-400">
                  The University of Texas Rio Grande Valley
                </p>
              </div>

              <div className="group hover:-translate-y-1 transition-all duration-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-base font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                    Bachelor of Science in Computer Science
                  </h4>
                  <span className="text-xs font-mono text-slate-500 whitespace-nowrap ml-4">
                    Fall 2025
                  </span>
                </div>
                <p className="text-sm text-slate-400">
                  The University of Texas Rio Grande Valley
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Minor in Electrical Engineering
                </p>
              </div>

              <div className="group hover:-translate-y-1 transition-all duration-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-base font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                    Associate of Science in Engineering
                  </h4>
                  <span className="text-xs font-mono text-slate-500 whitespace-nowrap ml-4">
                    Spring 2023
                  </span>
                </div>
                <p className="text-sm text-slate-400">
                  South Texas College
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-slate-100 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
              Focus Areas
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                Artificial Intelligence & Machine Learning
              </p>
              <p className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                Deep Learning & Neural Networks
              </p>
              <p className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                Full-Stack Development
              </p>
              <p className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                Embedded Systems & Hardware Design
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-slate-100 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
            Relevant Coursework
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
            {coursework.map((course, index) => (
              <p key={index} className="flex items-center gap-2 text-sm text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                {course}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-slate-100 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((category) => (
              <div
                key={category.title}
                className="bg-slate-900/30 border border-slate-800 rounded-lg p-4 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 group"
              >
                <h4 className="text-sm font-medium text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                  {category.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {category.skills.join(" • ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
