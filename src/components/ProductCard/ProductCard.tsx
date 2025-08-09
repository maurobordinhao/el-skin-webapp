// src/components/ProductCard/ProductCard.tsx
import React from 'react';
import styled from 'styled-components';
import { IProduct } from '../../service/productService';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  width: 200px;
  text-align: center;
`;

const Imagem = styled.img`
  max-width: 100%;
  height: auto;
`;

const Botao = styled.button`
  margin-top: 0.5rem;
  background-color: #333;
  color: #fff;
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
`;

type Props = {
  product: IProduct;
  onAddToCart: (product: IProduct) => void;
};

const ProductCard = ({ product, onAddToCart }: Props) => {
  return (
    <Card>
      <Imagem src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R$ {product.price.toFixed(2)}</p>
      <Botao onClick={() => onAddToCart(product)}>Adicionar ao carrinho</Botao>
    </Card>
  );
};

export default ProductCard;