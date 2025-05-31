
import React from 'react';
import { ExternalLink, Github, Cloud, ShoppingCart, CheckSquare, Video } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Credit Card Fraud Detection',
      description: 'Detection system that studies and analyses user behaviour patterns and uses location scanning techniques to identify any unusual patterns. Includes alert system and automatic blocking after three invalid attempts.',
      tech: ['Python', 'Machine Learning', 'Data Analysis'],
      icon: Cloud,
      color: 'from-red-400 to-red-600',
      date: 'Oct 2025',
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Age and Gender Identification',
      description: 'Machine learning project that predicts author\'s age group and gender based on text analysis using Naive Bayes Classification for text classification tasks.',
      tech: ['Python', 'Machine Learning', 'NLP', 'Naive Bayes'],
      icon: Video,
      color: 'from-purple-500 to-purple-700',
      date: 'Sep 2024',
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Real Time Weather Application',
      description: 'Web-based platform providing instant weather updates for any selected location by integrating weather API. Users can search by city or region for real-time weather data.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
      icon: Cloud,
      color: 'from-cyan-400 to-cyan-600',
      date: 'May 2023',
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with user authentication, shopping cart, payment integration, and admin dashboard for product management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      icon: ShoppingCart,
      color: 'from-orange-500 to-orange-700',
      date: 'Aug 2024',
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, task assignment, progress tracking, and team collaboration features.',
      tech: ['React', 'Firebase', 'Material-UI'],
      icon: CheckSquare,
      color: 'from-blue-400 to-blue-600',
      date: 'Jun 2024',
      github: '#',
      live: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects 🛠️
        </h2>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <div key={project.title} className="soft-card p-8 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${project.color} text-white`}>
                  <project.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">{project.title}</h3>
                  <span className="text-sm text-gray-400">{project.date}</span>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors duration-200"
                >
                  <Github size={18} />
                  <span className="text-sm font-medium">Code</span>
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors duration-200"
                >
                  <ExternalLink size={18} />
                  <span className="text-sm font-medium">Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div key={project.title} className="soft-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} text-white`}>
                  <project.icon size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200">{project.title}</h3>
                  <span className="text-xs text-gray-400">{project.date}</span>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="flex items-center gap-1 text-gray-400 hover:text-gray-300 transition-colors duration-200"
                >
                  <Github size={16} />
                  <span className="text-xs font-medium">Code</span>
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-1 text-gray-400 hover:text-gray-300 transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                  <span className="text-xs font-medium">Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
