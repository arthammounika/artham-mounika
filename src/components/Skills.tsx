
import React from 'react';
import { Code, Database, Cloud, Users, Briefcase, MessageSquare } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-purple-400 to-purple-600',
      skills: [
        { name: 'C', level: 85 },
        { name: 'Python', level: 90 },
        { name: 'Java', level: 80 },
        { name: 'JavaScript', level: 88 },
      ]
    },
    {
      title: 'Web Development',
      icon: Code,
      color: 'from-pink-400 to-pink-600',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'JavaScript', level: 88 },
      ]
    },
    {
      title: 'Database Management',
      icon: Database,
      color: 'from-blue-400 to-blue-600',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'Firebase', level: 80 },
      ]
    },
    {
      title: 'Cloud Technologies',
      icon: Cloud,
      color: 'from-green-400 to-green-600',
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Azure', level: 70 },
        { name: 'Google Cloud Platform', level: 85 },
      ]
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'from-orange-400 to-orange-600',
      skills: [
        { name: 'Communication', level: 90 },
        { name: 'Leadership', level: 85 },
        { name: 'Team Collaboration', level: 88 },
        { name: 'Problem Solving', level: 92 },
      ]
    },
    {
      title: 'Tools & Others',
      icon: Briefcase,
      color: 'from-indigo-400 to-indigo-600',
      skills: [
        { name: 'MS Office', level: 95 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Figma', level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          Skills & Expertise 🚀
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="soft-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-700">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out rounded-full`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
