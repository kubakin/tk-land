import React from 'react';
import './AboutSection.css';

const AboutSection = ({ stats }) => {
  return (
    <section className="section about-section" id="about">
      <div className="section-header">
        <p className="eyebrow">О проекте</p>
        <h2 className="section-title">Готовы испытать нервы на прочность?</h2>
        <p className="section-subtitle">
          Иммерсивные хоррор-квесты с актерами, продуманными пазлами и мрачной эстетикой.
          Мы создаем истории, где каждый шаг — риск, а каждое решение — шанс выжить.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>Почему у нас страшно?</h3>
          <ul>
            <li>Актеры, которые держат напряжение</li>
            <li>Сюжеты с неожиданными поворотами</li>
            <li>Звуковой дизайн и спецэффекты</li>
            <li>Проверенная безопасность</li>
          </ul>
        </div>
        <div className="about-card">
          <h3>Для кого</h3>
          <ul>
            <li>Команды друзей и коллег</li>
            <li>Дни рождения и особые события</li>
            <li>Опытные игроки и новички</li>
            <li>Любители атмосферного хоррора</li>
          </ul>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <div key={item.label} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="stat-value">{item.value}</div>
            <div className="stat-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;

