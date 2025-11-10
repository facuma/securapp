import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { TestimonialCard } from '../ui/TestimonialCard';
import { OnlineReview } from '../../assets';

export const Testimonials = () => (
  <section className="w-full py-16 md:py-24 bg-off-white">
    <div className="container mx-auto px-6 text-center">
      <span className="inline-block bg-accent/10 text-accent font-semibold py-1 px-3 rounded-full text-sm mb-4">
        Historias de Éxito
      </span>
      <div className="flex justify-center mb-6">
        <div className="w-[150px] h-[150px]">
          <img src={OnlineReview} alt="Historias reales" />
        </div>
      </div>
      <SectionTitle title="¿Qué dicen quienes ya recuperaron su tranquilidad?" />
      <p className="text-xl text-secondary mb-10">La seguridad no tiene que ser complicada. Es una promesa que cumplimos todos los días.</p>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <TestimonialCard name="Ana María L." quote="Mi nieto me instaló SegurApp y ahora no dudo al usar el WhatsApp. La alerta visual me salvó de una estafa que parecía real. Me siento acompañada." />
        <TestimonialCard name="Carlos R." quote="Lo mejor es el soporte. Pude preguntar sobre una llamada sospechosa y me explicaron el riesgo con calma. Sentí que no estaba solo." />
      </div>
      <div className="mt-12 text-center">
        <a href="#" className="bg-accent text-white font-bold py-4 px-10 rounded-full hover:opacity-90 transition-opacity text-lg w-full sm:w-auto">
          Empieza Hoy: Descarga la Versión Gratuita
        </a>
      </div>
    </div>
  </section>
);