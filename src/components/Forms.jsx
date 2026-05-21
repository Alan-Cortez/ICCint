import React, { useState } from 'react';
import { Send, HeartHandshake } from 'lucide-react';
import './Forms.css';

const Forms = () => {
  const [activeTab, setActiveTab] = useState('contacto');

  return (
    <section id="contacto" className="section forms-section">
      <div className="container">
        <div className="text-center forms-header">
          <h2>Conéctate con Nosotros</h2>
          <p className="subtitle">Estamos aquí para escucharte. Envíanos un mensaje o comparte tu petición de oración.</p>
        </div>

        <div className="forms-container">
          <div className="forms-tabs">
            <button 
              className={`tab-btn ${activeTab === 'contacto' ? 'active' : ''}`}
              onClick={() => setActiveTab('contacto')}
            >
              <Send size={18} />
              Contacto
            </button>
            <button 
              className={`tab-btn ${activeTab === 'oracion' ? 'active' : ''}`}
              onClick={() => setActiveTab('oracion')}
            >
              <HeartHandshake size={18} />
              Petición de Oración
            </button>
          </div>

          <div className="form-wrapper">
            {activeTab === 'contacto' ? (
              <form className="custom-form fade-in" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo</label>
                  <input type="text" id="name" placeholder="Tu nombre" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input type="email" id="email" placeholder="tu@correo.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea id="message" rows="4" placeholder="¿En qué podemos ayudarte?" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary form-submit">Enviar Mensaje</button>
              </form>
            ) : (
              <form className="custom-form fade-in" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="prayer-name">Nombre (Opcional)</label>
                  <input type="text" id="prayer-name" placeholder="Tu nombre" />
                </div>
                <div className="form-group">
                  <label htmlFor="prayer-request">Tu Petición</label>
                  <textarea id="prayer-request" rows="5" placeholder="Escribe tu petición de oración aquí. Nuestro equipo orará por ti." required></textarea>
                </div>
                <div className="form-checkbox">
                  <input type="checkbox" id="private" />
                  <label htmlFor="private">Mantener esta petición privada</label>
                </div>
                <button type="submit" className="btn btn-primary form-submit">Enviar Petición</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forms;
