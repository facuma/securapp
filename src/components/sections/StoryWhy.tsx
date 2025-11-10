import React from 'react';
import { StartingProject } from '../../assets'; // Manteniendo el asset

export const StoryWhy = () => (
  <section className="w-full py-16 md:py-24">
    <div className="container mx-auto px-6 text-center max-w-4xl">
      <span className="inline-block bg-accent/10 text-accent font-semibold py-1 px-3 rounded-full text-sm mb-4">
        La Realidad del Fraude
      </span>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">El fraude no espera. ¿Por qué el 'antivirus' tradicional ya no te protege?</h2>
      <p className="text-xl text-secondary mb-10">El 80% de los fraudes modernos llega por WhatsApp o correo. El problema no es el virus; es la estafa invisible.</p>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left space-y-6 bg-white p-8 rounded-lg shadow-sm">
          {["<strong>Mensajes de Alarma Falsos:</strong> Recibes mensajes de bancos o servicios que parecen reales, pero te guían a una trampa.", "<strong>La Parálisis del Clic:</strong> Dudas en usar tu celular para compras o gestiones por miedo a equivocarte.", "<strong>Te Sientes Solo:</strong> Cuando ocurre una estafa, no hay un humano simple y empático al otro lado para ayudarte a entender."].map(item => (
            <p key={item} className="text-secondary" dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[200px] h-[200px] mb-4">
            <img src={StartingProject} alt="Nuevas ideas" />
          </div>
          <p className="text-xl text-primary font-bold italic bg-accent/20 p-4 rounded-md">
            "Mientras otros te venden miedo, SegurApp te da un asistente que te dice: <strong>'¡Alto! Esto es peligroso. Te explico por qué.'</strong>"
          </p>
        </div>
      </div>
    </div>
  </section>
);