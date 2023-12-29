import React from 'react';

type CardProps = {
  title: string;
  content: string;
};

const Card = ({ title, content }: CardProps) => (
  <div className="card">
    <p className="card-title">{title}</p>
    <p className="card-content">{content}</p>
  </div>
);

export default Card;
