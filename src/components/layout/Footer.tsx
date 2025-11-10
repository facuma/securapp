import React from 'react';

export const Footer = () => (
  <footer className="bg-primary text-gray-300 py-12">
    <div className="container mx-auto px-6 text-center">
      <p className="font-heading text-xl font-bold text-white mb-4">AseguraTech</p>
      <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-8">
        <a href="#" className="hover:text-accent transition-colors">Términos y condiciones</a>
        <a href="#" className="hover:text-accent transition-colors">Política de privacidad</a>
        <a href="#" className="hover:text-accent transition-colors">Contacto</a>
      </div>
      <p>&copy; {new Date().getFullYear()} AseguraTech. Todos los derechos reservados.</p>
    </div>
  </footer>
);