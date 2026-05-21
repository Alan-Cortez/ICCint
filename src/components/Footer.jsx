import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
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
            <a href="#" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
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
