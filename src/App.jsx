import React from 'react';
import { LanguageProvider } from './LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Habilidades from './components/Habilidades';
import MisionVisionValores from './components/MisionVisionValores';
import Identidad from './components/Identidad';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <Hero />
        <Identidad />
        <Habilidades />
        <MisionVisionValores />
        <Contacto />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
