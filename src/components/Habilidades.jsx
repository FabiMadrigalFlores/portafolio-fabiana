import React from 'react';
import { useLanguage } from '../LanguageContext';
import '../styles/Habilidades.css';

function Habilidades() {
  const { t } = useLanguage();
  const h = t.habilidades;

  return (
    <section id="habilidades" className="habilidades">
      <div className="max-w">
        <p className="section-label">{h.label}</p>
        <h2 className="section-title">Herramientas <span></span></h2>
        <div className="skills-grid">
          {h.skills.map((skill) => (
            <div className="skill-card" key={skill.title}>
              <div className="skill-icon">{skill.icon}</div>
              <h4>{skill.title}</h4>
              <p>{skill.desc}</p>
            </div>
            
          ))}
          
        </div>
      </div>
    </section>
  );

}

export default Habilidades;
