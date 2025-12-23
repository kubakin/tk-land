import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contacts">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">HORROR QUESTS</h3>
            <p className="footer-description">
              Незабываемые приключения в мире ужаса и адреналина. 
              Реальные эмоции, которые останутся с вами навсегда.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-subtitle">Контакты</h4>
            <div className="footer-links">
              <a href="tel:+79991234567" className="footer-link">
                +7 (999) 123-45-67
              </a>
              <a href="mailto:info@horrorquests.ru" className="footer-link">
                info@horrorquests.ru
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4 className="footer-subtitle">Следите за нами</h4>
            <div className="footer-social">
              <a href="#" className="social-link">VK</a>
              <a href="#" className="social-link">Telegram</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 Horror Quests. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

