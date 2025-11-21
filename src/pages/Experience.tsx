import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, TrendingUp, Users, Zap, FileText } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'Hello RE (REpair | REbuy | REsell)',
      location: 'Bangalore',
      period: 'present',
      type: 'Internship',
      achievements: [
        'Contributing to the development of JavaScript and Vue.js based web applications.',
        'Implemented JWT-based authentication and API integrations to ensure secure client-server communication.',
        'Collaborating in a small team environment to build scalable and maintainable frontend solutions.',
        'Optimizing UI for performance, responsiveness, and cross-browser compatibility',
      ],
      skills: ['JavaScript', 'Vue.js', 'API Integration', 'Team Collaboration'],
      icon: TrendingUp,
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const publications = [
    {
      title: 'Enhancing Earthquake Early Warning Systems Using IoT',
      journal: 'IJNRD – Volume 8, Issue 11, Nov 2023',
      impactFactor: '8.76',
      description: 'Proposed a cloud-integrated warning model using real-time sensor data and IoT communication.',
      topics: ['IoT', 'Cloud Computing', 'Real-time Systems', 'Earthquake Detection']
    }
  ];

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
            Professional <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Experience</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My journey through various internships and projects, building expertise in 
            frontend development, digital marketing, and IoT solutions.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center mb-12">
            <Briefcase className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500 hidden lg:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                    className="relative lg:ml-16"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-20 top-6 hidden lg:block">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg`}></div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                      <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
                      
                      <div className="p-8">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                          <div className="flex items-start space-x-4">
                            <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.color} text-white`}>
                              <Icon className="h-6 w-6" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                {exp.title}
                              </h3>
                              <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                                {exp.company}
                              </p>
                              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 dark:text-gray-400">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>{exp.period}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MapPin className="h-4 w-4" />
                                  <span>{exp.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 mt-4 lg:mt-0">
                            {exp.type}
                          </span>
                        </div>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <motion.li
                                key={achievementIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 + achievementIndex * 0.1 }}
                                className="flex items-start space-x-3"
                              >
                                <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, skillIndex) => (
                              <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.8 + index * 0.2 + skillIndex * 0.05 }}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Publications Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center mb-12">
            <FileText className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Publications</h2>
          </div>

          <div className="grid gap-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {pub.title}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                      {pub.journal}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {pub.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                      Impact Factor: {pub.impactFactor}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {pub.topics.map((topic, topicIndex) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Experience;
