import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-title">ICC</span>
            <span className="logo-subtitle">Internacional</span>
          </div>
          <p className="footer-desc">
            Ministerio de Restauración, comprometidos con expandir el amor y la palabra de Dios. Somos Uno.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon"><Facebook size={20} /></a>
            <a href="#" className="social-icon"><Instagram size={20} /></a>
            <a href="#" className="social-icon"><Youtube size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#nosotros">Acerca de Nosotros</a></li>
            <li><a href="#ministerios">Ministerios</a></li>
            <li><a href="#contacto">Contacto y Peticiones</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Información de Contacto</h3>
          <ul>
            <li>
              <MapPin size={18} />
              <span>Allende, Coahuila</span>
            </li>
            <li>
              <Phone size={18} />
              <span>+52 (123) 456-7890</span>
            </li>
            <li>
              <Mail size={18} />
              <span>contacto@iccinternacional.org</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Iglesia Comunidad de Cristo Internacional. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
