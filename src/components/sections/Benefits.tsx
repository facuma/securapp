import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { NatureBenefits } from '../../assets';

const beneficios = [
  {
    nombre: "El Semáforo de Enlaces (Visión)",
    descripcion: "SegurApp analiza cada enlace que recibes antes de que lo toques, ya sea por WhatsApp o Gmail. Si es peligroso, verás una alerta grande, roja y clara. <strong>Te decimos el riesgo en español, no en código.</strong>"
  },
  {
    nombre: "Protección sin Preguntas",
    descripcion: "Olvídate de configurar opciones complejas. Nuestro 'Bloqueo Inteligente' frena las estafas más conocidas automáticamente. <strong>Tú te relajas, SegurApp se encarga.</strong>"
  },
  {
    nombre: "Soporte Humano 24/7 (Premium)",
    descripcion: "Si tienes una duda o recibes un mensaje que te asusta, puedes chatear con nuestro equipo. <strong>Un experto real te guía, sin chatbots interminables.</strong>"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export const Benefits = () => (
  <section className="w-full py-16 md:py-24 bg-white">
    <div className="container mx-auto px-6 text-center">
      <span className="inline-block bg-accent/10 text-accent font-semibold py-1 px-3 rounded-full text-sm mb-4">
        El Asistente que Trabaja por Ti
      </span>
      <motion.div variants={itemVariants}><SectionTitle title="Tu Protector Personal: Fácil. Activo. Empático." /></motion.div>
      <motion.p variants={itemVariants} className="text-center text-xl text-secondary mb-12 max-w-2xl mx-auto">Tecnología de prevención que funciona en silencio, y te habla cuando es realmente necesario.</motion.p>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={containerVariants} className="grid grid-cols-1 gap-8 text-left">
          {beneficios.map((benefit) => (
            <motion.div variants={itemVariants} key={benefit.nombre} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-primary text-lg mb-2">{benefit.nombre}</h3>
              <p className="text-secondary" dangerouslySetInnerHTML={{ __html: benefit.descripcion }}></p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="w-full max-w-[300px] h-auto">
            <img src={NatureBenefits} alt="Beneficios" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);