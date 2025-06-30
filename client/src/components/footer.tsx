import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Vishakh Talak</h3>
          <p className="text-slate-300 mb-6">Full Stack Developer</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:vishakh_talak@outlook.com" 
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="tel:+919673366165" 
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>
          <p className="text-slate-400 text-sm">
            © 2024 Vishakh Talak. All rights reserved. | Languages: English, Hindi, Marathi, Konkani
          </p>
        </div>
      </div>
    </footer>
  );
}
