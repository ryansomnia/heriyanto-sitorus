import React from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';

const Section = styled.section`
  padding: 100px 2rem;
  background-color: #fff;
  text-align: center;
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding-top: 2rem;
`;

const Products = () => {
  const productData = [
    {
      image: 'path-to-image1.jpg',
      title: 'Product 1',
      description: 'Description for Product 1',
      link: '/product1',
    },
    // Add more products here
  ];

  return (
    <Section id="products">
      <h2>Products</h2>
      <ProductsContainer>
        {productData.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            link={product.link}
          />
        ))}
      </ProductsContainer>
    </Section>
  );
};

export default Products;
