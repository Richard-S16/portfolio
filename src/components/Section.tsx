import React from 'react';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, className = "" }) => {
  return (
    <section className={`py-8 md:py-12 ${className}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b pb-2 border-gray-200 dark:border-gray-700">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};
