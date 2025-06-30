import { Factory, Bug, Music, Warehouse, Receipt } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      icon: Factory,
      title: "Enterprise PLM UI (Intel)",
      duration: "2 years duration",
      description: "Built a responsive UI for Intel's internal PLM platform. Integrated complex workflows with validation and traceability tools for enhanced product lifecycle management.",
      gradient: "from-blue-600 to-blue-500"
    },
    {
      icon: Bug,
      title: "Issue Lifecycle Management (Intel)",
      duration: "5 months duration",
      description: "Developed and maintained an Angular 12 dashboard to track and resolve system issues with comprehensive reporting and analytics capabilities.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Music,
      title: "Music School ERP System",
      duration: "3 years duration",
      description: "Delivered comprehensive scheduling and enrollment platform. Enabled real-time updates and automated student progress tracking for improved administrative efficiency.",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: Warehouse,
      title: "Auto-Spare Inventory",
      duration: "1 year duration",
      description: "Created a real-time stock management system with user role management and automated stock reconciliation for streamlined inventory operations.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Receipt,
      title: "Construction Billing",
      duration: "6 months duration",
      description: "Created a lightweight receipt generator with export-ready receipts, simplifying billing processes for construction projects and contractors.",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Showcase of key projects demonstrating technical expertise and problem-solving skills
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden animate-slide-up"
              >
                <div className={`bg-gradient-to-br ${project.gradient} h-32 flex items-center justify-center`}>
                  <IconComponent className="text-white h-8 w-8" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.duration}</p>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
