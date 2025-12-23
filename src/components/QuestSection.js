import React, { useEffect, useRef, useState } from 'react';
import './QuestSection.css';

const QuestSection = ({ quest }) => {
  const isEven = quest.id % 2 === 0;
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`quest-section ${isEven ? 'reverse' : ''} ${isVisible ? 'visible' : ''}`} 
      id={`quest-${quest.id}`}
    >
      <div className="quest-content">
        <div className="quest-image-wrapper">
          <div className="quest-image-overlay"></div>
          <div className="quest-image-glow"></div>
          <img 
            src={quest.image} 
            alt={quest.title}
            className={`quest-image ${imageLoaded ? 'loaded' : ''}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
          <div className="quest-badge pulse-badge">
            <span className="badge-text">ХОРРОР</span>
          </div>
        </div>
        <div className="quest-info">
          <h2 className="quest-title glitch-text">{quest.title}</h2>
          <p className="quest-description">{quest.description}</p>
          <ul className="quest-features">
            {quest.features.map((feature, index) => (
              <li 
                key={index} 
                className="quest-feature"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="feature-icon">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="quest-actions">
            <button className="quest-button primary pulse-button">Забронировать</button>
            <button className="quest-button secondary">Подробнее</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestSection;

