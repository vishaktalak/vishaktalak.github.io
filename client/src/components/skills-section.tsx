import { Code, Laptop, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "C#", color: "bg-blue-100 text-blue-800" },
        { name: "JavaScript", color: "bg-yellow-100 text-yellow-800" },
        { name: "TypeScript", color: "bg-blue-100 text-blue-800" },
        { name: "SQL", color: "bg-gray-100 text-gray-800" }
      ]
    },
    {
      icon: Laptop,
      title: "Frontend Technologies",
      skills: [
        { name: "Angular", color: "bg-red-100 text-red-800" },
        { name: "jQuery", color: "bg-blue-100 text-blue-800" },
        { name: "Bootstrap", color: "bg-purple-100 text-purple-800" },
        { name: "HTML5/CSS3", color: "bg-green-100 text-green-800" }
      ]
    },
    {
      icon: Server,
      title: "Backend & Database",
      skills: [
        { name: ".NET", color: "bg-purple-100 text-purple-800" },
        { name: "ASP.NET Web API", color: "bg-green-100 text-green-800" },
        { name: "Entity Framework", color: "bg-blue-100 text-blue-800" },
        { name: "SQL Server", color: "bg-orange-100 text-orange-800" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Expertise across modern web technologies and frameworks
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 animate-slide-up"
              >
                <div className="text-blue-600 mb-4">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`${skill.color} mr-2 mb-2`}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
