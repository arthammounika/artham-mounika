
import React from 'react';
import { Book, Coffee, Code, Music, MapPin, Camera } from 'lucide-react';

const About: React.FC = () => {
  const interests = [
    { icon: Code, label: 'Coding', color: 'text-blue-400' },
    { icon: Book, label: 'Reading', color: 'text-purple-400' },
    { icon: Music, label: 'Music', color: 'text-pink-400' },
    { icon: MapPin, label: 'Travel', color: 'text-orange-400' },
    { icon: Camera, label: 'Photography', color: 'text-cyan-400' },
    { icon: Coffee, label: 'Coffee', color: 'text-amber-400' },
  ];

  const currentLearning = [
    'Advanced React Patterns',
    'Cloud Architecture (GCP)',
    'Machine Learning',
    'System Design',
    'DevOps Practices'
  ];

  return (
    <section id="about" className="section-padding bg-gray-800/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          About Me 🚀
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Personal Intro */}
          <div className="soft-card p-8 space-y-6">
            <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
              Hello there! 👋
            </h3>
            <p className="text-gray-200 leading-relaxed">
              I'm a passionate Computer Science Engineering student at MRCET with a CGPA of 9.59. 
              I love creating innovative solutions and turning complex problems into elegant code. 
              My journey in tech has been filled with exciting projects, internships, and continuous learning.
            </p>
            <p className="text-gray-200 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, participating in hackathons, 
              or contributing to open-source projects. I believe in the power of technology to make a positive impact on the world.
            </p>
          </div>

          {/* Interests */}
          <div className="soft-card p-8">
            <h3 className="text-2xl font-semibold text-orange-300 mb-6">
              What I Love 💚
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {interests.map(({ icon: Icon, label, color }) => (
                <div key={label} className="text-center group cursor-pointer">
                  <div className="p-4 rounded-2xl bg-gray-700/50 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
                    <Icon className={`${color} mx-auto mb-2`} size={24} />
                    <span className="text-sm text-gray-200 font-medium">{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Currently Learning */}
        <div className="soft-card p-8 mt-8">
          <h3 className="text-2xl font-semibold text-pink-300 mb-6 text-center">
            Currently Learning 📚
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {currentLearning.map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-400/20 text-blue-200 border border-blue-500/30 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
