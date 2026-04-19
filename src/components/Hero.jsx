import React from 'react';
import { useLanguage } from '../LanguageContext';
import '../styles/Hero.css';

function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/CV_FabianaMadrigal.pdf`;
    link.download = 'CV_FabianaMadrigal.pdf';
    link.click();
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />

      <div className="hero-content max-w">

        {/* Texto principal */}
        <div className="hero-text fade-up">
          <div className="hero-tag">{h.tag}</div>
          <h1 className="hero-name">
            Fabiana<br />
            <span className="accent">Madrigal</span><br />
            Flores
          </h1>
          <p className="hero-slogan">{h.slogan}</p>
          <p className="hero-desc">{h.desc}</p>

          <div className="hero-ctas">
            <a href="#contacto" className="btn-primary">{h.btnContact}</a>
            <a
              href="https://github.com/FabiMadrigalFlores"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              {h.btnGithub}
            </a>
            <button className="btn-cv" onClick={handleDownloadCV}>
              {h.btnCV}
            </button>
          </div>
        </div>

        {/* Tarjeta lateral */}
        <div className="hero-card fade-up-delay">
          <div className="avatar-box">
            <div className="avatar-circle">
              <img
                src={`${process.env.PUBLIC_URL}/foto-perfil.jpg`}
                className="foto"
                alt="Foto de perfil"
              />
            </div>
            <h3>Fabiana Madrigal Flores</h3>
            <p className="avatar-sub">{h.cardSub}</p>

            <div className="info-pills">
              <div className="pill"><span className="pill-icon">✉</span>fabiana.madrigal.f@gmail.com</div>
              <div className="pill"><span className="pill-icon">📱</span>+506 8501 7072</div>
              <div className="pill"><span className="pill-icon">🎓</span>{h.cardUniv}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
