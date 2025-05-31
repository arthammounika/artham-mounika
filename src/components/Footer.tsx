
import React from 'react';
import { Terminal, Github, Linkedin, Mail, Cloud } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          {/* Logo/Name */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Terminal className="text-green-500" size={24} />
            <span className="text-2xl font-bold text-gradient">Artham Mounika</span>
            <Terminal className="text-green-500" size={24} />
          </div>

          {/* Quote */}
          <div className="soft-card p-6 max-w-2xl mx-auto">
            <p className="text-gray-200 italic leading-relaxed">
              "Technology is not just about solving problems, it's about creating possibilities. 
              Every line of code is a step towards making the world a little better." ⚡
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/arthammounika"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 hover:border-gray-400/70 hover:scale-110 transition-all duration-300 group"
            >
              <Github className="text-gray-400 group-hover:text-white" size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/artham-mounika-383857300"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-gray-800/80 backdrop-blur-sm border border-blue-500/50 hover:border-blue-400/70 hover:scale-110 transition-all duration-300 group"
            >
              <Linkedin className="text-blue-400 group-hover:text-blue-300" size={24} />
            </a>
            <a
              href="https://www.cloudskillsboost.google/public_profiles/1f5fba5f-ff88-4770-bf9a-8713dce9c7b9"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-gray-800/80 backdrop-blur-sm border border-orange-500/50 hover:border-orange-400/70 hover:scale-110 transition-all duration-300 group"
            >
              <Cloud className="text-orange-400 group-hover:text-orange-300" size={24} />
            </a>
            <a
              href="mailto:arthammounika1707@gmail.com"
              className="p-4 rounded-full bg-gray-800/80 backdrop-blur-sm border border-red-500/50 hover:border-red-400/70 hover:scale-110 transition-all duration-300 group"
            >
              <Mail className="text-red-400 group-hover:text-red-300" size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-green-500/20 pt-6">
            <p className="text-gray-300 text-sm">
              © {currentYear} Artham Mounika. Made with{' '}
              <Terminal className="inline text-green-500" size={16} />{' '}
              and lots of ☕
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Designed & Developed with passion for creating beautiful experiences
            </p>
          </div>

          {/* Fun Message */}
          <div className="text-center">
            <p className="text-green-400 text-sm font-medium">
              Thanks for visiting! Have a wonderful day! 🌟
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
