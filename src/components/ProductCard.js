import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const ProductCard = ({ image, title, description, link }) => {
  return (
    <Card>
      <CardImage src={image} alt={title} />
      <CardContent>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>Learn More</a>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
