import { TypeAnimation } from "react-type-animation"
import githubIcon from "../assets/github-mark-white.png"
import linkedinIcon from "../assets/linkedin-app-white-icon.webp"
import pofilePic from "../assets/67811850.png"

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-primary" id="home">
      <div className="max-w-4xl mx-auto px-4 py-16 animate-fade-in">
        <div className="text-primary-foreground font-mono mb-4">Hi, my name is</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-accent-foreground">
          Baldemar Guajardo
        </h1>
        <div className="text-2xl md:text-4xl text-secondary-foreground mb-8">
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              "Web Developer",
              1000,
              "FullStack Developer",
              1000,
              "Software Engineer",
              1000,
              "AI Engineer",
              1000,
              "Machine Learning Engineer",
              1000,
            ]}
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
          />
        </div>
        <div className="flex gap-6 mt-8">
          <a
            href="https://github.com/godxrs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-foreground hover:text-primary-foreground transition-colors duration-300"
          >
            <img src={githubIcon} alt="Github" className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/baldemar-guajardo-454132228/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-foreground hover:text-primary-foreground transition-colors duration-300"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home

