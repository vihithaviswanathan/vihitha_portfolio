import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/vihitha-v',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/vihithaviswanathan',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=vihitha0907@gmail.com',
      color: 'hover:text-red-600 dark:hover:text-red-400'
    }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 dark:text-gray-400 ${link.color} transition-colors duration-200`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <span>© 2025 Vihitha Viswanathan. </span>
            
          </div>

          {/* Location */}
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Bangalore, Karnataka | vihitha0907@gmail.com | +91 XXXXXXXX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
