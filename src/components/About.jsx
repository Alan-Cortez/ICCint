import React, { useEffect, useRef, useState } from 'react';
import { Users, Heart, BookOpen } from 'lucide-react';
import './About.css';

const pillars = [
  {
    icon: <Users size={28} />,
    title: 'Somos Uno',
    desc: 'Fomentamos la unidad y el amor fraternal entre todos los miembros de nuestra comunidad.',
  },
  {
    icon: <Heart size={28} />,
    title: 'Ministerio de Restauración',
    desc: 'Restauramos vidas, familias y corazones quebrantados a través del evangelio de Cristo.',
  },
  {
    icon: <BookOpen size={28} />,
    title: 'Enseñanza Viva',
    desc: 'Nos dedicamos al estudio profundo de la Palabra para equipar a creyentes de fe práctica.',
  },
];

const stats = [
  { value: '2025', label: 'Año de fundación' },
  { value: '6+', label: 'Campus activos' },
  { value: '7', label: 'Servicios por semana' },
  { value: '∞', label: 'Vidas transformadas' },
];

const About = () => {
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
    <section id="nosotros" className="section about-section" ref={ref}>
      <div className="container">
        <div className={`about-layout ${visible ? 'animate-in' : ''}`}>
          {/* Left: text */}
          <div className="about-left">
            <span className="section-tag">NUESTRA MISIÓN</span>
            <h2 className="about-title">
              Más que una iglesia,<br />
              <span className="text-gold">somos familia.</span>
            </h2>
            <p className="about-body">
              La Iglesia Comunidad de Cristo Internacional nació con un propósito claro: llevar el mensaje
              de restauración y esperanza a cada persona que lo necesite. Desde Allende, Coahuila, hasta
              cada rincón donde tengamos presencia, somos UNO en Cristo.
            </p>

            <div className="pillars-list">
              {pillars.map((p, i) => (
                <div className="pillar-item" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className="pillar-icon">{p.icon}</div>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stats */}
          <div className="about-right">
            <div className="stats-grid">
              {stats.map((s, i) => (
                <div className="stat-box" key={i}>
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <div className="verse-card">
              <p className="verse-text">"Porque yo sé los planes que tengo para vosotros, planes de bienestar y no de calamidad, para daros un futuro y una esperanza."</p>
              <span className="verse-ref">— Jeremías 29:11</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
