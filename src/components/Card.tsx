import React from 'react';
import '../styles/Card.css';

interface CardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  badge?: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, price, oldPrice, badge }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      {badge && <div className={`badge ${badge.toLowerCase()}`}>{badge}</div>}
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="prices">
        <span className="price">{price}</span>
        {oldPrice && <span className="old-price">{oldPrice}</span>}
      </div>
      <div className="overlay">
        <button>See Details</button>
      </div>
    </div>
  );
};

export default Card;