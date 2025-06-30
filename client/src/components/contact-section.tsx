import { Mail, Phone, MapPin, GraduationCap } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      subtitle: "Drop me a line anytime",
      content: "vishakh_talak@outlook.com",
      href: "mailto:vishakh_talak@outlook.com"
    },
    {
      icon: Phone,
      title: "Phone",
      subtitle: "Call me for urgent queries",
      content: ["+91-9673366165", "+91-8668706191"],
      href: "tel:+919673366165"
    },
    {
      icon: MapPin,
      title: "Location",
      subtitle: "Currently based in",
      content: ["Indradhanusha Apt Bunglow D2", "Borda Margao 403602", "Goa, India"],
      href: null
    }
  ];

  const educationInfo = [
    {
      degree: "Master of Computer Applications",
      institution: "Manipal Institute of Technology, Manipal",
      year: "2017",
      color: "bg-blue-600"
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Shree Damodar College, Goa",
      year: "2015",
      color: "bg-blue-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Let's discuss your next project or explore collaboration opportunities
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <div 
                key={index}
                className="bg-slate-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow duration-200 animate-slide-up"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-white h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{contact.title}</h3>
                <p className="text-slate-600 mb-4">{contact.subtitle}</p>
                {Array.isArray(contact.content) ? (
                  <div className="text-blue-600 font-medium">
                    {contact.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        {contact.href && itemIndex === 0 ? (
                          <a href={contact.href} className="hover:text-blue-700">
                            {item}
                          </a>
                        ) : (
                          item
                        )}
                        {itemIndex < contact.content.length - 1 && <br />}
                      </div>
                    ))}
                  </div>
                ) : (
                  contact.href ? (
                    <a 
                      href={contact.href} 
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {contact.content}
                    </a>
                  ) : (
                    <p className="text-blue-600 font-medium">{contact.content}</p>
                  )
                )}
              </div>
            );
          })}
        </div>
        
        {/* Education Section */}
        <div className="bg-slate-50 p-8 rounded-xl animate-slide-up">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {educationInfo.map((edu, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${edu.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <GraduationCap className="text-white h-6 w-6" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">{edu.degree}</h4>
                <p className="text-slate-600">{edu.institution}</p>
                <p className="text-slate-500">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
