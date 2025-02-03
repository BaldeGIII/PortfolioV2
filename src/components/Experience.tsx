import ExperienceImage from "../assets/profile.png"

const Experience = () => {
  return (
    <div
      className="min-h-screen p-4 md:p-8 bg-primary flex items-center justify-center overflow-x-hidden relative"
      id="experience"
    >
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full max-w-6xl text-white font-mono">
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={ExperienceImage}
            alt="Apprentice Lineman Program"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-3 md:gap-6 w-full md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-medium">IT Summer Programmer Intern</h2>

          <h3 className="text-lg md:text-xl font-medium">Magic Valley Electric Cooperative</h3>

          <div className="text-sm md:text-base">
            <span>May 2024 - August 2024</span>
          </div>

          <div className="text-sm md:text-base flex items-center gap-2">
            <span>📍 Mercedes, TX</span>
          </div>

          <div className="text-sm md:text-base">Apprentice Lineman Program</div>

          <ul className="list-none p-0 space-y-2 md:space-y-4">
            <li className="relative pl-4 md:pl-6 text-sm md:text-base leading-relaxed">
              Led the development of a fully digital Apprentice Lineman program, transforming a paper-based system into
              an interactive platform, enhancing access and engagement for over 100 apprentices and reducing onboarding
              time by 35%.
            </li>
            <li className="relative pl-4 md:pl-6 text-sm md:text-base leading-relaxed">
              Collaborated with IT, HR, and training teams to build and integrate requirements, testing, and
              administration portals on Power Apps and SharePoint, boosting program tracking and operational efficiency
              by 30%, enabling streamlined access for staff and apprentices.
            </li>
            <li className="relative pl-4 md:pl-6 text-sm md:text-base leading-relaxed">
              Conducted targeted research to identify process improvements, implementing changes that increased program
              interactivity by 25% and optimized workflows, resulting in faster, more efficient processes for users and
              administrators.
            </li>
            <li className="relative pl-4 md:pl-6 text-sm md:text-base leading-relaxed">
              Managed the digital rollout of the training program, achieving a user-friendly experience aligned with the
              Cooperative's mission; improvements led to projected cost savings of 20% due to reduced manual processes
              and enhanced digital adoption.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience

