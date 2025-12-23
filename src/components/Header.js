import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">HORROR</span>
          <span className="logo-subtitle">QUESTS</span>
        </div>
        <nav className="nav">
          <a href="#quests" className="nav-link">Квесты</a>
          <a href="#about" className="nav-link">О нас</a>
          <a href="#contacts" className="nav-link">Контакты</a>
        </nav>
        <button className="cta-button">Забронировать</button>
      </div>
    </header>
  );
};

export default Header;

