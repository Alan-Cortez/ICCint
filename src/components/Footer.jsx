import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Horarios', href: '#horarios' },
    { label: 'Eventos', href: '#eventos' },
    { label: 'Campus', href: '#campus' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-cross">✝</span>
            <div>
              <span className="logo-title">ICC Internacional</span>
              <span className="logo-subtitle">Ministerio de Restauración</span>
            </div>
          </div>
          <p className="footer-desc">
            Somos Uno. Comprometidos con llevar el amor de Cristo a cada corazón, ciudad y nación.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            {links.map(l => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contacto</h4>
          <ul>
            <li><MapPin size={15} /><span>Allende, Coahuila, México</span></li>
            <li><Phone size={15} /><span>+52 (123) 456-7890</span></li>
            <li><Mail size={15} /><span>contacto@iccinternacional.org</span></li>
          </ul>
          <div className="footer-reg">
            <span>Registro SGAR/5390/2025</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Iglesia Comunidad de Cristo Internacional. Todos los derechos reservados.</p>
        <p className="footer-verse">"Somos Uno" — Juan 17:21</p>
      </div>
    </footer>
  );
};

export default Footer;
