import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Code, Palette, Zap } from 'lucide-react';

const About: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering in Electronics and Communication Engineering',
      school: 'SNS College of Technology, Coimbatore',
      period: '2021 – 2025',
      grade: 'CGPA: 8.63 / 10'
    },
    {
      degree: 'Higher Secondary Education',
      school: 'Sri Vidya Mandir MHSS',
      period: '2020 – 2021',
      grade: 'Percentage: 86.6%'
    },
    {
      degree: 'Secondary School Education',
      school: 'Sri Vidya Mandir MHSS',
      period: '2018 – 2019',
      grade: 'Percentage: 84.4%'
    }
  ];

  const certifications = [
    {
      title: 'HTML Essentials',
      provider: 'Great Learning',
      icon: Code
    },
    {
      title: 'Industry 4.0 and Industrial IoT',
      provider: 'NPTEL',
      grade: '68%',
      period: 'July–Oct 2023',
      icon: Zap
    },
    {
      title: 'UI Design Fundamentals',
      provider: 'Scrimba (via Coursera)',
      period: 'Feb 2025',
      icon: Palette
    }
  ];

  const skills = {
    'Languages & Frameworks': ['JavaScript','Vue.js' ,'React.js', 'Core Java'],
    'Design Tools': ['Figma', 'Canva', 'Adobe Express'],
    'Testing Tools': ['Selenium', 'Playwright'],
    'Tools & Concepts': ['GitHub', 'VS Code', 'Networking Fundamentals'],
    'Soft Skills': ['Communication', 'Teamwork', 'Creativity']
  };

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
            About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Creative and detail-oriented frontend developer and UI designer passionate about building 
            responsive, accessible, and user-centric web interfaces. Strong communicator skilled in 
            collaborative problem-solving and delivering pixel-perfect UI with optimal performance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {edu.school}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>{edu.period}</span>
                    <span className="font-medium text-green-600 dark:text-green-400">{edu.grade}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center mb-8">
              <Award className="h-8 w-8 text-teal-600 dark:text-teal-400 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Certifications</h2>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                        <Icon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {cert.title}
                        </h3>
                        <p className="text-teal-600 dark:text-teal-400 font-medium mb-2">
                          {cert.provider}
                        </p>
                        <div className="flex flex-col text-sm text-gray-600 dark:text-gray-400">
                          {cert.period && <span>{cert.period}</span>}
                          {cert.grade && (
                            <span className="font-medium text-green-600 dark:text-green-400">
                              Grade: {cert.grade}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="flex items-center justify-center mb-12">
            <BookOpen className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills & Technologies</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.1 + skillIndex * 0.05 }}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
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

export default About;
