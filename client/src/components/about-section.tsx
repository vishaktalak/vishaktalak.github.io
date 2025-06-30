import { Check } from "lucide-react";

export default function AboutSection() {
  const competencies = [
    "Full-Stack Application Development",
    "Debugging & Bug Fixing",
    "Design, Coding & Development",
    "Requirement Gathering",
    "API Design & Integration",
    "UI/UX Engineering",
    "Database Management",
    "Legacy Modernization"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and delivering value-driven results in fast-paced environments
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">My Journey</h3>
            <p className="text-slate-700 mb-6 leading-relaxed">
              With over 7 years of experience in full software development life cycle, I specialize in 
              building scalable web applications using modern technologies. My expertise spans across 
              full-stack development, from designing intuitive user interfaces to architecting robust backend systems.
            </p>
            <p className="text-slate-700 mb-6 leading-relaxed">
              I'm proficient in identifying and debugging complex issues to ensure smooth application performance, 
              with a strong focus on delivering high-quality solutions that meet business objectives.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">7+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
            </div>
          </div>
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Core Competencies</h3>
            <ul className="space-y-4">
              {competencies.map((competency, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-blue-600 mr-3 h-5 w-5" />
                  <span className="text-slate-700">{competency}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
