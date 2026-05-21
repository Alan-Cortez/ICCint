import React, { useState } from 'react';
import { Send, HeartHandshake, Check } from 'lucide-react';
import './Forms.css';

const Forms = () => {
  const [activeTab, setActiveTab] = useState('contacto');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contacto" className="section forms-section">
      <div className="container">
        <div className="forms-layout">
          {/* Left CTA */}
          <div className="forms-cta">
            <span className="section-tag">CONTÁCTANOS</span>
            <h2 className="forms-title">Estamos aquí <span className="text-gold">para ti.</span></h2>
            <p className="forms-body">
              Si tienes alguna pregunta, quieres conocer más sobre nosotros o simplemente necesitas
              que oremos por ti, con mucho gusto te atendemos.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Allende, Coahuila</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+52 (123) 456-7890</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>contacto@iccinternacional.org</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <span>Lun–Vie: 9:00 AM – 10:00 AM</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="forms-box">
            <div className="forms-tabs">
              <button
                className={`tab-btn ${activeTab === 'contacto' ? 'active' : ''}`}
                onClick={() => { setActiveTab('contacto'); setSubmitted(false); }}
              >
                <Send size={16} /> Contacto
              </button>
              <button
                className={`tab-btn ${activeTab === 'oracion' ? 'active' : ''}`}
                onClick={() => { setActiveTab('oracion'); setSubmitted(false); }}
              >
                <HeartHandshake size={16} /> Petición de Oración
              </button>
            </div>

            <div className="form-wrapper">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon"><Check size={32} /></div>
                  <h3>¡Mensaje enviado!</h3>
                  <p>Gracias por contactarnos. Nos pondremos en contacto contigo pronto.</p>
                </div>
              ) : activeTab === 'contacto' ? (
                <form className="custom-form fade-in" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Nombre</label>
                      <input type="text" id="name" placeholder="Tu nombre" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Teléfono</label>
                      <input type="tel" id="phone" placeholder="+52 (000) 000-0000" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input type="email" id="email" placeholder="tu@correo.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" rows="4" placeholder="¿En qué podemos ayudarte?" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary form-submit">
                    Enviar Mensaje <Send size={16} />
                  </button>
                </form>
              ) : (
                <form className="custom-form fade-in" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="prayer-name">Nombre (Opcional)</label>
                    <input type="text" id="prayer-name" placeholder="Tu nombre" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="prayer-request">Tu Petición de Oración</label>
                    <textarea id="prayer-request" rows="5" placeholder="Escribe aquí tu petición. Nuestro equipo orará por ti con todo el corazón." required></textarea>
                  </div>
                  <div className="form-checkbox">
                    <input type="checkbox" id="private" />
                    <label htmlFor="private">Mantener esta petición privada</label>
                  </div>
                  <button type="submit" className="btn btn-primary form-submit">
                    Enviar Petición <HeartHandshake size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forms;
