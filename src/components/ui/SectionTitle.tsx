import React from 'react';

export const SectionTitle = ({ title }: { title: React.ReactNode }) => (
  <div className="text-center mb-12 md:mb-16">
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">{title}</h2>
  </div>
);