import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Frontend Development Internship',
      provider: 'Learn & Build',
      date: '2023',
      description: 'Completed comprehensive frontend development training with hands-on projects.',
      credential: 'https://certificate-url.com/frontend',
      icon: '🎨',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'MERN Stack Development',
      provider: 'Regex Software',
      date: '2024',
      description: 'Full-stack development internship focusing on MongoDB, Express, React, and Node.js.',
      credential: 'https://certificate.givemycertificate.com/c/54c9b4b7-ab4b-4f1e-82b3-03fa215fcb49',
      icon: '⚡',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Agentic Ai',
      provider: 'Linux World',
      date: '2025',
      description: 'Learning Multiple tech skills in Internship and Cover up mostly tech like Ai&Ml , Prompt engineering ... ',
      credential: 'https://certificate-url.com/python',
      icon: '🐍',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Linux-Ai With GenAi',
      provider: 'Udemy',
      date: '2025',
      description: 'Understanding of Linux automation and how to leverage Generative AI to streamline system-level tasks efficiently',
      credential: 'https://udemy-certificate.s3.amazonaws.com/image/UC-e91890e9-4fbb-4249-b164-b2ef6c651464.jpg',
      icon: '🖥️',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: ' AWS Solutions Architecture ',
      provider: ' Forage',
      date: '2025',
      description: 'Design framework that outlines how to efficiently build, deploy, and manage scalable, secure, and cost-effective applications on Amazon Web Services.',
      credential: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_MZcMSbx5Lm4JPwbiq_1753282087377_completion_certificate.pdf',
      icon: '🐧',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'GenAI',
      provider: 'BCG Forage',
      date: '2025',
      description: ' Generative AI with hands-on expertise in building AI-powered solutions using large language models and advanced automation tools.',
      credential: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/gabev3vXhuACr48eb_SKZxezskWgmFjRvj9_MZcMSbx5Lm4JPwbiq_1750695047558_completion_certificate.pdf',
      icon: '🔧',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Data Analytics',
      provider: 'Tata',
      date: '2023',
      description: 'job simulation involving AI-powered data analytics and strategy development for the Financial Services team at Tata iQ',
      credential: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_MZcMSbx5Lm4JPwbiq_1750340610526_completion_certificate.pdf',
      icon: '📱',
      color: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications and completed training programs that showcase my commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center text-2xl`}>
                    {cert.icon}
                  </div>
                  <motion.a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {cert.title}
                </h3>

                <div className="flex items-center text-gray-400 mb-3">
                  <Award className="w-4 h-4 mr-2" />
                  <span className="text-sm">{cert.provider}</span>
                </div>

                <div className="flex items-center text-gray-400 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{cert.date}</span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {cert.description}
                </p>

                <motion.div
                  className="mt-4 pt-4 border-t border-gray-700"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Credential ID</span>
                    <motion.button
                      className="text-xs text-purple-400 hover:text-purple-300 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      View Certificate
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Certifications', value: '6+', color: 'text-purple-400' },
            { label: 'Internships', value: '2', color: 'text-blue-400' },
            { label: 'Projects', value: '12+', color: 'text-cyan-400' },
            { label: 'Technologies', value: '20+', color: 'text-green-400' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
