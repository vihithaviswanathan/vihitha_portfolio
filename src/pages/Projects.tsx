import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Figma, Calendar, Code, Palette } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Daily Journal Website',
      description: 'A modern, responsive web application that allows users to log, view, and manage their daily thoughts, tasks, or reflections. This project demonstrates a seamless full-stack implementation of a journaling platform using modern frontend technologies and serverless backend services.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'CSS3', 'Responsive Design'],
      liveUrl: 'https://daily-journal-saty.vercel.app/',
      githubUrl: '#',
      category: 'Full Stack',
      status: 'Completed',
      features: [
        'User authentication and authorization',
        'Real-time data synchronization',
        'Responsive design for all devices',
        'Dark/Light theme support',
        'Advanced search and filtering'
      ]
    },
    {
      title: 'FoodGo - Food Delivery App Design',
      description: 'A comprehensive UI/UX design for a modern food delivery application. Created detailed wireframes, user flows, and high-fidelity prototypes focusing on user experience and accessibility.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'User Research'],
      figmaUrl: 'https://www.figma.com/proto/LIwJUO6odP8K04VADrNMPU/foodgo?node-id=93-895&t=onwwNalMunH3Tpit-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=33%3A197&show-proto-sidebar=1',
      category: 'Design',
      status: 'Completed',
      features: [
        'Complete user journey mapping',
        'Interactive prototypes',
        'Accessibility-focused design',
        'Mobile-first approach',
        'Design system creation'
      ]
    },
    
    {
      title: 'Elder care app design',
      description: 'I designed a mobile application and web dashboard using Figma to assist caregivers and family members in monitoring the health of elderly individuals. The app is tailored to support users in managing vital health data, medication schedules, emergencies, and daily well-being.The UI focuses on accessibility, clarity, and ease of use—especially for seniors and non-tech-savvy caregivers. The design includes large typography, intuitive navigation, and color schemes optimized for visibility',
      image: 'https://thumbs.dreamstime.com/b/young-female-doctor-blue-scrubs-showing-app-medical-test-results-something-else-her-phone-to-elderly-woman-357448652.jpg',
      technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'User Research'],
      figmaUrl:'https://www.figma.com/proto/T8CXFtFN6ZC4I3h3GjmlBk/elder_care?node-id=1-4&t=7pa5N7sRgvphmHAv-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4',
      category: 'UI/UX Design',
      status: 'Completed',
      features: [
        'Appointment Scheduling ',
        'Vitals Monitoring',
        'Interactive elements',
        'Push Notifications '
      ]
    }
  ];

  const categories = ['All', 'Full Stack', 'UI/UX Design', 'Design'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my work spanning frontend development, UI/UX design, IoT solutions, 
            and digital marketing. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-gray-800 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </motion.a>
                  )}
                  
                  {project.figmaUrl && (
                    <motion.a
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium"
                    >
                      <Figma className="h-4 w-4 mr-2" />
                      Figma Design
                    </motion.a>
                  )}
                  
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-200 font-medium"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with passionate teams. 
            Let's create something amazing together!
          </p>
          <motion.a
            href="https://www.linkedin.com/in/vihitha-v/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
          >
            Get In Touch
            <ExternalLink className="h-5 w-5 ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
