
import React from 'react';
import { Github, Linkedin, Download, Mail, MapPin, GraduationCap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in-up">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 p-1 animate-float">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <span className="text-4xl font-bold text-gradient">AM</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
            Hi, I'm Artham Mounika! 👋
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-600 mb-6">
            Computer Science Engineering Student passionate about creating amazing digital experiences
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="soft-card px-6 py-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="text-purple-500" size={20} />
                <span className="text-purple-600 font-medium">CGPA: 9.59</span>
              </div>
            </div>
            <div className="soft-card px-6 py-4">
              <div className="flex items-center gap-2">
                <MapPin className="text-pink-500" size={20} />
                <span className="text-purple-600 font-medium">MRCET</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="soft-card p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed">
              A passionate CSE student who loves turning ideas into reality through code. 
              Currently exploring the fascinating world of cloud computing, full-stack development, 
              and building meaningful projects that make a difference. Always eager to learn and grow! ✨
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="/resume.pdf"
              className="btn-soft flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
            
            <a
              href="#contact"
              className="btn-outline-soft flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/arthammounika"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/artham-mounika-383857300"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:arthammounika1707@gmail.com"
              className="p-3 rounded-full bg-gray-100 hover:bg-pink-100 text-gray-600 hover:text-pink-600 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-4 h-4 rounded-full opacity-20 animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: ['#C4B5FD', '#FCA5A5', '#93C5FD', '#FEF08A', '#A7F3D0'][i % 5],
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
