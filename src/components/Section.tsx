"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, className = "" }) => {
  return (
    <motion.section 
      className={`py-8 md:py-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b pb-2 border-gray-200 dark:border-gray-700">
            {title}
          </h2>
        )}
        {children}
      </div>
    </motion.section>
  );
};
