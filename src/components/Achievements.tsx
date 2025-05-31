
import React from 'react';
import { Award, Users, Code, BookOpen, Trophy, Star } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Cambridge English Empower Level C1 Certification',
      issuer: 'Cambridge University Press & Assessment',
      date: '2025',
      icon: Award,
      color: 'from-purple-400 to-purple-600',
      type: 'Certification'
    },
    {
      title: 'Google Developer Groups Member',
      issuer: 'Google Cloud Platform',
      date: 'Current',
      icon: Code,
      color: 'from-blue-500 to-blue-700',
      type: 'Community'
    },
    {
      title: 'Warrior Way Hub Member',
      issuer: 'Networking and Collaboration',
      date: 'Current',
      icon: Users,
      color: 'from-orange-400 to-orange-600',
      type: 'Community'
    },
    {
      title: 'Student Spot Community Member',
      issuer: 'Student Development Community',
      date: 'Current',
      icon: BookOpen,
      color: 'from-cyan-500 to-cyan-700',
      type: 'Community'
    },
    {
      title: 'GenXReality Startup Project',
      issuer: 'AR/VR 3D Models Integration',
      date: '2024',
      icon: Star,
      color: 'from-pink-400 to-pink-600',
      type: 'Project'
    },
    {
      title: 'Accenture Innovation Challenge 2024',
      issuer: 'Innovative Technological Solutions',
      date: '2024',
      icon: Trophy,
      color: 'from-yellow-500 to-yellow-700',
      type: 'Recognition'
    },
    {
      title: 'Smart India Hackathon 2024',
      issuer: 'Team Calamity Calmers (SIH Team ID: 16128)',
      date: '2024',
      icon: Code,
      color: 'from-indigo-400 to-indigo-600',
      type: 'Competition'
    },
    {
      title: 'Intel Unnati Machine Learning Training',
      issuer: 'Intel® Unnati Lab',
      date: 'Aug - Sep 2024',
      icon: BookOpen,
      color: 'from-teal-500 to-teal-700',
      type: 'Training'
    },
    {
      title: 'Wadhwani JobReady Employability Skills',
      issuer: 'Professional Skills Development',
      date: 'March 2024',
      icon: Users,
      color: 'from-emerald-400 to-emerald-600',
      type: 'Training'
    },
    {
      title: 'Microsoft Fabric & Power Platform Bootcamp',
      issuer: 'Hyderabad Data & AI Community',
      date: '2025',
      icon: Award,
      color: 'from-sky-500 to-sky-700',
      type: 'Bootcamp'
    },
    {
      title: 'Coursera Certifications',
      issuer: 'Completed Multiple Courses',
      date: 'Ongoing',
      icon: BookOpen,
      color: 'from-violet-400 to-violet-600',
      type: 'Certification'
    }
  ];

  const groupedAchievements = achievements.reduce((acc, achievement) => {
    if (!acc[achievement.type]) {
      acc[achievement.type] = [];
    }
    acc[achievement.type].push(achievement);
    return acc;
  }, {} as Record<string, typeof achievements>);

  return (
    <section id="achievements" className="section-padding bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
          Achievements & Certifications 🏆
        </h2>

        <div className="space-y-12">
          {Object.entries(groupedAchievements).map(([type, items]) => (
            <div key={type}>
              <h3 className="text-2xl font-semibold text-center mb-8 text-gray-300">
                {type}s
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((achievement, index) => (
                  <div key={index} className="soft-card p-6 group hover:scale-105 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} text-white flex-shrink-0`}>
                        <achievement.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-200 mb-2 leading-tight">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-gray-300 mb-2">
                          {achievement.issuer}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">
                            {achievement.date}
                          </span>
                          <span className={`px-2 py-1 bg-gradient-to-r ${achievement.color} text-white text-xs rounded-full font-medium`}>
                            {achievement.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="soft-card p-6 text-center">
            <div className="text-2xl font-bold text-purple-300 mb-2">11+</div>
            <div className="text-sm text-gray-400">Certifications</div>
          </div>
          <div className="soft-card p-6 text-center">
            <div className="text-2xl font-bold text-blue-300 mb-2">4</div>
            <div className="text-sm text-gray-400">Internships</div>
          </div>
          <div className="soft-card p-6 text-center">
            <div className="text-2xl font-bold text-cyan-300 mb-2">5+</div>
            <div className="text-sm text-gray-400">Projects</div>
          </div>
          <div className="soft-card p-6 text-center">
            <div className="text-2xl font-bold text-orange-300 mb-2">9.59</div>
            <div className="text-sm text-gray-400">CGPA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
