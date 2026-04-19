import React from 'react';
import { useLanguage } from '../LanguageContext';
import '../styles/Contacto.css';

function Contacto() {
  const { t } = useLanguage();
  const c = t.contacto;

  return (
    <section id="contacto" className="contacto">
      <div className="max-w">
        <p className="section-label">{c.label}</p>
        <h2 className="section-title">{c.title} <span>{c.titleSpan}</span></h2>
        <div className="contact-grid">
          <div className="contact-intro">
            <p>{c.intro}</p>
          </div>
          <div className="contact-links">
            {c.items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noreferrer"
                className="contact-item"
              >
                <div className="ci-icon">{item.icon}</div>
                <div>
                  <span className="ci-label">{item.label}</span>
                  <small className="ci-value">{item.value}</small>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
