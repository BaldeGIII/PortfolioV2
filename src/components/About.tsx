const About = () => {
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
    <section id="about" className="py-24 md:py-32 -mt-16 pt-32">
      <h2 className="text-base font-mono text-blue-500 uppercase tracking-widest mb-8 md:mb-12 border-b border-slate-800 pb-4">
        About
      </h2>

      <div className="space-y-12">
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

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-medium text-slate-100 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
              Education
            </h3>

            <div className="space-y-6">
              <div className="group">
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

              <div className="group">
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

              <div className="group">
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
              <div key={category.title} className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
                <h4 className="text-sm font-medium text-blue-400 mb-3">
                  {category.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {category.skills.join(" • ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
