import React from 'react';
import { motion } from 'framer-motion';
import { Insurance } from '../../assets';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export const Hero = () => (
  <section className="w-full pt-28 md:pt-28 pb-16 md:pb-20">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div variants={containerVariants} className="text-center md:text-left">
          <motion.span variants={itemVariants} className="inline-block bg-accent/10 text-accent font-semibold py-1 px-3 rounded-full text-sm mb-4">
            Escudo Digital Personal
          </motion.span>
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-bold text-primary leading-tight mb-4">
            No más miedo a hacer clic. Redescubre tu celular con Confianza.
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-secondary max-w-xl mx-auto md:mx-0 mb-8">
            ¿Has dudado al abrir un correo? ¿Te preocupa un mensaje de WhatsApp pidiendo datos? <strong>El fraude digital te está robando la tranquilidad.</strong>
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <a href="#" className="bg-accent text-white font-bold py-4 px-10 rounded-full hover:opacity-90 transition-opacity text-lg w-full sm:w-auto">
              Descarga tu Escudo GRATIS
            </a>
            <a href="#" className="bg-transparent text-primary font-bold py-4 px-10 rounded-full hover:bg-primary/5 transition-colors text-lg border-2 border-primary/20 w-full sm:w-auto">
              Ver cómo funciona en 60s
            </a>
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="w-full max-w-[400px] h-auto">
            <img src={Insurance} alt="Seguridad sin complicaciones" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);