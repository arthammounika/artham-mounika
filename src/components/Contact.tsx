
import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'arthammounika1707@gmail.com',
      href: 'mailto:arthammounika1707@gmail.com',
      color: 'from-red-400 to-red-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9347468588',
      href: 'tel:+919347468588',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'artham-mounika',
      href: 'https://www.linkedin.com/in/artham-mounika-383857300',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'arthammounika',
      href: 'https://github.com/arthammounika',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Let's Connect! 💬
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="soft-card p-8">
              <h3 className="text-2xl font-semibold text-cyan-300 mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                I'm always excited to connect with fellow developers, potential collaborators, 
                or anyone interested in discussing technology and innovation. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800/60 border border-gray-600/50 hover:border-gray-400/70 hover:scale-105 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${color} text-white`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{label}</div>
                      <div className="font-medium text-gray-200 group-hover:text-white transition-colors">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="soft-card p-6">
              <h4 className="text-lg font-semibold text-orange-300 mb-4">
                Quick Facts
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="text-purple-400" size={16} />
                  <span className="text-sm text-gray-200">Based in Hyderabad, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-4 h-4 bg-green-400 rounded-full"></span>
                  <span className="text-sm text-gray-200">Available for opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-4 h-4 bg-blue-400 rounded-full"></span>
                  <span className="text-sm text-gray-200">Open to collaborations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="soft-card p-8">
            <h3 className="text-2xl font-semibold text-pink-300 mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800/60 border border-gray-600/50 text-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800/60 border border-gray-600/50 text-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800/60 border border-gray-600/50 text-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or just say hi!"
                />
              </div>

              <button
                type="submit"
                className="btn-soft w-full flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
