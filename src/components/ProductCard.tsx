import React from 'react';
import { Product } from '../data/products'; // Importando nosso "formato" de produto
import {
  CardContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  PriceContainer,
  CurrentPrice,
  OriginalPrice,
  AddToCartButton,
} from './ProductCard.styles';

// Definindo as props que o componente vai receber
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <CardContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <PriceContainer>
          {/* Se houver preço original, mostre-o riscado */}
          {product.originalPrice && (
            <OriginalPrice>R$ {product.originalPrice.toFixed(2)}</OriginalPrice>
          )}
          <CurrentPrice>R$ {product.price.toFixed(2)}</CurrentPrice>
        </PriceContainer>
        <AddToCartButton>Comprar</AddToCartButton>
      </ProductInfo>
    </CardContainer>
  );
};

export default ProductCard;