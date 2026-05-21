import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Forms from './components/Forms';
import Footer from './components/Footer';
import './App.css'; // Mantenemos por si hay estilos específicos

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <About />
        <Forms />
      </main>
      <Footer />
    </div>
  );
}

export default App;
