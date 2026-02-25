import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import profilePic from "../assets/67811850.png";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pb-24 px-4">
      <header className="mb-24 text-center w-full animate-fade-in">
        <div className="mb-8 flex justify-center animate-scale-in" style={{ animationDelay: '200ms' }}>
          <img
            src={profilePic}
            alt="Baldemar Guajardo"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-2 border-slate-800 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 transition-all duration-300"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tight mb-6 text-slate-100 px-4 animate-slide-up" style={{ animationDelay: '400ms' }}>
          Baldemar Guajardo
        </h1>

        <h2 className="text-lg sm:text-xl md:text-3xl font-light mb-10 max-w-3xl mx-auto text-slate-400 px-4 animate-slide-up" style={{ animationDelay: '600ms' }}>
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              "Computer Scientist & Electrical Engineer",
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

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base font-medium text-slate-500 px-4 animate-slide-up" style={{ animationDelay: '800ms' }}>
          <a
            href="mailto:Baldemarguajardo20@gmail.com"
            className="flex items-center gap-2 hover:text-blue-400 hover:scale-110 hover:-translate-y-1 transition-all duration-200 group"
          >
            <Mail size={16} className="md:w-[18px] md:h-[18px] group-hover:rotate-12 transition-transform duration-200" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/BaldeGIII"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 hover:scale-110 hover:-translate-y-1 transition-all duration-200 group"
          >
            <Github size={16} className="md:w-[18px] md:h-[18px] group-hover:rotate-12 transition-transform duration-200" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/baldemar-guajardo-454132228/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 hover:scale-110 hover:-translate-y-1 transition-all duration-200 group"
          >
            <Linkedin size={16} className="md:w-[18px] md:h-[18px] group-hover:rotate-12 transition-transform duration-200" />
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
