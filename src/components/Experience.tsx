
import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Full Stack Web Development Intern',
      company: 'Pantech.ai (Warriors Way)',
      location: 'Remote',
      duration: 'May 2024 - Aug 2024',
      type: 'Internship',
      description: [
        'Developed responsive web applications using HTML, CSS, JavaScript, React, and Node.js',
        'Worked on frontend and backend integration, improving performance and security'
      ],
      skills: ['React', 'Node.js', 'JavaScript', 'HTML/CSS'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Web Development Intern',
      company: 'Bharat Intern',
      location: 'Remote',
      duration: 'July 2024 - Aug 2024',
      type: 'Internship',
      description: [
        'Worked on frontend & backend development projects',
        'Gained hands-on experience in HTML, CSS, JavaScript, and deployment'
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'Deployment'],
      color: 'from-pink-400 to-pink-600'
    },
    {
      title: 'Full Stack Development Intern',
      company: 'CodeAlpha',
      location: 'Remote',
      duration: 'July 2024 - Aug 2024',
      type: 'Virtual Internship',
      description: [
        'Participated in a virtual internship program, focusing on full-stack development',
        'Strengthened skills in React, Node.js, APIs, and database management'
      ],
      skills: ['React', 'Node.js', 'APIs', 'Database Management'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Web Development Intern',
      company: 'Octanet Services Pvt Ltd',
      location: 'Remote',
      duration: 'Oct 2024 - Nov 2024',
      type: 'Internship',
      description: [
        'Engaged in real-world projects, demonstrating problem-solving and coding proficiency'
      ],
      skills: ['Web Development', 'Problem Solving', 'Project Management'],
      color: 'from-green-400 to-green-600'
    }
  ];

  return (
    <section id="experience" className="section-padding bg-purple-50/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          Experience 💼
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="soft-card p-6 group hover:scale-[1.02] transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} text-white flex-shrink-0`}>
                  <Briefcase size={24} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                    <span className={`px-3 py-1 bg-gradient-to-r ${exp.color} text-white text-xs rounded-full font-medium w-fit`}>
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <ExternalLink size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
