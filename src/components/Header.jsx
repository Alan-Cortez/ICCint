import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Horarios', href: '#horarios' },
    { label: 'Eventos', href: '#eventos' },
    { label: 'Campus', href: '#campus' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#inicio" className="logo">
          <div className="logo-cross">✝</div>
          <div className="logo-text">
            <span className="logo-title">ICC Internacional</span>
            <span className="logo-subtitle">Allende, Coah. · SGAR/5390/2025</span>
          </div>
        </a>

        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            {navLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setMobileMenuOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contacto" className="header-cta btn btn-primary">
          Primer Paso
        </a>

        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
