import { Button } from "@/components/ui/button";
import { Mail, Phone, Download, User } from "lucide-react";

export default function HeroSection() {
  const handleDownloadResume = () => {
    // Create a simple resume content
    const resumeContent = `
VISHAKH ARUN SHENVI TALAK
Full Stack Developer | 7+ Years Experience

Contact: vishakh_talak@outlook.com | +91-9673366165

PROFILE SUMMARY
• 7+ years of experience in building scalable web applications and delivering robust software solutions
• Proficient in full software development life cycle with expertise in .NET, Angular and SQL Server
• Skilled in identifying and debugging complex issues to ensure smooth application performance
• A result-oriented individual with strong communication, analytical & interpersonal skills

TECHNICAL SKILLS
• Programming Languages: C#, JavaScript, TypeScript, SQL
• Frontend: Angular, jQuery, Bootstrap, HTML5/CSS3
• Backend: .NET, ASP.NET Web API, Entity Framework
• Database: SQL Server

WORK EXPERIENCE
Software Developer – III | UST Global, Bangalore (July 2022 – Present)
• Full-stack development for enterprise-grade web applications using Angular 14, ASP.NET Web API, and SQL Server
• Designed and developed modular, reusable UI components and scalable RESTful APIs
• Optimized API performance, significantly reducing response times across critical endpoints

Senior Software Engineer | Compdhenu Software Solutions, Goa (Dec 2017 - July 2022)
• Engineered Angular-based Single Page Applications (SPAs) with dynamic routing and reusable services
• Developed backend services and data access layers using ASP.NET Web API and Entity Framework
• Migrated legacy AngularJS interfaces to Angular 8+, enhancing performance and client satisfaction

EDUCATION
MCA (Computers) from Manipal Institute of Technology, Manipal - 2017
BCA from Shree Damodar College, Goa - 2015
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Vishakh_Talak_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
              Hi, I'm <span className="text-blue-600">Vishakh</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-slate-600 mb-6">Full Stack Developer</h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              A career-driven individual with 7+ years of experience in building scalable web applications 
              and delivering robust software solutions using .NET, Angular, and SQL Server.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={handleContactClick}
                className="bg-blue-600 text-white px-8 py-3 hover:bg-blue-700 transition-colors duration-200"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                onClick={handleDownloadResume}
                className="border-blue-600 text-blue-600 px-8 py-3 hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            <div className="flex space-x-6">
              <a 
                href="mailto:vishakh_talak@outlook.com" 
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a 
                href="tel:+919673366165" 
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex justify-center animate-slide-up">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                <User className="h-32 w-32 text-slate-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
