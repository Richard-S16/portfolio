import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Section } from './Section';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <Section title="Experience">
      <div className="space-y-12">
        {experience.map((companyData, index) => (
          <div key={index} className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-8 ml-4">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white dark:ring-gray-900" />
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{companyData.company}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{companyData.totalDuration}</p>
              
              <div className="space-y-8">
                {companyData.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="relative">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{role.title}</h4>
                    <div className="flex flex-wrap gap-x-4 text-sm text-gray-500 dark:text-gray-400 mt-1 mb-3">
                      <span>{role.date}</span>
                      <span>•</span>
                      <span>{role.duration}</span>
                      <span>•</span>
                      <span>{role.location}</span>
                    </div>
                    
                    {role.description && (
                      <ul className="space-y-2 mt-4">
                        {role.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                            <span className="text-blue-500 mt-1.5 text-xs">★</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
