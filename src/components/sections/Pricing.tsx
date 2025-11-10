import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { ManageMoney } from '../../assets';

export const Pricing = () => (
  <section className="w-full py-16 md:py-24">
    <div className="container mx-auto px-6 text-center">
      <SectionTitle title="Protección para Todos: Elige tu Escudo" />
      <div className="flex justify-center mb-12">
        <div className="w-[150px] h-[150px]">
          <img src={ManageMoney} alt="Planes de precios" />
        </div>
      </div>
      <p className="text-lg text-secondary max-w-3xl mx-auto mb-10">Modelo freemium: pagas solo por el nivel de acompañamiento que necesitas. Creemos que la seguridad básica debe ser accesible. Por eso, ofrecemos una versión gratuita con protección esencial, y una Premium de bajo costo que incluye todo el soporte y funciones avanzadas.</p>
      <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto text-left">
          <div className="border-2 border-gray-200 rounded-lg p-6">
            <h3 className="font-heading font-bold text-primary text-2xl mb-4">SegurApp FREE</h3>
            <p className="text-secondary">Protección básica, alertas visuales de fraude, bloqueo técnico inicial.</p>
          </div>
          <div className="border-2 border-accent rounded-lg p-6 bg-primary/5">
            <h3 className="font-heading font-bold text-primary text-2xl mb-4">SegurApp PREMIUM</h3>
            <p className="text-secondary">Todo lo Free, más: Soporte humano 24/7 para consultas, funciones avanzadas y gestión de documentos.</p>
          </div>
      </div>
      <div className="mt-8">
        <a href="#" className="bg-accent text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity text-lg">Ver Plan Premium Completo</a>
      </div>
    </div>
  </section>
);