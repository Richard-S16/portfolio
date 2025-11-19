"use client";

import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex-1">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
              variants={itemVariants}
            >
              {personal.name}
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-medium"
              variants={itemVariants}
            >
              {personal.title}
            </motion.h2>
            <motion.div 
              className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8"
              variants={itemVariants}
            >
              <span className="flex items-center gap-1">
                📍 {personal.location}
              </span>
              <a href={`mailto:${personal.email}`} className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                ✉️ {personal.email}
              </a>
              <a href={`https://${personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                🔗 LinkedIn
              </a>
              <a href={`https://github.com/${personal.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                💻 GitHub
              </a>
            </motion.div>
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
              variants={itemVariants}
            >
              {personal.summary}
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-2"
              variants={itemVariants}
            >
              {personal.attributes.map((attr, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <span className="text-yellow-500">☆</span>
                  <span>{attr}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
