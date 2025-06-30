export default function ExperienceSection() {
  const experiences = [
    {
      position: "Software Developer – III",
      company: "UST Global, Bangalore",
      period: "July 2022 – Present",
      responsibilities: [
        "Full-stack development for enterprise-grade web applications using Angular 14, ASP.NET Web API, and SQL Server",
        "Designed and developed modular, reusable UI components and scalable RESTful APIs",
        "Optimized API performance, significantly reducing response times across critical endpoints",
        "Collaborated closely with QA, DevOps, and product teams in an Agile environment"
      ],
      isLeft: true
    },
    {
      position: "Senior Software Engineer",
      company: "Compdhenu Software Solutions, Goa",
      period: "December 2017 – July 2022",
      responsibilities: [
        "Engineered Angular-based Single Page Applications (SPAs) with dynamic routing and reusable services for B2B platforms",
        "Developed backend services and data access layers using ASP.NET Web API and Entity Framework",
        "Migrated legacy AngularJS interfaces to Angular 8+, enhancing performance and client satisfaction",
        "Designed optimized stored procedures and complex SQL queries, significantly reducing database load times"
      ],
      isLeft: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Work Experience</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional journey building enterprise-grade applications
          </p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-600"></div>
          
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className={`relative flex flex-col ${experience.isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center mb-12`}
            >
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-md z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2"></div>
              <div className={`ml-12 md:ml-0 md:w-1/2 ${experience.isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-slate-50 p-6 rounded-xl animate-slide-up">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{experience.position}</h3>
                  <h4 className="text-blue-600 font-medium mb-2">{experience.company}</h4>
                  <p className="text-slate-600 mb-4">{experience.period}</p>
                  <ul className="text-slate-700 space-y-2">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex}>• {responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
