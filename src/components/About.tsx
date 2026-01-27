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

      <div className="space-y-16">
        <p className="text-slate-400 leading-loose text-lg">
          Hello, I'm{" "}
          <span className="text-slate-100 font-medium">Baldemar Guajardo</span>,
          a passionate Computer Science student and software developer based in
          Penitas, Texas. With expertise spanning full-stack development,
          machine learning, deep learning and embedded systems, I thrive on
          transforming complex challenges into innovative, scalable solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-base font-medium text-slate-100 mb-8">
              Education
            </h3>

            <div className="mb-10 group">
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-base font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                  M.S. Electrical Engineering
                </h4>
                <span className="text-sm font-mono text-slate-500">
                  In Progress
                </span>
              </div>
              <p className="text-base text-slate-400 leading-relaxed">
                UT Rio Grande Valley
              </p>
            </div>

            <div className="mb-10 group">
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-base font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                  B.S. Computer Science
                </h4>
                <span className="text-sm font-mono text-slate-500">
                  Fall 2025
                </span>
              </div>
              <p className="text-base text-slate-400 leading-relaxed">
                UT Rio Grande Valley
              </p>
              <p className="text-sm text-slate-500 mt-2">
                Minor in Electrical Engineering
              </p>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-base font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                  Associate's in Computer Engineering
                </h4>
                <span className="text-sm font-mono text-slate-500">
                  Spring 2023
                </span>
              </div>
              <p className="text-base text-slate-400 leading-relaxed">
                South Texas College
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium text-slate-100 mb-8">Focus</h3>
            <div className="space-y-3 text-base text-slate-400">
              <p className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                Artificial Intelligence
              </p>
              <p className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                Machine Learning
              </p>
              <p className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                Deep Learning
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium text-slate-100 mb-6">
            Relevant Coursework
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {coursework.map((course, index) => (
              <p key={index} className="flex items-center gap-3 text-sm text-slate-400">
                <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                {course}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium text-slate-100 mb-6">
            Technical Skills
          </h3>
          <div className="space-y-4">
            {skills.map((category) => (
              <div key={category.title}>
                <h4 className="text-sm font-medium text-slate-200 mb-2 border-l-2 border-blue-500 pl-3">
                  {category.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed pl-3.5">
                  {category.skills.join(" · ")}
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
