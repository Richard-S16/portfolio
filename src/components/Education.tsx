import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Section } from './Section';

export const Education: React.FC = () => {
  const { education, certifications } = portfolioData;

  return (
    <Section title="Education & Certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white">{edu.school}</h4>
                <p className="text-gray-700 dark:text-gray-300 mt-1">{edu.degree}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{edu.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Certifications</h3>
          <ul className="space-y-3">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-green-500 mt-1">✓</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};
