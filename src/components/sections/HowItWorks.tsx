import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { CompletedSteps } from '../../assets';

export const HowItWorks = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <SectionTitle title="Así de simple funciona" />
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="space-y-8">
            {[
              "Cotizás tu seguro en 20 segundos",
              "Contratás desde la app",
              "Pedís asistencia cuando la necesites",
              "Gestionás todo sin papeleo ni llamadas"
            ].map((step, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="bg-accent text-white w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-xl font-bold">{index + 1}</div>
                <p className="text-lg text-secondary">{step}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-lg font-medium text-primary italic">"Tu póliza siempre a mano. Tu seguridad, siempre en movimiento."</p>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="w-full max-w-[350px] h-auto">
            <img src={CompletedSteps} alt="Proceso simple" />
          </div>
        </div>
      </div>
    </div>
  </section>
);