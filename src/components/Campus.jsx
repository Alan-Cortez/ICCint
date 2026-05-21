import React, { useEffect, useRef, useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import './Campus.css';

const campuses = [
  { city: 'Allende', state: 'Coahuila', description: 'Sede principal. Ministerio de Restauración.', tag: 'Sede Principal', schedule: 'Dom 10:00 AM · Jue 7:00 PM' },
  { city: 'Monterrey', state: 'Nuevo León', description: 'Alcanzando el área metropolitana con el mensaje de Cristo.', tag: 'Campus', schedule: 'Dom 10:00 AM · Jue 7:00 PM' },
  { city: 'Saltillo', state: 'Coahuila', description: 'Comunidad vibrante en la capital del estado.', tag: 'Campus', schedule: 'Dom 10:00 AM · Jue 7:00 PM' },
  { city: 'Piedras Negras', state: 'Coahuila', description: 'Frontera con fe. Transformando vidas en la región.', tag: 'Campus', schedule: 'Dom 10:00 AM · Jue 7:00 PM' },
  { city: 'Monclova', state: 'Coahuila', description: 'Creciendo en unidad y propósito divino.', tag: 'Campus', schedule: 'Dom 10:00 AM · Jue 7:00 PM' },
  { city: 'En Línea', state: 'Internacional', description: 'Únete desde cualquier parte del mundo a nuestra comunidad virtual.', tag: 'Digital', schedule: 'YouTube · Facebook Live' },
];

const Campus = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="campus" className="section campus-section" ref={ref}>
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">UBICACIONES</span>
          <h2>Nuestros Campus</h2>
          <p className="section-subtitle">Tenemos comunidades en diferentes ciudades. Encuentra la más cercana a ti.</p>
        </div>

        <div className={`campus-grid ${visible ? 'animate-in' : ''}`}>
          {campuses.map((c, i) => (
            <div
              className={`campus-card ${c.tag === 'Sede Principal' ? 'featured' : ''}`}
              key={i}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="campus-top">
                <div className="campus-icon">
                  <MapPin size={22} />
                </div>
                <span className={`campus-badge ${c.tag === 'Sede Principal' ? 'badge-gold' : c.tag === 'Digital' ? 'badge-blue' : 'badge-gray'}`}>
                  {c.tag}
                </span>
              </div>
              <h3 className="campus-city">{c.city}</h3>
              <p className="campus-state">{c.state}</p>
              <p className="campus-desc">{c.description}</p>
              <div className="campus-schedule">
                <span>{c.schedule}</span>
              </div>
              <a href="#contacto" className="campus-link">
                Más info <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campus;
