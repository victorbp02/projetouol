import React from 'react';
import Card from './Card';
import '../styles/CardList.css';

interface CardData {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  badge?: string;
}

interface CardListProps {
  cards: CardData[];
  count: number;
  startIndex: number;
}

const CardList: React.FC<CardListProps> = ({ cards, count, startIndex }) => {
  return (
    <div className="card-list">
      {cards.slice(startIndex, startIndex + count).map(card => (
        <Card
          key={card.id}
          image={card.image}
          title={card.title}
          description={card.description}
          price={card.price}
          oldPrice={card.oldPrice}
          badge={card.badge}
        /> 
      ))}
    </div>
  );
};

export default CardList;