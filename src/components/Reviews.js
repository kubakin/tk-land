import React from 'react';
import './Reviews.css';

const Reviews = ({ reviews }) => {
  return (
    <section className="section reviews-section" id="reviews">
      <div className="section-header">
        <p className="eyebrow">Отзывы</p>
        <h2 className="section-title">Игроки выходят дрожащими, но счастливыми</h2>
        <p className="section-subtitle">
          Реальные эмоции команд, которые прошли наши хоррор-квесты.
        </p>
      </div>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={review.name} className="review-card" style={{ animationDelay: `${index * 0.15}s` }}>
            <div className="review-rating">
              {'★'.repeat(Math.round(review.rating))}
              <span className="rating-number">{review.rating}</span>
            </div>
            <p className="review-text">“{review.text}”</p>
            <div className="review-footer">
              <div className="review-name">{review.name}</div>
              <div className="review-role">{review.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;

