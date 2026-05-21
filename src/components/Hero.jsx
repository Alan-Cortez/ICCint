import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title fade-in">
          Iglesia Comunidad de <br />
          <span className="highlight">Cristo Internacional</span>
        </h1>
        <p className="hero-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
          Ministerio de Restauración. Somos Uno.
        </p>
        <div className="hero-actions fade-in" style={{ animationDelay: '0.4s' }}>
          <a href="#contacto" className="btn btn-primary">Conéctate con Nosotros</a>
          <a href="#nosotros" className="btn btn-secondary hero-btn-outline">Nuestra Misión</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
