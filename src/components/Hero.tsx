import React from 'react';
import { portfolioData } from '@/data/portfolio';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {personal.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-medium">
              {personal.title}
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
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
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {personal.summary}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {personal.attributes.map((attr, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <span className="text-yellow-500">☆</span>
                  <span>{attr}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
