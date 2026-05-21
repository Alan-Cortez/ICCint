import React from 'react';
import { Home, MonitorPlay, Users, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-layout">
        {/* Lado Izquierdo: Titular */}
        <div className="hero-left fade-in">
          <h1 className="hero-title">
            Bienvenido a <br />
            <span className="highlight">ICC Internacional</span>
          </h1>
          <p className="hero-subtitle">
            Ayudamos a las personas a: <strong>conocer a Dios, encontrar libertad, descubrir su propósito y hacer la diferencia.</strong>
          </p>
          <p className="hero-description">
            Encuentra la experiencia adecuada para ti.
          </p>
          <div className="hero-actions">
            <a href="#contacto" className="btn btn-primary">
              Conéctate <ArrowRight size={16} />
            </a>
            <a href="#nosotros" className="btn btn-secondary">
              Nuestra Misión <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Lado Derecho: Tarjetas de Acceso */}
        <div className="hero-right fade-in" style={{ animationDelay: '0.2s' }}>
          
          <a href="#reuniones" className="hero-card">
            <div className="card-icon">
              <Home size={24} />
            </div>
            <div className="card-content">
              <h3>Nuestras Reuniones</h3>
              <p>Adora con nosotros en persona. Descubre nuestros horarios y ubicación.</p>
              <span className="card-link">ENCUENTRA EL TUYO &rarr;</span>
            </div>
          </a>

          <a href="#ministerios" className="hero-card">
            <div className="card-icon">
              <MonitorPlay size={24} />
            </div>
            <div className="card-content">
              <h3>Ministerios</h3>
              <p>Conoce los grupos y ministerios donde puedes crecer espiritualmente.</p>
              <span className="card-link">VER MÁS &rarr;</span>
            </div>
          </a>

          <a href="#contacto" className="hero-card">
            <div className="card-icon">
              <Users size={24} />
            </div>
            <div className="card-content">
              <h3>Tu primer paso</h3>
              <p>Estamos muy contentos de que quieras dar tu primer paso en tu camino con Jesús.</p>
              <span className="card-link">CONOCER MÁS &rarr;</span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
