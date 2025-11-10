import React from 'react';
import { motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { StoryWhy } from './components/sections/StoryWhy';
import { Benefits } from './components/sections/Benefits';
import { Testimonials } from './components/sections/Testimonials';
import { Pricing } from './components/sections/Pricing';
import { ContactSection } from './components/sections/ContactSection';
import { BlogSection } from './components/sections/BlogSection';
import { ChatbotWidget } from './components/ui/ChatbotWidget';

const sectionsInfo = [
  { id: "inicio", path: "/#inicio", Component: Hero, title: "Inicio" },
  { id: "nosotros", path: "/#nosotros", Component: StoryWhy, title: "Nosotros" },
  { id: "beneficios", path: "/#beneficios", Component: Benefits, title: "Beneficios" },
  { id: "testimonios", path: "/#testimonios", Component: Testimonials, title: "Testimonios" },
  { id: "planes", path: "/pricing", Component: Pricing, title: "Planes" },
  { id: "blog", path: "/blog", Component: BlogSection, title: "Blog" },
  { id: "contacto", path: "/contacto", Component: ContactSection, title: "Contacto" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const HomePage = () => (
  <>
    {[Hero, StoryWhy, Benefits, Testimonials].map((Component, index) => (
      <motion.div
        key={index}
        id={sectionsInfo[index].id}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Component />
      </motion.div>
    ))}
  </>
);

const App = () => {
  const location = useLocation();
  return (
    <>
      <Header sections={sectionsInfo} />
      <main className="pt-20">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={
            <motion.div variants={sectionVariants} initial="hidden" animate="visible">
              <Pricing />
            </motion.div>} 
          />
          <Route path="/blog" element={
            <motion.div variants={sectionVariants} initial="hidden" animate="visible">
              <BlogSection />
            </motion.div>} 
          />
          <Route path="/contacto" element={
            <motion.div variants={sectionVariants} initial="hidden" animate="visible">
              <ContactSection />
            </motion.div>} 
          />
        </Routes>
      </main>
      <ChatbotWidget />
    </>
  );
};

export default App;
