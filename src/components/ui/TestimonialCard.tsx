import React from 'react';

export const TestimonialCard = ({ quote, name }: { quote: string, name: string }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
    <p className="text-secondary italic mb-6 flex-grow">"{quote}"</p>
    <div>
      <p className="font-bold text-primary">{name}</p>
    </div>
  </div>
);