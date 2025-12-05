import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import profilePic from "../assets/67811850.png";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pb-24 px-4">
      <header className="mb-24 text-center w-full">
        <div className="mb-8 flex justify-center">
          <img
            src={profilePic}
            alt="Baldemar Guajardo"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-2 border-slate-800 hover:border-blue-500 transition-colors"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tight mb-6 text-slate-100 px-4">
          Baldemar Guajardo
        </h1>

        <h2 className="text-lg sm:text-xl md:text-3xl font-light mb-10 max-w-3xl mx-auto text-slate-400 px-4">
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              "Computer Scientist & Electical Engineer",
              3000,
              "Full Stack Developer",
              2000,
              "AI Engineer",
              2000,
              "Machine Learning / Deep Learning Engineer",
              2000,
            ]}
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
          />
        </h2>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base font-medium text-slate-500 px-4">
          <a
            href="mailto:Baldemarguajardo20@gmail.com"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Mail size={16} className="md:w-[18px] md:h-[18px]" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/BaldeGIII"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Github size={16} className="md:w-[18px] md:h-[18px]" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/baldemar-guajardo-454132228/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Linkedin size={16} className="md:w-[18px] md:h-[18px]" />
            <span>LinkedIn</span>
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} className="md:w-[18px] md:h-[18px]" />
            <span>Penitas, TX</span>
          </span>
        </div>
      </header>
    </div>
  );
};

export default Home;
