import React, { useState, useEffect } from 'react';
import { Menu, X, Cross } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo">
          <Cross className="logo-icon" size={28} />
          <div className="logo-text">
            <span className="logo-title">ICC</span>
            <span className="logo-subtitle">Internacional</span>
          </div>
        </a>

        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#inicio" onClick={() => setMobileMenuOpen(false)}>Inicio</a></li>
            <li><a href="#nosotros" onClick={() => setMobileMenuOpen(false)}>Nosotros</a></li>
            <li><a href="#ministerios" onClick={() => setMobileMenuOpen(false)}>Ministerios</a></li>
            <li><a href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</a></li>
          </ul>
        </nav>

        <div className="mobile-toggle" onClick={toggleMenu}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
