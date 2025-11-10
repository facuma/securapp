import React from 'react';
import { StartingProject } from '../../assets';

export const FinalCTA = () => (
  <section className="w-full py-24">
    <div className="container mx-auto px-6">
      <div className="bg-primary text-white rounded-xl p-12 text-center">
        <div className="flex justify-center mb-4">
            <div className="w-[150px] h-[150px]">
              <img src={StartingProject} alt="Cohete" />
            </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Protegé lo que más importa</h2>
        <a href="#" className="bg-accent text-white font-bold py-4 px-10 rounded-full hover:opacity-90 transition-opacity text-lg inline-block mt-4">
          Probar la App
        </a>
      </div>
    </div>
  </section>
);