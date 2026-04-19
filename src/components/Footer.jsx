import React from 'react';
import { useLanguage } from '../LanguageContext';
import '../styles/Footer.css';

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <p>© 2026 Fabiana Madrigal Flores</p>
    </footer>
  );
}

export default Footer;
