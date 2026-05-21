import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import './Events.css';

const events = [
  {
    date: { day: '30', month: 'MAY' },
    title: 'Vigilia de Oración',
    description: 'Noche de oración y adoración. Ven a buscar el rostro de Dios juntos como familia.',
    time: 'Viernes 11:00 PM',
    location: 'Allende, Coah.',
    tag: 'Mensual',
    color: 'red',
  },
  {
    date: { day: '01', month: 'JUN' },
    title: 'Culto General - Domingo',
    description: 'Nuestro culto dominical de cada semana. Predica la Palabra de Dios con poder.',
    time: 'Domingo 10:00 AM',
    location: 'Allende, Coah.',
    tag: 'Semanal',
    color: 'gold',
  },
  {
    date: { day: '07', month: 'JUN' },
    title: 'Reunión de Jóvenes',
    description: 'Un espacio para que los jóvenes crezcan en fe, comunidad y propósito divino.',
    time: 'Sábado 7:00 PM',
    location: 'Allende, Coah.',
    tag: 'Semanal',
    color: 'green',
  },
  {
    date: { day: '11', month: 'JUN' },
    title: 'Femenil – Mujeres de Fe',
    description: 'Reunión de mujeres. Un tiempo especial de ministración, oración y comunión.',
    time: 'Miércoles 7:00 PM',
    location: 'Allende, Coah.',
    tag: 'Semanal',
    color: 'purple',
  },
  {
    date: { day: '29', month: 'JUN' },
    title: 'Evangelización Mensual',
    description: 'Salimos a las calles a compartir el amor de Cristo. ¡Únete a nosotros!',
    time: 'Último domingo 10:00 AM',
    location: 'Allende, Coah.',
    tag: 'Mensual',
    color: 'orange',
  },
  {
    date: { day: '27', month: 'JUN' },
    title: 'Vigilia Mensual',
    description: 'Noche de intercesión, adoración y encuentro con Dios. ¡No te la pierdas!',
    time: 'Último Viernes 11:00 PM',
    location: 'Allende, Coah.',
    tag: 'Mensual',
    color: 'red',
  },
];

const Events = () => {
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
    <section id="eventos" className="section events-section" ref={ref}>
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">PRÓXIMOS EVENTOS</span>
          <h2>Lo que viene este mes</h2>
          <p className="section-subtitle">Marca tus fechas y no te pierdas ninguna de nuestras actividades.</p>
        </div>

        <div className={`events-grid ${visible ? 'animate-in' : ''}`}>
          {events.map((ev, i) => (
            <div
              className="event-card"
              key={i}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`event-date tag-bg-${ev.color}`}>
                <span className="date-day">{ev.date.day}</span>
                <span className="date-month">{ev.date.month}</span>
              </div>
              <div className="event-body">
                <div className="event-top">
                  <span className={`event-tag tag-${ev.color}`}>{ev.tag}</span>
                </div>
                <h3 className="event-title">{ev.title}</h3>
                <p className="event-desc">{ev.description}</p>
                <div className="event-meta">
                  <span><Clock size={13} /> {ev.time}</span>
                  <span><MapPin size={13} /> {ev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
