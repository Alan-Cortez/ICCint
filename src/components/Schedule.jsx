import React, { useEffect, useRef, useState } from 'react';
import './Schedule.css';

const days = [
  {
    day: 'Lunes a Viernes',
    icon: '🙏',
    events: [{ time: '9:00 AM – 10:00 AM', name: 'Servicio de Oración', color: 'blue' }],
  },
  {
    day: 'Miércoles',
    icon: '💜',
    events: [{ time: '7:00 PM', name: 'Reunión Femenil', color: 'purple' }],
  },
  {
    day: 'Jueves',
    icon: '✝️',
    events: [{ time: '7:00 PM', name: 'Culto General', color: 'gold' }],
  },
  {
    day: 'Viernes',
    icon: '🔥',
    events: [
      { time: '7:00 PM', name: 'Culto Viernes', color: 'gold' },
      { time: 'Último viernes del mes', name: 'Vigilia', color: 'red' },
    ],
  },
  {
    day: 'Sábado',
    icon: '⚡',
    events: [
      { time: '7:00 PM', name: 'Reunión de Varones', color: 'blue' },
      { time: '7:00 PM', name: 'Reunión de Jóvenes', color: 'green' },
    ],
  },
  {
    day: 'Domingo',
    icon: '🌟',
    events: [
      { time: '10:00 AM', name: 'Culto General', color: 'gold' },
      { time: 'Último domingo del mes', name: 'Evangelizaciones', color: 'orange' },
    ],
  },
];

const Schedule = () => {
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
    <section id="horarios" className="section schedule-section" ref={ref}>
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">HORARIOS</span>
          <h2>Nuestras Reuniones</h2>
          <p className="section-subtitle">Únete a nosotros en cualquiera de nuestros servicios semanales</p>
        </div>

        <div className={`schedule-grid ${visible ? 'animate-in' : ''}`}>
          {days.map((item, i) => (
            <div
              className="schedule-card"
              key={item.day}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="schedule-day-header">
                <span className="schedule-icon">{item.icon}</span>
                <h3 className="schedule-day">{item.day}</h3>
              </div>
              <div className="schedule-events">
                {item.events.map((ev, j) => (
                  <div className={`schedule-event tag-${ev.color}`} key={j}>
                    <span className="event-dot"></span>
                    <div>
                      <p className="event-name">{ev.name}</p>
                      <p className="event-time">{ev.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
