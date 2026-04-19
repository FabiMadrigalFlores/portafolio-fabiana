import React from 'react';
import { useLanguage } from '../LanguageContext';
import '../styles/MisionVisionValores.css';

function MisionVisionValores() {
  const { t } = useLanguage();
  const m = t.proyectos;

  return (
    <section id="Proyectos" className="proyectos">
      <div className="max-w">
        <h2 className="section-title">Proyectos <span> universitarios</span></h2>
        <div className="mvv-grid">

          {m.cards.map((card) => (
            <a href={card.repo} target="_blank" rel="noreferrer">
              <div className="mvv-card" key={card.tag}>
                <div className="mvv-tag">{card.empresa}</div>
                <h3>{card.titulo}</h3>
                {card.isList ? (
                  <ul>
                    {card.content.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{card.content}</p>
                )}
              </div>
            </a>
            
          ))}
          
        </div>
      </div>
    </section>

    
  );
}




export default MisionVisionValores;
