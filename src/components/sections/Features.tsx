import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { AppData } from '../../assets';

export const Features = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <SectionTitle title="Tecnología que te cuida" />
      <div className="flex justify-center mb-12">
        <div className="w-[150px] h-[150px]">
          <img src={AppData} alt="Tecnología móvil" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 text-center max-w-6xl mx-auto mb-12">
        {[
          "Chat inteligente",
          "Seguimiento en tiempo real",
          "Wallet de documentos",
          "Protección adaptada",
          "Pagos flexibles"
        ].map((feature) => (
          <div key={feature} className="bg-primary/5 p-4 rounded-lg">
            <p className="font-medium text-primary">{feature}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-lg text-secondary max-w-3xl mx-auto">
        Creamos tecnología para que tu seguro te siga, no al revés.
      </p>
    </div>
  </section>
);