import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import '../styles/Navbar.css';

function Navbar() {
  const { lang, toggle, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: t.nav.inicio,   href: '#hero' },
    { label: t.nav.sobreMi, href: '#identidad' },
    { label: 'Proyectos',   href: '#Proyectos' },
    { label: t.nav.contacto, href: '#contacto' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">
        <img src={`${process.env.PUBLIC_URL}/favic.png`} className="favic" alt="Logo" />
      </a>

      <ul className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
        {links.map(link => (
          <li key={link.label}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <button className="lang-btn" onClick={toggle} title="Cambiar idioma">
          <span className={lang === 'es' ? 'lang-active' : ''}>ES</span>
          <span className="lang-sep">|</span>
          <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
        </button>

        <button
          className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
