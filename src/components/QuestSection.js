import React from 'react';
import './QuestSection.css';

const QuestSection = ({ quest }) => {
  const isEven = quest.id % 2 === 0;

  return (
    <section className={`quest-section ${isEven ? 'reverse' : ''}`} id={`quest-${quest.id}`}>
      <div className="quest-content">
        <div className="quest-image-wrapper">
          <div className="quest-image-overlay"></div>
          <img 
            src={quest.image} 
            alt={quest.title}
            className="quest-image"
            loading="lazy"
          />
          <div className="quest-badge">
            <span className="badge-text">ХОРРОР</span>
          </div>
        </div>
        <div className="quest-info">
          <h2 className="quest-title">{quest.title}</h2>
          <p className="quest-description">{quest.description}</p>
          <ul className="quest-features">
            {quest.features.map((feature, index) => (
              <li key={index} className="quest-feature">
                <span className="feature-icon">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="quest-actions">
            <button className="quest-button primary">Забронировать</button>
            <button className="quest-button secondary">Подробнее</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestSection;

