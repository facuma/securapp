import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { AppData } from '../../assets'; // Reutilizando un asset existente

export const FAQs = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6 text-center max-w-4xl">
      <div className="flex justify-center mb-4">
        <div className="w-[150px] h-[150px]">
          <img src={AppData} alt="Centro Educativo" />
        </div>
      </div>
      <SectionTitle title="Aprende con SegurApp: Prevención en Lenguaje Simple" />
      <p className="text-xl text-secondary mb-10">Nuestra misión es educarte para que nunca caigas en una estafa.</p>
      <div className="text-left grid sm:grid-cols-3 gap-8 mb-12">
        <div className="bg-primary/5 p-4 rounded-lg"><strong>Los fraudes más comunes:</strong> Artículos y guías sobre phishing, estafas bancarias y fraudes en LATAM.</div>
        <div className="bg-primary/5 p-4 rounded-lg"><strong>Tips Visuales:</strong> Consejos rápidos sobre '3 señales de un enlace falso' o el 'Semáforo SegurApp'.</div>
        <div className="bg-primary/5 p-4 rounded-lg"><strong>Tutoriales:</strong> Videos paso a paso sobre 'Cómo instalar SegurApp' y 'Cómo reportar un intento de fraude'.</div>
      </div>
      <a href="#" className="text-accent font-bold text-lg hover:underline">
        Visita nuestro Blog y Centro Educativo
      </a>
    </div>
  </section>
);