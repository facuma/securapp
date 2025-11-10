import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { CompletedSteps } from '../../assets';

const mockPosts = [
  {
    category: 'Phishing en WhatsApp',
    title: 'Los 5 engaños más comunes y cómo detectarlos a tiempo',
    description: 'Te enseñamos a identificar los mensajes falsos que buscan robar tu información. Aprende a reconocerlos por su redacción, los enlaces que usan y el sentido de urgencia que intentan crear.',
    type: 'Artículo • Lectura de 5 min',
  },
  {
    category: 'Tutorial en Video',
    title: 'Configura tu "Semáforo SegurApp" en 3 simples pasos',
    description: 'Nuestro experto te guía en un video corto para activar y entender el sistema de alertas visuales de SegurApp. ¡Protección total en menos de 2 minutos!',
    type: 'Video • 2:15 min',
  },
  {
    category: 'Seguridad Bancaria',
    title: 'Guía Definitiva: ¿Tu banco te contactaría así?',
    description: 'Descubre las señales de alerta en correos y SMS que dicen ser de tu banco. Te damos las claves para diferenciar una comunicación real de una estafa bien elaborada.',
    type: 'Guía • Lectura de 8 min',
  },
];

export const BlogSection = () => (
  <section className="w-full py-16 md:py-24 bg-white">
    <div className="container mx-auto px-6 text-center max-w-4xl">
      <div className="flex justify-center mb-4">
        <div className="w-[150px] h-[150px]">
          <img src={CompletedSteps} alt="Aprende a protegerte paso a paso" />
        </div>
      </div>
      <SectionTitle title="Aprende con SegurApp: Prevención en Lenguaje Simple" />
      <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto">
        El conocimiento es tu mejor escudo. Nuestra misión es darte herramientas claras y sencillas para que te sientas invencible en el mundo digital.
      </p>
      <div className="text-left grid md:grid-cols-3 gap-8 mb-12">
        {mockPosts.map((post) => (
          <div key={post.title} className="bg-primary/5 p-6 rounded-xl border border-primary/10 hover:border-accent hover:shadow-lg transition-all duration-300 flex flex-col">
            <span className="text-accent font-semibold text-sm mb-2">{post.category}</span>
            <h3 className="font-bold text-primary text-lg mb-3 flex-grow">{post.title}</h3>
            <p className="text-secondary text-sm mb-4">{post.description}</p>
            <div className="mt-auto">
              <a href="#" className="font-bold text-accent hover:underline">
                {post.type.startsWith('Video') ? 'Ver Video →' : 'Leer Más →'}
              </a>
              <p className="text-xs text-gray-400 mt-1">{post.type}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a href="#" className="bg-accent text-white font-bold py-4 px-10 rounded-full hover:opacity-90 transition-opacity text-lg inline-block">
          Explorar todo el Centro Educativo
        </a>
      </div>
    </div>
  </section>
);