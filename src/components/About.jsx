import React from 'react';
import { Users, Heart, BookOpen } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="nosotros" className="section about-section">
      <div className="container">
        <div className="text-center about-header">
          <h2>Acerca de Nosotros</h2>
          <p className="subtitle">Conoce nuestra visión y misión en la Comunidad de Cristo Internacional.</p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="icon-wrapper">
              <Users size={32} />
            </div>
            <h3>Somos Uno</h3>
            <p>Fomentamos la unidad y el amor fraternal entre todos los miembros de nuestra comunidad, porque creemos que juntos somos más fuertes en Cristo.</p>
          </div>

          <div className="about-card">
            <div className="icon-wrapper">
              <Heart size={32} />
            </div>
            <h3>Ministerio de Restauración</h3>
            <p>Nuestro propósito es restaurar vidas, familias y corazones quebrantados a través del mensaje transformador del evangelio y el amor de Dios.</p>
          </div>

          <div className="about-card">
            <div className="icon-wrapper">
              <BookOpen size={32} />
            </div>
            <h3>Enseñanza Viva</h3>
            <p>Nos dedicamos al estudio profundo de la Palabra, equipando a creyentes para vivir una fe práctica y relevante en el mundo actual.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
