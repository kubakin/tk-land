import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-main">ИСПЫТАЙ</span>
          <span className="hero-title-sub">СВОЙ СТРАХ</span>
        </h1>
        <p className="hero-description">
          Погрузитесь в мир ужаса и адреналина. Реальные квесты, 
          которые заставят ваше сердце биться чаще.
        </p>
        <div className="hero-buttons">
          <button className="hero-button primary">Выбрать квест</button>
          <button className="hero-button secondary">Узнать больше</button>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
};

export default Hero;

