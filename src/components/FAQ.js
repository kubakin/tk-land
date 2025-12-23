import React from 'react';
import './FAQ.css';

const FAQ = ({ faqs }) => {
  return (
    <section className="section faq-section" id="faq">
      <div className="section-header">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title">Частые вопросы</h2>
        <p className="section-subtitle">
          Готовимся к визиту: что нужно знать перед тем, как окунуться в хоррор.
        </p>
      </div>

      <div className="faq-list">
        {faqs.map((item, index) => (
          <details key={item.question} className="faq-item" open={index === 0}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

