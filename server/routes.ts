import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for resume download
  app.get("/api/resume", (req, res) => {
    const resumeContent = `
VISHAKH ARUN SHENVI TALAK
Full Stack Developer | 7+ Years Experience

Contact: vishakh_talak@outlook.com | +91-9673366165, +91-8668706191

PROFILE SUMMARY
A career-driven individual with 7+ years of experience in building scalable web applications and delivering robust software solutions.
Proficient in full software development life cycle with expertise in .NET, Angular and SQL Server.
Skilled in identifying and debugging complex issues to ensure smooth application performance.
A result-oriented individual with strong communication, analytical & interpersonal skills.
Strong focus on delivering value-driven results in fast-paced environments.

CORE COMPETENCIES
• Full-Stack Application Development
• Debugging & Bug Fixing
• Design, Coding & Development
• Requirement Gathering
• API Design & Integration
• UI/UX Engineering
• Database Management
• Legacy Modernization

TECHNICAL SKILLS
Programming Languages: C#, JavaScript, TypeScript, SQL
Frontend Technologies: Angular, jQuery, Bootstrap, HTML5/CSS3
Backend & Database: .NET, ASP.NET Web API, Entity Framework, SQL Server

WORK EXPERIENCE

Software Developer – III | UST Global, Bangalore (July 2022 – Present)
• Full-stack development for enterprise-grade web applications using Angular 14, ASP.NET Web API, and SQL Server
• Designed and developed modular, reusable UI components and scalable RESTful APIs
• Optimized API performance, significantly reducing response times across critical endpoints
• Collaborated closely with QA, DevOps, and product teams in an Agile environment to ensure timely and quality deliverables

Senior Software Engineer | Compdhenu Software Solutions, Goa (December 2017 – July 2022)
• Engineered Angular-based Single Page Applications (SPAs) with dynamic routing and reusable services for B2B platforms
• Developed backend services and data access layers using ASP.NET Web API and Entity Framework
• Migrated legacy AngularJS interfaces to Angular 8+, enhancing performance and client satisfaction
• Designed optimized stored procedures and complex SQL queries, significantly reducing database load times

PREVIOUS PROJECTS

Enterprise PLM UI (Intel) - 2 years
Built a responsive UI for Intel's internal PLM platform. Integrated complex workflows with validation and traceability tools.

Issue Lifecycle Management (Intel) - 5 months
Developed and maintained an Angular 12 dashboard to track and resolve system issues.

Music School ERP System - 3 years
Delivered scheduling and enrollment platform. Enabled real-time updates and automated student progress tracking.

Auto-Spare Inventory - 1 year
Created a real-time stock management system. Implemented user roles and stock reconciliation.

Construction Billing - 6 months
Created a lightweight receipt generator with export-ready receipts.

EDUCATION
MCA (Computers) from Manipal Institute of Technology, Manipal - 2017
BCA from Shree Damodar College, Goa - 2015

PERSONAL DETAILS
Date of Birth: 26th September 1994
Address: Indradhanusha Apt Bunglow D2, Borda Margao 403602, Goa, India
Languages Known: English, Hindi, Marathi & Konkani
    `;

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Disposition', 'attachment; filename="Vishakh_Talak_Resume.txt"');
    res.send(resumeContent);
  });

  const httpServer = createServer(app);
  return httpServer;
}
