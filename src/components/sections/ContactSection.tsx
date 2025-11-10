import React from 'react';
import { StartingProject } from '../../assets';
import { SectionTitle } from '../ui/SectionTitle';

export const ContactSection = () => (
  <section className="w-full py-16 md:py-24">
    <div className="container mx-auto px-6 text-center max-w-2xl">
        <div className="flex justify-center mb-6">
            <div className="w-[150px] h-[150px]">
              <img src={StartingProject} alt="Hablemos" />
            </div>
        </div>
        <SectionTitle title="¿Tienes Preguntas? Hablemos." />
        <p className="text-xl text-secondary mb-10">
            Nuestro equipo está listo para ayudarte. Completa el formulario y te responderemos a la brevedad.
        </p>
        <form className="text-left space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">Nombre</label>
                <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition" />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">Correo Electrónico</label>
                <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition" />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">Mensaje</label>
                <textarea id="message" rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition"></textarea>
            </div>
            <div className="text-center">
                <button type="submit" className="bg-accent text-white font-bold py-3 px-10 rounded-full hover:opacity-90 transition-opacity text-lg">
                    Enviar Mensaje
                </button>
            </div>
        </form>
    </div>
  </section>
);