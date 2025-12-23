import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero">
      <div 
        className="hero-mouse-effect"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 0, 0, 0.3) 0%, transparent 50%)`
        }}
      ></div>
      <div className="hero-overlay"></div>
      <div className="hero-flicker"></div>
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <h1 className="hero-title">
          <span className="hero-title-main shake">ИСПЫТАЙ</span>
          <span className="hero-title-sub glitch">СВОЙ СТРАХ</span>
        </h1>
        <p className="hero-description fade-in">
          Погрузитесь в мир ужаса и адреналина. Реальные квесты, 
          которые заставят ваше сердце биться чаще.
        </p>
        <div className="hero-buttons fade-in-delay">
          <button className="hero-button primary pulse">Выбрать квест</button>
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

