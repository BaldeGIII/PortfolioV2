const About = () => {
  const skills = [
    {
      title: "Frameworks",
      skills: ["Ruby on Rails", "MySQL", "Sinatra", "React", "Microntrollers", "Electronics"],
    },
    {
      title: "Languages",
      skills: ["Python", "C++", "Ruby", "C", "HTML/CSS", "Java"],
    },
    {
      title: "Developer Tools",
      skills: [
        "Git",
        "VS Code",
        "Visual Studio 2022",
        "PyCharm",
        "Quartus II",
        "Cadence",
        "Keil uVision",
        "Power Apps",
      ],
    },
  ]
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary text-white p-8" id="about">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
        <p className="text-lg mb-8 text-center">
          Hello, I'm Baldemar Guajardo, I am passionate about AI, Machine Learning, Deep Learning, Software Engineering
          and Web Development. I am currently studying a Bachelor's degree in Computer Science and Minor in Electrical
          Engineering at the University of Texas Rio Grande Valley. I am a hardworking and dedicated individual who is
          always looking for new challenges and opportunities to grow in the field of technology.
        </p>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((category, index) => (
              <div 
                key={index} 
                className="bg-[rgb(100,255,218)]/10 p-4 rounded-lg shadow-md border border-[rgb(100,255,218)]/20"
              >
                <h3 className="text-xl font-semibold mb-4 text-center text-[rgb(100,255,218)] border-b border-[rgb(100,255,218)]/30 pb-2">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/50 p-2 rounded text-center text-sm border border-[rgb(100,255,218)]/20 text-[rgb(100,255,218)]"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

