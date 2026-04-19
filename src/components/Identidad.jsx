import React from 'react';
import { useLanguage } from '../LanguageContext';
import '../styles/Identidad.css';

function Identidad() {
  const { t } = useLanguage();
  const id = t.identidad;

  return (
    <section id="identidad" className="identidad">
      <div className="max-w">

        <p className="section-label">Sobre mi</p>
        <h2 className="section-title">Hola<span> soy Fabiana</span></h2>
        <div className="identidad-grid">
          <img
            src={`${process.env.PUBLIC_URL}/logoyslogan.png`}
            alt="Logo y slogan"
            className="identidad-img"
          />
          <div className="identidad-text">
            <p>{id.p1}</p>
            <p>{id.p2}</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Identidad;
