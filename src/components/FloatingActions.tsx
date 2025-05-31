
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ArrowUp, Cloud } from 'lucide-react';

const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const floatingButtons = [
    {
      icon: Github,
      href: 'https://github.com/arthammounika',
      color: 'from-gray-500 to-gray-700',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/artham-mounika-383857300',
      color: 'from-blue-400 to-blue-600',
      label: 'LinkedIn'
    },
    {
      icon: Cloud,
      href: 'https://www.cloudskillsboost.google/public_profiles/1f5fba5f-ff88-4770-bf9a-8713dce9c7b9',
      color: 'from-orange-400 to-orange-600',
      label: 'Cloud Skills'
    },
    {
      icon: Mail,
      href: 'mailto:arthammounika1707@gmail.com',
      color: 'from-red-400 to-red-600',
      label: 'Email'
    },
    {
      icon: Download,
      href: '/resume.pdf',
      color: 'from-purple-400 to-purple-600',
      label: 'Resume'
    }
  ];

  return (
    <>
      {/* Mobile Floating Buttons */}
      <div className="fixed right-4 bottom-4 md:hidden z-40">
        <div className="flex flex-col gap-3">
          {floatingButtons.map(({ icon: Icon, href, color, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`p-3 rounded-full bg-gradient-to-r ${color} text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300`}
              title={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed left-4 bottom-4 p-3 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-40"
          title="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default FloatingActions;
