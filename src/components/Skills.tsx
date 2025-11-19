import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Section } from './Section';

export const Skills: React.FC = () => {
  const { skills, languages } = portfolioData;

  return (
    <Section title="Skills & Languages" className="bg-gray-50 dark:bg-gray-800/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Languages</h3>
          <div className="space-y-4">
            {languages.map((lang, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
                <span className="font-medium text-gray-800 dark:text-gray-200">{lang.language}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
