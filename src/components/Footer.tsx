
import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          {/* Logo/Name */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="text-pink-500 animate-pulse" size={24} />
            <span className="text-2xl font-bold text-gradient">Artham Mounika</span>
            <Heart className="text-pink-500 animate-pulse" size={24} />
          </div>

          {/* Quote */}
          <div className="soft-card p-6 max-w-2xl mx-auto">
            <p className="text-gray-600 italic leading-relaxed">
              "Technology is not just about solving problems, it's about creating possibilities. 
              Every line of code is a step towards making the world a little better." ✨
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/arthammounika"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/80 backdrop-blur-sm border border-purple-100 hover:border-purple-300 hover:scale-110 transition-all duration-300 group"
            >
              <Github className="text-gray-600 group-hover:text-purple-600" size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/artham-mounika-383857300"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/80 backdrop-blur-sm border border-purple-100 hover:border-blue-300 hover:scale-110 transition-all duration-300 group"
            >
              <Linkedin className="text-gray-600 group-hover:text-blue-600" size={24} />
            </a>
            <a
              href="mailto:arthammounika1707@gmail.com"
              className="p-4 rounded-full bg-white/80 backdrop-blur-sm border border-purple-100 hover:border-pink-300 hover:scale-110 transition-all duration-300 group"
            >
              <Mail className="text-gray-600 group-hover:text-pink-600" size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-purple-200 pt-6">
            <p className="text-gray-500 text-sm">
              © {currentYear} Artham Mounika. Made with{' '}
              <Heart className="inline text-pink-500 animate-pulse" size={16} />{' '}
              and lots of ☕
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Designed & Developed with passion for creating beautiful experiences
            </p>
          </div>

          {/* Fun Message */}
          <div className="text-center">
            <p className="text-purple-600 text-sm font-medium">
              Thanks for visiting! Have a wonderful day! 🌟
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
