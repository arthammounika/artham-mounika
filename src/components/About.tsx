
import React from 'react';
import { Book, Coffee, Code, Music, Travel, Camera } from 'lucide-react';

const About: React.FC = () => {
  const interests = [
    { icon: Code, label: 'Coding', color: 'text-purple-500' },
    { icon: Book, label: 'Reading', color: 'text-blue-500' },
    { icon: Music, label: 'Music', color: 'text-pink-500' },
    { icon: Travel, label: 'Travel', color: 'text-green-500' },
    { icon: Camera, label: 'Photography', color: 'text-orange-500' },
    { icon: Coffee, label: 'Coffee', color: 'text-yellow-600' },
  ];

  const currentLearning = [
    'Advanced React Patterns',
    'Cloud Architecture (GCP)',
    'Machine Learning',
    'System Design',
    'DevOps Practices'
  ];

  return (
    <section id="about" className="section-padding bg-purple-50/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          About Me 💫
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Personal Intro */}
          <div className="soft-card p-8 space-y-6">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">
              Hello there! 👋
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate Computer Science Engineering student at MRCET with a CGPA of 9.59. 
              I love creating innovative solutions and turning complex problems into elegant code. 
              My journey in tech has been filled with exciting projects, internships, and continuous learning.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, participating in hackathons, 
              or contributing to open-source projects. I believe in the power of technology to make a positive impact on the world.
            </p>
          </div>

          {/* Interests */}
          <div className="soft-card p-8">
            <h3 className="text-2xl font-semibold text-purple-600 mb-6">
              What I Love ❤️
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {interests.map(({ icon: Icon, label, color }) => (
                <div key={label} className="text-center group cursor-pointer">
                  <div className="p-4 rounded-2xl bg-white shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
                    <Icon className={`${color} mx-auto mb-2`} size={24} />
                    <span className="text-sm text-gray-600 font-medium">{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Currently Learning */}
        <div className="soft-card p-8 mt-8">
          <h3 className="text-2xl font-semibold text-purple-600 mb-6 text-center">
            Currently Learning 📚
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {currentLearning.map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
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
