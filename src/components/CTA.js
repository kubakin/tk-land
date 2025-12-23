import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-overlay"></div>
      <div className="cta-content">
        <p className="eyebrow">Готовы на решающий шаг?</p>
        <h2>Забронируйте слот, пока он свободен</h2>
        <p className="cta-text">
          Выберите квест, соберите команду и приходите за дозой адреналина.
          Ночные слоты разлетаются первыми.
        </p>
        <div className="cta-actions">
          <button className="cta-main">Забронировать сейчас</button>
          <button className="cta-ghost">Получить консультацию</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

