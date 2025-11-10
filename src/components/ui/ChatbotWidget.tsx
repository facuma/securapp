import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqResponses: { [key: string]: string } = {
  'precio': 'Ofrecemos un plan Gratuito con protección esencial y un plan Premium de bajo costo con soporte humano 24/7 y funciones avanzadas. Puedes ver más en nuestra sección de Planes.',
  'premium': 'El plan Premium incluye todo lo del plan Gratuito, más soporte humano 24/7 para consultas, análisis avanzado de documentos y más. ¡Es tu tranquilidad total!',
  'gratis': '¡Sí! SegurApp tiene una versión 100% gratuita que te protege de los fraudes más comunes con nuestro Semáforo de Enlaces y alertas visuales.',
  'funciona': 'SegurApp analiza en tiempo real los enlaces que recibes en WhatsApp y correo. Si detecta un riesgo, te muestra una alerta visual clara antes de que hagas clic.',
  'estafa': 'Si crees que has recibido una estafa, no hagas clic en ningún enlace. Con SegurApp, puedes usar nuestro "Semáforo de Enlaces" para verificarlo de forma segura.',
  'whatsapp': 'Nuestra protección está totalmente integrada con WhatsApp. Analizamos los enlaces que te llegan por mensaje para que chatees sin miedo.',
  'hola': '¡Hola! Soy el asistente de SegurApp. ¿En qué puedo ayudarte? Puedes preguntarme sobre precios, planes o cómo funcionamos.',
};

const getBotResponse = (message: string): string => {
  const lowerCaseMessage = message.toLowerCase();
  for (const keyword in faqResponses) {
    if (lowerCaseMessage.includes(keyword)) {
      return faqResponses[keyword];
    }
  }
  return 'No he entendido tu pregunta. ¿Puedes intentar reformularla? Puedes preguntar sobre "precio", "premium" o "cómo funciona".';
};

export const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [messages, setMessages] = useState<{ from: 'user' | 'bot'; text: string }[]>([
    { from: 'bot', text: '¡Hola! Soy tu asistente de SegurApp. ¿Cómo puedo ayudarte a recuperar tu tranquilidad hoy?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowPrompt(true);
      }
    }, 10000); // 10 segundos de retraso

    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { from: 'user' as const, text: inputValue };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse = { from: 'bot' as const, text: getBotResponse(inputValue) };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputValue('');
  };

  const toggleChat = () => {
    setIsOpen(prev => !prev);
    if (showPrompt) {
      setShowPrompt(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-80 h-[28rem] bg-white rounded-2xl shadow-2xl flex flex-col origin-bottom-right"
          >
            <div className="p-4 bg-primary text-white rounded-t-2xl">
              <h3 className="font-bold text-lg">Asistente SegurApp</h3>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <p className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.from === 'user' ? 'bg-accent/20 text-primary' : 'bg-gray-200 text-primary'}`}>
                    {msg.text}
                  </p>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe tu pregunta..."
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isOpen && showPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="bg-white p-3 rounded-lg shadow-md mb-2 w-max"
          >
            <p className="text-sm text-primary font-medium">¿Necesitas ayuda?</p>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg mt-4 ml-auto"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </motion.button>
    </div>
  );
};