import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';

export const Comparison = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <SectionTitle title="Antes vs. Ahora" />
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-red-50 border-2 border-red-100 p-8 rounded-lg text-center">
          <h3 className="font-heading text-2xl font-bold text-red-800 my-4">Antes</h3>
          <ul className="space-y-2 text-left">
            {["Llamadas interminables", "Papeleos", "Tardas días"].map(item => (
              <li key={item} className="flex items-center text-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-green-50 border-2 border-green-100 p-8 rounded-lg text-center">
          <h3 className="font-heading text-2xl font-bold text-green-800 my-4">Ahora con AseguraTech</h3>
          <ul className="space-y-2 text-left">
            {["Chat instantáneo", "100% digital", "Resuelto en minutos"].map(item => (
              <li key={item} className="flex items-center text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);